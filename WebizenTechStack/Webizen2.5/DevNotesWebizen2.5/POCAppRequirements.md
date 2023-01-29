
# Proof Of Concept App Reqs

In-order to produce a proof of concept, there are some development apps that are required alongside an array of user-apps. 

This document is intended to consider the user-experience side of the requirements.  That is to say, the basic things required for the user-experience, starting with the development apps that are sought to be produced in-order to create the tooling.

## Objective

The objective is to create a useful development environment that can be used socially to support the continued development of the Webizen and PCT works. 

### UI / UX Options & Considerations (templates)

#### Revox
I"ve purchased the Revox package (2015) which was intended to be a POC for RWW.
https://pages.revox.io/dashboard/
Its in HTML, Angular and React

#### SmartHR

I've purchased the SmartHR Package.  Its in HTML5+bootstrap and Angular.
https://smarthr.dreamguystech.com/index.html

#### FuseTheme
I haven't purchased FuseTheme - as i've only just found it, but its in Angular and React.

https://fusetheme.com/

NOTE:  If, for some reason i end-up looking at doing a back-up (note: [[DataPortability]] ) solution, Inrupt has a [React-SDK](https://github.com/inrupt/solid-ui-react)

NOTE ALSO:  I've started looking into how a [[JsonAppInterface]] might be produced, that would be intended to eventually provide a basic SDK that can be employed by front-end 'template' developers to produce 'apps' that work 'out of the box'.



## Development Apps

### OntologyApp

The ontology creator app needs to be able to produce PCT ontologies. 

### Credential Maker App

The Credential Maker app needs to create the packaged script that enables the use of a software product or service

### Query Builder

An app that helps visually to create a query function.

## Values Credentials

The values credentials are essential.  The app needs to provide a basic way to identify terms that are defined ontologically in various 'values ontologies' and then assert them with another webizen user as a form of electronic contract.

IF the terms of their relationship changes then they need to be able to generate another  credential that reflects the nature of those changes.

Historical agreements may be changed by mutual agreement.   A need for a mediator is likely also required in relation to some situations, forms of content, various rules; which would be defined in the [[SafetyProtocols]]


## AgentDirectory

The agent directory should support both entity (person/company) and agent (software/website/etc) centric sorting. 

This is provided as an addressbook like app; whilst there are differences,

Each Website and/or entity should be catalogued.  records relating to entities become linked with these records.  


