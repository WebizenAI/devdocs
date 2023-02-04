# The Attendant

The attendant is a chat based interface that is used to create a live communications channel between the user of webizen owners apps and and the webizen owner.  The  timeline App is used as the example.  Therein; the attendant settings are defined in the timeline maker, and are applied upon the timeline app.

The attendant has a number of commands that can be sent to the timeline app server. These commands are used to control the attendant interface, and to control the timeline app. The Attendant can provide access logs in real-time (immediately) for selected (private) timelines; the server side of the attendant is presented on the webpage.  When a pre-defined event occurs (ie: a user presses the attendant button or the timeline is set to report when a user is using it) the service generates message describing who has accessed the timeline. This message is sent to a pre-defined google-chat client. This is done in real-time via web-sockets and requires the server side to be integrated with google chat as an app. More information about how this is done can be found: on the guide provided here: https://developers.google.com/chat/concepts/apps

The attendant commands provide the following functionality:

- /userid: This command is used to define the userID the message or command is intended to be directed at.

- /blockuserid: this command is used to end the session of a user and deny them access to the timeline.

- /userpermissions: [userid] (tag) <add|remove|status> this is used to assign pre-defined permissions based upon a tagname. The tagname is used to define the permissions that can be assigned assigned to a user. The tagname is defined in the timeline maker.

Key Functions:

- The timeline owner is able to end the users session and deny access to the timeline via the attendant interface. In this case, the users permissions are blocked and a screen is presented to the timeline user informing them that they no longer have access to the timeline.

- The Timeline Owner may also change the permissions available to the user to add or remove some or all private items, so that the only information the user is able to view is the public information.

ServerSide Functions:

Logs: the attendant creates a log of the users activities and generates an RDF file that is associated with their FOAF file.  This log includes information about what assets they've seen, what they've clicked on, and what they've downloaded, session information including time, date, IP Address, estimated location (via IP address).  This log is stored in the asset manager and is available to the timeline owner.

This information is stored for the timeline owner and when this function is enabled the user must have agreed to it in the agreement that is presented to them prior to being able to access the information in the timeline. Should a dispute arise the information may be given as evidence to a court of law or appropriate investigative authority / agent / representative or advocate.