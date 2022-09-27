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
import {Location, parseName} from '@schematics/angular/utility/parse-name';
import {Schema} from './schema.model';

function getParsedPath(workspaceConfigBuffer: Buffer, name: string, schematicPath: string): Location {
  let parsedPath = parseName("", name);

  if(parsedPath.path === '/') {
    const workspaceConfig = JSON.parse(workspaceConfigBuffer.toString());
    const projectName = workspaceConfig.defaultProject;
    const defaultProject = workspaceConfig.projects[projectName];
    const sourceRoot = defaultProject.sourceRoot;
    parsedPath = parseName(`${sourceRoot}/app/${projectName}/${schematicPath}`, name);
  }

  return parsedPath;
}

function feature(_options: Schema): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const workspaceConfigBuffer = tree.read("angular.json");
    if (!workspaceConfigBuffer) {
      throw new SchematicsException("Not an Angular CLI Workspace");
    }
    const sourceTemplate = url('./files/feature');
    const {name, path} = getParsedPath(workspaceConfigBuffer, _options.name, "features");

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
    const {name, path} = getParsedPath(workspaceConfigBuffer, _options.name, "features/cms/components");


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
