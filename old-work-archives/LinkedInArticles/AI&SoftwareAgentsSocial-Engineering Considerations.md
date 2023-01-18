# AI & Software Agents: Social-Engineering Considerations

August 17, 2015

https://www.linkedin.com/pulse/ai-software-agents-social-engineering-considerations-timothy-holborn/

How do people consider the changes to their facebook feed and whether or how they may appear to be dynamic.  

Is it possible that Graph functionality embedded within existing silos, may result in unintended consequences.  
  
I'll use Facebook as an example in this instances, whilst the intention is not to specifically pick on that company as the problem is bigger than the example provided...

ARCHITECTURE - FACEBOOK

Facebook is a Social Networking Silo. the platform is provided freely, and the penetration rate of Facebook is [quite high](http://www.statista.com/statistics/272014/global-social-networks-ranked-by-number-of-users/), at 1.49 billion active users.

Facebook enables communications between social-relationships via various means, including multi-media sharing, instant messaging, group-tools such as event listings, single-sign on products for other software providers to use FB as an authentication tool and therein share data about users, etc.

Facebook makes money out of advertising and some of the most significant growth of facebook has related to the capacity for brands, apps and/or companies to integrate with facebook as a fast and simple way to extend reach and social-growth or promotions.

This is achieved through the use of [graph technology](https://en.wikipedia.org/wiki/Social_graph)

The quick explanation is that the Facebook graph includes the ability to "get", "post" or "delete" an array of information such as;: user_birthday, user_religion_politics, user_relationships, user_relationship_details, user_hometown, user_location, user_likes, user_activities, user_education_history, user_work_history, user_website, user_managed_groups, user_events, user_photos, user_videos, user_photo_video_tags, user_friends, user_about_me, user_status, user_games_activity, user_tagged_places, user_posts, read_page_mailboxes, publish_checkins, status_update, photo_upload, video_upload, rsvp_event, email, create_note, share_item, publish_stream, ads_management, ads_read, read_insights, manage_pages, publish_pages, publish_actions, read_friendlists, user_actions.books, user_actions.music, user_actions.video, user_actions.news, user_actions.fitness, public_profile, basic_info

The more complex answer can be found in the [Graph API explorer](https://developers.facebook.com/tools/explorer), where once an OAUTH link has been established, permission granted - the amount of information that can be retrieved via a GET Command about a person and their activities enhances significantly.

Yet, this is not where the complications end-up.

Some of the most promenade pages or applications that use Facebook authentication, also have their own websites. SO, they may distribute images or news-stories on FB, and then get traffic to their own sites.

In-turn, these links can be associated to external databases that may interact with, store and on the basis of acquired information - generate new POST requests, in relation to user-data.

In the land of Facebook, this functionality appears to be called an Audience Management API that interacts with a [CRM](https://developers.facebook.com/docs/marketing-api/audiences-api)

Whilst the capability to provide an [opt_out_link](https://developers.facebook.com/docs/marketing-api/custom-audience-targeting/v2.4) is provided by the specification, it is not a requirement.

THE USE OF SEMANTIC ANALYSIS When considering the data that is available to these services, it is not simply data that originated as text; but also, sensor data (such as temp. gps, et.al) and the transference of information that was sourced from objects depicted in photos, videos or audio, through to its utility and availability as [Structured Data](https://en.wikipedia.org/wiki/Data_model).

This in-turn compounds the amount of available data, for use by the before mentioned systems...

SUMMARY

The amount of information collected by these systems, and the results fed into the lives of individuals, is impacted by a dynamic, programmatic, AI, that includes both the algorithmic settings of Facebook itself, in addition to the interface capabilities and the way those capabilities are used by other (Facebook) users.

Whilst the broader implications of what this capability does is unknown, as it would seemingly be reasonable to suggest that the study of awareness of these systems and/or any form of legal consideration around its possible impacts

The role of Software Agents or AI, impacts markets already. These systems are in-turn supported by agreements made pursuant to the terms of service, in this case, facebooks [terms of service](https://www.facebook.com/legal/terms) which may be amended subject to the same agreement.

Yet, it seems the understandings of how these systems relate to what individual choices are, how concepts such as 'online bullying' may relate to software agents and how these engineered systems influence online participation and the future notions of privacy, data-rights or is it something else...

Well, it seemed like something that could be better discussed and/or prototyped in-terms of presenting how these systems interact with data, and how AI systems may result in social consequences, intended or otherwise.