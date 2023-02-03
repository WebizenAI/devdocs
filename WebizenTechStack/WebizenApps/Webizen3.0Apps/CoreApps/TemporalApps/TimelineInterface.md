# Timeline Interface
based on: https://timeline.knightlab.com/ 

The idea is that people are able to create a faceted query (using structured langage) to create a timeline view of a topic or concept that they're interested in exploring, however this has various implications.  Note; the details outlined here, should not be considered specifications; rather illustrative pointers, that are intended to be useful should others seek to get involved in making it.  if so, see [[GuideForDevelopers]] which in-turn makes reference to [[WebizenTerms]] that are defined by [[ValuesCredentials]] and should that all be ok; then you're welcome to get involved via [[WebizenDiscord]]. 

## Introductions: Private (ACLd) Timelines

The app is designed to provide support for public and private timelines. Users must be authorised to view private and privileged assets.

## Considerations & Inspiration.

There are many different examples, however i am electing to make some that relate to some of the challenges that effect me personally.  The sorts of circumstances illustrated below exemplify the importance of the [[SafetyProtocols]] that are not presently otherwise in place.  Whilst people have a right to privacy, theoritically, the reality is that a persons privacy is in-fact less important than their right to life.  sadly [[SocialAttackVectors]] are employed by persons who believe themselves to be impervious to consequence, at least in relation to the lawful kind; and this in-turn shapes who they are as individuals.  such people are not expected to be either part of this project nor equipped to meaningfully be equipped to agree and bind themselves to the obligations set-out by the [[ValuesCredentials]] and in-turn [[WebizenTerms]] both now and into the future.  Nonetheless, to make it, there needs to be some sort of illustration about how and why, and i think [[BestEfforts]] towards [[FitForPurpose]] tech, now requires a bit more humility than i think otherwise dignified.  yet, the upside is hopefully a better outcome; and in-turn, a situation where far fewer people in future; learn to understand the problems all too many know all too well today.

![[temporaldynamics.jpg]]

As such; The two main sources of inspiration for this project to get done ASAP are:

1. Health.
	I'm treated for ADHD, which requires me to provide a complex, sensitive and deeply personal history to medical practitioners that I am required to see as a consequence of the pharmaceutical prescription `tether` requirements by law.  
	
	I find the process of collecting all of the information needed somewhat traumatic, as I have to re:process all of the difficult past events that I've somehow managed to survive.  It is also the case that the medical professional seeking this information finds the volume of information overwhelming when sent via email; as such, they often fail to read materials which can result in negative `unintended consequences` that may in-turn act to engender more `trauma`.

So, I'd prefer to provide them an interface and they can go through it; or if they do not, they were will afforded the opportunity to do so, via better, naturalised interface.

2. Privacy Law
	As noted (ie: [[GuideForDevelopers]]) I've experienced enough trauma to have a comprehensive understanding of accumulative trauma; and I don't have a very high opinion of all too many people who work in the public sector, even though the experience has helped me define & comprehend the various [[SocialAttackVectors]] and in-turn the importance of producing [[SafetyProtocols]] particularly given the failure of others to do so at any stage in the past (priorities?); therein and as such, the consequences of the actions / negligence of some, have led to serious injury.  
	
	I am also aware that the public sector is not the only sector that has a tendency to act in a manner that is not in the best interests of the public.  
	
	So, I'd like to be able to provide a secure interface that allows me to provide privileged information to professionals who are required to have it, but who are not necessarily trustworthy, and who may be subject to the influence of others who are not trustworthy.  
	
	As a consequence of various actions, it is likely that privacy law requests need to be made of government to attend to issues that may otherwise cause enduring, continuing and in-effect escalating harms; as would essentially be a case of persons acting in reliance of false information, and then acting in a manner that is not appropriate or lawful.

A recent letter from the Attorney-General’s Department; states that, 

*under the Privacy Act individuals have a right to access their personal information that is held by the department. Individuals also have a right to request corrections to any personal information if they think that it is inaccurate, out-of-date, incomplete, irrelevant or misleading.*  

There are no formal requirements in the Privacy Act for access and correction requests.

the correspondence also stated;

*If you have a vulnerability that might require specific consideration please do not hesitate to include further information in your request in order for the department to best meet your particular needs.*

Therefore, if an app were produced to enable persons to clearly provide a catalogue of evidence relating to wrong-doings that have disaffected a person and caused them harm, then it would be possible to provide a clear and concise catalogue of evidence that could be used to support a request for access to personal information, and/or a request for correction of personal information.  Thereby ensuring that any failure to do so is a clear decision made by one or more persons who are gainfully employed by the government, and who are subject to the consequences of their actions for failing to attend to the matter in a timely manner via a court of law if not otherwise.

## Thoughts on: Implementation method

I am unsure whether and/or how to best implement this project atm. I am interested in using this project to either improve my skills with Golang or start my first python project; or indeed also, if there are others who get involved and help; and they have skills that are better in fields where i lack competency / experience / knowledge, then there may be more options.  The preference is to build systems that support the webizen stack; however, these sorts of projects may be required as a safety measure prior to otherwise being equipped to finish the project in some sort of useful way. 

IF there are serious breaches to the [[ValuesCredentials]] that threaten serious injury and/or death of persons; then these sorts of tools may be found to be invaluably important.

But I'm not really sure which way I'll go.  So, I'm going to add files for both languages, and then I'll decide which one I'll use.

I am also interested in seeing whether and/or how this project might be used to produce an app that may initially be compatible with solid; and then later be able to be adapted for use with the Webizen platform.  Perhaps the app might store the data on a solid server - but again - I'm not sure if this is a usefully positive approach, or whether I'll end-up building a Webizen based app.  

In the below information it makes reference to `foaf` which is based upon the concern that this may be importantly prioritised prior to the creation of the broader [[WebizenTechStack]] as to usefully employ it for clear communications of historical facts.

### RDF and JSON

I am also interested to see whether and/or how the app might use RDF ontology to describe the assets and the relationships between the assets, and then present json to the timeline app. This may be achieved through the use of frameworks such as

- [rdflib](https://rdflib.readthedocs.io/en/stable/)
- [rdfstore.js](https://github.com/antoniogarrote/rdfstore-js)

I am presently unsure of the best go version.

### User Interface  

The app should provide the following user interface features;

1. presents the timeline,
2. presents the assets and their relationships,
3. provides a list of tags and timeline graphs that can be loaded into the timeline interface by the user.

The app will be written in python, and will use the [Flask](https://flask.palletsprojects.com/en/1.1.x/) framework. The app will use the [TimelineJS](https://timeline.knightlab.com/) framework to present the timeline. The app will use the [rdflib](https://rdflib.readthedocs.io/en/stable/) framework to present the assets and their relationships. The app will use the [Bootstrap](https://getbootstrap.com/) framework to present the user interface.

The Timeline Maker should store the information about the files in a database and use WAC (web access control); in association with a user-table to define which users are able to access which records.

The Timeline Maker should be able to create a timeline from a list of assets. The user should be able to create a group of assets by defining a subject name; that is then able to be presented as a sub-timeline, within the timeline. The user should be able to select the assets to be included in the timeline, and they should automatically be added to a timeline in the temporal order in which the event relating to the asset occurred.

## Introduction re: TimelineJS

The app uses [KnightLab TimelineJS](https://timeline.knightlab.com/). The timeline is created by editing the `timeline.json` file in the `data` folder. The file is a JSON file, and the format is described in the [TimelineJS documentation](https://timeline.knightlab.com/docs/json-format.html).

### Folder Structure.

This is how the basics of the folder structure are presently setup.

- css: contains the CSS file for the development version of the app.
- js: contains the JavaScript files for the development version of the app.
- TimelineJS3-master: contains the TimelineJS repo files sourced from [GitHub](https://github.com/NUKnightLab/TimelineJS3).
- FacetedSearch: contains the faceted search files sourced from [GitHub](https://github.com/eikes/facetedsearch)
- data: contains test json and RDF files for the development version of the app.
- Notes: contains development notes relating to the creation / development of the app.

### Intended Applications

The app is intended to be used as a tool for creating timelines for use in providing privileged briefings to professionals within the healthcare, government and legal sectors, to more easily communicate complex information required for fit and proper decision making. The app is intended to provide the timeline and any related protected assets in a single, secure, web-based application.  

## Dev Notes

### Functionality Requirements.

The app will require;

- A login to access the timeline and any protected assets.
- Logging of user activity, including the date and time of access, the user's IP address, and the user's login details.
- The Authentication should be via a OIDC Account.
- An agreement form to be completed by the user before they can access the timeline. The user should be sent a copy of the agreement form by email.
- An ability to present private, sensitive, confidential and protected PDF files and other protected assets in a secure manner.
- An ability to present the timeline in a secure manner.
- The timeline should also support the ability for the user to select one or more specific tags, and then the timeline should only display the assets that have been tagged with the selected tags.

### Notification and interactivity.

It would be good if the app could create a notification when the timeline is accessed, and if the app could provide a means for owner of the timeline to provide feedback to the user of the timeline via an online chat facility. I will call this facility an attendant.

#### Attendant Functionality..

The purpose of the attendant is to provide the notifications of the use of the timeline to the owner of the timeline, and then provide an ability for the user of the timeline to engage in a chat with the owner of the timeline, as may be required to provide feedback to the user of the timeline about any questions they may have about the contents of the timeline.

The attendant should be able to;

- Initiate and send a notification in the form of a chat message to the owner of the timeline when a user initiates the use of the timeline. This notification should provide the users IP address and login details.

- Provide a means for the owner of the timeline to provide feedback to the user of the timeline via an online chat facility.
  
### Timeline Maker

A timeline maker is required to create the timeline. The timeline maker has two primary components.

### Asset Manager

The asset manager is essentially the [[HyperMediaLibrary]], and is described more via that note.  The asset manager / library, is required to manage the assets that are to be included in the timeline. The asset manager provides a form to provide the data for adding a new asset to the asset manager.

When adding a new asset, the asset manager should be able to extract the metadata from the asset, and provide the metadata in the form for the user to review and edit. The asset manager should be able to extract the metadata from the following asset types;

- PDF
- image
- video
- audio
- email
- embedded video (URL)
- embedded audio (URL)
- embedded image (URL)
- embedded webpage (URL)
- a timeline (URL)

- The user should be able to assign tags to the assets, and the user should be able to search for assets by tag.

- Once an asset has been created, it should be presented in a list of assets, and the user should be able to select the assets to be included in one or more timelines.

### Timeline Maker

The timeline maker provides a form to provide the data for adding a new timeline asset to a timeline. Once a timeline asset has been created, it can be added to a timeline package.

The timeline maker should be able to extract the metadata from the timeline asset, and provide the metadata in the form for the user to review and edit. The timeline maker should be able to extract the metadata from the following timeline asset types;

- The timeline maker to create the timeline.
- The timeline maker should be able to create a timeline from a list of assets.
- The user should be able to create a group of assets by defining a subject name; that is then able to be presented as a sub-timeline, within the timeline.
- The user should be able to select the assets to be included in the timeline, and they should automatically be added to the timeline in the temporal order in which the event relating to the asset occurred.
- The user should be able to define tags and groups tags for the timeline.

#### Topic Groups and Semantic relationships

Often in the lives of people, there are events that are related to each other, but they are not necessarily sequential. For example, a person may have a number of children, and each child may have a number of events that occur in their lives. The events in the lives of the children are not necessarily sequential, but they are related to each other.  

In another example; a person may suffer a number of injuries, and each injury may have a number of events that occur in their lives. The events in the lives of the injuries are not necessarily sequential, but they are related to each other.

For example; a person may have been a victim of wrong-doing, and they may have reported it to the appropriate authority. However the authority may have failed to act on the report, and the person may have suffered a number of injuries as a result of the wrong-doing. It may later be found that the persons claims were true, after the person had suffered various injuries and/or continued wrong-doing.  The ability to better understand the evidence of the wrong-doing, and the injuries that the person has suffered, and the relationship between the two, is important for the person to be able to make a decision about how to intepret the evidence, and how to make a decision about the nature of the circumstance given the benefit of the evidence as collected overtime.  It is often the case in circumstances that the burden of lawful conduct does not adequately address the nature or circumstances of injury until long after the injury has occurred.  These types of temporal problems are importantly considered as to understand the nature of a circumstance and in-turn form a comprehensible basis for acclimating a common-sense understanding of what has in-fact occurred.

The timeline maker should be able to create a timeline that includes a number of sub-timelines, and the sub-timelines should be able to be presented in a number of different ways. The sub-timelines should be able to be presented as;

- A list of sub-timelines.
- An ability to define one or more topics that are related to each other, and then the sub-timelines should be presented as a group of sub-timelines that are related to each other.

Generating the Timeline Package;

- The timeline maker should be able to generate a timeline package from the timeline. The timeline package should include any local files and the JSON file that can be used to generate the timeline.
- the timeline owner will then be able to upload the timeline package to the timeline app.

### Timeline Administration

- The Timeline Owner should be able to define which email addresses are allowed to access the timeline.
- The system should be able to send an email to the email addresses defined by the timeline owner, that contains a secure link to the timeline.
- The timeline owners should be able to define which tags are available for the user of the timeline.
- The timeline owner should be able to define which groups of tags are available for the user of the timeline.
- The timeline owner should be able to define which assets are available for the user of the timeline.
- The timeline owner should be able to define an expiry date that declares when the timeline is no longer available to the user.
- The timeline owner should be able to define which geo-locations defined user are able to access the timeline from.
- The Timeline Owner should be able to define which tags are available for the user of the timeline app.
- The timeline owners should be able to define public and private tags for the timeline.
- THe timeline owner should be able to define a public timeline url that can be used to provide access to publicly available timelines and assets.

### Server Requirements

- The server should be able to host the timeline app.
- The server should be able to host the timeline maker app.
- The server should be able to host the attendant app.
- The server should be able to perform geo-location of the user
- The server should be able to send email notifications to the timeline owner.
- The email notifications should be sent to the email addresses defined by the timeline owner.
- The email notification should contain a secure link to the timeline.

### Confidentiality Functionality

An authorised user may seek permission to access or seek approval to share a confidential timeline with a nominated person. The timeline owner will be notified of the request, and will be able to approve or reject the request. If the request is approved, the timeline owner will be able to provide feedback to the user via the attendant.  

If the request relates to sharing the timeline with a nominated person, the timeline owner will be able to approve or reject the request. If the request is approved, the requested user will be required to complete an agreement form before they can access the timeline. The timeline owner will be able to provide feedback to the user via the attendant.


## Timeline App

This file describes the front-end timeline app. 

The timeline app is the end-user interface for consuming a timeline. A timeline may be public, and therefore only able to provide information that has a public ACL permission, or it may be private, and therefore only able to provide information that has a private ACL permission. The timeline app will use the ACLs that are defined in the asset manager to determine which assets are available to which users. The ACLs determine which assets are able to be presented to which users via the timeline interface. The same timeline may not present the same assets to different users.  The FOAF data that is stored in the asset manager is used to determine which users are able to access which assets, that are then associated with the ACL information that is stored in the asset manager.

### App UI

The app has a number of different sections.  The sections are:

- Header: the header has basic info like login/log-out, and the name of the app.

- Timeline: the main presentation of the timeline.

- Toolbox: The toolbox is collapsible (like a menu). When expanded, the toolbox contains the search functions; including, faceted, tag, topic, time-span (start/end date) and entity/keyword search tools.

- FileViewer: The file viewer is collapsible and is presented when a user clicks on a PDF asset. The file viewer is used to present the PDF asset to the user. The Viewer is a PDF.js viewer and is able to prevent the user from downloading or printing the file. The file viewer is also able to present the file in a full-screen mode.

- The Attendant: The attendant provides a chat interface where the timeline owner is able to chat with the timeline user.  This feature uses web-sockets. The attendant is collapsible and is presented when the user clicks on the attendant icon in the toolbox, or if the timeline owner initiates a chat.

The timeline app will be produced using HTML/JS/CSS. The Javascript libraries that will be used are:

- [TimelineJS](https://timeline.knightlab.com/)
- [PDF.js](https://mozilla.github.io/pdf.js/)
- [jQuery](https://jquery.com/)
- [Bootstrap](https://getbootstrap.com/)
- [FontAwesome](https://fontawesome.com/)
- [Google Chat API](https://developers.google.com/chat/concepts/apps)
- [facetedsearch.js](/facetedsearch/README.md)
  
### RDF 2 JSON

The app requires a means to generate a json based interface for the UI to consume. The RDF data that is stored in the asset manager is used in conjunction with the user ACL information, to generate the json data that is used by the UI.

The RDF data is converted to json somehow.

The RDF library that is used for the asset manager may be able to be used for this purpose.  Another option is to produce a [RDF2JSON](/rdf2json/README.md) library, or perhaps a schema needs to be defined in the rdf2json folder in-order for the RDF library used in the asset manager to be able to generate the json data that is required by the UIs.

#### JS Libraries being explored...

- [Google Maps API](https://developers.google.com/maps/documentation/javascript/tutorial)

- [Google Charts API](https://developers.google.com/chart/interactive/docs/quick_start)

- [tagsearch.js](/tagsearch/README.md)

### Timeline Maker

The timeline maker is an app that is part of the [asset manager](../assetmanager/AssetManager.md) that is used to create timelines from RDF data. The Timeline Maker allows the user to manage timelines that are created through the use of the assets stored in the [asset manager](assetmanager.md) library and to create timelines from those assets.  

## Timeline Maker Functions.

The user can create a timeline from the assets that are stored in the asset manager. The user can either select specific assets, or they can select a group of assets that are stored in the asset manager by defining a topic, tag or other asset attribute. The user can also create a timeline from a URL that contains RDF data that is compatible with the timeline maker.

### ACLs

The timeline maker will use the ACLs that are defined in the asset manager to determine which assets are available to which users. The timeline maker can also be used to define ACLs that are stored in the asset manager.  The ACLs determine which assets are able to be presented to which users via the timeline interface. The same timeline may not present the same assets to different users.  The FOAF data that is stored in the asset manager is used to determine which users are able to access which assets, that are then associated with the ACL information that is stored in the asset manager.

### Timeline Maker Data

The timeline maker data is stored in the asset manager. The timeline maker data is stored in the asset manager as a timeline asset. The timeline asset contains the following data:

- Timeline Name
- Timeline Description
- Timeline Creator
- Timeline Creation Date
- Timeline Last Modified Date
- Timeline Assets
- Timeline ACLs
- Timeline RDF Data
- Timeline RDF Data Type
- Timeline RDF Data URL
- Timeline RDF Data Last Modified Date
- Timeline RDF Data Creator
- Timeline RDF Data Description
- Timeline RDF Data ACLs
- Timeline RDF Data Tags
- Timeline RDF Data Topics
- Timeline RDF Data Keywords

The timeline should have fields to define a 'story'.  A 'story' is a narrative or topic or series of events relating to a particular subject or entity.  Each story has a start date that may be known, unknown or estimated. Some stories will have an end-date, others may not.  Stories will enumerate event dates via the use of the timeline assets.  

The timeline maker should have the following fields to define a story;

- Story Name
- story topic
- Story subject
- Story Description
- Story type
- Story start date
- Story Start Date Type
- Story Event (link to Library Asset)

Stories should also add additional information by enumerating the additional information that is stored in the asset files that are linked to the Asset. This would include; tags, topics, subjects, keywords, etc.  

The Webpage presenting the timeline will also provide below the timeline presentation, the ability to use faceted search to be presented with a list of timelines and asset classifications that can be selected or deselected to filter the timeline presentation, or to be presented with a different timeline presentation. More information is available in the [Timeline App](../server/timelineapp.md) documentation.

### Timeline Maker JSON data

The Timeline json file information requires the information about the user before generating the JSON datafile required to create the timeline. The user information is stored in the user.json file. The user information is stored in the user.json file as a json file. The user.json file contains the following data:

- User Name
- FOAF Data URI
- Timestamp
- IP Address
- Start Date
- Start Time (AEST)
- End Date
- End Time (AEST)

### Associative Inferencing

In the temporal brower, need to define harm metrics, IE; when a person is harmed for having made a statement found later to be true.. or the opposite.  This is a [[WebScience]] activity that requires the ontological structures to be somewhat defined...

