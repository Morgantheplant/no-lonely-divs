# eslint-plugin-hss-styles


## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-hss-styles`:

```
$ npm install eslint-plugin-hss-styles --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-hss-styles` globally.

## Usage

Add `hss-styles` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "hss-styles"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "hss-styles/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





