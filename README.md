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

## Upgrading your package

If most of the previous packages were already installed, ensure to upgrade them either manually one by one or upgrade all at once

* Method 1: Manually one by one

    ```
    pip install package_name --upgrade
    ```

* Method 2: Upgrade all at once (not working on windows platform)

    ```
    pip install $(pip list --outdated |tail -n +3 | awk '{ print $1}') --upgrade
    ```


## Getting started


- Install: `npm install -g generator-ps-iow`
- Run: `yo ps-iow`


## Commands

* `yo ps-iow` shows a wizard for generating a new IOW for a given customer 


## What do you get?

Scaffolds out a complete generator directory structure for you:

```
└── <customer-name>-iow
    ├── CoveoCloudPlatform
    │   ├── analytics-config.rst
    │   ├── coveo-sources
    │   ├── pipeline-config.rst
    │   └── sources.rst
    ├── Makefile
    ├── Overview
    │   ├── architecture.rst
    │   ├── contacts.rst
    │   ├── links.rst
    │   ├── salesforce_orgs.rst
    │   ├── source_code.rst
    │   └── summary.rst
    ├── README.md
    ├── Salesforce
    │   ├── Deployment
    │   └── Salesforce
    ├── UI_custo.rst
    ├── _build
    │   └── html
    ├── _static
    │   ├── css
    │   ├── img
    │   └── js
    ├── _templates
    │   └── layout.html
    ├── _themes
    │   └── sphinx_rtd_theme
    ├── appendixA.rst
    ├── appendixB.rst
    ├── conf.py
    ├── dev.rst
    ├── index.rst
    ├── make.bat
    └── runSite.bat

```

Refer to [our documentation](http://yeoman.io/authoring/) to learn more about creating a Yeoman generator.
