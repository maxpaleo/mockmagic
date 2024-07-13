import { possibleKeyMap } from "./data";
/**
 * Selects a random value from an array of strings.
 * @param values Array of string values.
 * @returns A random string from the provided array.
 */
export declare function random(values: string[]): string;
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
export declare const generate: (table: Object, options?: MockMagicOptions) => any;
export {};
