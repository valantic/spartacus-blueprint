# Getting Started With Spartacus Schematics

This repository is a Custom Schematics implementation for Angular/Spartacus Blueprints from Valantic Spartacus Base Setup.

Following blueprints are implemented as for now:
- Feature
- CMS Component
- Simple Component

### How to use

Install @valantic/spartacus-blueprints in your project

```bash
npm i -D @valantic/spartacus-blueprints
```

Schematics can be executed from root directory with `ng genereate @valantic/spartacus-blueprints:BLUEPRINT your/path/Name` where `BLUEPRINT` is one of the following:

#### Feature

The Feature Blueprint schematic can be run either with only the feature name only or additionally with a specific path (if running with a specific path check all imports in generated files). If run without a path it will be added to your projects features folder.

```bash
ng generate @valantic/spartacus-blueprints:feature src/app/[PROJECT_NAME]/features/MyFeatureName

or

ng generate @valantic/spartacus-blueprints:feature MyFeatureName
```

#### CMS Component

The CMS Component Blueprint schematic can be run either with only the feature name only or additionally with a specific path (if running with a specific path check all imports in generated files). If run without a path it will be added to your projects cms components folder.

```bash
ng generate @valantic/spartacus-blueprints:cmsComponent src/app/[PROJECT_NAME]/features/cms/components/MyCmsComponentName

or

ng generate @valantic/spartacus-blueprints:cmsComponent MyCmsComponentName
```

#### Simple Component

The Simple Component Blueprint schematic should be run with a path, and you have to check all imports in all generated files afterwards.

```bash
ng generate @valantic/spartacus-blueprints:simpleComponent src/app/[PROJECT_NAME]/your/path/MySimpleComponentName
```

#### General

In general, you have to import the created module in the corresponding parent module to make it work for now. Consider whether to lazy load or static load it accordingly.

### Todo

- Automated import in modules
- Flag for lazy loading modules
- Flag for creating redux store boilerplate code

### Local dev

For developing, simply run:

```bash
npm run build:watch
```

### Testing

To test locally, install `@angular-devkit/schematics-cli` globally and use the `schematics` command line tool. That tool acts the same as the `generate` command of the Angular CLI, but also has a debug mode.

Check the documentation with

```bash
schematics --help
```

### Unit Testing

`npm run test` will run the unit tests, using Jasmine as a runner and test framework.

### Publishing

To publish, simply do:

```bash
npm run build
npm publish
```

That's it!
