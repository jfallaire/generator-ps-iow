.. _Customization_Custo_FeaturedResults:

Featured Results
================

Specific queries will trigger the display of specific featured results in the `Recommended Results` section at the top of the results.

Visual Example
--------------

.. figure:: ../../../_static/img/Custo_FeaturedResults_example.png
    :align: center
    :alt: Custo FeaturedResults

Configuration
-------------

Source
******

1. Create an XML file containing the `featured results` 

.. code:: text
    
    \vendor\project\featuredResults\featured-results.xml

2. Create a Web source to index the items listed in the XML file

.. attribute:: Site URL : https://sub.domain.com/vendor/project/featuredresults/featured-results.xml

3. Make sure that the source can handle XML content

.. code:: JSON

    "ParsableContentTypes": {
        "value": "[\"text/html\",\"text/xml\"]"
    }

Query Pipeline - Triggers
*************************

All items in the file `featured-results.xml` should trigger an `Execute` rule.

+------------------------+--------------------------------+
|   **Rule (Execute)**   | **Condition (Query contains)** |
+========================+================================+
| featuredResults("foo") | foo                            |
+------------------------+--------------------------------+
| featuredResults("bar") | bar                            |
+------------------------+--------------------------------+

.. figure:: ../../../_static/img/CoveoCloudPlatform_QueryPipelines_Triggers.png
    :align: center
    :alt: Landing Page

.. note:: Refer to the `Managing Query Pipeline Triggers documentation <https://onlinehelp.coveo.com/en/cloud/managing_query_pipeline_triggers.htm#Manage_the_Triggers_of_a_Query_Pipeline>`_

Methods
-------

getFeaturedResults
******************

.. attribute:: query : Coveo.IQuery

Perform a search on the index and returns a Promise of IQueryResults. We use the browser local storage for performance and query count considerations.

renderFeaturedResults
*********************

.. attribute:: data: any

.. todo:: Validate if this method is still used or if its deprecated

Integration into custom component(s)
------------------------------------

RecommandedResultList
*********************

.. note:: See the :ref:`Customization_Custo_RecommandedResultList` component for more information about the configuration.

Initialization
--------------

The OOTB triggers functionnality (`Execute` rule) expect to execute a JavaScript function. We have to declare this function to prevent JavaScript error/warning at runtime.

*JavaScript initialization example(s)*

.. code:: JavaScript

    function featuredResults(data) {
    }