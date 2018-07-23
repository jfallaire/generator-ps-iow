.. _Customization_Custo_FacetManager:

Facet Manager
=============

Visual Example
--------------

Description of the component...

.. figure:: ../../_static/img/Custo_FacetManager_example.png
    :align: center
    :alt: Custo FacetManager

Sample Usage
------------

.. todo:: Provide code snippets from your project using the literalinclude command


Additional Facet Component Options
----------------------------------

autoCollapse
************

.. attribute:: autoCollapse : boolean

Specifies if the facet is collapsed at initialization.
This option is optional.

*HTML markup configuration example(s)*

.. code:: HTML
    
    <div class="CoveoFacet"
         id="CoveoFacet_Month" 
         data-id="CoveoFacet_Month" 
         data-sort-criteria="AlphaAscending" 
         data-title="Month"
         data-field="@month" 
         data-tab="All" 
         data-enable-settings="false" 
         data-enable-facet-search="false" 
         data-auto-collapse="true">
    </div>

.. code:: HTML
    
    data-auto-collapse="true"

actionPositionCollapse
**********************

.. attribute:: actionPositionCollapse : string

Specifies the position of the collapse action button.
This option is optional.

*HTML markup configuration example(s)*

.. code:: HTML
    
    <div class="CoveoFacet"
         id="CoveoFacet_Month" 
         data-id="CoveoFacet_Month" 
         data-sort-criteria="AlphaAscending" 
         data-title="Month"
         data-field="@month" 
         data-tab="All" 
         data-enable-settings="false" 
         data-enable-facet-search="false" 
         data-action-position-collapse="top-right">
    </div>

.. code:: HTML
    
    data-action-position-collapse="top-right"

bindCollapseToggleEvent
***********************

Bind the `click` event on the `Facet` title to toggle between expand and collapse action

Initialization
--------------

*TypeScript Initialization*

.. code:: TypeScript
    
    FacetManager.initializeFacetManager();