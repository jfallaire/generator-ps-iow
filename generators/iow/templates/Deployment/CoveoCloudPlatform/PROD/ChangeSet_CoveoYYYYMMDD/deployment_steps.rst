.. _Deployment_Salesforce_PROD_changeset_CoveoYYYYMMDD_deployment:

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

+------------------------+--------+--------------+
|         *Type*         | *Name* | *What’s new* |
+========================+========+==============+
| Visualforce Component  |        |              |
+------------------------+--------+--------------+
| Aura Definition Bundle |        |              |
+------------------------+--------+--------------+
| Apex Class             |        |              |
+------------------------+--------+--------------+
| Static Resource        |        |              |
+------------------------+--------+--------------+

**Code Coverage**

+--------------+--------------+------------+
| *Apex Class* | *Apex Class* | *Coverage* |
+==============+==============+============+
|              |              | % (X/Y)    |
+--------------+--------------+------------+

**Static Resource**

.. code::

    Project_Coveo_UI.resource/
    ├───css
    │       CommunitySearch.Project.css
    │
    ├───js
    │       Coveo.Project.Custom.js
    |       Coveo.Project.js
    |       Coveo.Project.js.map

+-------------+--------------+
| *File name* | *What's new* |
+=============+==============+
|             |              |
+-------------+--------------+

Custom Settings
***************

If your change set includes custom settings, you can use the *Salesforce Data Export* tool or manually set the values.

Salesforce Settings
===================

Knowledge Settings
******************

.. note:: no customization

Case Page Layouts
*****************

.. note:: no customization
