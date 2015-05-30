function renderStatus(songText,albumText,artistText, playingText) {
  document.getElementById('song').textContent = songText;
  document.getElementById('album').textContent = albumText;
  document.getElementById('artist').textContent = artistText;
  document.getElementById('playing').textContent = playingText;
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('play-button').onclick = playpause;
  document.getElementById('rev-button').onclick = rev;
  document.getElementById('fwd-button').onclick = fwd;

  var BGPage = chrome.extension.getBackgroundPage();
  BGPage.getTrack();
});

function playpause() {
  console.log("play-pause");
  var BGPage = chrome.extension.getBackgroundPage();
  BGPage.getTrack2();
  var elText = document.getElementById('play-button').textContent;
  if(elText == 'Play')
    document.getElementById('play-button').textContent = 'Pause';
  else if(elText='Pause')
    document.getElementById('play-button').textContent = 'Play';
};

function rev() {
  console.log("rev");
  var BGPage = chrome.extension.getBackgroundPage();
  BGPage.revAction();
};

function fwd() {
  console.log("fwd");
  var BGPage = chrome.extension.getBackgroundPage();
  BGPage.fwdAction();
};

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  renderStatus(request.song,request.album,request.artist,request.playing);
   sendResponse({});
});