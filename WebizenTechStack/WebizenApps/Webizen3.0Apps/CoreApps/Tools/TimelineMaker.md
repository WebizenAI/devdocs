### Timeline Maker

The timeline maker is required for the [[TimelineInterface]] that is  in-turn needed for various applications including the [asset manager](../assetmanager/AssetManager.md) used to create timelines from RDF data. The Timeline Maker allows the user to manage timelines that are created through the use of the assets stored in the [asset manager](assetmanager.md) library and to create timelines from those assets.  

### Introduction

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