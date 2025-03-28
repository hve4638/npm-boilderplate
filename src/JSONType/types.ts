import { JSONTree } from "@/types";
import { JSON_TYPE_FLAG } from "./data";

export type JSONTypeNames = 'string'|'number'|'boolean'|'array'|'struct'|'any'|'null';

type BaseJSONTypeData = {
    [JSON_TYPE_FLAG] : true;
    type : JSONTypeNames,
}
export type PrimitiveJSONTypeData = BaseJSONTypeData & {
    type : 'string'|'number'|'boolean'|'any',
    nullable : boolean,
    default_value : unknown,
}
export type ArrayJSONTypeData = BaseJSONTypeData & {
    type : 'array',
    struct? : JSONTree,
    nullable : boolean,
    default_value : unknown,
}
export type StructJSONTypeData = {
    type : 'struct',
    struct? : JSONTree,
    nullable : boolean,
    default_value : unknown,
}

export type JSONTypeData = PrimitiveJSONTypeData | ArrayJSONTypeData | StructJSONTypeData;