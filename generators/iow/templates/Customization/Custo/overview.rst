.. _Customization_Custo:

***************
Custom Features
***************

This section of the documentation regroups topics describing various customizations made during this implementation to meet requirements that were not specifically available in the OOTB UI components of Coveo.

Before going further we highly recommend you get yourself familiar with the `JS Search framework of Coveo`_.

Getting Started
---------------

This section will show you each individual section you must include in your html search page (or VisualForce Page) to enable the customization for this implementation.

Header resources
****************

The html page in which you want to activate the customization, the header must contains all required resources 
for the basic framework to operate, as well as a few extra JavaScript and CSS files that will be used exclusively for this implementation.

.. code-block:: HTML

    <script src="js/Coveo.<%= capitalizeCustomerSafeName %>.js"></script>
    <link rel="stylesheet" href="css/PilotFullSearch.<%= capitalizeCustomerSafeName %>.css" />

.. todo::To be completed, or removed depending on solution

What's next?
************

You should now proceed and have a look at the different `Templates Helpers`_, `Managers`_, `Components`_ and `Functionnalities`_ used for this implementation.

Templates Helpers
-----------------

.. toctree::
   :maxdepth: 1

   Helpers/HelperIcon

Managers
--------

.. toctree::
   :maxdepth: 1

   Managers/FacetManager

Components
----------

.. toctree::
   :maxdepth: 1

   Components/RecommandedResultList

Functionnalities
----------------

.. toctree::
   :maxdepth: 1

   Functionnalities/FeaturedResults
   Functionnalities/ResultLayout

Initialization
--------------

.. toctree::
   :maxdepth: 1

   Initialization/LandingPage
   Initialization/PilotSearch

.. _JS Search framework of Coveo: https://developers.coveo.com/display/public/JsSearchV1/Getting+Started+with+the+JavaScript+Search+Framework+V1
.. _Events: https://developers.coveo.com/display/JsSearchV1/Events
