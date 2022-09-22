import {strings} from '@angular-devkit/core';
import {
  apply,
  mergeWith,
  move,
  Rule,
  SchematicContext,
  SchematicsException,
  template,
  Tree,
  url
} from '@angular-devkit/schematics';
import {parseName} from '@schematics/angular/utility/parse-name';
import {Schema} from './schema.model';


function feature(_options: Schema): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const workspaceConfigBuffer = tree.read("angular.json");
    if (!workspaceConfigBuffer) {
      throw new SchematicsException("Not an Angular CLI Workspace");
    }
    const sourceTemplate = url('./files/feature');
    const parsedPath = parseName("/", _options.name);
    const {name, path} = parsedPath;

    const sourceParameterizedTemplate = apply(sourceTemplate, [
      template({
        ..._options,
        ...strings,
        name
      }),
      move(path)
    ])

    return mergeWith(sourceParameterizedTemplate)(tree, _context);
  };
}

function cmsComponent(_options: Schema): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const workspaceConfigBuffer = tree.read("angular.json");
    if (!workspaceConfigBuffer) {
      throw new SchematicsException("Not an Angular CLI Workspace");
    }
    const sourceTemplate = url('./files/cms-component');
    const parsedPath = parseName("/", _options.name);
    const {name, path} = parsedPath;

    const sourceParameterizedTemplate = apply(sourceTemplate, [
      template({
        ..._options,
        ...strings,
        name
      }),
      move(path)
    ])

    return mergeWith(sourceParameterizedTemplate)(tree, _context);
  };
}

function simpleComponent(_options: Schema): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const workspaceConfigBuffer = tree.read("angular.json");
    if (!workspaceConfigBuffer) {
      throw new SchematicsException("Not an Angular CLI Workspace");
    }
    const sourceTemplate = url('./files/simple-component');
    const parsedPath = parseName("/", _options.name);
    const {name, path} = parsedPath;

    const sourceParameterizedTemplate = apply(sourceTemplate, [
      template({
        ..._options,
        ...strings,
        name
      }),
      move(path)
    ])

    return mergeWith(sourceParameterizedTemplate)(tree, _context);
  };
}

export {feature, cmsComponent, simpleComponent}
