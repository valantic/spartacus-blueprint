import { HostTree } from '@angular-devkit/schematics';
import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import * as path from 'path';

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
  '  "projects": {"' +  testProjectName + '": {} }\n' +
  '}\n';

describe('feature', () => {
  it('works', async () => {
    const runner = new SchematicTestRunner('schematics', collectionPath);

    let tree: UnitTestTree = new UnitTestTree(new HostTree());
    tree.create('angular.json', angularJsonString);

    const treeFeature = await runner.runSchematic('feature', { name: `src/app/${testProjectName}/features/MyFeatureName` }, tree);

    expect(treeFeature.files.length).toEqual(9);
  });
});

describe('cms-component', () => {
  it('works', async () => {
    const runner = new SchematicTestRunner('schematics', collectionPath);

    let tree: UnitTestTree = new UnitTestTree(new HostTree());
    tree.create('angular.json', angularJsonString);

    const treeCmsComponent = await runner.runSchematic('cms-component', { name: `src/app/${testProjectName}/features/cms/components/MyCmsComponentName` }, tree);

    expect(treeCmsComponent.files.length).toEqual(7);
  });
});

describe('simple-component', () => {
  it('works', async () => {
    const runner = new SchematicTestRunner('schematics', collectionPath);

    let tree: UnitTestTree = new UnitTestTree(new HostTree());
    tree.create('angular.json', angularJsonString);

    const treeSimpleComponent = await runner.runSchematic('simple-component', { name: `src/app/${testProjectName}/your/path/MySimpleComponentName` }, tree);

    expect(treeSimpleComponent.files.length).toEqual(7);
  });
});
