// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  // 이건 index.html에서 div id=player찾는거임
  new YT.Player("player", {
    videoId: "An6LvWQuj_8",
    playerVars: {
      autoplay: true,
      loop: true,
      playlist: "An6LvWQuj_8",
    },
    events: {
      onReady: function (event) {
        event.target.mute(); //준비가 되면 음소거
      },
    },
  });
}
// 와...이거 잘된다. 이거 예전에 내가 qraftec.com 만들려고 할때
// Sprint 영상 유튜브나 gif로 만들어서 적용하려고도 했었는데
// 이렇게 iframe사용하면 됐었던거네!!
