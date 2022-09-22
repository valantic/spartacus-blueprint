# Getting Started With Schematics

This repository is a Custom Schematics implementation for Angular/Spartacus Blueprints from Valantic Spartacus Base Setup.

Following blueprints are implemented as for now:
- Feature
- CMS Component
- Simple Component

### How to use

Schematics can be executed from root directory with `ng genereate ./blueprints/src/collections#BLUEPRINT your/path/Name` where `BLUEPRINT` is one of the following:

#### Feature

```bash
ng generate ./blueprints/src/collection.json:feature src/app/[PROJECT_NAME]/features/MyFeatureName
```

#### CMS Component

```bash
ng generate ./blueprints/src/collection.json:cmsComponent src/app/[PROJECT_NAME]/features/cms/components/MyCmsComponentName
```

#### Simple Component

```bash
ng generate ./blueprints/src/collection.json:simpleComponent src/app/[PROJECT_NAME]/your/path/MySimpleComponentName
```

### Todo

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
