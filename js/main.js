// ドロップダウン
// .nav-bodyをマウスホバーすると、slideDown("fast")でulが表示される
$(".nav-body").hover(function () { 
  $("ul:not(:animated)", this).slideDown("fast"); //:not(:animated)でアニメーション実行中にマウスホバーされても処理が追加されないようになる
},
  function() {
  $("ul", this).slideUp("fast"); // マウスホバーが外れると、slideUp("fast")でulが非表示になる
  }
);

// ハンバーガーボタン
jQuery(function($) {
  $(".js-humburger").on("click",function() {
    $(this).toggleClass("is-open");
  $(".nav").toggleClass("is-open");
  });
});

jQuery(function($) {
  $(".nav-cross").hover(function() {
    $(this).toggleclass("open");
  });
});
jQuery(function($) {
  $(".nav-link li a").hover(function() {
    $(this).parents(".nav-body").find("a").toggleClass("open");
  });
});
// レスポンシブ時に開いているハンバーガーメニューを閉じる
$(window).on('resize',function() {
  $(".js-humburger").removeClass("is-open");
  $(".nav").removeClass("is-open");
});
