"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.simpleComponent = exports.cmsComponent = exports.feature = void 0;
const core_1 = require("@angular-devkit/core");
const schematics_1 = require("@angular-devkit/schematics");
const parse_name_1 = require("@schematics/angular/utility/parse-name");
function getParsedPath(workspaceConfigBuffer, name, schematicPath) {
    let parsedPath = parse_name_1.parseName("", name);
    if (parsedPath.path === '/') {
        const workspaceConfig = JSON.parse(workspaceConfigBuffer.toString());
        const projectName = workspaceConfig.defaultProject;
        const defaultProject = workspaceConfig.projects[projectName];
        const sourceRoot = defaultProject.sourceRoot;
        parsedPath = parse_name_1.parseName(`${sourceRoot}/app/${projectName}/${schematicPath}`, name);
    }
    return parsedPath;
}
function getProjectName(workspaceConfigBuffer) {
    const workspaceConfig = JSON.parse(workspaceConfigBuffer.toString());
    return workspaceConfig.defaultProject;
}
function feature(_options) {
    return (tree, _context) => {
        const workspaceConfigBuffer = tree.read("angular.json");
        if (!workspaceConfigBuffer) {
            throw new schematics_1.SchematicsException("Not an Angular CLI Workspace");
        }
        const sourceTemplate = schematics_1.url('./files/feature');
        const { name, path } = getParsedPath(workspaceConfigBuffer, _options.name, "features");
        const projectName = getProjectName(workspaceConfigBuffer);
        const sourceParameterizedTemplate = schematics_1.apply(sourceTemplate, [
            schematics_1.template(Object.assign(Object.assign(Object.assign({}, _options), core_1.strings), { name,
                projectName })),
            schematics_1.move(path)
        ]);
        return schematics_1.mergeWith(sourceParameterizedTemplate)(tree, _context);
    };
}
exports.feature = feature;
function cmsComponent(_options) {
    return (tree, _context) => {
        const workspaceConfigBuffer = tree.read("angular.json");
        if (!workspaceConfigBuffer) {
            throw new schematics_1.SchematicsException("Not an Angular CLI Workspace");
        }
        const sourceTemplate = schematics_1.url('./files/cms-component');
        const { name, path } = getParsedPath(workspaceConfigBuffer, _options.name, "features/cms/components");
        const projectName = getProjectName(workspaceConfigBuffer);
        const sourceParameterizedTemplate = schematics_1.apply(sourceTemplate, [
            schematics_1.template(Object.assign(Object.assign(Object.assign({}, _options), core_1.strings), { name,
                projectName })),
            schematics_1.move(path)
        ]);
        return schematics_1.mergeWith(sourceParameterizedTemplate)(tree, _context);
    };
}
exports.cmsComponent = cmsComponent;
function simpleComponent(_options) {
    return (tree, _context) => {
        const workspaceConfigBuffer = tree.read("angular.json");
        if (!workspaceConfigBuffer) {
            throw new schematics_1.SchematicsException("Not an Angular CLI Workspace");
        }
        const sourceTemplate = schematics_1.url('./files/simple-component');
        const parsedPath = parse_name_1.parseName("/", _options.name);
        const { name, path } = parsedPath;
        const sourceParameterizedTemplate = schematics_1.apply(sourceTemplate, [
            schematics_1.template(Object.assign(Object.assign(Object.assign({}, _options), core_1.strings), { name })),
            schematics_1.move(path)
        ]);
        return schematics_1.mergeWith(sourceParameterizedTemplate)(tree, _context);
    };
}
exports.simpleComponent = simpleComponent;
//# sourceMappingURL=index.js.map