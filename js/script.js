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


// Keen Sliderの初期化
document.addEventListener('DOMContentLoaded', function () {
    new KeenSlider("#js-index-service-slider1", {
        loop: true,
        duration: 5000,
        spacing: 15,
        slidesPerView: 1,
        breakpoints: {
            '(min-width: 768px)': {
                slidesPerView: 3,
                spacing: 30
            },
            '(min-width: 1024px)': {
                slidesPerView: 4,
                spacing: 40
            }
        },
        animation: {
            duration: 5000,
            easing: (t) => t
        }
    });
});