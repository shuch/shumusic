var myAudio = document.createElement('audio');

// if (myAudio.canPlayType('audio/mpeg')) {
//   myAudio.setAttribute('src','audiofile.mp3');
// } else if (myAudio.canPlayType('audio/ogg')) {
//   myAudio.setAttribute('src','audiofile.ogg');
// } else if (myAudio.canPlayType('audio/mp4')) {
// }

function togglePlay(target) {
  let id = target.dataset.id
  console.log('togglePlay', id);

  let preAttr = myAudio.getAttribute('src')
  let curArrr = favList[id].path
  if(!curArrr) {
    return
  }
  // console.log('src22', preAttr, curArrr);
  let hasAttr = curArrr === preAttr
  // console.log('att22', hasAttr);
  if (!hasAttr || !preAttr) {
    myAudio.setAttribute('src',curArrr);
  }

  // myAudio.currentTime = 5;
  // console.log('isPlaying22', myAudio.paused);
  if (myAudio.paused) {
    myAudio.play();
  } else {
    myAudio.pause()
  }

  toggleIcon(target)
  updateFooter()
}

function resetIcons() {
  let allIcons = document.getElementsByClassName('playIcon')
  // console.log('allIcons22', typeof allIcons, allIcons);
  for (let i = 0; i < allIcons.length; i++) {
    const item = allIcons[i];
    item.setAttribute('src', 'lib/play.png')
  }
}

function toggleIcon(target) {
  resetIcons()
  let playIcon = target.getElementsByClassName('playIcon')[0]
  // console.log('toggleIcon22', playIcon,myAudio.paused);
  let iconSrc = myAudio.paused ? 'lib/play.png' : 'lib/pause.png'
  playIcon.setAttribute('src', iconSrc)
}

function playAction(e) {
  resetIcons()
  let curAttr = myAudio.getAttribute('src')
  if (!curAttr) {
    myAudio.setAttribute('src',favList[0].path);
  }

  if (myAudio.paused) {
    myAudio.play();
  } else {
    myAudio.pause();
  }

  updateFooter()
}

function forwardAction(e) {
  let curAttr = myAudio.getAttribute('src')
  if (curAttr) {
    let currentFavSong = getNextFavSong(curAttr)
    myAudio.setAttribute('src',currentFavSong.path);
  } else {
    myAudio.setAttribute('src',favList[0].path);
  }
  myAudio.play()
  updateFooter()
}

function updateFooter() {
  let cover = document.getElementById('cover')
  let playsong = document.getElementById('playsong')
  let curSong = getCurrentFavSong()
  if (curSong) {
    cover.src = curSong.avatar
    playsong.textContent = curSong.name
  }

  let playBtn = document.getElementById('playbtn')
  // console.log('myAudio.paused22', myAudio.paused);
  let iconSrc = myAudio.paused ? 'lib/play.png' : 'lib/pause.png'
  
  // console.log('iconSrc22', iconSrc);
  playBtn.src = iconSrc
}