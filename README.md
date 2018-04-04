# eslint-plugin-newt

my first plugin

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-newt`:

```
$ npm install eslint-plugin-newt --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-newt` globally.

## Usage

Add `newt` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "newt"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "newt/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





