Getting Started
===============

This section explains how to set up your local machine to be able to actively develop and/or make modification to the current implementation.
The main dependency for this project is the `Coveo Javascript Search Framework`_ . This local development setup is meant to improve productivity for any search interfaces that need (or not) to be integrated in SFDC. 
The output destination folder will generate all resources needed to run your search interfaces locally in the browser.

Install Node.js
===============

Node.js will be used to install the project dependencies and run a developer server for this implementation.
You can download Node.js from the following URL: https://nodejs.org/en/.
Make sure you use Node.js v4 or later. You can check what Node.js version is installed on your local machine by typing the following command in a terminal:

.. code:: 

    node --version

Install Project dependencies
============================

Use npm, which is the package manager for Node.js, to install the project dependencies (see npm_).

In a terminal, from the root of the project folder, type the following command line:

.. code::

    npm install

This will download and install the dependencies required to build and run the project.

Build Project
=============

Once all dependencies have been correctly installed, type the following command line:

.. code:: 

    gulp build

This will build the entire project. All resources will be available under ``./bin`` folder.

Important gulp tasks
--------------------

* ``gulp default`` -> Build the whole project (CSS, templates, TypeScript, etc.) and generate its output in the ``./bin`` folder.
* ``gulp build`` -> same as default
* ``gulp compile`` -> Build only the TypeScript code and generate its output in the ``./bin`` folder.
* ``gulp css`` -> Build only the Sass code and generate its output in the ``./bin`` folder.

Available options on gulp tasks : 
* ``--bundle`` -> Use to target a specific phase of the project (support, internal), default=support. this option is only effective when using ``build`` task
* ``--env`` -> target configuration environment (development, production), default=development

Run Server
==========

Ensure that you were able to run ``gulp`` completely without any errors first. Then you can start the dev-server.

.. code::

    gulp dev

This will start a `webpack-dev-server instance`_.

.. todo::Document here what pages will be available on your local dev server

Any time you hit **Save** in a source file, the bundle will be recompiled, and the dev page will reload.

If you need to modify the content of the search page, modify any html page under ``./bin``. This page is not committed in the repository, so don't be afraid to break anything. However, if you need to modify the original html files for a good reason, feel free to do so.

SFDC Integration [Phase 1]
==========================

First, make sure all the resources (``./bin`` folder) have been correctly built using the default gulp task (``gulp``).
Then, under ``./bin/sfdcs`` folder you'll retrieve the VF Components that need to be copied over to your SFDC dev/stage org. You will also need to update
the [*static resource*] in SFDC with the corresponding files in the output folder. Below is the project's tree structure :

.. todo:: Update according to project's specs.

.. code::

    ├── css
    │   ├── Coveo.<%=capitalizeCustomerSafeName%>.css
    │   ├── CoveoBox.<%=capitalizeCustomerSafeName%>.css
    │   ├── CoveoFullSearch.<%=capitalizeCustomerSafeName%>.css
    │   └── support-search-icon-font.css
    ├── fonts
    │   ├── supportsearch.eot
    │   ├── supportsearch.svg
    │   ├── supportsearch.ttf
    │   └── supportsearch.woff
    ├── js
    │   ├── Coveo.<%=capitalizeCustomerSafeName%>.js
    │   ├── Coveo.<%=capitalizeCustomerSafeName%>.js.map

Internal Search Integration [Phase 3]
=====================================

To only build the internal search distribution 

.. code::

    gulp build --bundle internal

then use the `bundle-internal-search` task to package required files for hosting.

.. code::

    gulp bundle-internal-search

.. _webpack-dev-server instance: https://webpack.github.io/docs/webpack-dev-server.html
.. _Coveo Javascript Search Framework: https://github.com/coveo/search-ui
.. _npm: https://www.npmjs.com/