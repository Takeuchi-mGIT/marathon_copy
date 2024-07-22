// スクロールイベントを追加
window.onscroll = function() {
    scrollFunction();
};

// スクロール位置に応じてボタンを表示・非表示にする関数
function scrollFunction() {
    const topBtn = document.getElementById("topBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topBtn.style.display = "block"; // ボタンを表示
        setTimeout(() => {
            topBtn.style.opacity = "1"; // 徐々に表示
        }, 10); // 非表示から表示までの遅延
    } else {
        topBtn.style.opacity = "0"; // 徐々に非表示
        setTimeout(() => {
            topBtn.style.display = "none"; // 完全に非表示
        }, 500); // アニメーション終了後に非表示にする遅延
    }
}

// ページトップに戻る関数
function topFunction() {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
}
