# Work in Progress

This is where i'll put information about the work in progress.

### [DevDocs (#this)](https://devdocs.webizen.org/)
This documentation environment has been built using [Obsidian](https://obsidian.md/), [GitHub](https://github.com/), [Gatsby](https://www.gatsbyjs.com/) and the [Obsidian Template for Gatsby](Obsibian Template for Gatsby).  The [[DocumentationMethod]] document explains how its done.

The process of producing the documentation; includes,
1. Writing Content about the architecture of the Webizen Project.
   
2. Creating an Architectural Strategy for implementing stages of the webizen project; whilst supporting the means for developers to understand the broader goals / objectives, etc.|
   
3. Downloading and converting old related works into the documentation environment.
   
4. Structuring the Content (ie: folders, etc) and improving the copy (editing).
   
5. Working to update the content to address considerations about the many topics, etc.

I am learning how to improve the functionality of this environment and will make updates accordingly. The publishing system (gatsby) uses react and doesn't appear to like embeds (ie: youtube, or [timelinejs](https://timeline.knightlab.com/) ); and there's an array of other functionality i'd like to see working ASAP.

#### DevDocs Feature Development Ideas

As i'm working through it; i am also constantly working on different ideas to improve this documentation sites features, as best as may be possible without employing alot of resources to do something that might be too hard or too expensive.  One of these areas of consideration is the ability to make improvements via the advancement of a [[KnowledgeDocuments]] solution, that would add various forms of functionality to this documentation solution; and in-turn, provide support for enhancing the solution down the track once there's a functioning Webizen Platform. 

#### ISSUES

1. Content isn't anywhere near complete yet.  I've got alot in the archive.  Some also needs to be better described (noting prior use of 'social encryption' methods / testing those methods). 
   
2. There's some questions in my mind about how to address issues that have some personal and/or privacy related considerations linked to them.. In some ways, its a critical part of the journey; yet in other ways, it could be a distraction and/or unwanted / undesirable.
   
3. Whenever a page is moved or a directory mde, is breaks all the links. This is likely to be an on-going problem when using this environment to draft and publish works. 
   
4. I'm learning how to use this specific tech ecosystem.  
   
5. When importing (in particular); if there's some sort of problem with the MD file (an article, etc.) it fails to compile.  Every time there's a push to the GitHub Location - it recompiles.   When there is an issue, the log doesn't provide enough information to figure out what's wrong, other than being able to identify the file that's causing problems.
   
6. Whilst the ChatGPT Content provides a helpful start to writing content about a topic, it does need to be updated and reviewed; as such, the new pages where this has been used needs to be reviewed (when i get there)...
   
7. I need to remove the spaces from the URLs which requires me to add YAML to the pages and change the names of the directories / files.  
   
8. There are some cases where i've got two documents with the same name, and this needs to be corrected in-order to make the links work -- APOLOGIES!! 
   
9. Migrating the way the content is organised so that there's no spaces in the URLs, which means the directories and pages are being migrated to CamelCase.  This may well break the links that have been created earlier.  
   
10. Working on what it means to 'own your own webizen'; which both, creates a series of requirements in defining how the technology is implemented; in-order to, support an ecosystem solution that has a lawful basis upon which it may be asserted that a person owns their own 'webizen'; and in-turn, addresses related issues linked with guardianship related semantics.  
    
11. In-order for the specifications for the Webizen Agent to be defined, there also needs to be a clear specification for the Permissive Commons Technology (PCT) ecosystem.  A seperate site is being developed in-order to address these requirements noting the distinctions; whilst also noting, that the designs may end-up requiring the webizen ecosystem in-order to make it work in a manner that is considered to be 'fit for purpose' Here is the link to the [PCT-Docs](https://pct-devdocs.webcivics.org/)
    
12. I need to re-organise  documentation to use git [sub-modules](https://git-scm.com/docs/git-submodule) so that that the organisation of these docs and those in [PCT-Docs](https://pct-devdocs.webcivics.org/) are more managable as ecosystem components.   This method is likely to end-up requiring more than the two repos currently defined.  Following-on from these earlier considerations - I am now wondering how / if - it might be better to revert to a single repo rather than trying to do something more complex - when, the underlying purpose of these docs is to support an implementation that will in-turn lead to the documents being relocated to the webizen system anyway.   Presently, its hard to keep track of both; and i'm trying to 'crunch time', whilst raising discussion points with others - leads to sharing links, and the coherance of the notes is suffering as a consequence of their being seperated and at times duplicated; sometimes, with differing versions - which is going to cause problems into the future (noting - the webizen environment is likely to address the problem, but that it'll be a completely different environment - so, the troubles with these repos becomes irralavent)

### Ontology Modelling
The ontology modelling process is trying to address various requirements for [[DecentralisedOntologies]], [[TemporalSemantics]] and [[PermissiveCommons]] which will in-turn support both the [[SafetyProtocols]] as well as the [[Values Credentials]].

Much of the ontology work is in the [Web Civics - Ontologies 2023](https://github.com/WebCivics/ontologies/tree/2023) github folder / project. Some use of [Chat AI](https://chat.openai.com/) has been employed, that has helped a great deal in some ways; whilst also problematic.  

Yet now, as the requirements to set-out how the Permissive Commons Technology (PCT) works to support Ontologies (ONT or PCT-ONT); i've set-up another documentation site which is online at [pct-devdocs.webcivics.org](https://pct-devdocs.webcivics.org/) and am only just starting to work on it.

Once this is in-shape, i should be in a position to get onto the ontology modelling in a way that means i'll be able to provide examples of exactly how it works - with a demonstration! 