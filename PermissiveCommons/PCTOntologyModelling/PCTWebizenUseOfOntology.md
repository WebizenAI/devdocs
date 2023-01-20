
The notes below seek to illustrate the important role PCT ontologies facilitate.

### Preface

I'm exploring an idea about forming some sort of semantic database method that would use language (english) to structure the ontological predicates. 

Considerations are described in the note about [[EnglishLanguageModelling]].

Part of the objective is to end up with a software model that can operate on a laptop (or mobile phone) privately.  I am not an expert software developer (coder); as such, there's some aspects to this particular field of endevour that relates to knowledge experts in a different field to my own may know well; but that, i do not.  Therein, if there's some basic answer that i'm not aware of please feel welcome to reach out either via the [facebook HumanCentricAI Group](https://www.facebook.com/groups/humancentric.ai.tech) or contact me directly via [linkedin](https://www.linkedin.com/in/ubiquitous/) or join one of the community groups noted here: [[README]]

The webizen environment is intended to provide a high-degree of privacy, and in-turn the permissive commons systems is intended to operate in a manner that complies with the express permissions asserted by Legal Entities (humans and via them, legal entities).

The underlying consideration is that the ability to 'think' and write something that may or may not be communicated to anyone else (or any other agent) should not be subject to interference or survellience.  Any implication any use of the english language either written or as is able to be intepreted via sensors (ie: microphones) for natural language processing, should be private - until such a time as the derivatives of that work are shared with someone else (a 3rd party agent); and even then, permissions and rules should be asserted to the rightful use of any-such derivatives of a persons thought-processes.  

![[Answers_meme.jpg]]

*When getting 'stuck into' the design challenge, the implication became a process of engaging in the study of language in a way, that i hadn't done in a similar way earlier. This is in-turn part of the practical undertaking of trying to figure out what the best possible (based upon what is known now) solutions architecture for addressing this problem; both in the more immediate term, and consequentially thereafter.  it is desirable that the implementation approach is able to evolve overtime (growth, evolution, 'upgradability', etc.) rather than necessarily being entirely replaced, however i may not have the skills and/or support (resources) to be able to achieve this goal for the POC solution.  I also want to expressly note; the underlying sentiments being considered in relation to english - as do in-turn relate to my identity, who and how i communicate and 'think' is sought to be supportively considered for others whose life relates to languages other than english.  Yet, the implications are not simple, as the words used in english are often from other languages (historically).  In-order to form a formal modelling technique, i am now-therefore seeking to work through the complexities, as to form a basis upon which a reduction process may be appropriately therefore undertaken.*

*ALSO: As an Australian, I am particularly interested in seeking to support indigenous languages, and in other areas - hearldy and similarly pictorially defined languages are also an area of interest..*

## Technology Considerations


#### PCT & Webizen - Considerations

Whilst most either don't know about it or don't understand it at all, the way much of our ICT infrastructure build around world-wide-web linked ecosystems functions today is through the use of [[SemanticWeb]] technologies; and in-particular therein, the use of [[SemWebOntologies]] which have been designed in a particular way, with particular characteristics, properties and functional purposes / objectives.  There are some functions and applications that these ecosystems do very well; yet this is not universally the case.  The ability to Decentralise has been both an objective and problem, for a very long time.  The growth of [[Non-HTTP(s)Protocols]] is in-part due to the consequences of decisions that have been made that have acted to limit and/or frustrate any means sought to be undertaken to decentralise the management of information; from incorporated entities to (better support) humans; and/or, to better support an approach that is inclusive and supportive of the role of humans, in relation to the beneficial use of technology.  In many ways these issues are fundamental to the cause of many [[SocialAttackVectors]] that have been furnished opportunity to proliferate harmfully. 

*in anycase (sorry, got a bit off-topic, but only 'kind of')*

As a consequence of the design differences of the [[PermissiveCommonsTech]] and in-turn also the functional designs of the [[WebizenTechStack]] that relies upon PCT; there is an opportunity to redefine how ontologies are defined and made able to function.  This is not unlike the practical realities that are employed by any software development that uses a database; and that consequentially, they define their own [Database Schema](https://en.wikipedia.org/wiki/Database_schema), yet in this case - the ecosystems are being throughtfully designed to be decentralised.

So, whilst there needs to be interfaces / APIs that support interactions with other systems, including various [[SemWebOntologies]]; this does not need to be the native methodology that is employed within the Permissive Commons Technology ecosystem.  Indeed also, there are a variety of necessary changes that must be made, in-order to make the technology functional at all.  

Nowtherefore; and, in consideration, rather than employing the [[SemanticWeb]] tooling directly, which is to some-degree an incorrect statement, as whatever the solution design becomes - it'll end-up being produced through the use of SemWeb resources.

*NOTE: the use of SemWeb technologies more directly waas considered important in previous implementation designs focused upon [[Knowledge Banking Infrastructure]].  However, these works were found to be unsupported (indeed, i was subjected to various [[SocialAttackVectors]] consequentially) seemingly due to the nature of how the designs sought to ensure support for human rights and the means for human beings to own their own data as is in-turn required for the [[HumanCentricAI]] capabilities irraspective of broader implementation designs; rather than seeing these sorts of qualities as an opportunity, it was seemingly deemed to be a threat - to whatever it was they were prioritising above all else.* 

Nonetheless; as a consequence of hte design shifts that are presented via these notes more broadly, there is an opportunity to define how the root or 'top level' ontology is defined; and the hypothesis is, that perhaps it can be defined using natural language.

If this approach has validity, part of the intended outcome would seek to conclude how it is that vocabulary ends-up being part of the [[CoreServices]] stack, as is thereby employed as a foundational library for everything else that's built on top of it.  

### Permissive Commons Technology & Webizen Ecosystems

#### Background on the Importance of Top-Level Ontology
Both the Permissive Commons Technology and Webizen systems use ontologies (and cryptography) as the primary means for defining 'functionality' and the structure of how to access resources. 

Ontologies are used throughout the systems for many different purposes, including but not limited to - providing the means to structure electronic assets in a manner that is thereby able to be used in a decentralised way (with permissions, defined using ontologies) across the ecosystem.  

![[20230119_webizenDBDiagram1.jpg]]

The historical tools used for ontologies are broadly known to be part of the broader 'semantic web' ecosystem; which declares a HTTP Namespace in connection to an ontology document, which other documents and systems are thereby defined to employ.  Yet it is often the case that the original source (the HTTP URI) either changes or  becomes unavailable overtime.  The implications for technology that is designed to make use of those ontologies in a decentralised manner, is that dependencies become unreliable.  This issue was considered by the Concept of CoolURIs in which it is noted that [Cool URIs don't change](https://www.w3.org/Provider/Style/URI) and a related [W3C Document was produced on the topic also](https://www.w3.org/TR/cooluris/), yet as is able to be demonstrated via the [[SemWebOntologies]] today, this is still an on-going problem.  Thereafter; one of the fundamental purposes of Permissive Commons is to address this issue alongside other issues that are related to version control and in-turn also, provide a decentralised means to manage archival materials.

As such; PCT and thereby also Webizen systems are designed to provide support for the storage and use of ontologies that are sourced from protocols other than HTTP(s); even though, the primary communications protocols are build upon the use of web-protocols (http, ws, webrtc, etc.); the underlying 'informatics tools' (ie: ontologies and 'hypermedia containers') make use of non-http-protocols, as a means to provide functionality that is not easily facilitated via WWW.  The format of PCT is intended to REQUIRE a HTTP(s) URI as well as information about the location of those ontology assets on other PCT supported protocols, yet the dependency of relying upon the HTTP(s) URI alone, is effectively quashed. 

Different protocols support different qualities and will be employed for different purposes; these definitions are intended to be defined - using PCT ontology.  the ecosystem is intended to be designed to seek to ensure [[Protocolindependence]] (subject to the functionality provided by different protocols and the usefulness of protocols). 

Webizen Agents and in-turn also, applications; are intended to function using Ontology.  

The extensibility of AI capabilities, is intended to be harmonised into the Webizen ecosystem using ontology.  

#### Webizen Network Flexibility

The Webizen ecosystem requires support via a VPN like tunnelling technique; in-order to support 'fully qualified domain names' for users, whose devices are connected on dynamic IP addresses behind firewalls.  This in-turn introduces an opportunity to review how DNS might be employed within the network, as to provide support for an ecosystems solution that is made to work in a complimentary manner (ie: doesn't clash) with external / public ICANN DNS, which may also lead to different opportunities for refactoring other older standards related works as is the topic of the [[DIDsEval]].  

In-order to build the software that operates the underlying 'read-write' server/client, a database structure needs to be defined; and thereafter, built upon, using ontologies. 

An additional diagram provides a basic summary below.

![[webizen_diagram_1-2.jpg]]

Therein - the 'personal vault' - is entirely private, whereas the 'PCT DB' stores and communiates information that is shared with at least one other 'person' (entity or 3rd party agent). The Webizen (ai) agent; is required to operate in a manner that is controlled and defined by the owner of that agent; which thereafter includes a requirement to support the agreements that have been made electronically with others, using cryptographic instruments (credentials, essentially) that are defined - via ontologies. 

Whilst there are existing semantic web ontologies; the process of defining a different ecosystem presents an opportunity to redefine how the ontology ecosystem is designed to work 'natively'; therein, whilst mapping to other ontologies is part of how these systems are designed to work;  the question becomes, how might one best form a new solution, in 2023.

A few requirements to support analysis of the context. 

#### Run Locally
The requirement is to end-up with a solution that can be run with a relatively minor amount of hardware resources on a stanard laptop / desktop machine.  This means, that whilst it should be far more sophistocated that traditional 'dictionary' software; it shouldn't require a connection to an online - 'global language model' or 3rd party online service, in-order to function.  As such, there's a variety of considerations about the level of sophistocation that is reasonably feasible; which in-turn, also relates to the approach taken to achieve an outcome.

#### Personal Vs. Commons

The solution should support both; the ability for persons to structure their own private semantic 'datastore' in a manner that reflects how they naturally structure the use of vocabulary with mind, whilst noting that this is subject to change and evolution; as well as, being able to participatorily support shared structures - that may be different or a form of translation from what and how it is that they would personally employ language, etc. 

These considerations are distinct from the misuse of language (ie: false understandings or beliefs that words might mean one thing - when in-fact the term might mean something else entirely or be intepreted to have the opposite meaning, to what the natural agent intended).

## Mathematics Ontology

The use of these works, whilst sought to be designed to support Human Centric principals (including Human Centric AI principals); will end-up being processed by a software agent (on a computer).  Perhaps therefore defining in the 'upper ontology' mathematics may in-turn improve support for 'comprehensible sense making' or in otherwords, inferencing, etc.

LINKS:
https://github.com/CLLKazan/MathSearch
https://github.com/CLLKazan/OntoMathPro
https://github.com/CLLKazan/OntoMathPro/tree/develop



### Pre:Existing Large Language Models.

Whilst investigating solutions, an array of existing language models have been identified that provide a great deal of the underlying data that is considered to be required, although the methods to employ best employ them is presently unclear. 

Whilst making a note of the work done previously making enquiries with ChatGPT as is illustrated by: [[ChatGPTDynamicOntology]] and in-turn the [[VocabularyModelling]] folder has been created to 'create space' for more thougher investigation. In-order to illustrate the considerations; i'll start with illustrating the resources that i've found so far. 

Framenet: https://framenet.icsi.berkeley.edu/fndrupal/
https://github.com/chanind/frame-semantic-transformer
https://github.com/topics/framenet

https://github.com/dbamman/latin-bert
http://wordnet-rdf.princeton.edu/
https://framenet.icsi.berkeley.edu/fndrupal/
https://en.wikipedia.org/wiki/Cyc
https://old.datahub.io/dataset/opencyc is unavailable;  a version of it has been found: https://github.com/asanchez75/opencyc/blob/master/opencyc-latest.owl.gz 

https://www.ontologyportal.org/
https://github.com/ontologyportal/sumo

OntoWordNet LINKS
https://lists.w3.org/Archives/Public/public-swbp-wg/2005Feb/0066.html
https://www.w3.org/2001/sw/BestPractices/WNET/

Other links
https://babelnet.org/

NoteAlso: https://www.wordsapi.com/

https://github.com/alammehwish/framester

NOTE: i was also thinking about something that's more like '@enNoun' or '@enNounAu' rather than simply '@en' or '@en_au', etc. But still working on how to formulate the basic concept. Fundamentally, re: nlp / ml/dl, etc. I wasn't sure how complex it might be, whilst seeking to ensure it doesn't consume too much memory / processing power.
