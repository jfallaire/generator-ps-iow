UI Customizations
=================

This section of the documentation regroups topics describing various customizations made during this implementation to meet requirements that were not specifically available in the OOTB UI components of Coveo.

Before going further we highly recommend you get yourself familiar with the `JS Search framework of Coveo`_.


Getting Started with Customizations made for this implementation
----------------------------------------------------------------

This section will show you each individual section you must include in your html 
search page (or VisualForce Page) to enable the customization for this implementation.

Header resources
****************

The html page in which you want to activate the customization, the header must contains all required resources 
for the basic framework to operate, as well as a few extra JavaScript and CSS files that will be used exclusively for this implementation.

.. code-block:: HTML

    <!-- This is the default CSS offered by Coveo for the UI. -->
    <link rel="stylesheet" href="css/CoveoFullSearchNewDesign.css"/>
    
    <!-- This is an extra CSS used exclusively in this implementation. -->   
    <link rel="stylesheet" href="css/CoveoFullSearch.[CustomerName].css"/>
    
    <!-- This is the JavaScript file that includes the entire framework. -->
    <!-- It will populate the "Coveo" namespace in the browser. -->        
    <script src="js/CoveoJsSearch.js"></script>
    
    <!-- This is an extra JavaScript file used exclusively in this implementation. -->
    <script src="js/Coveo.[CustomerName].js"></script>
    
    <!-- This is the "default" result template. -->
    <!-- It will be used by the UI when no custom template has been specified. -->                   
    <script src="js/templatesNew.js"></script> 

.. todo::To be completed, or removed depending on solution

What's next?
************

You should now proceed and have a look at the different `Custom Components`_ made during for this implementation.

Custom Components
-----------------

.. _ui-custo:

.. toctree::
   :maxdepth: 3

   Salesforce/Salesforce/components/Generic


.. _JS Search framework of Coveo: https://developers.coveo.com/display/public/JsSearchV1/Getting+Started+with+the+JavaScript+Search+Framework+V1
.. _Events: https://developers.coveo.com/display/JsSearchV1/Events




