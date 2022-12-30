#### Background
The Webizen project seeks to create a new type of computing platform. It is a complex project, that seeks to (finally) deliver a useful software environment, which will in-turn invoke opportunities to produce and make available specified hardware and software solutions that are designed to support the use of the ecosystem.

The broader objective has been the focus of my work throughout my professional life.  There are many components to various life experiences that have fed indirectly into these designs, and theres been various focused areas of work that have been specifically focused on the development of concepts relating to these designs and design related implications and considerations, overtime. 

Whilst somewhat technical in many areas, often related to my career focus to develop a working soluition in this area, in a manner that supports human rights; a major part of the methods process has been to seek to do work that can empower others who do not have 'advanced' technical skills.

As noted in the [[Work in Progress]] document, this documentation method has been made possible through the means to make use of relatively simple development processes.  Whilst i believe these tools can be developed to support a variety of new functionality (particularly those relating to the webizen project, and in-turn also 'web civics' related activities); the solution appears to be of a kind that makes it relatively easy for others to employ, even if they're not very technical.  This document seeks to provide a tutorial on how to do it. 

This document is seeking to provide information on how others can use the same soft of process to produce works that can in-turn fit into the broader ecosystem. 

NOTE:  Work on producing a [[Knowledge Documents]] format is underway, alongside all the other things...

### Documentation Environment Installation Instructions 

This process provides a particular approach; there are many different approaches available, including the means to download [obsidian](obsidian.md) and purchase their [sync and/or publish](https://obsidian.md/pricing) services that are designed to work with the obsidian platform. 

The alternative that i've used is described below;

1. Github: 
	a. A user needs to set-up a [GitHub](https://github.com/) account. 
	b. then they need to set-up a github repo to publish their documents #website 
	c. The user then needs to set-up [GitHub Pages](https://pages.github.com/). Make sure you set the pages link to the gh-pages branch.
	d. Then they need to download [GitHub Desktop](https://github.com/) and clone the repo to a local storage location.

2. Download and install [vscode](https://code.visualstudio.com/)

3. Obsidian Gatsby Website Template.
	e. I've used the [Obsibian Template for Gatsby Theme Primer Wiki](https://github.com/theowenyoung/obsidian-template-gatsby-theme-primer-wiki/)goto the link and download the zip file.
	f. upzip the files and copy to the local directory you've created using GitHub Desktop. Then goto GitHub Desktop and right click on the project - selecting the option 'open in visual studio code'
	g. edit the ```.layouts/gatsby-config.js``` file to replace the information entered about the author of the template, with the information about your own project / site then save.
	h. goto ```.layouts/static``` and edit the ```CNAME``` file with your own information then save; and then, create a logo and replace ```logo.png```.
		
4. Download and install Obsidian
	a. Once obsidian is installed, a screen will come-up and one of the options will be to 'open folder as vault'.  Do that, and find the folder that you've created using github desktop for the gatsby files.  Open it. 

	b. you should now see a list of the existing content that came with the website template.  You can either delete all those files or manage them in some way useful to you.  (ie: create a directory and put it those files into it, etc ).  Then start using obsidian to create your own files.
	
	Obsidian automatically saves files.  
	
5. Publish
	When you're ready, go back to github desktop and you should see that your project has a bunch of updates. In Github Desktop, goto the repo (project) create a 'commit' by providing a summary and description, then d hit 'commit to main'; and push the 'pull' button. 