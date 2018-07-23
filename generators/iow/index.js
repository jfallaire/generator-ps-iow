'use strict';
const path = require('path');
const _ = require('lodash');
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);

        this.option('customer', {
            type: String,
            required: true,
            desc: 'Customer name'
        });
    }

    initializing() {
        this.props = {};
        this.props.customerName = this.options.customer;
        // this.props.customerSafeName = _.snakeCase(this.props.customer);
        this.props.customerSafeName = _.camelCase(this.props.customer);
    }

    writing() {

        const templateObj = {
            customerSafeName: this.props.customerSafeName,
            capitalizeCustomerSafeName: this.props.customerSafeName.replace(/\b\w/g, l => l.toUpperCase()),
        }

        this.fs.copyTpl(
            this.templatePath('**'),
            this.destinationRoot(),
            templateObj
        );

    }
}