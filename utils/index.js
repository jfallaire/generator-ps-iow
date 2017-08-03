'use strict';
const _ = require('lodash');

module.exports = {
    makeRepoName : (name) => {
        name = _.kebabCase(name);
        name = name.indexOf('-iow') > 0 ? name : name + '-iow';
        return name;
    }
}
