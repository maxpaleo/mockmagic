import { possibleKeyMap } from "./data";
export declare function randomMock(values: string[]): string;
type CustomKeyMap = {
    [key in KeyGroups]: string[];
};
type OverrideMockData = {
    [key in KeyGroups]?: any;
};
type Options = {
    rounds?: number;
    customKeyMap?: Partial<CustomKeyMap>;
    customKey?: string;
    dataTypeKey?: string;
    overrideMockDataByGroup?: OverrideMockData;
    overrideMockDataByKey?: Record<string, any>;
};
export type KeyGroups = keyof typeof possibleKeyMap;
export declare const generateMockData: (table: Object, options?: Options) => any;
export {};
