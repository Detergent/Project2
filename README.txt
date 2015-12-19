Note: The contents of this readme are the same as what was in the email the attached project was in. If you've read that no need to read any further.


Use these credentials for a fully populated user:
Username: jmguarino@sonic.net
Password: m

You can create a new user and the create user form uses ajax as required, but you will not be able to add records for every table due to reasons discussed below:

The user is unable to edit a few sections due to time constraints and complexity (datetime between html and mysql seems like a mess). MusicianProfiles edit and update properly and display messages (the signup form also correctly inserts a new user and displays info as needed).
I still tried to meet all requirements for the project, so even though not every table is editable right now they are all still used by the frontend (dashboard for example).
Overall I tried to use ajax and stored functions wherever I could as if I was developing a secure website (although authentication sending the credentials in plaintext is definitely not secure, I tried to prevent mysql injection). I would like to pick up where this project left off in the future and spend a lot more time making it more user friendly and secure.