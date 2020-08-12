//<![CDATA[
function loadCSS(e, t, o) {
    "use strict";
    var s = window.document.createElement("link"),
        a = t || window.document.getElementsByTagName("script")[0];
    s.rel = "stylesheet", s.href = e, s.media = "only x", a.parentNode.insertBefore(s, a), setTimeout(function() {
        s.media = o || "all"
    })
}
loadCSS("https://fonts.googleapis.com/css?family=Roboto%3Aregular%2C100%7CRoboto+Slab%3A700%2Cregular&amp;subset=latin%2Call&amp;ver=4.9.8");
loadCSS("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
//]]>
