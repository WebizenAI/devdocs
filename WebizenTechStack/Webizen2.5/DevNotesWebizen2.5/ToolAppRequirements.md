
There's some info about the app requirements in the [[WebizenApps]] folder, particularly within the [[Webizen3.0Apps]] folder therein; and in-turn, the [[WebizenInterfaces]] notes.

This is being drafted to better address the tooling components that are considered desirable.  Foundationally, there's a bunch of utility like apps that are desirable, and expected to both help to support the comprehension of shape (other than simply looking at the code itself) and in-turn also support accelerated development.

In-turn also, there's a bunch of underlying components libraries that will become part of the requirements to make the basics work; which should in-turn provide those capabilities to the development environment.  In-effect, consider this to be moreover about the construction kit.  

The below list isn't necessarily in-order.  part of the process of considerations being made by writing this note; is to in-turn work through the construction logic.

## Priorities & process

There are competing priorities and factors relating to incentive models or modals that have both; competing interests and in-turn also, implications.  It is most desirable for most persons to focus on contructing the business models / financial systems / investment stuff first - setting aside all other priorities; this would mean developing the systems to support the work project app and related stuff prior to defining the systems that are required to protect human agency; whilst most say 'oh, we'll get to that later', in my experience (20+ years) that's never actually happened; and they're never accountable for the consequences, rather - retreating into the [[SocialAttackVectors]] and in-turn inciting others to do so in a manner that goes against the [[ValuesCredentials]] and in-turn also the ability to produce the [[SafetyProtocols]].  So, whilst it is absolutely discouraged (which is why it doesn't otherwise exists); the first requirement is to set-up the systems needed to support human agency / personhood / the personal webizen agent; and then in-turn, the ability to support the means for people to make agreements with one another, as is thereby empowered through that foundational software application / ecosystem foundations.   Yet a problem is, that unless i'm doing it all myself (which may end-up being the case, or it may not, idk.  i've tried to provide something for others via the [[GuideForDevelopers]] and in-turn the production and publication of these works online - notwithstanding the licensing notes expressly made) that there needs to be work done to produce the basic foundations, prior to the basic foundations being in place; and in-turn, the ability to then construct the economic / business / financial / [[KnowledgeWork]] related systems that are in-turn built to depend upon the [[HumanCentricDigitalIdentity]] related systems (inc. [[HumanCentricOntology]] & [[HumanCentricAI]] / [[Webizen]]).  I have also observed the reality that many are seemingly 'programmed' to engage in violence / [[SocialAttackVectors]] & it seems they get off on it.

in anycase; for those who are interested in progressing the webizen environment in a manner that retains integrity, 

below are some notes about the tooling thought needed and some info about 'why'.

## Building the foundational AI processes

The thinking is that the [[TheWebizenAgent]] may best require the development of some basic AI models that act to support foundational tasks.  One of these tasks is to formulate the ontology frameworks, in a manner that is structurally designed to better support natural language inferencing.  This is expected to become a foundational concept and utility.  This in-turn becomes an instrumental component that is used to structure the databases; both, the personal database and in-turn also, support the [[PCTOntologyModelling]] requirements.

The problem becomes a circumstance where there is a need to produce a tool that can be used to support the process of building a more comprehensive vocabulary model. It is thought that the way to achieve this is via the creation of an ontology creation tool; that may in-turn employ a vocabulary model; that is then able to be structured.

There are various corralations between the concept of ontology and vocabulary. Some notes about the resources have been made [[TrainedLanguageModel]]. 

Therein; One of the first objectives is to have a tool that helps to create / model these top-level ontologies; this is thought of as an ontology modelling tool.  

### The Ontology Tool.

The Ontology Modelling tool; would have an interface to some sort of natural language library.  Whilst some notes are made in the [[TrainedLanguageModel]] note; one of the simplest examples found is the [WordsAPI](https://www.wordsapi.com/) which is simply generating json outputs (not RDF).  The general idea is that there would be a search interface; to pull a graph relating to that a word or phrase that is intended to be employed in the ontology model. 

The graph relating to that word would be displayed in a DIV.  The interface would provide a means for 'breadcrumbs' (or tabs) to be created, if the user then selects new terms, exploring - what is essentially a vocabulary dictionary.  

This then relates to an application of the form app; which is thought to have a multitude of applications that have many similarities; this is described broadly in the form app tool page/section.

The form needs to be given a name; and the basic properties need to be defined, this would include the name of the author, a description and perhaps also any RDF prefixes.

Then the user is able to select (perhaps drag/drop) a term that they have obtained via the search interface; and use it to create a field. 

The field then needs to defined as a class, sub-class (ie: UI would ideally 'nest' sub-classes) or indeed also property and expected datatype; alongside other RDF related concepts / structures...

#### Ontology sub-graph
As the user defines an ontology via the use of this form; the vocabulary model that was produced in relation to the construct of the vocabulary, is thought usefully acquired; as to support future training models.  The ontology produced in the form itself effectively becoming something that can be used as a graph. 

### The App Builder UX

There's an array of WYSIWYG 'app builder' platforms and solutions.  Whilst the implementation may be different; current considerations are that the form builder app, may well be better defined as part of the app builder project and/or a sub-project of it. 

It is thought to be important to ensure that this app runs locally; the concern being, that it is not desirable for apps to be provided the personal information from Webizen DBs. 

The main useful purpose of this would be to create different 'views' or pages, that support the presentation of information stored in the webizen environment in different ways; yet the broader opportunity structure for where this might go, is not exhaustively considered.  

In future; it would also be 'good' if it was able to,
1. Compile an app for distribution.
2. Ingest UI toolkits (components) to apply the styling to an app based on those components. 

in the short-term, the thing that's sought to be done more urgently is to create a form builder app. 

### Form Builder App

Form based apps are needed to create ontologies and related apps and systems; so, it kinda makes more sense to build a form-builder app that can be easily set-up to be applied to different senarios. 

1. Constructing the Ontologies.
2. Adding information into the Asset Library
3. The Personal Profile Systems
4. The Work Project

When a user adds a resource via a form; its expected that it'll need to be processed prior to being added to the system.  this is expected to require parsers that include, but are not limited to, 

- RDF Processing
- URL Processing (inc. RDF processing)
- PDF Processing
- API Processing
- Image Processing
- Video Processing 
- Audio - Processing

In the openlink virtuoso systems, these sorts of things are somewhat defined as 'cartridges', notwithstanding the existance of different names / methodologies in other systems, etc. 

### Values Credentials

The values credentials are instrumental for forming relationships between agents.  the sentiments and some description is provided in the note about [[TheValuesProject]]. 

Essentially, these instruments are employed to act as a governance tool in association to relationships between agents, legal entities, etc.   They are not intended to necessarily be static; but they are intended to be defined by the parties involved in forming the (semantic) relationship, and the terms (contract law, etc.) are intended to apply for the period in which the agreement (the credential) is intended to apply.   These instruments will change during the course of a relationship; a simple example is a circumstance where two people form a friendship, then a intimate relationship, then end that intimate relationship and form some other type of consequential relationship even if it describes that there is no longer a relationship between the parties, etc.  

These instruments are defined ontologically; and then in-turn supported via crypgrophy, which are in-turn employed for defining sharing permissions between agents / systems.

## The Webizen Agent.

The webizen agent is amongst the top priorities.  It stores the personal information that is not shared with others; and its systems are designed to protectively process queries that require both personal (private) information as well as shared (permissive commons) information, in-order to generate 'views' that are thereby presented via apps. 

## Directory Tool

its hard to define the proper name for this thing - that'll be resolved at some stage in the future; but basically, it incorporates functionality relating to a social graph, a device and credentials graph / store, etc.

It has functions that are like an addressbook; but it doesn't contain only people or legal entities that a person has the same sort of relationship with, as is otherwise assumed in the context of a social network or traditional address book.  If a person has read the works of a persons efforts, then their details are added to the directory.

There is also the information about credentials, entities and instruments. 

### Library

The Library system is fairly important; its effectively a digital asset management environment; although, there's an array of nuances, including the concept of [[HyperMediaLibrary]] factors alongside semantic factors.  

## The Timeline Interface

The timeline interface is considered to be a priority.  It requires the library project to be produced and in-turn also the asset management systems; but is then intended to support various [[SafetyProtocols]] and in-turn also, radically improve productivity. 

## Systems management interfaces

There are a few different levels, and i'm unsure of the [[nomenclature]] for it at this point.  

There's a vault - a few notes made: [[DataStoreVaultNotes]] - but basically, this contains stuff that is entirely personal; and is in-turn considered to be part of what is owned by the webizen owner (the specific webizen / robot - owned by the person).  This is foundationally required to thereafter support social systems via [[PermissiveCommonsTech]] and more broadly otherwise; but that some of the information in this vault is not shared with any foreign agent; although, derivatives may be employed.  for example, the ability to use biometric / life-log info, to validate whether or not media is synethic or a true representation of historical events, etc.  

There's also sub-systems which are required to provide the 'drivers' needed by other packages.  This may include libraries like OpenCV, Python, PDF parsing libraries, etc.

Then there's 'ai models'; whilst the method is about uploading new capabilities into your webizen rather than into your head directly, the matrix provides a good illustration.

<iframe width="560" height="315" src="https://www.youtube.com/embed/w_8NsPQBdV0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Therein; not all webizen owners will have the computational capabilities to train or run these models entirely independently.  This is where some of the directory / community and security systems, seek to provide services infrastructure to support users in a manner that takes into consideration the costs, requiements and options provided.

The systems are intended to work in a federated manner; effectively providing users with their own personal AI clouds; as such, whilst a process may not be able to be done on a users current device (ie: a mobile phone) it may be able to perform the action locally via another one of their devices that they've set-up on their webizen network.

There needs to be a management interface to manage how these systems are made to work. 

### Permissive Commons Tooling

The systems are designed to support an array of temporal considerations.  Therein, when an asset is stored in the library; then a hypermedia package is created for that item (nb: [[hypermedia-packages]] ); and it is desirable that this is not continually done independently by all users for the same asset, rather, that the version of whatever asset it is that is being stored, ends-up being a permissive commons - hypermedia asset; that is able to be shared between the people who have the right to access it. 

