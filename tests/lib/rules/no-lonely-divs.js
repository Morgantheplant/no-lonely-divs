/**
 * @fileoverview div tags must have an id or className
 * @author Morgantheplant
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/no-lonely-divs'),
    RuleTester = require('eslint').RuleTester;

RuleTester.setDefaultConfig({
    parserOptions: {
        ecmaVersion: 6,
        ecmaFeatures: {
            jsx: true
        }
    }
});

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run('no-lonely-divs', rule, {
    valid: [
        {
            code: '<div className="puppies"></div>'
        },
        {
            code: '<div id="b"></div>'
        },
        {
            code: '<div id="1"></div>'
        },
        {
            code: '<div className="1"></div>'
        },
        {
            code: '<div id="books" className="puppies"></div>'
        },
        {
            code: '<ul id="b"><li><div className="marbles">Hello</div></li></ul>'
        }
    ],

    invalid: [
        {
            code: '<div />',
            errors: [
                {
                    message: 'All <div/> tags must have an id, a className or both'
                }
            ]
        },
        {
            code: '<div><a href="/blarg" /></div>',
            errors: [
                {
                    message: 'All <div/> tags must have an id, a className or both'
                }
            ]
        },
        {
            code: '<div id="" className="">Pizza</div>',
            errors: [
                {
                    message: 'All <div/> tags must have an id, a className or both'
                }
            ]
        },
        {
            code: '<div class="boop"><a href="/blarg" /></div>',
            errors: [
                {
                    message: 'All <div/> tags must have an id, a className or both'
                }
            ]
        },
        {
            code: '<div style={{color:"blue"}}><ul><li>item</li></ul></div>',
            errors: [
                {
                    message: 'All <div/> tags must have an id, a className or both'
                }
            ]
        },
        {
            code: '<ul><li><div>text</div></li></ul>',
            errors: [
                {
                    message: 'All <div/> tags must have an id, a className or both'
                }
            ]
        },
        {
            code: '<div><div></div></div>',
            errors: [
                {
                    message: 'All <div/> tags must have an id, a className or both'
                },
                {
                    message: 'All <div/> tags must have an id, a className or both'
                }
            ]
        },
        {
            code: '<div><li><div>text</div></li></div>',
            errors: [
                {
                    message: 'All <div/> tags must have an id, a className or both'
                },
                {
                    message: 'All <div/> tags must have an id, a className or both'
                }
            ]
        },
         {
            code: '<div data-quantity="1kg" data-vegetable>Tomatoes</div>',
            errors: [
                {
                    message: 'All <div/> tags must have an id, a className or both'
                }
            ]
        }
    ]
});
