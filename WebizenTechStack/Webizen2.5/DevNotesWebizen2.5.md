
### Intro

DevOps is being curated via [[WebizenDiscord]] noting the basic method in which i've been able to define the [[WebizenTerms]] at this stage, given my inability to produce [[TheValuesProject]] in a way that delivers [[ValuesCredentials]] capabilities, yet.  

#### Resoures

I'm will working on better defining the structure for this stuff, but note in particular also the [[CoreApps]] described in the [[Webizen3.0Apps]] folder - i haven't made one for 2.5..

I have collected an array of [DataScience Docs](https://drive.google.com/drive/folders/18kpYSPz4yQMMn0IOfaPT7JyYD1wXEGMn) which may have useful info in it. 

### Objectives.

The fundamental objective is to get a 'hello world' structure up and running, that can then be used by people who have some level of expertise; therein - manual processes and [[Sacrifices-hardproblems]] that knowingly exist and are intended to be addressed, but not sorted out yet.  There are a number of [[CoreApps]] required to support [[UIToolKits]].

The Webizen 2.5 structure should provide the ability to operate a single webizen network; involving a single host (ie: webizen.au or linkeddata.com.au or webcivics.org; or webizen.org - i have a few domain names...) to support expansion of devops. 

In-turn, there needs to be a client stack that's built and able to run on Windows, OSX & Linux.   It would also be useful if there were some tools built, particularly to support knowledge management; such as via a plugin for chrome; and, perhaps also some vscode tools.  yet that's not all..!! but the objective first.

Firstly, it is vital to ensure that the build defines the identity structure in a manner that's [[FitForPurpose]] - at least, providing support for the minimal requirements.  IF this is not done to begin with; i've seen most projects fail to decentralise as they grow. 

This will require the development of ontologies, which is thought best done by developing a tool that provides a fairly easy means to do so.  The end goal of the 2.5 project; is that, We want to get the work platform operating; and this needs the [[TheValuesProject]] and in-turn [[TheWorkPlatform]] operating; which is the end goal.

Once this is done, further development is intended to be done within the software environment rather than via using external tools.  To get to that point, we'll need to get currencies operating (which requires the [[Curator]] build to be nominally working), alongside other parts.  Part of the deliverable will also be an App API; that provides some sort of defined interface (maybe json, but otherwise rdf based); that is thereby defined to interface with the local web-server (/db/query-endpoint, etc.).  this App API is intended to provide the means for future developers to easily package [[UIToolKits]] as webizen apps (therein - the note about devtools, etc.)

### NOTE: AI Capabilities 

It is important to note, that this stage of the development is NOT INTENDED to build-out the broader AI Capabilities that the webizen ecosystem is generally being designed to support.  These works are considered foundational requirements; to support the [[HumanCentricDigitalIdentity]] requirements; and then in-turn, act to address the [[SocialFactors]] in a manner that represents various undertakings of importance to support the [[ValuesCredentials]] related emboidment of what [[BestEfforts]] is intended to mean, in terms of seeking to ensure the emboidment of works is [[FitForPurpose]]. 

It appears likely, that the better way to build the [[AICapabilities]] is via ensuring a means for the main management systems to be made able to support the installation of AI packages that are likely to be most-often written in python.  As such, these 'extensions' or modules or whatever they'll be called - need to be have a management interface via the core & compiled Golang based runtimes.   It is also important to note, that the belief is that the vast majority of sophistocated AI packages; are likely to be operating on a linux built machine; perhaps also, support for OSX (Mx series processors); the Webizen Client should have definitions about what the device is and how it is able to process AI related functions, etc. Locally.  This should also require user-preferences.


### General Whinging.

The worst part of working to invent anything, is the dumb questions stage.  At this point, the 'idea' is not very well defined at all - not even communicated very well; and in-order to define a strategy to better describe the concept and in-turn figure out how to do it, what it needs to be able to do; what needs to occur in-order to create something that addresses the problems the 'idea' is trying to form a solution about; whilst learning about how something might be done, this entire process involves alot of dumb questions.  And; as a consequence of doing the work to 'invent' something new - no-one understands what you're talking about specifically, and often they don't even understand what you're talking about generally.

Yet, If its a good idea and develops; becomes something that alot of people get involved in, something that alot of people end-up using - both in how they make money (work) or as consumers; then, after doing all that work - asking dumb questions, etc.  eventually you'll get to a stage where the 'experts' will talk down to you, whilst explaining how they know it all. 

its a frustrating part of the lived experience of being involved in innovation; i hope, that the development of these systems will end-up providing tooling required, to ensure there's a better means to address these sorts of issues; as being an innovator, is different to be a professionally aggressive sociopath, similar or worse.



Dev Environment: 
- Intel Laptop with GTX 1650 GPU. 
- OSX Intel Laptop (13", fairly old).
(and yeah, i got access to the internet  - can do stuff on that too :P )

Research into:  CUDA® Deep Neural Network library ( cuDNN )
https://developer.nvidia.com/cudnn
https://medium.com/geekculture/install-cuda-and-cudnn-on-windows-linux-52d1501a8805

Models seemingly require TensorCores (which i don't have on my laptop)

Possible solution - https://coral.ai/products/accelerator/

