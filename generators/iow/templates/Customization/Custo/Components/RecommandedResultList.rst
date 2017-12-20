.. _Customization_Custo_RecommandedResultList:

RecommandedResultList
=====================

Visual Example
--------------

Recommended results are promoted at the top at the normal results and they are displayed in a separate results list.

.. figure:: ../../../_static/img/Custo_RecommandedResultList_example.png
    :align: center
    :alt: Custo RecommandedResultList

Sample Usage
------------

.. code:: HTML

    <div class="coveo-recommended-result-list-section">
        <div class="CoveoRecommendedResultList" data-layout="list" data-wait-animation="fade" data-auto-select-fields-to-include="false">
            <%% include ../templates/pilot/results-template %>
        </div>
    </div>

Component Options
-----------------

numberOfRecommendation
**********************

.. attribute:: numberOfRecommendation : number

Specifies the maximum number of recommendations that can be displayed.
This option is optional.

*HTML markup configuration example(s)*

.. code:: HTML
    
    data-number-of-recommendation='3'

enable
******
.. attribute:: enable : boolean

Specifies if the component is enabled.
This option is optional.

*HTML markup configuration example(s)*

.. code:: HTML
    
    data-enable='true'

Integration of custom functionnalities
--------------------------------------

FeaturedResults
***************

.. note:: See the :ref:`Customization_Custo_FeaturedResults` functionnality for more information about the configuration.

.. code:: TypeScript

    let featuredResultsTriggers: Coveo.ITrigger<Coveo.ITriggerExecute>[] = _.filter(data.results.triggers, (trigger: Coveo.ITrigger<any>) => {
      return trigger.type == 'execute' && trigger.content['name'] == 'featuredResults';
    });

    let featuredResultsIds = _.map(featuredResultsTriggers, (trigger: Coveo.ITrigger<Coveo.ITriggerExecute>) => {
      if (trigger.content['params'].length > 0) {
        return trigger.content['params'][0];
      }
    });

    let externalFeaturedResults = this.cachedFeaturedResults.filter((r) => {
      return featuredResultsIds.indexOf(r.raw.featuredresultid) >= 0;
    });

    // Merging External Featured Results and recommended Results together ,
    // external featured Results will always be displayed before the "recommended results" and the number of external Featured Results
    // does not count against the limit of recommendation( see option numberOfRecommendation )
    recommendedResults = _.union(externalFeaturedResults, recommendedResults);