const path = require('path');
const { celebrate } = require('celebrate');

exports.validate = (schema) => {
    return celebrate(schema, {
        stripUnknown: {
            objects: true
        }
    });
};