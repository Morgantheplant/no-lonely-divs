# div tags must have an id or className (no-lonely-divs)

This rule aims to discourage using `<div>` tags without classes or ids.

## Rule Details

All divs should have either an id or a className or both.

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

<div className="bar baz" style={{color:blue}}>Hello</div>

<div id="cheese" className="potatoes">
    <MyComponent/>
</div>

```
