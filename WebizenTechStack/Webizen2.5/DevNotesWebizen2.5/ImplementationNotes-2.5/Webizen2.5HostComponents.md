# Webizen 2.5 Host Components

The Host components require modification.  In some instances these modifications are significant, in others less so.  This document will develop as the implementation work is being done.  For updates see [[ImplementationNotes-2.5]].

The components being used currently include,

1. Headscale
2. Headscale-UI
3. CaddyServer
4. Cockpit

Exploration is being done to review which version of the solid-server-node should be modified to convert the way the ecosystem works into a webizen based solution. Additionally, there is work to be done to figure out what the best database approach is. 

A former project by Ebay has produced a Golang based SemWeb database called [[akutan]] whilst the google project [[BadWolf]] is also interesting due to its potential use to support [[TemporalSemantics]] - yet, it is unlikely that a formal long-term solution will be defined at this stage.  Some consideration about migration to newer versions (ie: [[Webizen3.0]] and in-particular thereafter [[Webizen3.5]] ) is being considered.  Therein also, the [[Cryptography]] methods are not as yet, well defined.

## Goal

Put simply, the goal is to produce a system that can enable community development of the [[WebizenTechStack]].  At the moment, its only being done by me.

The goal is to have a basic system that can be used to develop [[TheValuesProject]] and in-turn thereafter; the [[WorkProject]].  In-effect, there needs to be something that people who are interested in contributing towards the development of the [[WebizenTechStack]] (and become part of the [[WebizenAlliance]]) are able to use to do so.  

The systems should support a [[PermissiveCommonsTech]] implementation.  It is also noted that the results of the research into existing [[SemWebOntologies]] particularly with respect to [[EnglishLanguageModelling]] has illustrated the potential for these datasets when combined to take-up alot of space, and whilst this is certainly going to be a topic for further development to better address the requirements; the first instantation of a working system, might use more resources to perform the basics, than is able to be achieved later via further development.

### ALPHA Stage Webizen: Not for Public Use
This stage of development is not intended to be a 'public release' and there will be alot more that needs to be done prior to being able to support either - early-adopter or public users.  Nonetheless, the code-base will be made public via GitHub, but the license document for the work may not be in place as that requires the completion of [[TheValuesProject]].

## AdminSetup Experience & Related Requirements

1. Get VPS
2. 

## User Experience & Related Requirements

### Objective

The objective at this stage is to establish the basic [[WebizenID]] ecosystem methods and that are then applied with the use of Webizen Agents and Permissive Commons Technology.  

#### Likely to be Out of Scope: Payments
At this stage, the systems are not designed to be commercial, and it is likely that the system will not directly support payments; however, it may be produced to support [[Currencies]] of various forms that do not involve a traditional banking interface. 

### Sign-up Steps

1. Goto webizen.au (or similar - note: [[Domains]]) and sign-up for an account. 
2. Get or Assign a Domain Name. (  note: [[WebizenID-DNS]])
3. Continue Set-up on Webizen.au (per above)
4. Download Client; and set-up connection via webizen.au (per above)

