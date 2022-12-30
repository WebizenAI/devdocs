---
id: 221
title: 'Basic Media Analysis & Part 2 (visual)'
date: '2017-12-31T07:55:40+10:00'
author: ubiquitous
layout: post
guid: 'https://openseason.online/?p=221'
permalink: /media-analysis-part-2-visual/
entity_url:
    - 'http://data.wordlift.it/wl0353/post/basic_media_analysis_-_part_2_visual'
categories:
    - 'Acquiring Data'
    - 'Technical Introductions'
---

This is a basic introduction which will be followed-up in latter posts.

Essentially, the analysis of video is for the most part, very similar to the analysis of images, as video is a stream of images.

The first element of analysing images / video, is that the files themselves contain an array of metadata in the file as part of the file creation process (depending on how its done). The ‘metadata’ contained within images can include;

- Time/Date it was taken
- Where it was taken (IE: GPS coordinates)
- Information about the device it was taken with
- Copyright information / information about who took the image
- other embedded image metadata.

These elements of data doesn’t rely upon the image or video being of good quality. It’s simply data created as part of creating the file in the first place. [MetaPicz](http://metapicz.com/) is an online example of an online application/service that provides an example of this information. The next process is to analyse the content depicted in the image itself…

The first issue with analysing vision is ensuring the quality of the images is of sufficient quality as to identify, analyse and process the informatics available in the imagery. Where its required, correcting the vision is a useful first step. Beyond the usual processes, adjusting contrast, brightness and other standardised image processing methods; increasingly ‘<span class="textannotation disambiguated wl-thing" id="urn:local-text-annotation-yvjwd9v2ukcc0noffeabbspupip51gc6" itemid="http://data.wordlift.it/wl0353/entity/superresolution">super-resolution</span>‘ processes are becoming available.

One process when using multiple still images is detailed here;

<iframe allowfullscreen="allowfullscreen" frameborder="0" height="315" loading="lazy" src="https://www.youtube.com/embed/KknTmqGj744?rel=0" width="560"></iframe>  
or alternatively, this guide on [petapixel](https://petapixel.com/2015/02/21/a-practical-guide-to-creating-superresolution-photos-with-photoshop/). Once these processes are done; others, involving the use of AI related processes, include those detailed [here.](https://github.com/tensorlayer/SRGAN)

The time-consuming ‘trick’ is, to go through a multitude of processes with an appropriate ‘treatment methodology’, involving the use of ‘master’ and derivative content stacks; that in-turn requires tooling, inclusive of appropriate equipment, to do so effectively.

Once the source-material has been processes as to get the best possible visual quality; the means to produce ‘entity graphs’, or further additional ‘structured data’ converting objects the vision to a structured dataset.

One of the basic differences between video and still images is a timecode. Ideally, storage of metadata/structured data in relation to video content, includes time-code information.

One of the seminal presentations with respect to the works in entity recognition in vision is the TedTalk presentation about [ImageNet](http://www.image-net.org)  
<iframe allowfullscreen="allowfullscreen" frameborder="0" height="315" loading="lazy" src="https://www.youtube.com/embed/40riCqvRoMs?rel=0" width="560"></iframe>

In an attempt to make things easier, i’ll try to break down modern image analysis into a couple of different categories.

- Identification of ‘Things’
- Identification of ‘Persons’ or ‘Faces’
- Identification of ‘Emotions’ or ‘gestures’
- Biometrics – The identification of a unique living organism

There’s an ’emerging’ array of services available to the public that have an array of similar capabilities, to which ends, this post will not explore, other than highlighting this emergent field of ‘knowledge banking’, which is producing a significant mass of information leveraging scale of organisations, as to enhance AI / classification and intepretation technologies. This is in-turn producing a core-asset for these organisations by way of providing API access, most-often on a fee-for-service basis, to users, as to enhance the services capability for enhanced analytics capabilities, SOME OF WHICH, they provide public access to by way of their online services.

To produce tooling that is truely ‘enhanced’ beyond traditional knowhow, it’s essential to DIY (“Do It Yourself”).

The easy way to outline services (in a simple way) is dot-points;

- [ClarifAI](http://www.clarifai.com) is a service that identifies the objects
- [Google cloud vision](https://cloud.google.com/vision/) (wp plugin: https://github.com/amirandalibi/perception )
- [Amazon rekognition](https://aws.amazon.com/rekognition/) (Wp plugin: https://wordpress.org/plugins/wp-rekogni/
- [cloud sight](http://cloudsight.ai)
- [Kairos ](http://www.kairos.com)noting, they’ve got a good [comparison guide](http://www.kairos.com/blog/face-recognition-kairos-vs-microsoft-vs-google-vs-amazon-vs-opencv)
- [Affectiva](https://developer.affectiva.com)
- [Cognitec](http://www.cognitec.com)
- [betaFaceAPI](https://www.betafaceapi.com/wpa/) – Designed for faces

Once the data has been retrieved, database the informatics provided by the tools (inclusive of time-code if video) ideally in an RDF format. The usefulness of RDF provides for enabling the metadata / structured data, discovered in media, to be part of the broader database that is the web.