.. _Customization_Custo_ResultLayout:

ResultLayout
============

Visual Example
--------------

Description of the component...

.. figure:: ../../_static/img/Custo_ResultLayout_example.png
    :align: center
    :alt: Custo ResultLayout

Sample Usage
------------

.. todo:: Provide code snippets from your project using the literalinclude command

Methods
-------

handleActiveTab
***************

.. attribute:: searchInterface : Coveo.Dom
.. attribute:: tabName : string

Ensure that the `card layout` is used only when the `People Tab` is active.

*TypeScript Initialization*

.. code:: TypeScript
    
    // State Events
    this.rootElement.on(this.getStateEventName(Coveo.QueryStateModel.eventTypes.changeOne + 't'), (e: Event, data: Coveo.IAttributeChangedEventArg) => this.handleTabStateChange(e, data));

    /**
     * Tab State Change
     */
    private handleTabStateChange(evt: Event, args: Coveo.IAttributeChangedEventArg) {
        <%= capitalizeCustomerSafeName %>ResultLayout.handleActiveTab(this.rootElement, args.value);
    }
