/**
 * @fileoverview div tags must have an id or className
 * @author Morgantheplant
 */
'use strict';

const DESCRIPTION = 'All <div/> tags must have an id, a className or both';

module.exports = {
    meta: {
        docs: {
            description: DESCRIPTION,
            recommended: false
        },
        fixable: null,
        schema: []
    },

    create: function(context) {
        const VALID_ATTRIBUTES = {
                id: true,
                className: true
            },
            DIV = 'div',
            JSX_ATTRIBUTE = 'JSXAttribute',
            LITERAL = 'Literal';
        const hasIdOrClassName = ({ type, name, value }) => {
            if (type !== JSX_ATTRIBUTE) {
                return false;
            }
            const isValidAttribute = VALID_ATTRIBUTES[name.name];
            const hasValue = value && value.type === LITERAL && value.value.length;
            return isValidAttribute && hasValue;
        };
        const isDivTag = ({ name }) => name.name !== DIV;
        return {
            JSXOpeningElement(node) {
                if (isDivTag(node)) {
                    return;
                }
                const hasValidAttribute = node.attributes.some(hasIdOrClassName);
                if (!hasValidAttribute) {
                    context.report({
                        node,
                        message: DESCRIPTION
                    });
                }
            }
        };
    }
};
