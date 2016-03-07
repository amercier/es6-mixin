node-es6-mixin
====================

Skeleton of a simple NPM Package with Babel and CI already configured.

#### Pre-configured development tools

- [<img alt="Babel" src="https://babeljs.io/favicon.ico" height="16"> Babel](https://babeljs.io/)
- [<img alt="ESLint" src="http://eslint.org/img/favicon.512x512.png" height="16"> ESLint](http://eslint.org/)
- [<img alt="Mocha" src="https://mochajs.org/favicon.ico" height="16"> Mocha](https://mochajs.org/)
- [<img alt="Chai" src="http://chaijs.com/img/favicon.ico" height="16"> Chai](http://chaijs.com/)
- [SinonJS](http://sinonjs.org/)
- [Istanbul](https://github.com/gotwarlost/istanbul)
- [<img alt="EditorConfig" src="http://editorconfig.org/favicon.ico" height="16"> EditorConfig](http://editorconfig.org/)

#### Pre-configured CI tools

- [<img alt="Travis CI" src="https://cdn.travis-ci.org/images/favicon-662edf026745110e8203d8cf38d1d325.png" height="16"> Travis CI](https://travis-ci.org/) continuous integration platform
- [<img alt="NPM" src="https://www.npmjs.com/static/images/touch-icons/favicon.ico" height="16"> NPM automatic releasing](https://docs.travis-ci.com/user/deployment/npm)
- [<img alt="Codecov" src="https://d234q63orb21db.cloudfront.net/ad63907877249140772dff929ad1c340e424962a/media/images/favicon.png" height="16"> Codecov](https://codecov.io/) code coverage reporting
- [<img alt="Code Climate" src="https://codeclimate.com/favicon.png" height="16"> Code Climate](https://codeclimate.com/)
- [<img alt="Gemnasium" src="https://gemnasium.com/assets/favicon.png" height="16"> Gemnasium](https://gemnasium.com/)
- [ESDoc](https://esdoc.org/)

#### Recommended tools

- [<img alt="GreenKeeper" src="http://greenkeeper.io/favicon-16x16.png" height="16"> GreenKeeper](http://greenkeeper.io/)

## Getting started

1. Clone this repository  
   <small>or alternatively: create a new one, then rebase from this one</small>
2. Replace the following occurrences
  - [ ] `amercier/node-es6-mixin` → *your repo slug*
  - [ ] `node-es6-mixin` → *your project name*
  - [ ] `es6-mixin` → *your NPM package name*
  - [ ] `Alex Mercier` → *your name*
  - [ ] `pro.alexandre.mercier@gmail.com` → *your public email address*
  - [ ] `http://amercier.com` → *your website*
3. Import project in CI tools:
  - [ ] [Travis CI](https://travis-ci.org/)
  - [ ] [Codecov](https://codecov.io/)
  - [ ] [Code Climate](https://codeclimate.com/github/signup)
  - [ ] [Gemnasium](https://gemnasium.com/)
  - [ ] [ESDoc](https://doc.esdoc.org/-/generate.html)
4. Add the following environment variables in your new Travis CI project's settings:
  - [ ] `NPM_AUTH_TOKEN`: NPM authentication token, used for automatic NPM releasing. See [documentation](https://docs.travis-ci.com/user/deployment/npm).
  - [ ] `CODECOV_TOKEN`: Codecov project's token, used for code coverage reporting to Codecov.
  - [ ] `CODECLIMATE_REPO_TOKEN`: CodeClimate project's token, used for code coverage reporting to CodeClimate.
5. (Optional) Enable [GreenKeeper](http://greenkeeper.io/): `greenkeeper enable`.
6. (Optional) Add [plugin-add-module-exports Babel plugin](https://www.npmjs.com/package/babel-plugin-add-module-exports) to avoid users of your packages having to use `.default` in ES5 style (see install documentation below).

## Usage

### Automatic releasing process

> *Note:* you can try this process safely by releasing an "alpha" version. Ex: 0.1.0-alpha.2

- [ ] Update the package version in `package.json` (ex: `1.2.3`), commit it, and push it.
- [ ] Tag the previously created commit (ex: `v1.2.3`), and push it (`git push --tags`).
- Travis build runs on tagged commit
- New package version is automatically released after tests have passed

---

> **Note:** the content after this is the actual package documentation (to be edited after cloning).


node-es6-mixin
====================

My new awesome-package created using [es6-mixin](https://www.npmjs.com/es6-mixin).

[![Latest Stable Version](https://img.shields.io/npm/v/es6-mixin.svg)](https://www.npmjs.com/package/es6-mixin)
[![License](https://img.shields.io/npm/l/es6-mixin.svg)](https://www.npmjs.com/package/es6-mixin)
[![Build Status](https://img.shields.io/travis/amercier/node-es6-mixin/master.svg)](https://travis-ci.org/amercier/node-es6-mixin)

[![Dependency Status](http://img.shields.io/gemnasium/amercier/node-es6-mixin.svg)](https://gemnasium.com/amercier/node-es6-mixin)
[![NPM Downloads](https://img.shields.io/npm/dm/es6-mixin.svg)](https://www.npmjs.com/package/es6-mixin)
[![Test Coverage](https://img.shields.io/codecov/c/github/amercier/node-es6-mixin/master.svg)](https://codecov.io/github/amercier/node-es6-mixin?branch=master)
[![API Documentation](https://doc.esdoc.org/github.com/amercier/node-es6-mixin/badge.svg)](https://doc.esdoc.org/github.com/amercier/node-es6-mixin/)
[![Code Climate](https://img.shields.io/codeclimate/github/amercier/node-es6-mixin.svg)](https://codeclimate.com/github/amercier/node-es6-mixin)


Installation
------------

    npm install --save-dev es6-mixin

Usage
-----

### ES5

    var xxx = require('es6-mixin').default;

### ES2015+

    import xxx from 'es6-mixin';
