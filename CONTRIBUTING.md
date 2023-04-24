# Contributing to this repository

## Getting started

* Clone this repository
* Run `npm install`

## Developing

* Make your changes
* Enhance the tests to fail for added rules

## Releasing

* Make sure, you have described your changes in the file [CHANGES.md](CHANGES.md)
* Move all changes in the file [CHANGES.md](CHANGES.md) from below `## Next` below a new Paragraph with the 
  to be released version
* Change the Version in the file [package.json](package.json)
* Run `npm i` to update the version in the file [package-lock.json](package-lock.json)
* Create a Git Tag with the to be released version number ` git tag x.x.x`
* Commit and Push the changes to the remote (Make sure to also push Tags `git push origin --tags`)
* Login to NPM `npm login` if you not already are logged in
* Push the Release `npm publish --access public`
* [Create the Release](https://github.com/valantic/spartacus-blueprint/releases/new) on the github repo  with the 
  changes from the [CHANGES.md](CHANGES.md)
* Make sure you have pushed all changes to the Repo
