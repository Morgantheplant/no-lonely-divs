# div tags must have an id or className (no-lonely-divs)

This rule aims to discourage using unnamed `<divs>` as containers.

## Rule Details

All divs should have either an id, a className or both

```js
// bad

<div />

<div style={{color:blue}}>Hello</div>

<div>
    <MyComponent/>
</div>

```

Examples of **correct** code for this rule:

```js

// good

<div className="foo" />
<div id="bar" />

<div id="cheese" className="potatoes" style={{color:blue}}>Hello</div>

<div className="baz">
    <MyComponent/>
</div>



```


## When Not To Use It

Would not be ideal to use on an exisitng large codebase. It is recommended to use this per directory.

