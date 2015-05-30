var resp = 'unassigned';

getTrack = function() {
	console.log('getTrack');
    chrome.tabs.query({url:'https://play.google.com/music/listen*'}, function(tabs) {
        //Construct & send message
        chrome.tabs.sendMessage(tabs[0].id, {
            greeting: 'data'
        }, function(response) {
            //On response alert the response
            track = response.song;
            artistName = response.artist;
            albumName = response.album;
            playPause = response.playing;
            //alert("The response from the content script: " + response.response);//You have to choose which part of the response you want to display ie. response.response
            console.log("resp: " + resp);
            chrome.runtime.sendMessage({
		        song: track,
		        artist: artistName,
		        album: albumName,
		        playing: playPause
		    }, 
    		function(response) {
				  console.log(response)
				});
        });
    });
};

getTrack2 = function() {
	console.log('getTrack');
    chrome.tabs.query({url:'https://play.google.com/music/listen*'}, function(tabs) {
        //Construct & send message
        chrome.tabs.sendMessage(tabs[0].id, {
            greeting: 'play-pause'
        }, function(response) {
            //On response alert the response
            track = response.song;
            artistName = response.artist;
            albumName = response.album;
            playPause = response.playing;
            //alert("The response from the content script: " + response.response);//You have to choose which part of the response you want to display ie. response.response
            console.log("resp: " + resp);
        });
    });
};

revAction = function() {
	console.log('revAction');
    chrome.tabs.query({url:'https://play.google.com/music/listen*'}, function(tabs) {
        //Construct & send message
        chrome.tabs.sendMessage(tabs[0].id, {
            greeting: 'rev'
        }, function(response) {
            //On response alert the response
            track = response.song;
            artistName = response.artist;
            albumName = response.album;
            playPause = response.playing;
            //alert("The response from the content script: " + response.response);//You have to choose which part of the response you want to display ie. response.response
            console.log("resp: " + resp);
        });
    });
};

fwdAction = function() {
	console.log('fwdAction');
    chrome.tabs.query({url:'https://play.google.com/music/listen*'}, function(tabs) {
        //Construct & send message
        chrome.tabs.sendMessage(tabs[0].id, {
            greeting: 'fwd'
        }, function(response) {
            //On response alert the response
            track = response.song;
            artistName = response.artist;
            albumName = response.album;
            playPause = response.playing;
            //alert("The response from the content script: " + response.response);//You have to choose which part of the response you want to display ie. response.response
            console.log("resp: " + resp);
        });
    });
};