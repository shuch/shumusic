
var favList = [
  { id: 0, path: 'lib/1.m4a', name: '你的答案', singer: "阿冗", avatar: "lib/avatar/arong.jpg" },
  { id: 1, path: 'lib/2.mp3', name: '爱笑的眼睛', singer: "林俊杰", avatar: "lib/avatar/linjunjie.jpg" },
  { id: 2, path: 'lib/3.mp3', name: '有点甜', singer: '汪苏泷 / By2', avatar: "lib/avatar/wangsulong.jpg" },
  { id: 3, path: 'lib/4.m4a', name: '秋的思念 (夜色钢琴曲)', singer: '赵海洋', avatar: "lib/avatar/zhaohaiyang.jpg" },
  { id: 4, path: 'lib/5.m4a', name: '骄傲的少年', singer: '南征北战NZBZ', avatar: "lib/avatar/nzbz.jpg" },
  { id: 5, path: 'lib/6.m4a', name: 'The Champion', singer: 'Carrie Underwood / Ludacris', avatar: "lib/avatar/carrie.jpg" },
  { id: 6, path: 'lib/7.m4a', name: 'Easy On Me', singer: 'Adele', avatar: "lib/avatar/adele.jpg" },
  { id: 7, path: 'lib/8.m4a', name: '出现又离开', singer: '梁博', avatar: "lib/avatar/liangbo.jpg" },
  { id: 8, path: 'lib/9.mp3', name: '心随你去', singer: '李阳 / 路默依', avatar: "lib/avatar/liyang.jpg" },
  { id: 9, path: 'lib/10.m4a', name: '白狐', singer: '陈瑞', avatar: "lib/avatar/chenrui.jpg" },
]

function init() {
  let favNodeList = document.getElementById('favList')
  for (let i = 0; i < favList.length; i++) {
    let fav = favList[i]
    let li = document.createElement('li')
    let avatar = document.createElement('img')
    avatar.setAttribute('src', fav.avatar)
    avatar.setAttribute('class', 'avatar')

    let body = document.createElement('div')
    let leftBox = document.createElement('div')
    let name = document.createElement('div')
    let singer = document.createElement('div')

    name.appendChild(document.createTextNode(fav.name))
    singer.appendChild(document.createTextNode(fav.singer))
    name.setAttribute('class', 'name')
    singer.setAttribute('class', 'singer')
    leftBox.append(name)
    leftBox.append(singer)

    let rightBox = document.createElement('div')
    let playIcon = document.createElement('img')
    playIcon.setAttribute('src', 'lib/play.png')
    playIcon.setAttribute('class', 'playIcon')
    rightBox.appendChild(playIcon)

    body.setAttribute('class', 'favBody')
    body.appendChild(leftBox)
    body.appendChild(rightBox)

    li.appendChild(avatar)
    li.appendChild(body)
    li.setAttribute('data-id', fav.id)
    li.setAttribute('class', 'favItem')
    leftBox.setAttribute('class', 'leftbox')
    favNodeList.appendChild(li)
  }

  initEvent()
}

function initEvent() {
  let favNodeList = document.getElementById('favList')
  favNodeList.addEventListener('click', (e) => {
    // console.log('e.target22', e.path);
    let target = e.path.find(item => item.localName === 'li' && item.className === 'favItem')
    // console.log('target22', target);
    if (!target) {
      return
    }

    togglePlay(target)
  })

  let playBtn = document.getElementById('playbtn')
  let forwardBtn = document.getElementById('forwardbtn')
  playBtn.addEventListener('click', playAction)
  forwardBtn.addEventListener('click', forwardAction)
}

function getCurrentFavSong() {
  let path = myAudio.getAttribute('src')
  return favList.find(item => item.path === path)
}

function getNextFavSong(path) {
  let curIndex = favList.findIndex(item => item.path === path)
  if (curIndex !== -1) {
    if (curIndex + 1 >= favList.length) {
      return favList[0]
    }
    return favList[curIndex+1]
  }
  return favList[0]
}