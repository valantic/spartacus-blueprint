"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const testing_1 = require("@angular-devkit/schematics/testing");
const path = require("path");
const collectionPath = path.join(__dirname, '../collection.json');
const testProjectName = 'test-project';
const angularJsonString = '{\n' +
    '  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",\n' +
    '  "version": 1,\n' +
    '  "cli": {\n' +
    '    "packageManager": "npm",\n' +
    '    "defaultCollection": "@angular-eslint/schematics"\n' +
    '  },\n' +
    '  "newProjectRoot": "projects",\n' +
    '  "projects": {"' + testProjectName + '": {} }\n' +
    '}\n';
describe('feature', () => {
    it('works', () => __awaiter(void 0, void 0, void 0, function* () {
        const runner = new testing_1.SchematicTestRunner('schematics', collectionPath);
        let tree = new testing_1.UnitTestTree(new schematics_1.HostTree());
        tree.create('angular.json', angularJsonString);
        const treeFeature = yield runner.runSchematicAsync('feature', { name: `src/app/${testProjectName}/features/MyFeatureName` }, tree).toPromise();
        expect(treeFeature.files.length).toEqual(9);
    }));
});
describe('cmsComponent', () => {
    it('works', () => __awaiter(void 0, void 0, void 0, function* () {
        const runner = new testing_1.SchematicTestRunner('schematics', collectionPath);
        let tree = new testing_1.UnitTestTree(new schematics_1.HostTree());
        tree.create('angular.json', angularJsonString);
        const treeCmsComponent = yield runner.runSchematicAsync('cmsComponent', { name: `src/app/${testProjectName}/features/cms/components/MyCmsComponentName` }, tree).toPromise();
        expect(treeCmsComponent.files.length).toEqual(7);
    }));
});
describe('simpleComponent', () => {
    it('works', () => __awaiter(void 0, void 0, void 0, function* () {
        const runner = new testing_1.SchematicTestRunner('schematics', collectionPath);
        let tree = new testing_1.UnitTestTree(new schematics_1.HostTree());
        tree.create('angular.json', angularJsonString);
        const treeSimpleComponent = yield runner.runSchematicAsync('simpleComponent', { name: `src/app/${testProjectName}/your/path/MySimpleComponentName` }, tree).toPromise();
        expect(treeSimpleComponent.files.length).toEqual(7);
    }));
});
//# sourceMappingURL=index_spec.js.map