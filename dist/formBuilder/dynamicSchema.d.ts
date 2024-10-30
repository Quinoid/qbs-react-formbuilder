import { z } from 'zod';
import { Section } from '../types';
type FieldSchemas = {
    [key: string]: z.ZodTypeAny;
};
export declare const generateDynamicSchema: (sections: Section[]) => z.ZodObject<FieldSchemas, "strip", z.ZodTypeAny, {
    [x: string]: any;
}, {
    [x: string]: any;
}>;
export {};
