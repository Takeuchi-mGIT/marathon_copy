window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var entryBtn = document.getElementById("entryBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        entryBtn.style.display = "block";
    } else {
        entryBtn.style.display = "none";
    }
}

function entryFunction() {
    window.location.href = 'https://forms.gle/hbs6B3RTNBuG8qZE9'; // エントリーページに遷移
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
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
