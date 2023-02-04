# UI Toolkits

## Introduction
The general concept of how to build out a application ecosystem for the webizen ecosystem is to look to form a method where existing 'ui toolkits' can be easily leveraged.  Below are some current considerations about this theory, and some of its broader implications / considerations, etc.   I have also provided some examples.

The main purpose of this note, is to provide support for developers to make considerations about how it is systems need to be factored in-order to achieve this task.

### Summary

The webizen app environment provides an API to a local host system that manages the underlying services; which has the effect of making the use of apps private, and the use of APIs harmonised.  There are two app dev functionality targets; the first, is to provide the ability for people to easily / quickly, build apps using UI / UX toolkits that they can then integrate with the Webizen API; or that producers of these applications do so themselves and vend a webizen version of their app.  the second, is that people are able to easily produce new apps for themselves; and that progressively the tools to do so become better, with more functionality and that existing functionality becomes easier to  use / do.  

### KNOWN ISSUES

Most Web-Apps / Ecosystems; are designed for singular organisations and have a front-end / back-end systems framework that is inteded to support a singular organisation.

Put simply - these systems are built for patterns that are not considered [[Human-Centric]]. 

As such, some existing UI toolkits may not be 'fit for purpose' but the differences really do depend upon the intended purpose of the application.  It is expected that there will be many examples where there are not alot of changes to the made; and in-future, it is expected that the tools needed for these UI toolkit developers to publish Webizen compatible Apps will be provided; and that, the additional cost to do so will be negligable for them to make those changes themselves, rather than someone else doing it for them; and in-turn, there's some implications relating to currencies, etc.

## General Overview

The best illustration that is easily made, is the list of HTML UI Templates available on [EnvatoMarket - Themeforest](https://themeforest.net/category/site-templates).  There are other online market-places like this one, that also provide a type of developer 'app store' / resources  library, but the concept is described well enough via the above link.  Now most of these UI producers produce UX systems that are in-turn provided for a number of different development environments (ie: angular, react, html, vue, etc.); and are then provided with a 'mock api' to demonstrate how it works, which is generally produced using a json based interface.

So, the objective is; to provide a fairly straight-forward way for these 'apps' to be modified in a way that makes them easily deployed as a webizen app. 

### Examples

Historically; i've done some research that has in-turn looked at a few examples.

#### FuseTheme
The newest one i've looked at briefly is: fusetheme.com 

The reason why i've found this interesting is due to the functionality it provides for managing projects.  

See the demo: https://react-material.fusetheme.com/dashboards/project 

#### SmartHR
Another is: https://webcivics.github.io/CooperativeProjects/ 

Sourced from: https://preview.themeforest.net/item/smarthr-bootstrap-admin-panel-template/full_screen_preview/21153150?ref=jqueryrain 

It appears as though an implementation has been done: https://github.com/MusheAbdulHakim/Smarthr-hr-payroll-project-employee-management-System 

The problem with this template currently; is that its not designed for the webizen or webizen like systems environment

#### Revox

One of the oldest examples was built in 2015 using [Revox](https://pages.revox.io/dashboard/) 

http://dev.webcivics.org/ (use dummy form details to get past validation).

Repo link: https://github.com/WebCivics/social-rww-solid-POC-project

## Future App Builder considerations

Whilst i'm not sure when doing so makes sense, it may well be the case that elements of these UI Toolkits can be used to build a drag-drop app maker; that interacts with the ontology api to support the means to compile a new app.  
