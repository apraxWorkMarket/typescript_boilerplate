# Project Name

This is just a place holder for your project's README file. Please replace the contents here with the appropriate information.

## About the Boilerplate App

There is a basic React app that is generated as a part of the boilerplate. This is to provide you with a head start on creating your own application.
It consists of a table that displays all the settings for the logged-in user. You can see an example of how it uses the `Swagger` client to make fetch calls and how it can grab user data from the Global state.

To run it locally, you'll have to provide a user to authenticate with.
This can be done by executing: `hunk serve --envs "{\"USERNAME\":\"user@workmarket.com\",\"PASSWORD\":\"your-password\"}"`.

## Packages

If this is a monorepo with multiple packages, provide a list of the package names, along with a description for each.

## Installation
This project requires node version >=12.14.0 <13.

* Install [npm](https://www.npmjs.com/get-npm)

* Install [Hunk](https://www.npmjs.com/package/@workmarket/hunk) (a CLI task runner), globally:
```bash
npm i -g @workmarket/hunk
```
Are there any additional pre-requisites that developers need to perform in order to contribute to this project?

## Commands

* `hunk -v` - to get current version of hunk
* `hunk credentials init` - to create credentials.js
* `hunk serve` - to run the app
* `hunk lint` - to run eslint
* `hunk test` - to run unit tests with coverage
* `hunk test --no-coverage` - to run unit tests without checking coverage

Provide a list of additional commands that a developer should know about - `make lint`, `make start`, etc.


## Publishing

How can the developer publish new versions of this project?

## Other Information

Provide any additional information that developers / consumers of this project should know about.
