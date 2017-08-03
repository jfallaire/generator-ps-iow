.. UAT_ChangeSet_CoveoMonDD_Deployment:

**********
Deployment
**********

Coveo for Salesforce
====================

If required, upgrade to the same version of Coveo for Salesforce V2 that was installed in the source environment (e.g. DEV/QA)
    - See Installing the `Coveo for Salesforce V2 Application <http://www.coveo.com/go?dest=cloudhelp&lcid=9&context=147>`_

    .. HINT::
        See the :ref:`salesforce_org` section for more information on the installed versions

Salesforce Components
=====================

Change Set
**********

Upload and deploy the change set to the target environment (e.g. PROD).
    - The naming convention of the change set is quite simple. We start with the 'Coveo' word followed by the creation date (e.g.: CoveoFeb09).

``CoveoMonDD``

+----------------------------------------------------------------------------------+
| ``CoveoMonDD``                                                                   |
+-----------------------+----------------------------------------+-----------------+
| *Type*                | *Name*                                 | *What’s new*    |
+=======================+========================================+=================+
| Visualforce Page      | CommunitySearch                        |                 |
+-----------------------+----------------------------------------+-----------------+
| Visualforce Component | CommunitySearch                        |                 |
+-----------------------+----------------------------------------+-----------------+
| Visualforce Component | CommunitySearchInterface               |                 |
+-----------------------+----------------------------------------+-----------------+
| Apex Class            | CommunitySearchInterfaceController     |                 |
+-----------------------+----------------------------------------+-----------------+
| Apex Class            | CommunitySearchInterfaceControllerTest |                 |
+-----------------------+----------------------------------------+-----------------+
| Static Resource       | Project_Coveo_UI                       |                 |
+-----------------------+----------------------------------------+-----------------+
| Custom Setting        | Coveo Search Value Captions Settings   |                 |
+-----------------------+----------------------------------------+-----------------+
| Custom Field          | Key                                    |                 |
+-----------------------+----------------------------------------+-----------------+
| Custom Field          | CustomerValue                          |                 |
+-----------------------+----------------------------------------+-----------------+
| Custom Field          | InternalValue                          |                 |
+-----------------------+----------------------------------------+-----------------+

**Code Coverage**

+------------------------------------+----------------------------------------+-----------------+
| *Apex Class*                       | *Apex Class*                           | *Coverage*      |
+------------------------------------+----------------------------------------+-----------------+
| CommunitySearchInterfaceController | CommunitySearchInterfaceControllerTest | 91% (34/37)     |
+------------------------------------+----------------------------------------+-----------------+

**Static Resource**

.. code::

    Project_Coveo_UI.resource/
    ├───css
    │       CommunityFullSearch.Custom.css
    │
    ├───js
    │       CommunityFullSearch.Custom.js

+--------------------------------+-------------------------------------------------------------------------------------------+
| File name                      | What's new                                                                                |
+================================+===========================================================================================+
| CommunityFullSearch.Custom.css | No results                                                                                |
+--------------------------------+-------------------------------------------------------------------------------------------+
| CommunityFullSearch.Custom.js  | Override locale string                                                                    |
+--------------------------------+-------------------------------------------------------------------------------------------+

Custom Settings
***************

If your change set includes custom settings, you can use the *Salesforce Data Export* tool or manually set the values.


Salesforce Settings
===================

Knowledge Settings
******************

n/a