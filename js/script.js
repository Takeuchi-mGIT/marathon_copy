// スクロールイベントを追加
window.onscroll = function() {
    scrollFunction();
};

// スクロール位置に応じてボタンを表示・非表示にする関数
function scrollFunction() {
    const entryBtn = document.getElementById("entryBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        entryBtn.style.display = "block"; // ボタンを表示
        setTimeout(() => {
            entryBtn.style.opacity = "1"; // 徐々に表示
        }, 10); // 非表示から表示までの遅延
    } else {
        entryBtn.style.opacity = "0"; // 徐々に非表示
        setTimeout(() => {
            entryBtn.style.display = "none"; // 完全に非表示
        }, 500); // アニメーション終了後に非表示にする遅延
    }
}

// エントリーにリダイレクトする関数
function entryFunction() {
    window.location.href = "https://forms.gle/hbs6B3RTNBuG8qZE9";
}

// ページトップに戻る関数
function topFunction() {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
}

// スムーズスクロールの関数
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Bootstrapのデフォルトのスライドタイミングを変更
$('.carousel').carousel({
    interval: 4000 // スライドの間隔を4秒に設定（ミリ秒単位）
});
