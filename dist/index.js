"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate = void 0;
exports.random = random;
const faker_1 = require("@faker-js/faker");
const data_1 = require("./data");
/**
 * Selects a random value from an array of strings.
 * @param values Array of string values.
 * @returns A random string from the provided array.
 */
function random(values) {
    return values[Math.floor(Math.random() * values.length)];
}
/**
 * Applies override values based on the group configuration.
 * @param overrides A mapping of groups to override values.
 * @param keyMap The original mapping of groups to their respective keys and functions.
 * @returns A map of keys to overridden values.
 */
const applyOverrides = (overrides, keyMap) => {
    const overrideMap = {};
    Object.entries(overrides).forEach(([key, value]) => {
        if (keyMap[key]) {
            keyMap[key].keys.forEach((k) => {
                overrideMap[k] = value;
            });
        }
    });
    return overrideMap;
};
/**
 * Generates mock data for a given table schema.
 * @param tableSchema The schema of the table for which to generate data.
 * @param keyToFakerMap A mapping of keys to faker functions.
 * @param options Configuration options for data generation.
 * @returns An object representing a row of mock data.
 */
const generateTableData = (tableSchema, keyToFakerMap, options) => {
    const { overrideByGroup = {}, overrideByKey = {}, skipKeys = [], } = options;
    const overrideMap = applyOverrides(overrideByGroup, data_1.possibleKeyMap);
    const generatedData = {};
    Object.keys(tableSchema).forEach((key) => {
        if (skipKeys.includes(key)) {
            generatedData[key] = null; // Assign null to keys specified in skipKeys
        }
        else if (overrideByKey.hasOwnProperty(key)) {
            generatedData[key] = overrideByKey[key];
        }
        else if (overrideMap.hasOwnProperty(key)) {
            generatedData[key] = overrideMap[key];
        }
        else if (keyToFakerMap[key]) {
            generatedData[key] = keyToFakerMap[key]();
        }
        else {
            const field = tableSchema[key];
            const dataType = typeof field === "object" ? field.dataType : "string";
            switch (dataType) {
                case "string":
                    generatedData[key] = faker_1.simpleFaker.string.alphanumeric();
                    break;
                case "number":
                    generatedData[key] = faker_1.simpleFaker.number.int();
                    break;
                case "jsonb":
                    generatedData[key] = {};
                    break;
                case "date":
                    generatedData[key] = faker_1.faker.date.past().toISOString();
                    break;
                default:
                    console.error("Unsupported field type for key:", key);
            }
        }
    });
    return generatedData;
};
/**
 * ### Generate mock data
 * - Generates mock data for a any object schema.
 * - Can be used to generate mock data from plain objects, Zod schemas, Drizzle schemas, TypeORM schemas, and more.
 * ---
 * ### Parameters
 * @param table The schema of the table for which to generate mock data.
 * @param options Options to customize the mock data generation.
 * @returns Either a single mock data entry or an array of entries, based on the rounds option.
 * ---
 * ### Options
 * @param {number} [rounds=1] Number of mock data entries to generate.
 * @param {Partial<CustomKeyMap>} [customKeyMap] Custom mapping of keys to functions.
 * @param {string} [customKey] Specific key to apply custom mock function.
 * @param {string} [dataTypeKey] Key to determine the type of data to mock.
 * @param {OverrideMockData} [overrideByGroup] Overrides for grouped keys.
 * @param {Record<string, any>} [overrideByKey] Specific key overrides.
 * @param {string[]} [skipKeys] Keys for which to return `null` values in the mock data.
 * ---
 * ### Example
 *
 * Basic example:
 * ```ts
 * const mockData = generate(schema); // You only need to provide the schema to generate mock data.
 * ```
 *
 * Advanced example:
 * ```ts
 * const mockData = generate(schema, { // You can provide options to customize the mock data generation.
 *   rounds: 3,
 *   customKey: "levant",
 *   dataTypeKey: "levantus",
 *   customKeyMap: {
 *     firstName: ["user_first_name", "password", "student_name"],
 *     email: ["company_email", "user_email"],
 *   },
 *   overrideByGroup: {
 *     settings: { device: "mobile" },
 *     metadata: { device: "mobile" },
 *     firstName: "User",
 *   },
 *   overrideByKey: {
 *     status: random(["active", "inactive", "suspended", "archived"]),
 *     publishing_status: random(["draft", "pending_review", "scheduled"]),
 *   },
 * });
 * ```
 * ---
 * ### Example result
 * ```ts
 * {
 *   id: 42,
 *   first_name: 'User',
 *   last_name: 'Jacobi',
 *   email: 'Keenan.Ernser@gmail.com',
 *   profile_image: 'https://avatars.githubusercontent.com/u/1622343',
 *   status: 'inactive',
 *   password: '7N0AyFB8NoBTxQ5',
 *   meta_data: 'S',
 *   settings: { device: 'mobile' }
 * }
 * ```
 */
const generate = (table, options = {}) => {
    const { rounds = 1 } = options;
    const keyToFakerMap = {};
    Object.values(data_1.possibleKeyMap).forEach(({ keys, randomFunction }) => {
        keys.forEach((key) => {
            keyToFakerMap[key] = randomFunction;
        });
    });
    const results = [];
    for (let i = 0; i < rounds; i++) {
        results.push(generateTableData(table, keyToFakerMap, options));
    }
    return results.length === 1 ? results[0] : results;
};
exports.generate = generate;
