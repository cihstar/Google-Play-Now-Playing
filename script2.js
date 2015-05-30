(function () {

	var showFullDescription = function () {

		//current track
		var currTrack = document.getElementById("player-song-title");
		var artist = document.getElementById("player-artist");
		var album = $('a[data-type="album"]');
		var playPause = $('a[data-id="play-pause"]');

		var cTrackText = currTract.innerText;
		var artistText = artist.innerText;
		var albumText = album.innerText;
		var playPauseVal;

		if(playPause.getAttribute("title") == "Pause")
		{
			playPauseVal = "playing";
		}
		else
		{
			playPauseVal = "paused";
		}

		console.log(cTrackText);

		chrome.storage.local.set({'track': cTrackText}, function() {
          // Notify that we saved.
          message('Settings saved');
        });
		chrome.storage.local.set({'artist': artistText}), function() {
          // Notify that we saved.
          message('Settings saved');
        });
		chrome.storage.local.set({'album': albumText}, function() {
          // Notify that we saved.
          message('Settings saved');
        });
		chrome.storage.local.set({'playpause': playPauseVal}, function() {
          // Notify that we saved.
          message('Settings saved');
        });
	}

	window.addEventListener("DOMContentLoaded", function () {

		showFullDescription();
		
		document.addEventListener("beforeload", function (ev) {
			showFullDescription();
		}, true);

	}, !1);

})();