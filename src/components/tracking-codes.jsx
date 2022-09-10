export const trackingFacebookPixel = `<!-- Facebook Pixel Code -->
      
<script>
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
    fbq("track", "PageView");
</script>
      <noscript>
         <img
        height="1"
        width="1"
        src="https://www.facebook.com/tr?id=322337645564245&ev=PageView&noscript=1"
    />
          </noscript
>`;

export const trackingActiveCampaign = `<!-- ActiveCampaign -->
<script type="text/javascript">
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
</script>`;

export const trackingAccessibility = `<!-- Accessibility Code for "onmed.com" -->
<script>
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
</script>`;

export const trackingZoom = `<!-------Zoom Info------>
<script>
(function () {
    var zi = document.createElement("script");
    zi.type = "text/javascript";
    zi.async = true;
    zi.referrerPolicy = "unsafe-url";
    zi.src = "https://ws.zoominfo.com/pixel/6306496cf89d68d453b8c302";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(zi, s);
})();
</script>

<noscript>
<img
    src="https://ws.zoominfo.com/pixel/6306496cf89d68d453b8c302"
    width="1"
    height="1"
    style="display: none"
    alt="websights"
/>
</noscript>`;

export const trackingGoogle = `<!---------------GOOGLE ANALYTICS------------->
<!-- Global site tag (gtag.js) - Google Analytics -->
<script
    async
    src="https://www.googletagmanager.com/gtag/js?id=UA-135158659-1"
></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag() {
        dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "UA-135158659-1");
</script>`;

export const connectionsScripts = `<script src="https://code.jquery.com/jquery-latest.min.js"></script>
<script src="https://musclesoft.github.io/jquery-connections/jquery.connections.js"></script>`;
