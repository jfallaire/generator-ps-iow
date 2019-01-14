'use strict';
const path = require('path');
const Generator = require('yeoman-generator');
const askName = require('inquirer-npm-name');
const _ = require('lodash');
const extend = require('deep-extend');
const mkdirp = require('mkdirp');
const chalk = require('chalk');
const yosay = require('yosay');
const glob = require("glob")
const utils = require('../../utils');

module.exports = class extends Generator {

    initializing() {
        this.props = {};
        if(this.options.customer){
            this.props.customer = this.options.customer;
        }
        this.props.root = this.options.root || process.cwd();
    }

    _askFor() {
        const prompts = [{
            type: 'input',
            name: 'customer',
            message: 'Your customer (project) name?',
            default: path.basename(process.cwd()),
            when: !this.props.customer
        }];
        return this.prompt(prompts).then(props => {
            this.props = extend(this.props, props);
            this.props.repoName = utils.makeRepoName(this.props.customer);
            this.props.destinationRoot = path.join(this.props.root, this.props.repoName);
            this.props.customerSafeName = _.camelCase(this.props.customer);
        });
    }

    prompting() {
        if(!this.props.customer){
            // Have Yeoman greet the user.
            this.log(yosay(
                'Welcome to the fabulous ' + chalk.red('ps-search-ui-sfdc') + ' generator!'
            ));
        }
        return this._askFor();
    }

    default () {
        if (path.basename(this.destinationPath()) !== this.props.repoName) {
            this.log(
                'You must be inside a folder named ' + this.props.repoName + '\n' +
                'I\'ll automatically create this folder.'
            );
            mkdirp(this.props.repoName);
        }
    }

    writing() {
        this.destinationRoot(this.props.destinationRoot);
        this.log('writing');
        const templateObj = {
            repoName: this.props.repoName,
            customerSafeName: this.props.customerSafeName,
            capitalizeCustomerSafeName: this.props.customerSafeName.replace(/\b\w/g, l => l.toUpperCase())
        }

        this.log('writing >>> ' + JSON.stringify(templateObj));


        // we want to copy all _xxxxx folder without templating
        this.fs.copy(
            this.templatePath('_*/**'),
            this.destinationRoot()
        );

        //copy all other files with templating option
        this.fs.copyTpl(
            this.templatePath('conf.py'),
            this.destinationPath('conf.py'),
            templateObj
        );

        this.fs.copyTpl(
            this.templatePath('Makefile'),
            this.destinationPath('Makefile'),
            templateObj
        );

        this.fs.copyTpl(
            this.templatePath('README.md'),
            this.destinationPath('README.md'),
            templateObj
        );

        this.fs.copyTpl(
            this.templatePath('*.bat'),
            this.destinationRoot(),
            templateObj
        );

        this.composeWith(require.resolve('../iow'), {
            customer: this.props.customer,
            destinationRoot: this.props.destinationRoot
        });
    }

    install() {
        this.log(this.props);
    }

    end() {
        
    }
};