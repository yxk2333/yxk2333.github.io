"use strict";function _typeof5(t){return(_typeof5="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _typeof4(t){return(_typeof4="function"==typeof Symbol&&"symbol"==_typeof5(Symbol.iterator)?function(t){return _typeof5(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof5(t)})(t)}function _typeof3(t){return(_typeof3="function"==typeof Symbol&&"symbol"==_typeof4(Symbol.iterator)?function(t){return _typeof4(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof4(t)})(t)}function _typeof2(t){return(_typeof2="function"==typeof Symbol&&"symbol"==_typeof3(Symbol.iterator)?function(t){return _typeof3(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof3(t)})(t)}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(t){return _typeof2(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof2(t)})(t)}var blogNameWidth=$("#blog_name").width(),menusWidth=$(".menus").width(),sidebarWidth=$("#sidebar").width(),adjustMenu=function(t){var e=$("#nav");0===t||(1===t?blogNameWidth+menusWidth>e.width()-sidebarWidth-30:blogNameWidth+menusWidth>e.width()-30)?(e.find(".toggle-menu").addClass("is-visible-inline"),e.find(".menus_items").addClass("is-invisible"),e.find("#search_button span").addClass("is-invisible")):(e.find(".toggle-menu").removeClass("is-visible-inline"),e.find(".menus_items").removeClass("is-invisible"),e.find("#search_button span").removeClass("is-invisible"))},initAdjust=function(){window.innerWidth<768?adjustMenu(0):adjustMenu(2),$("#nav").css({opacity:"1",animation:"headerNoOpacity 1s"})},OpenSidebarAuto=function(){1024<window.innerWidth&&$("#toggle-sidebar").hasClass("on")&&setTimeout(function(){openSidebar()},400)},closeSidebar=function(){$("#sidebar").removeClass("tocOpenPc").animate({left:"-300px"},400),$(".menus").animate({paddingRight:0},400),$("#body-wrap").animate({paddingLeft:0},400),$("#toggle-sidebar").css({transform:"rotateZ(0deg)",color:"#1F2D3D",opacity:"1"}),setTimeout(function(){adjustMenu(2)},400)},openSidebar=function(){adjustMenu(1),$("#sidebar").addClass("tocOpenPc").animate({left:0},400),$(".menus").animate({paddingRight:300},400),$("#body-wrap").animate({paddingLeft:300},400),$("#toggle-sidebar").css({transform:"rotateZ(180deg)",color:"#99a9bf",opacity:"1"})},toggleSidebar=function(){$("#toggle-sidebar").on("click",function(){var t=$(this).hasClass("on");t?$(this).removeClass("on"):$(this).addClass("on"),(t?closeSidebar:openSidebar)()})},sidebarFn=function(){var e=$(".toggle-menu"),o=$("#mobile-sidebar-menus"),n=$("#mobile-toc-button"),i=$("#menu_mask"),a=$("body"),s=$("#sidebar");function t(t){sidebarPaddingR(),a.css("overflow","hidden"),i.fadeIn(),"menu"===t&&(e.removeClass("close").addClass("open"),o.addClass("open")),"toc"===t&&(n.removeClass("close").addClass("open"),s.addClass("tocOpenMobile").css({transform:"translate3d(-100%,0,0)",left:""}))}function c(t){a.css({overflow:"","padding-right":""}),i.fadeOut(),"menu"===t&&(e.removeClass("open").addClass("close"),o.removeClass("open")),"toc"===t&&(n.removeClass("open").addClass("close"),s.removeClass("tocOpenMobile").css({transform:""}))}e.on("click",function(){t("menu")}),n.on("click",function(){t("toc")}),i.on("click touchstart",function(t){e.hasClass("open")&&c("menu"),n.hasClass("open")&&c("toc")}),$(window).on("resize",function(t){e.is(":visible")||e.hasClass("open")&&c("menu")}),window.matchMedia("(max-width: 1024px)").addListener(function(t){t.matches?s.hasClass("tocOpenPc")&&closeSidebar():($("#toggle-sidebar").hasClass("on")&&openSidebar(),n.hasClass("open")&&c("toc"))}),s.find(".toc-link").on("click",function(t){window.innerWidth<=1024?c("toc"):(t.preventDefault(),scrollToDest(decodeURI($(this).attr("href"))))})},scrollDownInIndex=function(){$("#scroll_down").on("click",function(){scrollToDest("#content-inner")})},addHighlightTool=function(){var o,n,i,a,t=$("figure.highlight"),e=GLOBAL_CONFIG.highlightCopy,s=GLOBAL_CONFIG.highlightLang,c=GLOBAL_CONFIG_SITE.isHighlightShrink;t.length&&(e||s||void 0!==c)&&(i=!(n=o="")===c?"closed":"",void 0!==c&&(o='<i class="fas fa-angle-down expand '.concat(i,'"></i>')),e&&(n='<div class="copy-notice"></div><i class="fas fa-paste copy-button"></i>'),s?t.each(function(){var t=$(this);"plain"!==(a=t.attr("class").split(" ")[1])&&void 0!==a||(a="Code");var e='<div class="code-lang">'.concat(a,"</div>");t.prepend('<div class="highlight-tools '.concat(i,'">').concat(o+e+n,"</div>"))}):t.prepend('<div class="highlight-tools '.concat(i,'">').concat(o+n,"</div>")),void 0!==c&&t.find(".highlight-tools >.expand").on("click",function(){var t=$(this),e=t.parent().nextAll();t.toggleClass("closed"),e.is(":visible")?e.css("display","none"):e.css("display","block")}),e&&t.find(".highlight-tools >.copy-button").on("click",function(){var t=$(this).parents("figure.highlight");t.addClass("copy-true");var e,o=window.getSelection(),n=document.createRange();n.selectNodeContents(t.find("table .code pre")[0]),o.removeAllRanges(),o.addRange(n),o.toString(),e=this,document.queryCommandSupported&&document.queryCommandSupported("copy")?(document.execCommand("copy"),void 0!==GLOBAL_CONFIG.Snackbar?snackbarShow(GLOBAL_CONFIG.copy.success):$(e).prev(".copy-notice").text(GLOBAL_CONFIG.copy.success).animate({opacity:1},450,function(){setTimeout(function(){$(e).prev(".copy-notice").animate({opacity:0},650)},400)})):void 0!==GLOBAL_CONFIG.Snackbar?snackbarShow(GLOBAL_CONFIG.copy.noSupport):$(e).prev(".copy-notice").text(GLOBAL_CONFIG.copy.noSupport),o.removeAllRanges(),t.removeClass("copy-true")}))};function addPhotoFigcaption(){$("#article-container img").not(".justified-gallery img").each(function(t,e){var o,n=$(e);n.attr("alt")&&(o=$('<div class="img-alt is-center">'+n.attr("alt")+"</div>"),n.after(o))})}var detectJgJsLoad=!1,runJustifiedGallery=function(){var t,e=$(".justified-gallery");e.length&&((t=e.find("img")).unwrap(),t.length&&t.each(function(t,e){$(e).attr("data-lazy-src")&&$(e).attr("src",$(e).attr("data-lazy-src")),$(e).wrap("<div></div>")}),detectJgJsLoad?initJustifiedGallery(e):($("head").append('<link rel="stylesheet" type="text/css" href="'.concat(GLOBAL_CONFIG.justifiedGallery.css,'">')),$.getScript("".concat(GLOBAL_CONFIG.justifiedGallery.js),function(){initJustifiedGallery(e)}),detectJgJsLoad=!0))},addLightBox=function(){var o,t=GLOBAL_CONFIG.medium_zoom;GLOBAL_CONFIG.fancybox?($("#article-container img:not(.gallery-group-img)").not($("a>img")).each(function(t,e){var o=$(e).attr("data-lazy-src")?$(e).attr("data-lazy-src"):$(e).attr("src"),n=$(e).attr("alt")?$(e).attr("alt"):"";$(e).wrap('<a href="'.concat(o,'" data-fancybox="group" data-caption="').concat(n,'" class="fancybox"></a>'))}),$().fancybox({selector:"[data-fancybox]",loop:!0,transitionEffect:"slide",protect:!0,buttons:["slideShow","fullScreen","thumbs","close"],hash:!1})):t&&(o=mediumZoom(document.querySelectorAll("#article-container :not(a)>img"))).on("open",function(t){var e="dark"===$(document.documentElement).attr("data-theme")?"#121212":"#fff";o.update({background:e})})},scrollFn=function(){var n=0,i=!0,a=$("#rightside"),s=$("#nav"),c="function"==typeof chatBtnHide,r="function"==typeof chatBtnShow;$(window).scroll(throttle(function(t){var e=$(this).scrollTop(),o=n<e;56<(n=e)?(o?(s.hasClass("visible")&&s.removeClass("visible"),r&&!0===i&&(chatBtnHide(),i=!1)):(s.hasClass("visible")||s.addClass("visible"),c&&!1===i&&(window.chatBtnShow(),i=!0)),s.addClass("fixed"),"0"===a.css("opacity")&&a.css({opacity:"1",transform:"translateX(-38px)"})):(0===e&&s.removeClass("fixed").removeClass("visible"),a.css({opacity:"",transform:""}))},200))},tocFn=function(){$(".toc-child").hide(),$(window).scroll(throttle(function(t){var e=$(this).scrollTop();o(e),n(e),i(e)},100));var o=function(t){var e=$("#article-container").height(),o=$(window).height(),n=t/(o<e?e-o:$(document).height()-o),i=Math.round(100*n),a=100<i?100:i<=0?0:i;$(".progress-num").text(a),$(".sidebar-toc__progress-bar").animate({width:a+"%"},100)},r=GLOBAL_CONFIG.isanchor,d=5<=GLOBAL_CONFIG.hexoversion.split(".")[0],n=function(e){if(0===$(".toc-link").length)return!1;var t=$("#article-container").find("h1,h2,h3,h4,h5,h6"),o="";t.each(function(){var t=$(this);e>t.offset().top-25&&(o=d?"#"+encodeURI($(this).attr("id")):"#"+$(this).attr("id"))}),""===o&&($(".toc-link").removeClass("active"),$(".toc-child").hide());var n,i,a,s,c=$(".toc-link.active");o&&c.attr("href")!==o&&(!r||window.history.replaceState&&o!==window.location.hash&&window.history.replaceState(void 0,void 0,o),$(".toc-link").removeClass("active"),(n=$('.toc-link[href="'+o+'"]')).addClass("active"),(s=(a=0<(i=n.parents(".toc-child")).length?i.last():n).closest(".toc-item").find(".toc-child")).is(":visible")||s.fadeIn(400),a.closest(".toc-item").siblings(".toc-item").find(".toc-child").hide())},i=function(t){var e,o;$(".toc-link").hasClass("active")&&(e=$(".active").offset().top,o=$("#sidebar .sidebar-toc__content").scrollTop(),e>t+$(window).height()-100&&$("#sidebar .sidebar-toc__content").scrollTop(o+100),e<t+100&&$("#sidebar .sidebar-toc__content").scrollTop(o-100))}},$rightsideEle=$("#rightside");$rightsideEle.on("click","#readmode",function(){$("body").toggleClass("read-mode")});var switchReadMode,originFontSize=$("body").css("font-size");$rightsideEle.on("click","#font_plus",function(){var t=parseFloat($("body").css("font-size"));t<20&&$("body").css("font-size",t+1)}),$rightsideEle.on("click","#font_minus",function(){var t=parseFloat($("body").css("font-size"));10<t&&$("body").css("font-size",t-1)}),$("#darkmode").length&&(switchReadMode=function(){"light"==("dark"===document.documentElement.getAttribute("data-theme")?"dark":"light")?(activateDarkMode(),Cookies.set("theme","dark",2),void 0!==GLOBAL_CONFIG.Snackbar&&snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)):(activateLightMode(),Cookies.set("theme","light",2),void 0!==GLOBAL_CONFIG.Snackbar&&snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day))},$rightsideEle.on("click","#darkmode",function(){switchReadMode(),"function"==typeof utterancesTheme&&utterancesTheme(),"object"===("undefined"==typeof FB?"undefined":_typeof(FB))&&window.loadFBComment(),window.DISQUS&&$("#disqus_thread").children().length&&setTimeout(function(){return window.disqusReset()},200)})),$rightsideEle.on("click","#rightside_config",function(){return $("#rightside-config-hide").toggleClass("show")}),$rightsideEle.on("click","#go-up",function(){return scrollToDest("body")});var clickFnOfSubMenu=function(){$("#mobile-sidebar-menus .expand").on("click",function(){$(this).parents(".menus_item").find("> .menus_item_child").slideToggle(),$(this).toggleClass("closed")}),$(window).on("touchmove",function(t){var e=$("#nav .menus_item_child");e.is(":visible")&&e.css("display","none")})},addCopyright=function(){var n=GLOBAL_CONFIG.copyright;document.body.oncopy=function(t){t.preventDefault();var e=window.getSelection(0).toString(),o=e.length>n.limitCount?e+"\n\n\n"+n.languages.author+"\n"+n.languages.link+window.location.href+"\n"+n.languages.source+"\n"+n.languages.info:e;return t.clipboardData?t.clipboardData.setData("text",o):window.clipboardData.setData("text",o)}},addRuntime=function(){var t,e=$("#webinfo-runtime-count");e.length&&(t=e.attr("publish_date"),e.text(diffDate(t)+" "+GLOBAL_CONFIG.runtime_unit))},addTableWrap=function(){$("#article-container table").not($("figure.highlight > table")).each(function(){$(this).wrap('<div class="table-wrap"></div>')})},pushToBaidu=function(){var t=document.createElement("script"),e=window.location.protocol.split(":")[0];t.src="https"===e?"https://zz.bdstatic.com/linksubmit/push.js":"http://push.zhanzhang.baidu.com/push.js",t.dataset.pjax="";var o=document.getElementsByTagName("script")[0];o.parentNode.insertBefore(t,o)},clickFnOfTagHide=function(){var t=$(".hide-button");t.length&&t.on("click",function(t){var e=$(this),o=$(this).next(".hide-content");e.toggleClass("open"),o.toggle(),e.hasClass("open")&&0<o.find(".justified-gallery").length&&initJustifiedGallery(o.find(".justified-gallery"))})},clickFnOfTabs=function(){$("#article-container .tabs").find(".tab > button").on("click",function(t){var e,o,n,i=$(this),a=i.parent();a.hasClass("active")||(e=i.parents(".nav-tabs").next(),a.siblings(".active").removeClass("active"),a.addClass("active"),o=i.attr("data-href"),e.find("> .tab-item-content").removeClass("active"),e.find("> ".concat(o)).addClass("active"),0<(n=e.find(o).find(".justified-gallery")).length&&initJustifiedGallery(n))})},toggleCardCategory=function(){$(".card-category-list-item.parent i").on("click",function(t){t.preventDefault();var e=$(this);e.toggleClass("expand"),e.parents(".parent").next().toggle()})},switchComments=function(){var t=!1;$("#switch-comments-btn").on("click",function(){$("#post-comment > .comment-wrap > div").each(function(){$(this).is(":visible")?$(this).hide():$(this).css({display:"block",animation:"tabshow .5s"})}),t||"function"!=typeof loadOtherComment||(t=!0,loadOtherComment())})},addPostOutdateNotice=function(){var t,e=GLOBAL_CONFIG.noticeOutdate,o=diffDate(GLOBAL_CONFIG_SITE.postUpdate);o>=e.limitDay&&(t='<div class="post-outdate-notice">'.concat(e.messagePrev+" "+o+" "+e.messageNext,"</div>"),"top"===e.position?$("#article-container").prepend(t):$("#article-container").append(t))};GLOBAL_CONFIG.islazyload&&(window.lazyLoadOptions={elements_selector:"img",threshold:0,data_src:"lazy-src"},window.addEventListener("LazyLoad::Initialized",function(t){window.lazyLoadInstance=t.detail.instance},!1));var unRefreshFn=function(){$(window).on("resize",function(){window.innerWidth<768?adjustMenu(0):$("#sidebar").hasClass("tocOpenPc")&&$("#nav").hasClass("fixed")?adjustMenu(1):adjustMenu(2)}),clickFnOfSubMenu(),void 0!==GLOBAL_CONFIG.copyright&&addCopyright(),GLOBAL_CONFIG.baiduPush&&pushToBaidu()},refreshFn=function(){initAdjust(),GLOBAL_CONFIG_SITE.isPost&&(OpenSidebarAuto(),toggleSidebar(),GLOBAL_CONFIG_SITE.isSidebar&&tocFn(),void 0!==GLOBAL_CONFIG.noticeOutdate&&addPostOutdateNotice()),sidebarFn(),GLOBAL_CONFIG_SITE.isHome&&scrollDownInIndex(),addHighlightTool(),GLOBAL_CONFIG.isPhotoFigcaption&&addPhotoFigcaption(),runJustifiedGallery(),addLightBox(),scrollFn(),GLOBAL_CONFIG.runtime&&addRuntime(),addTableWrap(),clickFnOfTagHide(),clickFnOfTabs(),toggleCardCategory(),switchComments()};$(function(){refreshFn(),unRefreshFn()});