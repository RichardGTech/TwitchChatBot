// In order to fully use bot, remove all comments from lines that require username, oath password, and codes that are under the function command

var tmi = require('tmi.js');

var options = {
    options: {
        debug: true
    },
    connection: {
        cluster: "aws",
        reconnect: true
    },
    identity: {
        username: //botname goes here "",
        password: // oath password goes here, go to http://twitchapps.com/tmi ""
    },
    channels: //Twitch Channel Names Go Here, ask other streamers if you can add their name on here[""]
};

var client = new tmi.client(options);
client.connect();

client.on('chat', function(channel, user, message, self) {
    // these actions are used to interact with streamer and viewers  
    //        if(message === "!hello") {
    //     client.action("botname", "Hi there!");
    // };
    // if(message === "!socialmedia") {
    //     client.action("botname", "http://socialmedia.com/JohnSmith");
    // };
    // if(message === "!emote") {
    //     client.action("botname", "PogChamp")
    // }    
});

client.on('connected', function(address, port) {
    client.action("botname", "Hi there, I am a bot, your awesome assistant!")
});