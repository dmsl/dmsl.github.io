$(document).on('click','.navbar-collapse.in',function(e) {
               if( $(e.target).is('a') ) {
               $(this).collapse('hide');
               }
               });

$(function () {
  $('#bs-example-navbar-collapse-1').on('shown.bs.collapse', function(e) {
                                        $('#my_dropdown').dropdown('toggle', 'open').hide();
                                        console.log('shown:', e);
                                        });
  });


function spiderjam(mym, myd){
    document.write("<a href=mailto:"	+ mym + "&#64;" + myd + ">" + mym + "&#64;" + myd + "</a>");
}

function firefox() {
    var browser=navigator.userAgent.toLowerCase();
    if(browser.indexOf('firefox') > -1) {
        $('#bs-example-navbar-collapse-2').toggle();
    }
}

function reset_menus() {
    sizing($(window).width());
}

// Take action if the request on URI has internal link '#'
function internal_link() {
    var urlArray = window.location.href.split('#');
    if (urlArray.length == 2 && urlArray[1] != "") {
        switch (urlArray[1]) {
            case "intro":        $('#tab-intro-content').show(); break;
            case "news":         $('#tab-news-content').show(); break;
            case "publications": $('#tab-publications-content').show(); break;
            case "awards":       $('#tab-awards-content').show(); break;
            case "courses":      $('#tab-courses-content').show(); break;
            case "systems":      $('#tab-systems-content').show(); break;
            case "links":        $('#tab-links-content').show(); break;
            case "service":      $('#tab-service-content').show(); break;
            case "advising":     $('#tab-advising-content').show(); break;
            case "contact":      $('#tab-contact-content').show(); break;
            default: break;
        }
    }
}

function sizing(windowWidth) {
    //alert(windowWidth);
    if(windowWidth < 1024){ // desktop size
        $('.twittertop').hide();
        $('.twitterlow').show();
    } else {
        $('.twittertop').show();
        $('.twitterlow').hide();
    }

    if(windowWidth <= 480){ // ipad:768, Nexus10:800, 480
        $('.allshow').hide(); //
        $('.noshow').show();
        $('.expandshow').show();
        $('.collapseshow').hide();
    } else {
        $('.allshow').show();
        $('.noshow').hide();
        $('.expandshow').hide();
        $('.collapseshow').hide();
    }
}

jQuery(document).ready(function($) {
                       var windowWidth = $(window).width();
                       $(window).resize(function(){
                                        // Check window width has actually changed and it's not just iOS triggering a resize event on scroll
                                        if ($(window).width() != windowWidth) {
                                        windowWidth = $(window).width();
                                        sizing(windowWidth);
                                        }
                                        });
                       sizing(windowWidth);
                       internal_link();
                       });


// Google Site Search | Search box
(function() {
 var cx = '012777421281883581498:r3xp4rmwevw';
 var gcse = document.createElement('script');
 gcse.type = 'text/javascript';
 gcse.async = true;
 gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
 '//cse.google.com/cse.js?cx=' + cx;
 var s = document.getElementsByTagName('script')[0];
 s.parentNode.insertBefore(gcse, s);
 })();

// Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
 (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
 m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
 })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-70658068-1', 'auto');
ga('send', 'pageview');


// Check if HTTPS website is available. If yes, then load it.
//////////////////////////////////////////////////////////////
/*var sslpage = "https:" + window.location.href.substring(window.location.protocol.length);
var request;

// Redirect to SSL (if available on server)
if (window.location.protocol != "https:") {
    
    if(window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    }
    else {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }
    alert(sslpage);
    request.open('GET', sslpage, false);
    request.send(); // there will be a 'pause' here until the response to come.
    // the object request is HTTP 200
    alert("HI");
    if (request.status === 200) {
      window.location.href = sslpage;
    }
}*/
// if (window.location.protocol != "https:")
//   window.location.href = "https:" + window.location.href.substring(window.location.protocol.length);
//////////////////////////////////////////////////////////////

