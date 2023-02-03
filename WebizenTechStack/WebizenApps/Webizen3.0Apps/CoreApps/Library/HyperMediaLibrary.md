# HyperMedia Library

## HyperMedia Library Modelling

The HyperMedia Library project; seeks to produce a semantic parser that supports various entity and ‘metadata’ graph capabilities to be packaged with a hypermedia library asset.  
  
This functionality is in many ways complimentary to the media library related processes, as required for various purposes; including the social use case, alongside live communications and many others.  The ‘hypermedia library’ starts to render support for future ‘permissive commons’ use cases; whereby some of the challenges will include, figuring out how to best deal with various forms of copyrighted materials, etc.  Overtime, the belief is; that authors will make use of webizen systems to radically improve how it is they publish content online.

1.  Process media & metadata
    
2.  Support the ability to create ‘social’ ‘annotations’ (RDF) and/or derivative works that are linked with existing ‘hyper-media’ library assets. 
    
3.  The ability to provide a ‘side-by-side’ interface, enabling persons to review an existing material object, whilst referring back to it - in a new document; linking both visually in the production lifecycle; and in-turn, providing means to review references, in the consumption lifecycle.   

### Concept

So; need some sort of document modelling system that is supported in a few ways via (RDF based) data-services and an innovatively designed UI/UX.  

#### Issue Statement.

1.  I have a library of PDFs (public) but they often don’t fit ‘neatly’ into one category alone. This could be resolved via semantic tagging, that could be achieved via systems of various levels of sophistication.

	1.  The ability to tag a document (entire file) as being related to a list of categories / topics. 
    
	2.  The ability to tag / annotate a paragraph, chapter or section of a document to relate to particular topics / concepts.
    

2.  Often, I’m looking to copy/paste and/or get references to papers going on about the same thing I’m writing about.  There’s presently - not very good ways to achieve this process, easily.
    
	1.  The ability to automatically support bibliographical additions; and, linkages between particular elements to the originating document, so that they’re able to be reviewed side-by-side to the created document
    

3.  Ideally, there’d be a ‘split screen’ process (at least) that allows a person to review an existing article of some type and then link concepts into a new document being produced.  
    
	1.  This may be annotations but it may also be sorta - reverse annotations - where the look-up - is about seeking supportive underlying prior-works - to support claims being made in a new document.
    

7.  Ideally also - the ability to analyse what’s ‘new’ content vs. what’s a ‘new publication’ of an ‘old work’ could be transparently provided, in some way - save some circumstances where it may be done in a permissive way (ie: clearances / classifications - relating to a series of statements that form a ‘knowledge cloud’ that’s coupled, for coherence purposes...).
    
8.  The ability to see both the temporal development of a document, and also the contributors to that document; alongside any discussion linked with the document's evolution. 
    

	1.  This would in-turn also support the ability to inspect information about the contributors - subject to permissions, etc. 
    

10.  The ability to create the aforementioned ‘knowledge clouds’ about particular subjects. 
    

#### Requirements

We need an ability to use AI in connection with cataloguing human knowledge in a manner that is supportively additive rather than repetitive & disassociative.   

The challenge is in-turn about seeking to form a method that identifies intentional plagiarism rather than accidental or entirely unknown acts of duplication.  

These end indices have different sorts of sentiment analysis outcomes.  Using ‘Human Centric’ Methodologies, decisions should always be made by natural persons or a group of natural persons; not otherwise.  

This means the systems need to present the evidence for persons to review and consider in-order to make a decision on the subject / topic presented to them.  

The ability and form of determination may change overtime, based on the information available to those involved in making a determination.

## Asset Manager.

The asset manager is an application that provides a way to manage assets.  The asset manager has pages that allow the user to create, edit, and delete assets. The asset manager also provides the ability for the asset library owner to manage permissions relating to the use and accessibility of the assets.  Permissions can be set based on specified tags or specified users / identifiers.   

The asset manager is a web application that is used to manage the assets that are available to the asset library.  The asset manager is used to create, edit, and delete assets.  The asset manager also provides the ability for the asset library owner to manage permissions relating to the use and accessibility of the assets.  Permissions can be set based on specified tags or specified users / identifiers.

The Asset Library structures the management of assets in a manner that can be navigated by selecting different tags.  The navigation of assets uses faceted search based on the tags that are created when the user created / added the asset.

Both the `../facetedsearch/facetedsearch.js` and `../timelines.js` libraries require json to function. both are used to provide the functionality of the asset manager, however the objective is to natively store the information using RDF and then use the `../rdf/rdf.js` library to convert the RDF to an appropriate json format.  The Asset manager should be able to select which RDF data it wants to use to create the json data that is used by the `../facetedsearch/facetedsearch.js` and `../timelines.js` libraries.

## Timeline Fields.

Presently, the primary interface for this app is intended to be the [[Timeline Interface]]. The fields for the timeline library are as follows:

- [ ] Title: The title of the timeline.
- [ ] Timeline Event Fields:
  - [ ] Year  
  - [ ] Month
  - [ ] Day Time  
  - [ ] End Year  
  - [ ] End Month
  - [ ] End Day
  - [ ] End Time  
  - [ ] Display Date: is the date the event is displayed on the timeline.
  - [ ] Headline: Is the title of the event.  
  - [ ] Text: Is the description of the event.  
  - [ ] Media: Is the media that is associated with the event. This can be a URI to a web page, a URI to a PDF, a URI to an image, a URI to a video, a URI to an audio file, or a URI to a timeline.  
  - [ ] Media Credit: Is the credit for the media that is associated with the event.  
  - [ ] Media Caption: Is the caption for the media that is associated with the event.  
  - [ ] Media Thumbnail: Is the thumbnail for the media that is associated with the event.
  - [ ] Type: Is the type of event.
  - [ ] Group: Is the group that the event belongs to.  
  - [ ] Background: Is the background for the event which can be a colour or an image.

## Asset Manager New Record Form and form functions.

### Creating a new Asset

There are a variety of different types of assets that the library can contain.  The following types of assets are available:

- [ ] Web Assets
- [ ] PDFs
- [ ] Images
- [ ] Video Files
- [ ] Audio Files
- [ ] Timeline Assets

The user should select which type of asset they want to create, and then the form should change to reflect the type of asset that they want to create. Alternatively, the user should be able to drag/drop the asset into the form, and the form should change to reflect the type of asset that they want to create.  

#### Creating a new Web Asset.

When a user either selects to create a new web-asset or they drag/drop a Web URI into the form, the form should change to reflect the type of asset that they want to create. The app should then parse the web page that is associated with the web-asset, and then use the RDF data that is available on the page to populate the form.  The user should be able to edit the data that is available on the form, change any information that may be incorrect, add information that may be missing, add tags and then save the data to the asset library in an RDF format.  The RDF file should also contain the information required by `../timelines.js` libraries to provide the functionality of the asset library.  The decision about which RDF fields should be mapped to which json fields for timeline.js should be define by the user via a drop-down box that allows the user to select which fields.  All RDF fields should be mapped to json fields for use by the `../facetedsearch/facetedsearch.js` library.

The minimum fields that should be available for a web-asset are as follows:

- date
- headline
- text

- media: This should be a URI to the web page that is associated with the web-asset.

- media credit: this should be the information about the website that is associated with the web-asset. There are two types of information that should be available:

  - [ ] The name of the website that is associated with the web-asset.
  - [ ] The name associated with the URL of the website that is associated with the web-asset.

- media thumbnail: this should be a thumbnail associated with the website or the web-asset.  The thumbnail should be the first image that is available on the web-asset.


Library Fields that should be produced for the web-asset in the library are as follows:

- [ ] Title: The title of the web-asset.
- [ ] Source: The source of the web-asset.
- [ ] Date Added to Library: The date that the web-asset was added to the library.
- [ ] Tags: The tags that are associated with the web-asset.
- [ ] Graph: A graph can be generated about the web-asset.  The graph should be able to be defined using RDF fields. The graph should be able to add information about the context of the web-asset.  it may include information about the people that are associated with the web-asset, the places that are associated with the web-asset, the events that are associated with the web-asset, the things that are associated with the web-asset, and the time that is associated with the web-asset and any public, private or permissioned topics that are associated with the web-asset. The graph should be able to be defined using RDF fields.
- [ ] Notes: The notes section provides the ability for the user to define notes about the web-asset. The notes should be able to be defined using RDF fields, and should be able to be associated with different ACL groups or individuals.
- [ ] Relations: the relations section provides the ability for the user to define relations about the web-asset. The relations should be able to be defined using RDF fields, and should be able to be associated with different ACL groups or individuals.
- [ ] ACL: The access control list that is associated with the web-asset. The ACL should be able to be set based on tags or based on users / identifiers or both.

Web Assets should include the ability to add specified assets from Youtube, Twitter, soundcloud, and other social media sites.  The user should be able to add the URI to the asset that they want to add to the web-asset.  The app should then parse the URI and add the appropriate information to the web-asset.

#### Other assets

Other assets need to be processed to become library web-assets. Once the asset has been processed from its original format to a web-asset, the web-asset should be added to the library.  The web-asset should be able to be edited and the information should be able to be updated in the library following the same process as above.  

##### Creating a new PDF Asset.

- The user should be able provide a PDF File via the following means;
  - Add a link to a PDF Asset and the app should download the PDF Asset.
  - drag/drop a PDF file into the form and the app should upload the asset.
  - Use a button on the form to select a PDF file from the local file system and the app should upload the asset.

The form should change to reflect the type of asset that they want to create. The app should then parse the PDF file and and provide the information in the form that is associated with the PDF-asset and generate an [filename].ttl and [filename].acl file.

The user should be able to edit the data that is available on the form, change any information that may be incorrect, add information that may be missing, add tags and then save the asset and the data about the asset library in an RDF format.  

##### Media Files.

Other types of assets are similar to the above. Acceptable asset types include;  

- [ ] Images
- [ ] Video Files
- [ ] Audio Files

#### Email Assets

Email Assets should be able to be created from the Asset Manager.  The user should be able to create an email asset from an email that is in their inbox.  The user should be able to select the email that they want to create an asset from, and then the app should parse the email and create the asset.  The user should be able to edit the data that is available on the form, change any information that may be incorrect, add information that may be missing, add tags and then save the asset as a PDF and store the data and ACL files in the same way as above for web-assets.

When an Email Asset is created, a FOAF record should be created in the library for the persons that are in the email to, from and cc fields. The FOAF record should contain the following information:

- [ ] Name
- [ ] email
- [ ] Other:  The other field should contain the information that is available in the FOAF records that are able to be associated with the email address.  The other field should be able to be edited by the user, and any records in the library that are associated with the FOAF records identifiers are then able to be presented via the faceted search interface.

##### Persons and Organizations

FOAF records should be created in the library for persons and organisations and the temporal relationship between any persons and organisations should be able to be defined.  The temporal relationship should be able to be defined using the following fields:

- [ ] Role
- [ ] Start Date
- [ ] End Date

The Records for persons should be able to be defined using the following fields:

- [ ] Name
- [ ] Email
- [ ] Location
- [ ] Organisations: This should provide an ability to add organisations that are or have been associated with the person.The organisations should be able to be defined using an internal URI that describes the organisation. This is then presented in relation to the person using the following fields:

  - [ ] Name
  - [ ] Role
  - [ ] Start Date
  - [ ] End Date
- [ ] Linked In
- [ ] Facebook
- [ ] Twitter
- [ ] Other: The other field should contain the information that is available in the FOAF records that are able to be associated with the email address.  The other field should be able to be edited by the user, and any records in the library that are associated with the FOAF records identifiers are then able to be presented via the faceted search interface.

The Records for organisations should be able to be defined using the following fields:

- [ ] Name
- [ ] Entity Type
- [ ] Entity Registration Number
- [ ] Entity Tax Number
- [ ] Location Information: the location information should provide an ability to add the following information about the location history of the organisation, there may be more than one location associated with the organisation.
  - [ ] Address
  - [ ] State
  - [ ] Country
  - [ ] Start Date
  - [ ] End Date (or current)
- [ ] Entity Type: The entity type should be able to be defined using the following fields:
  - [ ] Company
  - [ ] Government
  - [ ] NGO
  - [ ] Other
- [ ] Industry / Primary Activity: what the organisation does.

When information about an entity is added to the library, web-based resources may be used to populate the information about the entity. The app should be able to process any RDF related to the web-link and provide the option for that information to be added to the database via the form. Once the record has been created, the app should be able to search the library for any other entities that are associated with the entity that is being added.  The app should then be able to present the user with a list of entities that are associated with the entity that is being added.  The user should be able to select the entities that are associated with the entity that is being added.  The app should then be able to add the temporal relationship between the entities that are associated with the entity that is being added.  The temporal relationship should be able to be defined using the following fields:

- [ ] Role
- [ ] Link Type
- [ ] Link Description
- [ ] Link URI
- [ ] Link Start Date
- [ ] Link End Date
- [ ] Link Status
- [ ] Link Status Date

#### Library Browser

The library browser should be able to be used to browse the library.  The library browser should be able to be used to browse the library using the following methods:

- [ ] Faceted Search
- [ ] Keyword Search
- [ ] Tag Search
- [ ] ACL Search
- [ ] Topic Search
- [ ] Timeline Search

The user should be able to select an asset and the modify the asset in the form that is associated with the asset type.  The user should be able to edit the data that is available on the form, change any information that may be incorrect, add information that may be missing, add tags and then save the asset and the data about the asset library in an RDF format.  

### Timeline Manager

Timelines are managed via the TimelineMaker. Information about the Timeline Maker is in the [Timeline Maker](TimelineMaker.md) document.