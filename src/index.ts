import { faker, simpleFaker } from "@faker-js/faker";
import { possibleKeyMap } from "./data";

/**
 * Selects a random value from an array of strings.
 * @param values Array of string values.
 * @returns A random string from the provided array.
 */
export function random(values: string[]) {
  return values[Math.floor(Math.random() * values.length)];
}

/** Defines the structure of a key map for random functions. */
type KeyMap = {
  keys: readonly string[];
  randomFunction: () => any;
};

/** Maps keys to groups for custom randomization. */
type CustomKeyMap = {
  [key in KeyGroups]: string[];
};

/** Provides type overrides for groups of keys. */
type OverrideMockData = {
  [key in KeyGroups]?: any;
};

/**
 * Options for generating mock data.
 * @property {number} [rounds=1] Number of mock data entries to generate.
 * @property {Partial<CustomKeyMap>} [customKeyMap] Custom mapping of keys to functions.
 * @property {string} [customKey] Specific key to apply custom mock function.
 * @property {string} [dataTypeKey] Key to determine the type of data to mock.
 * @property {OverrideMockData} [overrideByGroup] Overrides for grouped keys.
 * @property {Record<string, any>} [overrideByKey] Specific key overrides.
 * @property {string[]} [skipKeys] Keys for which to return `null` values in the mock data.
 */
export type MockMagicOptions = {
  rounds?: number;
  customKeyMap?: Partial<CustomKeyMap>;
  customKey?: string;
  dataTypeKey?: string;
  overrideByGroup?: OverrideMockData;
  overrideByKey?: Record<string, any>;
  skipKeys?: string[];
};

/** Key groups derived from a predefined key map. */
export type KeyGroups = keyof typeof possibleKeyMap;

/**
 * Applies override values based on the group configuration.
 * @param overrides A mapping of groups to override values.
 * @param keyMap The original mapping of groups to their respective keys and functions.
 * @returns A map of keys to overridden values.
 */
const applyOverrides = (
  overrides: OverrideMockData,
  keyMap: Record<KeyGroups, KeyMap>
) => {
  const overrideMap: Record<string, any> = {};
  Object.entries(overrides).forEach(([key, value]: [string, any]) => {
    if (keyMap[key as KeyGroups]) {
      keyMap[key as KeyGroups].keys.forEach((k) => {
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
const generateTableData = (
  tableSchema: Object,
  keyToFakerMap: Record<string, Function>,
  options: MockMagicOptions
) => {
  const { overrideByGroup = {}, overrideByKey = {}, skipKeys = [] } = options;
  const overrideMap = applyOverrides(overrideByGroup, possibleKeyMap);
  const generatedData: Record<string, any> = {};

  Object.keys(tableSchema).forEach((key: string) => {
    if (skipKeys.includes(key)) {
      generatedData[key] = null; // Assign null to keys specified in skipKeys
    } else if (overrideByKey.hasOwnProperty(key)) {
      generatedData[key] = overrideByKey[key];
    } else if (overrideMap.hasOwnProperty(key)) {
      generatedData[key] = overrideMap[key];
    } else if (keyToFakerMap[key]) {
      generatedData[key] = keyToFakerMap[key]();
    } else {
      const field = (tableSchema as Record<string, any>)[key];
      const dataType = typeof field === "object" ? field.dataType : "string";
      switch (dataType) {
        case "string":
          generatedData[key] = simpleFaker.string.alphanumeric();
          break;
        case "number":
          generatedData[key] = simpleFaker.number.int();
          break;
        case "jsonb":
          generatedData[key] = {};
          break;
        case "date":
          generatedData[key] = faker.date.past().toISOString();
          break;
        default:
        // console.error("Unsupported field type for key:", key);
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
export const generate = (table: Object, options: MockMagicOptions = {}) => {
  const { rounds = 1 } = options;

  const keyToFakerMap: Record<string, Function> = {};
  Object.values(possibleKeyMap).forEach(({ keys, randomFunction }) => {
    keys.forEach((key) => {
      keyToFakerMap[key] = randomFunction;
    });
  });

  const results: any[] = [];
  for (let i = 0; i < rounds; i++) {
    results.push(generateTableData(table, keyToFakerMap, options));
  }

  return results.length === 1 ? results[0] : results;
};
