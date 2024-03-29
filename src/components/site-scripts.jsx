import React from "react";
import { Script } from "gatsby";

const trackingFacebookPixel = `
<!-- Facebook Pixel Code -->
    !(function (f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function () {
            n.callMethod
                ? n.callMethod.apply(n, arguments)
                : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = "2.0";
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
    })(
        window,
        document,
        "script",
        "https://connect.facebook.net/en_US/fbevents.js"
    );
    fbq("init", "322337645564245");
    fbq("track", "PageView");`;

const trackingActiveCampaign = `
<!-- ActiveCampaign -->
(function (e, t, o, n, p, r, i) {
    e.visitorGlobalObjectAlias = n;
    e[e.visitorGlobalObjectAlias] =
        e[e.visitorGlobalObjectAlias] ||
        function () {
            (e[e.visitorGlobalObjectAlias].q =
                e[e.visitorGlobalObjectAlias].q || []).push(arguments);
        };
    e[e.visitorGlobalObjectAlias].l = new Date().getTime();
    r = t.createElement("script");
    r.src = o;
    r.async = true;
    i = t.getElementsByTagName("script")[0];
    i.parentNode.insertBefore(r, i);
})(
    window,
    document,
    "https://diffuser-cdn.app-us1.com/diffuser/diffuser.js",
    "vgo"
);
vgo("setAccount", "68450342");
vgo("setTrackByDefault", true);

vgo("process");
`;

const trackingAccessibility = `
<!-- Accessibility Code for "onmed.com" -->
window.interdeal = {
    sitekey: "09c07391dee5e65c1eff38c8656a13c7",
    Position: "Right",
    Menulang: "EN",
    domains: {
        js: "https://cdn.equalweb.com/",
        acc: "https://access.equalweb.com/",
    },
    btnStyle: {
        vPosition: ["80%", null],
        color: {
            main: "#1876c9",
            second: "#ffffff",
        },
        icon: {
            type: 7,
            shape: "circle",
            outline: false,
        },
    },
};
(function (doc, head, body) {
    var coreCall = doc.createElement("script");
    coreCall.src = "https://cdn.equalweb.com/core/4.3.2/accessibility.js";
    coreCall.defer = true;
    coreCall.integrity =
        "sha512-73oZhkzO+7F1r8AXT5BtChHyVvx8GMuB3Pokx6jdnP5Lw7xyBUO4L5KKi7BwqovhoqOWjNmkah1iCiMniyt6Kw==";
    coreCall.crossOrigin = "anonymous";
    coreCall.setAttribute("data-cfasync", true);
    body ? body.appendChild(coreCall) : head.appendChild(coreCall);
})(document, document.head, document.body);
`;

const trackingZoom = `<!-------Zoom Info------>

(function () {
    const ziScript = document.createElement('script');
    ziScript.type = 'text/javascript';
    ziScript.async = true;
    ziScript.referrerPolicy = 'unsafe-url';
    ziScript.innerHTML = \`
    window[(function(_Pam,_MW){var _LR='';for(var _aR=0;_aR<_Pam.length;_aR++){_yp!=_aR;var _yp=_Pam[_aR].charCodeAt();_yp-=_MW;_LR==_LR;_MW>1;_yp+=61;_yp%=94;_yp+=33;_LR+=String.fromCharCode(_yp)}return _LR})(atob('XUxTdXJtaGZ3Tmh8'), 3)] = '1f26ac1c3d1679921781'; var zi = document.createElement('script'); (zi.type = 'text/javascript'), (zi.async = true), (zi.src = (function(_SUE,_e6){var _9c='';for(var _B6=0;_B6<_SUE.length;_B6++){_mj!=_B6;var _mj=_SUE[_B6].charCodeAt();_mj-=_e6;_mj+=61;_9c==_9c;_mj%=94;_mj+=33;_e6>7;_9c+=String.fromCharCode(_mj)}return _9c})(atob('Mz8/Oz5jWFg1PldFNFY+Lj00Oz8+Vy46OFhFNFY/LDJXNT4='), 41)), document.readyState === 'complete'?document.body.appendChild(zi): window.addEventListener('load', function(){ document.body.appendChild(zi) });
    \`;
    const firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(ziScript, firstScript);
})();
`;

const trackingGoogleAnalyticsLink = `https://www.googletagmanager.com/gtag/js?id=UA-135158659-1`;

const trackingGoogleAnalytics = `
<!---------------GOOGLE ANALYTICS------------->
    window.dataLayer = window.dataLayer || [];
    function gtag() {
        dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "UA-135158659-1");`;

// const connectionsScripts = `<script src="https://code.jquery.com/jquery-latest.min.js"></script>
// <script src="https://musclesoft.github.io/jquery-connections/jquery.connections.js"></script>`;

const SiteScripts = (props) => {
    return (
        <>
            <Script
                id="tracking-facebook-pixel"
                dangerouslySetInnerHTML={{ __html: trackingFacebookPixel }}
            />
            <Script
                id="tracking-active-campaign"
                dangerouslySetInnerHTML={{ __html: trackingActiveCampaign }}
            />
            <Script
                id="tracking-accessibility-equalweb"
                dangerouslySetInnerHTML={{ __html: trackingAccessibility }}
            />
            <Script
                id="tracking-zoom"
                dangerouslySetInnerHTML={{ __html: trackingZoom }}
            />
            <Script
                id="tracking-google-analytics-link"
                src={trackingGoogleAnalyticsLink}
            />
            <Script
                id="tracking-google-analytics"
                dangerouslySetInnerHTML={{ __html: trackingGoogleAnalytics }}
            />
        </>
    );
};

export default SiteScripts;
