let href = location.href;
const correctTop = "https://www.youtube.com/";

const goCorrectTop = () => {
  // 広告を消す状態にするとtopページでサインアウトじょうたいになるので正規のurlにとばす

  const isAdBlock = /youtube.com\./.test(href);
  const pathname = window.location.pathname;

  if (isAdBlock && pathname == "/") {
    window.location = correctTop;
  }
};

const goAdBloackVideo = () => {
  // ビデオの再生時広告を消す
  const hostname = window.location.hostname;
  const pathname = window.location.pathname;
  const search = window.location.search;
  const isWacth = /watch/.test(href);
  const isAdBlock = /youtube.com\./.test(href);

  if (isWacth && !isAdBlock) {
    const adBloackhostname = hostname.replace("com", "com.");
    window.location = "https://" + adBloackhostname + pathname + search;
  }
};

const observer = new MutationObserver(function (mutations) {
  if (href !== location.href) {
    // console.log("Before:", href);
    // console.log("After:", location.href);
    href = location.href;
    goCorrectTop();
    goAdBloackVideo();
  }
});

observer.observe(document, { childList: true, subtree: true });

goCorrectTop();
goAdBloackVideo();
