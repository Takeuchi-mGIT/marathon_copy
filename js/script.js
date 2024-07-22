// スクロールイベントを追加
window.onscroll = function() {
    scrollFunction();
};

// スクロール位置に応じてボタンを表示・非表示にする関数
function scrollFunction() {
    const topBtn = document.getElementById("topBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}

// ページトップに戻る関数
function topFunction() {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
}
