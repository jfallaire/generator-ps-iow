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
    }

    prompting() {
        // Have Yeoman greet the user.
        this.log(yosay(
            'Welcome to the fabulous ' + chalk.red('ps-iow') + ' generator!'
        ));

        var prompts = [{
          type: 'input',
          name: 'customer',
          message: 'Your customer name?',
          default: path.basename(process.cwd())
        }];

        return this.prompt(prompts).then(function (props) {
          this.props = props;
          this.props.repoName = utils.makeRepoName(this.props.customer);
          this.props.customerSafeName = _.snakeCase(this.props.customer);
        }.bind(this));
        
    }

    default() {
        if (path.basename(this.destinationPath()) !== this.props.repoName) {
            this.log(
                'You must be inside a folder named ' + this.props.repoName + '\n' +
                'I\'ll automatically create this folder.'
            );
            mkdirp(this.props.repoName);
            this.destinationRoot(this.destinationPath(this.props.repoName));
        }
        
        this.composeWith(require.resolve('../iow'), {
          customer: this.props.customer
        });
    }

    writing() {
        this.log('writing');
        const templateObj = {
            repoName: this.props.repoName,
            customerSafeName : this.props.customerSafeName,
            capitalizeCustomerSafeName : this.props.customerSafeName.replace(/\b\w/g, l => l.toUpperCase())
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
    }

    install() {
        this.log(this.props);
    }

    end() {
    }
};