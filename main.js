/*** Google Web Font ***/

WebFontConfig = {
    google: {
        families: ['Open+Sans:400italic,400,700:latin']
    },
    timeout: 3000
};

(function () {
    var html = $('html');
    html.addClass('wf-loading');
    html.addClass('wf-opensans-i4-loading');
    html.addClass('wf-opensans-n4-loading');
    html.addClass('wf-opensans-n7-loading');

    var wf = document.createElement('script');
    wf.src = '//ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
})();

/*** Main Menu ***/

(function (m) {
    $(function () {
        var s = $(m + '>a');

        function deactivatePage(p) {
            $(p).find('iframe').each(function () {
                if ($(this).attr('data-src'))
                    $(this).attr('src', '');
            });
        }

        function activatePage(p) {
            $(p).find('iframe').each(function () {
                var d = $(this).attr('data-src');
                if (d)
                    $(this).attr('src', d);
            });
        }

        function selectMenuItem(m) {
            $(s).each(function () {
                var h = $(this).attr('href');
                var p = $(h);
                deactivatePage(p);
                $(p).hide();
                $(this).removeClass('current');
            });
            var h = $(m).attr('href');
            var p = $(h);
            $(m).addClass('current');
            $(p).show();
            activatePage(p);
            return h;
        }

        function selectCurrentMenuItem() {
            var h = window.location.hash;
            if (!h.match('^#p=')) {
                $(s[0]).click();
            } else {
                var v = '#' + h.substring(3);
                var m = $(s).filter(function () {
                    return v === $(this).attr('href');
                });
                (m.length !== 0 ? m[0] : s[0]).click();
            }
        }

        $(s).each(function (i, u) {
            $(u).click(function (e) {
                e.preventDefault();
                window.location.hash = selectMenuItem(u).replace('#', '#p=');
            });
        });

        $('.page').find('a[href^="#"]').each(function (i, u) {
            $(u).click(function (e) {
                e.preventDefault();
                var h = $(u).attr('href');
                var r = $(h);
                $('html,body').animate({
                    scrollTop: $(r).offset().top
                }, 1000);
            });
        });

        $(window).on('hashchange', function (e) {
            e.preventDefault();
            selectCurrentMenuItem();
        });

        if (window.location.hash) {
            selectCurrentMenuItem();
        } else {
            selectMenuItem(s[0]);
        }
    });
})('#menu');

/*** Photo Gallery ***/

(function (p, t) {
    $(function () {
        $(p + '>img').each(function (i, e) {
            function selectImage(t) {
                e.src = '';
                e.width = $(t).attr('data-width');
                e.alt = t.alt;
                e.title = t.title;
                e.src = t.src.replace('.thumb', '');
            }

            $(t + '>img').each(function (i, u) {
                $(u).click(function () {
                    selectImage(u);
                });
                if (i === 0)
                    selectImage(u);
            });
        });
    });
})('#preview', '#thumbnails');

/*** Google Analytics ***/

(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-38710251-2', 'auto');
ga('send', 'pageview');

/*** Google+ ***/

window.___gcfg = {
    lang: 'de',
    parsetags: 'onload'
};

(function () {
    var po = document.createElement('script');
    po.type = 'text/javascript';
    po.async = true;
    po.src = 'https://apis.google.com/js/platform.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(po, s);
})();

/*** Facebook ***/

window.fbAsyncInit = function () {
    FB.init({
        appId: '303397089851290',
        xfbml: true,
        version: 'v2.1'
    });
};

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = '//connect.facebook.net/de_DE/sdk.js';
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
