import { Rule } from '@angular-devkit/schematics';
import { Schema } from './schema.model';
declare function feature(_options: Schema): Rule;
declare function cmsComponent(_options: Schema): Rule;
declare function simpleComponent(_options: Schema): Rule;
export { feature, cmsComponent, simpleComponent };
