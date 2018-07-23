.. _Customization_Custo_HelperIcon:

HelperIcon
==========

Display custom icons depending on the nature of the document.

Visual Example
--------------

.. figure:: ../../../_static/img/Custo_HelperIcon_example.png
    :align: center
    :alt: Custo HelperIcon

Registered Template Helpers
---------------------------

fromSalesforceObjectTypeToIcon
******************************

.. attribute:: result : Coveo.IQueryResult
.. attribute:: options : I<%= capitalizeCustomerSafeName %>HelperIconOptions

Display an icon based on the document's object type.

*TypeScript Initialization*

.. code:: TypeScript
    
    Coveo.TemplateHelpers.registerTemplateHelper('fromSalesforceObjectTypeToIcon', (result: Coveo.IQueryResult, options: I<%= capitalizeCustomerSafeName %>HelperIconOptions) => {
      return <%= capitalizeCustomerSafeName %>HelperIcon.fromSalesforceObjectTypeToIcon(result, options);
    });

*HTML markup configuration example(s)*

.. code:: HTML
    
    <div class="coveo-result-cell coveo-icon-cell">
      {{= fromSalesforceObjectTypeToIcon(obj, {}) }}
    </div>

from<%= capitalizeCustomerSafeName %>FileTypeToIcon
***********************

.. attribute:: result : Coveo.IQueryResult
.. attribute:: options : I<%= capitalizeCustomerSafeName %>HelperIconOptions

Display an icon based on the document's file type.

*TypeScript Initialization*

.. code:: TypeScript
    
    Coveo.TemplateHelpers.registerTemplateHelper('from<%= capitalizeCustomerSafeName %>FileTypeToIcon', (result: Coveo.IQueryResult, options: I<%= capitalizeCustomerSafeName %>IconOptions) => {
      return <%= capitalizeCustomerSafeName %>HelperIcon.from<%= capitalizeCustomerSafeName %>FileTypeToIcon(result, options);
    });

*HTML markup configuration example(s)*

.. code:: HTML
    
    <div class="coveo-result-cell coveo-icon-cell">
      {{= from<%= capitalizeCustomerSafeName %>FileTypeToIcon(obj, {}) }}
    </div>

from<%= capitalizeCustomerSafeName %>SourceToIcon
*********************

.. attribute:: result : Coveo.IQueryResult
.. attribute:: options : I<%= capitalizeCustomerSafeName %>HelperIconOptions

Display an icon based on the document's source.

.. code:: TypeScript

    Coveo.TemplateHelpers.registerTemplateHelper('from<%= capitalizeCustomerSafeName %>SourceToIcon', (result: Coveo.IQueryResult, options: I<%= capitalizeCustomerSafeName %>IconOptions) => {
      return <%= capitalizeCustomerSafeName %>HelperIcon.from<%= capitalizeCustomerSafeName %>SourceToIcon(result, options);
    });

*HTML markup configuration example(s)*

.. code:: HTML

    <div class="coveo-result-cell coveo-icon-cell">
      {{= from<%= capitalizeCustomerSafeName %>SourceToIcon(obj, {}) }}
    </div>

from<%= capitalizeCustomerSafeName %>ContactTypeToIcon
**************************

.. attribute:: result : Coveo.IQueryResult
.. attribute:: options : I<%= capitalizeCustomerSafeName %>HelperIconOptions

Display an icon based on the document's contact type.

.. code:: TypeScript

    Coveo.TemplateHelpers.registerTemplateHelper('from<%= capitalizeCustomerSafeName %>ContactTypeToIcon', (result: Coveo.IQueryResult, options: I<%= capitalizeCustomerSafeName %>IconOptions) => {
      return <%= capitalizeCustomerSafeName %>HelperIcon.from<%= capitalizeCustomerSafeName %>ContactTypeToIcon(result, options);
    });

*HTML markup configuration example(s)*

.. code:: HTML

    <div class="coveo-result-cell coveo-icon-cell">
      {{= from<%= capitalizeCustomerSafeName %>ContactTypeToIcon(obj, {}) }}
    </div>