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

function getParsedPath(workspaceConfig: any, name: string, schematicPath: string): Location {
  let parsedPath = parseName("", name);

  if(parsedPath.path === '/') {
    const projectName = getProjectName(workspaceConfig);
    const defaultProject = workspaceConfig.projects[projectName];
    const sourceRoot = defaultProject.sourceRoot;
    parsedPath = parseName(`${sourceRoot}/app/${projectName}/${schematicPath}`, name);
  }

  return parsedPath;
}

function getProjectName(workspaceConfig: any): string {
  if (!workspaceConfig) {
    throw new SchematicsException('Workspace config parsing failed');
  }

  return Object.keys(workspaceConfig.projects)[0];
}

function getWorkspaceConfig(tree: Tree): object {
  const workspaceConfigBuffer = tree.read("angular.json");

  if (!workspaceConfigBuffer) {
    throw new SchematicsException("Not an Angular CLI Workspace");
  }

  return JSON.parse(workspaceConfigBuffer.toString());
}

function feature(_options: Schema): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const workspaceConfig = getWorkspaceConfig(tree);

    const sourceTemplate = url('./files/feature');
    const {name, path} = getParsedPath(workspaceConfig, _options.name, "features");
    const projectName = getProjectName(workspaceConfig);

    const sourceParameterizedTemplate = apply(sourceTemplate, [
      template({
        ..._options,
        ...strings,
        name,
        projectName,
      }),
      move(path)
    ])

    return mergeWith(sourceParameterizedTemplate)(tree, _context);
  };
}

function cmsComponent(_options: Schema): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const workspaceConfig = getWorkspaceConfig(tree);

    const sourceTemplate = url('./files/cms-component');
    const {name, path} = getParsedPath(workspaceConfig, _options.name, "features/cms/components");
    const projectName = getProjectName(workspaceConfig);

    const sourceParameterizedTemplate = apply(sourceTemplate, [
      template({
        ..._options,
        ...strings,
        name,
        projectName,
      }),
      move(path)
    ])

    return mergeWith(sourceParameterizedTemplate)(tree, _context);
  };
}

function simpleComponent(_options: Schema): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const workspaceConfig = getWorkspaceConfig(tree);

    const sourceTemplate = url('./files/simple-component');
    const {name, path} = getParsedPath(workspaceConfig, _options.name, "elements");

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
