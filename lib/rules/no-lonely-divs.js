/**
 * @fileoverview div tags must have an id or className
 * @author Morgantheplant
 */
'use strict';

module.exports = {
    meta: {
        docs: {
            description: 'All <div/> tags must have an id, a className or both',
            recommended: false
        },
        fixable: null,
        schema: []
    },

    create: function(context) {
        const VALID_ATTRIBUTES = {
            id: true,
            className: true
        };
        const DIV = 'div';
        const JSX_ATTRIBUTE = 'JSXAttribute';
        const LITERAL = 'Literal';
        return {
            JSXOpeningElement: function(node) {
                const { name } = node.name;
                if (name !== DIV) {
                    return;
                }
                const allAttributesValid = node.attributes.some(({ type, name, value }) => {
                    if (type !== JSX_ATTRIBUTE) {
                        return false;
                    }
                    const isValidAttribute = VALID_ATTRIBUTES[name.name];
                    const hasValue = value.type === LITERAL && value.value.length;
                    return isValidAttribute && hasValue;
                });
                if (!allAttributesValid) {
                    context.report({
                        node,
                        message: 'div must have at least a className or id'
                    });
                }
            }
        };
    }
};
