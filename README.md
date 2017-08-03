# generator-ps-iow 

[![Build Status](https://travis-ci.org/jfallaire/generator-ps-iow.svg?branch=master)](https://travis-ci.org/jfallaire/generator-ps-iow) [![npm version](https://badge.fury.io/js/generator-ps-iow.svg)](https://badge.fury.io/js/generator-ps-iow)


> generator to serve CoveoPS folks to setup the Sphinx environment in order create an Implementation of Work (IOW)


![Solutions Specialist, you've been served!](https://i.imgflip.com/1jaox9.jpg)

## Initial Setup

The following steps are required only once on your machine and then you can jump to the Getting started section.

First, make sure you have Python 2.x installed ([https://www.python.org/](https://www.python.org/))

Update Python package installer ([https://pip.pypa.io/en/stable/installing/](https://pip.pypa.io/en/stable/installing/))

    python -m pip install -U pip

Install Sphinx ([http://www.sphinx-doc.org/en/stable/#](http://www.sphinx-doc.org/en/stable/#)) : 

    python -m pip install Sphinx

Install Read the Docs Sphinx Theme ([https://github.com/snide/sphinx_rtd_theme](https://github.com/snide/sphinx_rtd_theme)) : 

    python -m pip install sphinx_rtd_theme

Install CommonMarkParser  ([https://recommonmark.readthedocs.io/en/latest/](https://recommonmark.readthedocs.io/en/latest/)) : 

    python -m pip install recommonmark

Install Sphinx Autobuild ([https://github.com/GaretJax/sphinx-autobuild](https://github.com/GaretJax/sphinx-autobuild)) : 

    python -m pip install sphinx-autobuild

Install rst2pdf with command ([https://github.com/rst2pdf/rst2pdf](https://github.com/rst2pdf/rst2pdf)) : 

    python -m pip install rst2pdf


## Getting started


- Install: `npm install -g generator-ps-iow`
- Run: `yo ps-iow`


## Commands

* `yo ps-iow` shows a wizard for generating a new IOW for a given customer 


## What do you get?

Scaffolds out a complete generator directory structure for you:

```
|-- <CustomerName>-iow
    |-- .editorconfig
    |-- .gitattributes
    |-- .gitignore
    |-- .travis.yml
    |-- LICENSE
    |-- README.md
    |-- gulpfile.js
    |-- package.json
    |-- tsconfig.json
    |-- webpack.config.js
    |-- config
    |   |-- config.development.js
    |   |-- config.global.js
    |   |-- config.production.js
    |   |-- index.js
    |-- gulpTasks
    |   |-- compile.js
    |   |-- css.js
    |   |-- dev.js
    |   |-- prettify.js
    |   |-- setup.js
    |-- sass
    |   |-- AgentBox.scss
    |   |-- AgentFullSearch.scss
    |   |-- CommunityFullSearch.scss
    |-- src
    |   |-- Index.ts
    |   |-- custo
    |   |   |-- <CustomerName>Custo.ts
    |   |   |-- <CustomerName>Helper.ts
    |   |   |-- <CustomerName>Initialization.ts
    |   |-- events
    |   |   |-- CustomEvents.ts
    |   |-- ui
    |-- vendor
    |   |-- coveo
    |   |   |-- Box
    |   |   |   |-- css
    |   |   |   |   |-- CoveoBoxNew.css
    |   |   |   |-- js
    |   |   |       |-- CoveoJsSearch_Box.d.ts
    |   |   |       |-- CoveoJsSearch_Box.js
    |   |   |       |-- templates
    |   |   |           |-- All.js
    |   |   |           |-- Chatter.js
    |   |   |           |-- Dropbox.js
    |   |   |           |-- Email.js
    |   |   |           |-- GoogleDrive.js
    |   |   |           |-- Jira.js
    |   |   |           |-- Lithium.js
    |   |   |           |-- People.js
    |   |   |           |-- Salesforce.js
    |   |   |           |-- SharePoint.js
    |   |   |           |-- YouTube.js
    |   |   |           |-- box.new.templates.js
    |   |   |-- resources
    |   |       |-- css
    |   |       |-- gulpTasks
    |   |       |-- img
    |   |       |-- js
    |   |-- coveo-ps
    |       |-- CoveoPSComponents.Custom.js
    |       |-- CoveoPSComponents.Custom.js.map
    |-- views
        |-- pages
        |   |-- agent-box.ejs
        |   |-- agent-full-search.ejs
        |   |-- community-search.ejs
        |-- partials
        |-- templates

```

Refer to [our documentation](http://yeoman.io/authoring/) to learn more about creating a Yeoman generator.
