.. _Customization_PS_Components_CustomPrintableUri:

****************************
CustomPrintableUri Component
****************************

Visual Example
--------------

Display the printable Uri of the document (list all parents).

.. figure:: ../../_static/img/PSComponent_CustomPrintableUri_example.png
    :align: center
    :alt: PS Component Custom Printable Uri example

Sample Usage
------------

.. note:: Insert this component into a result template

.. code:: HTML
    
    <span class="CoveoCustomPrintableUri" data-always-expand="true"></span>

.. literalinclude:: ../../../project-search-ui/views/templates/pilot/Document.ejs
    :language: HTML

Component Options
-----------------

alwaysExpand
************

.. attribute:: alwaysExpand : boolean

Specifies if we want to display ellipsis or expand the links.
This option is optional.

*HTML markup configuration example(s)*

.. code:: HTML
    
    data-always-expand="true"

openLinkInNewWindow
*******************

.. attribute:: openLinkInNewWindow : boolean

Specifies if we want to open the link in a new window (tab)

*HTML markup configuration example(s)*

.. code:: HTML
    
    data-open-link-in-new-window="true"