document.addEventListener('DOMContentLoaded', function() {
console.log('injected');
});

//Get message from background page
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	var ppButton = document.querySelectorAll('[data-id="play-pause"]')[0];
	var fwdButton = document.querySelectorAll('[data-id="forward"]')[0];
	var revButton = document.querySelectorAll('[data-id="rewind"]')[0];

     var track = document.getElementById('player-song-title').textContent;
     var artistName = document.getElementById('player-artist').textContent;
     var albumName = document.querySelectorAll(".player-album")[0].textContent;	     
     var playPause;
     if(ppButton.getAttribute('title') == 'Pause')
     	playPause = true;
     else
     	playPause = false;
     if(request.greeting == 'data')
     {

	    //alert("The message from the background page: " + request.greeting);//You have to choose which part of the response you want to display ie. request.greeting
	    //Construct & send a response
	 }
	 else if(request.greeting == 'play-pause')
	 {
	 	ppButton.click();
 	 }
 	 else if(request.greeting == 'fwd')
 	 {
 	 	fwdButton.click();
 	 }
 	 else if(request.greeting == 'rev')
 	 {
 	 	revButton.click();
 	 }

	sendResponse({
        song: track,
        artist: artistName,
        album: albumName,
        playing: playPause
    });
});