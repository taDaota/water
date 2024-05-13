(this["webpackJsonpgeolonia-pwa"]=this["webpackJsonpgeolonia-pwa"]||[]).push([[0],{108:function(e,t,n){},111:function(e,t,n){},112:function(e,t,n){},135:function(e,t,n){},136:function(e,t,n){},137:function(e,t,n){},138:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(31),i=n.n(r),s=n(13),o=n(29),l=n(7),j=n(38),d=n(30),u=n.n(d),b=n(6),h=(n(78),n(61)),x=n.n(h),O=function(e){var t={type:"FeatureCollection",features:[]};for(var n in e){var c=e[n];if(!c["\u7d4c\u5ea6"]||!c["\u7def\u5ea6"]||!c["\u30b9\u30dd\u30c3\u30c8\u540d"])return;for(var a={type:"Feature",geometry:{type:"Point",coordinates:[Number(c["\u7d4c\u5ea6"]),Number(c["\u7def\u5ea6"])]},properties:{_id:n}},r=0;r<Object.keys(c).length;r++){var i=Object.keys(c)[r];a.properties[i]=c[i]}t.features.push(a)}return t},p=function(e){e.addLayer({id:"clusters",type:"circle",source:"shops",filter:["has","point_count"],paint:{"circle-radius":20,"circle-color":"#FF0000","circle-opacity":1}}),e.addLayer({id:"cluster-count",type:"symbol",source:"shops",filter:["has","point_count"],paint:{"text-color":"#FFFFFF"},layout:{"text-field":"{point_count_abbreviated} \u4ef6","text-size":12,"text-font":["Noto Sans Regular"]}}),e.on("click","clusters",(function(t){var n=e.queryRenderedFeatures(t.point,{layers:["clusters"]}),c=n[0].properties.cluster_id;e.getSource("shops").getClusterExpansionZoom(c,(function(t,c){t||e.easeTo({center:n[0].geometry.coordinates,zoom:c})}))})),e.on("mouseenter","clusters",(function(){e.getCanvas().style.cursor="pointer"})),e.on("mouseleave","clusters",(function(){e.getCanvas().style.cursor=""}))},f=n(18),m=(n(85),n(2)),g=function(e){e.stopPropagation()},v=function(e){return Object(m.jsxs)("div",{className:"links",children:[e.data.Instagram?Object(m.jsx)("div",{className:"link",children:Object(m.jsx)("a",{href:"https://instagram.com/".concat(e.data.Instagram),children:Object(m.jsx)(f.d,{onClick:g,size:"20px"})})}):"",e.data.Twitter?Object(m.jsx)("div",{className:"link",children:Object(m.jsx)("a",{href:"https://twitter.com/".concat(e.data.Twitter),children:Object(m.jsx)(f.h,{onClick:g,size:"20px"})})}):"",e.data.Facebook?Object(m.jsx)("div",{className:"link",children:Object(m.jsx)("a",{href:"https://www.facebook.com/".concat(e.data.Facebook),children:Object(m.jsx)(f.b,{onClick:g,size:"20px"})})}):"",e.data["\u516c\u5f0f\u30b5\u30a4\u30c8"]?Object(m.jsx)("div",{className:"link",children:Object(m.jsx)("a",{href:e.data["\u516c\u5f0f\u30b5\u30a4\u30c8"],children:Object(m.jsx)(f.c,{onClick:g,size:"20px"})})}):""]})},w=(n(87),n(39)),y=function(e){var t="";return"number"!==typeof e||Number.isNaN(e)||(t=e>1e3?Math.round(e/1e3)+" km":Math.round(e)+" m"),t},N=function(e){var t=a.a.useRef(null),n=a.a.useState(null),c=Object(l.a)(n,2),r=c[0],i=c[1],o=e.shop,j=function(){e.close(),t.current&&(t.current.remove(),r&&r.remove())};a.a.useEffect((function(){if(t.current){var e=new window.geolonia.Map({container:t.current,interactive:!1,zoom:14,style:"geolonia/gsi"});i(e)}}),[o,t]);var d,u=y(o.distance),b=o["\u30ab\u30c6\u30b4\u30ea"],h=o["\u7d39\u4ecb\u6587"];return Object(m.jsxs)("div",{className:"shop-single",children:[Object(m.jsx)("div",{className:"head",children:Object(m.jsxs)("button",{onClick:j,children:[Object(m.jsx)(w.b,{size:"16px",color:"#FFFFFF"})," \u9589\u3058\u308b"]})}),Object(m.jsx)("div",{className:"container",style:{minHeight:"200px",overflow:"auto"},children:o?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h2",{children:o["\u30b9\u30dd\u30c3\u30c8\u540d"]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("span",{className:"nowrap",children:Object(m.jsx)(s.b,{to:"/list?category=".concat(b),children:Object(m.jsx)("span",{onClick:j,className:"category",children:b})})}),Object(m.jsx)("span",{className:"nowrap",children:u&&Object(m.jsxs)("span",{className:"distance",children:["\u73fe\u5728\u4f4d\u7f6e\u304b\u3089 ",u]})})]}),Object(m.jsx)("div",{style:{margin:"24px 0"},children:Object(m.jsx)(v,{data:o})}),o["\u753b\u50cf"]&&Object(m.jsx)("img",{src:o["\u753b\u50cf"],alt:o["\u30b9\u30dd\u30c3\u30c8\u540d"],style:{width:"100%"}}),Object(m.jsx)("p",{style:{margin:"24px 0",wordBreak:"break-all"},children:(d=h,d.split(/(\r\n)|(\n)|(\r)/g).map((function(e,t){var n="";return"\r\n"===e||"\n"===e||"\r"===e?n=Object(m.jsx)("br",{},t):void 0!==e&&(n=e),n})))}),Object(m.jsx)("div",{ref:t,style:{width:"100%",minHeight:"200px",marginTop:"24px"},"data-lat":o["\u7def\u5ea6"],"data-lng":o["\u7d4c\u5ea6"],"data-navigation-control":"off"}),Object(m.jsx)("a",{className:"small",href:"https://www.google.com/maps/dir/?api=1&destination=".concat(o["\u7def\u5ea6"],",").concat(o["\u7d4c\u5ea6"]),target:"_blank",rel:"noopener noreferrer",children:"\u4f4d\u7f6e\u60c5\u5831\u3092\u30aa\u30f3\u306b\u3057\u3066\u9053\u9806\u3092\u78ba\u8a8d"})]}):Object(m.jsx)(m.Fragment,{})})]})},k={width:"100%",height:"100%",position:"relative"},F=function(e){for(var t=["poi","poi-primary","poi-r0-r9","poi-r10-r24","poi-r25","poi-bus","poi-entrance"],n=0;n<t.length;n++){var c=t[n];e.setLayoutProperty(c,"visibility","none")}},C=function(e){var t=(e||window.location).hash.substring(2);return new URLSearchParams(t)},S=function(e){var t=a.a.useRef(null),n=a.a.useState(),c=Object(l.a)(n,2),r=c[0],i=c[1],s=a.a.useState(void 0),o=Object(l.a)(s,2),j=o[0],d=o[1],u=a.a.useState(""),b=Object(l.a)(u,2),h=b[0],f=b[1];a.a.useEffect((function(){!function(e,t){e&&t&&e.on("render",(function(){if(!e.getSource("shops")){F(e);var n=O(t);e.addSource("shops",{type:"geojson",data:n,cluster:!0,clusterMaxZoom:14,clusterRadius:25}),e.addLayer({id:"shop-points",type:"circle",source:"shops",filter:["all",["==","$type","Point"]],paint:{"circle-radius":13,"circle-color":"#FF0000","circle-opacity":.4,"circle-stroke-width":2,"circle-stroke-color":"#FFFFFF","circle-stroke-opacity":1}}),e.addLayer({id:"shop-symbol",type:"symbol",source:"shops",filter:["all",["==","$type","Point"]],paint:{"text-color":"#000000","text-halo-color":"#FFFFFF","text-halo-width":2},layout:{"text-field":"{\u30b9\u30dd\u30c3\u30c8\u540d}","text-font":["Noto Sans Regular"],"text-variable-anchor":["top","bottom","left","right"],"text-radial-offset":.5,"text-justify":"auto","text-size":12,"text-anchor":"top","text-max-width":12,"text-allow-overlap":!1}}),e.on("mouseenter","shop-points",(function(){e.getCanvas().style.cursor="pointer"})),e.on("mouseleave","shop-points",(function(){e.getCanvas().style.cursor=""})),e.on("mouseenter","shop-symbol",(function(){e.getCanvas().style.cursor="pointer"})),e.on("mouseleave","shop-symbol",(function(){e.getCanvas().style.cursor=""})),e.on("click","shop-points",(function(e){e.features[0].properties.cluster||d(e.features[0].properties)})),e.on("click","shop-symbol",(function(e){e.features[0].properties.cluster||d(e.features[0].properties)})),p(e)}}))}(r,e.data)}),[r,e.data]),a.a.useEffect((function(){var e,t=C();h&&t.set("map",h),(e=t).toString()&&(window.location.hash="#/?".concat(e.toString().replace(/%2F/g,"/")))}),[h]),a.a.useEffect((function(){if(t.current&&!r){var n=window.geolonia,c=O(e.data),a=x()(c),s=new n.Map({container:t.current,style:"geolonia/gsi",bounds:a,fitBoundsOptions:{padding:50}}),o=C();if(o&&o.get("map")){var l=(o.get("map")||"").split("/"),j=l[0],d=l[1],u=l[2];s.flyTo({center:[u,d],zoom:j})}else a&&s.fitBounds(a,{padding:50});var b=function(){F(s),i(s),s.on("moveend",(function(){var e=s.getCenter(),t=s.getZoom(),n=Math.round(100*t)/100,c=Math.ceil((n*Math.LN2+Math.log(512/360/.5))/Math.LN10),a=Math.pow(10,c),r=Math.round(e.lng*a)/a,i=Math.round(e.lat*a)/a,o=Math.ceil(n);f("".concat(o,"/").concat(i,"/").concat(r))}))},h=function(){s.resize()};return s.on("load",b),window.addEventListener("orientationchange",h),function(){window.removeEventListener("orientationchange",h),s.off("load",b)}}}),[t,r,e.data]);return Object(m.jsxs)("div",{style:k,children:[Object(m.jsx)("div",{ref:t,style:k,"data-geolocate-control":"on","data-marker":"off","data-gesture-handling":"off"}),j?Object(m.jsx)(N,{shop:j,close:function(){d(void 0)}}):Object(m.jsx)(m.Fragment,{})]})},M=function(e){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(S,{data:e.data})})},E=n(16),P=n(63),z=(n(88),function(e){var t=function(){e.popupHandler(e.data)},n=y(e.data.distance),c=e.data["\u30ab\u30c6\u30b4\u30ea"],a=e.data["\u753b\u50cf"],r=!!e.queryCategory;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"shop-link",children:[Object(m.jsx)("h2",{className:"shop-title",style:{wordBreak:"break-all"},onClick:t,children:e.data["\u30b9\u30dd\u30c3\u30c8\u540d"]}),Object(m.jsxs)("div",{className:"tag-box",children:[!r&&Object(m.jsx)("span",{className:"nowrap",children:Object(m.jsx)(s.b,{to:"/list?category=".concat(c),children:Object(m.jsx)("span",{className:"category",children:c})})}),Object(m.jsx)("span",{className:"nowrap",children:n&&Object(m.jsxs)("span",{className:"distance",children:["\u73fe\u5728\u4f4d\u7f6e\u304b\u3089 ",n]})})]}),Object(m.jsx)("div",{style:{margin:"10px 10px 10px 0"},children:a&&Object(m.jsx)("img",{src:a,alt:e.data["\u30b9\u30dd\u30c3\u30c8\u540d"],onClick:t})}),Object(m.jsx)("div",{className:"right",onClick:t,children:Object(m.jsx)(P.a,{size:"40px",color:"#CCCCCC"})})]})})}),A=(n(89),n(64)),L=n(44),_=function(){var e=Object(j.a)(u.a.mark((function e(t){var n,c,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e,t){window.navigator.geolocation&&window.navigator.geolocation.getCurrentPosition||e(null),window.navigator.geolocation.getCurrentPosition((function(t){var n=t.coords.latitude,c=t.coords.longitude;e([c,n])}),(function(t){e(null)}),{enableHighAccuracy:!0,timeout:5e3,maximumAge:0})}));case 2:if(!(n=e.sent)){e.next=10;break}return c=L.point(n),(a=t.map((function(e){var t=parseFloat(e["\u7d4c\u5ea6"]),n=parseFloat(e["\u7def\u5ea6"]);if(Number.isNaN(t)||Number.isNaN(n))return e;var a=L.point([t,n]),r=L.distance(c,a,{units:"meters"});return Object(o.a)(Object(o.a)({},e),{},{distance:r})}))).sort((function(e,t){return"number"!==typeof e.distance||Number.isNaN(e.distance)?1:"number"!==typeof t.distance||Number.isNaN(t.distance)?-1:e.distance-t.distance})),e.abrupt("return",a);case 10:return e.abrupt("return",t);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(e){var t=a.a.useState(),n=Object(l.a)(t,2),c=n[0],r=n[1],i=a.a.useState(e.data),o=Object(l.a)(i,2),j=o[0],d=o[1],u=a.a.useState([]),b=Object(l.a)(u,2),h=b[0],x=b[1],O=a.a.useState(10),p=Object(l.a)(O,2),f=p[0],g=p[1],v=a.a.useState(!0),w=Object(l.a)(v,2),y=w[0],k=w[1],F=Object(s.c)(),C=Object(l.a)(F,1)[0].get("category");a.a.useEffect((function(){var t=e.data;C&&(t=e.data.filter((function(e){return e["\u30ab\u30c6\u30b4\u30ea"]===C})));var n=!0;if(n){_(t).then((function(e){n&&(x(e.slice(0,f)),d(e))}))}return function(){n=!1}}),[e.data,C,f]);var S=function(e){e&&r(e)},M=Object(m.jsx)("div",{className:"loader",style:{width:"100%",height:"200px",textAlign:"center",position:"relative",top:"100px"},children:"\u5834\u6240\u4e00\u89a7\u3092\u8aad\u307f\u8fbc\u307f\u4e2d\u3067\u3059..."},0);return Object(m.jsxs)("div",{id:"shop-list",className:"shop-list",children:[C&&Object(m.jsx)("div",{className:"shop-list-category",children:"\u30a8\u30ea\u30a2\uff1a\u3010 ".concat(C," \u3011")}),Object(m.jsx)(A.a,{dataLength:h.length,next:function(){h.length>=j.length?k(!1):(x([].concat(Object(E.a)(h),Object(E.a)(j.slice(f,f+10)))),g(f+10))},hasMore:y,loader:M,scrollableTarget:"shop-list",children:h.map((function(e,t){return Object(m.jsx)("div",{className:"shop",children:Object(m.jsx)(z,{data:e,popupHandler:S,queryCategory:C})},t)}))}),c?Object(m.jsx)(N,{shop:c,close:function(){r(void 0)}}):Object(m.jsx)(m.Fragment,{})]})},T=(n(91),function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],a=t[1],r="".concat(".","/icon-pwamap.svg"),i=function(e){var t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth",block:"start"}),a(!1)};return Object(m.jsx)("div",{className:"about-us",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("div",{className:"hamburger",onClick:function(){a(!n)},children:n?Object(m.jsx)(f.g,{}):Object(m.jsx)(f.a,{})}),n&&Object(m.jsxs)("div",{className:"menu",children:[Object(m.jsx)("button",{onClick:function(){return i("branding")},children:"\u4eac\u90fd\u6e67\u304d\u6c34\u30de\u30c3\u30d7\u306b\u3064\u3044\u3066"}),Object(m.jsx)("button",{onClick:function(){return i("directions")},children:"\u9053\u9806\u306e\u78ba\u8a8d\u65b9\u6cd5"}),Object(m.jsx)("button",{onClick:function(){return i("currentLocation")},children:"MAP\u3067\u73fe\u5728\u4f4d\u7f6e\u3092\u8868\u793a\u3059\u308b\u65b9\u6cd5"}),Object(m.jsx)("button",{onClick:function(){return i("appUsage")},children:"\u30a2\u30d7\u30ea\u306e\u3088\u3046\u306b\u4f7f\u3046"}),Object(m.jsx)("button",{onClick:function(){return i("culturalEducation")},children:"\u4eac\u90fd\u5e02\u6587\u5316\u8ca1\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u80b2\u6210\u8b1b\u5ea7\u3068\u306f"})]}),Object(m.jsxs)("div",{id:"branding",className:"branding",children:[Object(m.jsx)("div",{className:"image",children:Object(m.jsx)("img",{src:r,alt:"PWAMap Icon"})}),Object(m.jsx)("div",{className:"logo",children:"\u4eac\u90fd\u6e67\u304d\u6c34\u30de\u30c3\u30d7"}),Object(m.jsx)("br",{}),Object(m.jsxs)("p",{style:{textAlign:"left"},children:["\u8ab0\u3067\u3082\u6c72\u3081\u308b\u4eac\u90fd\u5e02\u5185\u306e\u6e67\u304d\u6c34\u3092\u7d39\u4ecb\u3059\u308b\u30a6\u30a7\u30d6\u30a2\u30d7\u30ea\u3067\u3059\u3002\u5404\u6e67\u304d\u6c34\u51e6\u306b\u6c7a\u307e\u308a\u4e8b\u304c\u3042\u308a\u307e\u3059\u3002\u30eb\u30fc\u30eb\u306b\u5f93\u3063\u3066\u304a\u6c34\u3092\u9802\u304d\u307e\u3057\u3087\u3046\u3002",Object(m.jsx)("br",{})]}),Object(m.jsx)("p",{style:{textAlign:"left"},children:"\u203b\u3053\u306e\u30de\u30c3\u30d7\u306f\u53e4\u6750\u6587\u5316\u306e\u4f1a\u304c\u4e3b\u5bb0\u3059\u308b\u300c\u4eac\u90fd\u5e02\u6587\u5316\u8ca1\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u80b2\u6210\u8b1b\u5ea7\u300d\u306e\u8ab2\u984c\u306e\u4e00\u74b0\u3068\u3057\u3066\u4f5c\u6210\u3055\u308c\u307e\u3057\u305f\u3002"})]}),Object(m.jsxs)("section",{id:"directions",children:[Object(m.jsx)("h3",{children:"\u9053\u9806\u306e\u78ba\u8a8d\u65b9\u6cd5"}),Object(m.jsxs)("ol",{children:[Object(m.jsxs)("li",{children:["\u3010\u8a2d\u5b9a\u3011\u30a2\u30d7\u30ea\u3092\u958b\u304f",Object(m.jsx)("br",{})]}),Object(m.jsxs)("li",{children:["\u3010\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u3068\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u3011\u3092\u30bf\u30c3\u30d7",Object(m.jsx)("br",{})]}),Object(m.jsxs)("li",{children:["\u3010\u4f4d\u7f6e\u60c5\u5831\u30b5\u30fc\u30d3\u30b9\u3011\u3092\u30aa\u30f3",Object(m.jsx)("br",{})]}),Object(m.jsx)("li",{children:" \u6e67\u304d\u6c34\u7d39\u4ecb\u306e\u30da\u30fc\u30b8\u4e0b\u90e8\u306e\u300c\u4f4d\u7f6e\u60c5\u5831\u3092\u30aa\u30f3\u306b\u3057\u3066\u9053\u9806\u3092\u78ba\u8a8d\u300d\u3092\u30bf\u30c3\u30d7"})]})]}),Object(m.jsxs)("section",{id:"currentLocation",children:[Object(m.jsx)("h3",{children:"MAP\u3067\u73fe\u5728\u4f4d\u7f6e\u3092\u8868\u793a\u3059\u308b\u65b9\u6cd5"}),Object(m.jsxs)("ol",{children:[Object(m.jsxs)("li",{children:["\u3010\u4f4d\u7f6e\u60c5\u5831\u30b5\u30fc\u30d3\u30b9\u3011\u3092\u30aa\u30f3\u306b\u3057\u3001\u4f7f\u7528\u3057\u3066\u3044\u308b\u30d6\u30e9\u30a6\u30b6\u3092\u9078\u629e",Object(m.jsx)("br",{})]}),Object(m.jsxs)("li",{children:["\u3010\u3053\u306e\u30a2\u30d7\u30ea\u306e\u4f7f\u7528\u4e2d\u3011\u3092\u9078\u629e\u3057\u3001\u3010\u6b63\u78ba\u306a\u4f4d\u7f6e\u60c5\u5831\u3011\u30c8\u30b0\u30eb\u30b9\u30a4\u30c3\u30c1\u304c\u30aa\u30f3\u3067\u3042\u308b\u3053\u3068\u3092\u78ba\u8a8d",Object(m.jsx)("br",{})]}),Object(m.jsxs)("li",{children:[" \u7acb\u3061\u4e0a\u3052\u753b\u9762\u306eMAP\u53f3\u4e0a\u306b\u3042\u308b\u300c\u26ef\u300d\u30a2\u30a4\u30b3\u30f3\u3092\u30bf\u30c3\u30d7",Object(m.jsx)("br",{})]}),Object(m.jsxs)("li",{children:[" \u4f4d\u7f6e\u60c5\u5831\u3092\u4f7f\u7528\u3059\u308b\u30dd\u30c3\u30d7\u30a2\u30c3\u30d7\u753b\u9762\u304c\u51fa\u308c\u3070\u3010\u8a31\u53ef\u3011\u3092\u9078\u629e",Object(m.jsx)("br",{})]}),Object(m.jsxs)("li",{children:[" MAP\u3067\u73fe\u5728\u4f4d\u7f6e\u304c\u8868\u793a\u3055\u308c\u307e\u3059",Object(m.jsx)("br",{})]})]}),Object(m.jsx)("p",{children:"\u203b\u3010\u6b21\u56de\u307e\u305f\u306f\u5171\u6709\u6642\u306b\u78ba\u8a8d\u3011\u3092\u9078\u629e\u3059\u308b\u3068\u300c\u26ef\u300d\u30a2\u30a4\u30b3\u30f3\u3092\u30bf\u30c3\u30d7\u3057\u3066\u3082\u30dd\u30c3\u30d7\u30a2\u30c3\u30d7\u304c\u51fa\u306a\u3044\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002\u305d\u306e\u5834\u5408\u306f\u30a2\u30d7\u30ea\u3092\u518d\u5ea6\u7acb\u3061\u4e0a\u3052\u3066\u304f\u3060\u3055\u3044\u3002"})]}),Object(m.jsxs)("section",{id:"appUsage",children:[Object(m.jsx)("h3",{children:"\u30a2\u30d7\u30ea\u306e\u3088\u3046\u306b\u4f7f\u3046"}),Object(m.jsxs)("ol",{children:[Object(m.jsxs)("li",{children:[" \u30de\u30c3\u30d7\u3092\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30d6\u30e9\u30a6\u30b6\u3067\u958b\u304f",Object(m.jsx)("br",{})]}),Object(m.jsxs)("li",{children:[" \u5171\u6709\u30de\u30fc\u30af\u3092\u30bf\u30c3\u30d7",Object(m.jsx)("br",{})]}),Object(m.jsxs)("li",{children:[" -Safari\u3067\u306f\u753b\u9762\u4e0b\u306b\u3042\u308b\u5171\u6709\u30a2\u30a4\u30b3\u30f3\uff08\u56db\u89d2\u3044\u30dc\u30c3\u30af\u30b9\u3068\u77e2\u5370\uff09\u3092\u30bf\u30c3\u30d7",Object(m.jsx)("br",{})]}),Object(m.jsxs)("li",{children:[" -Chrome\u3084Edge\u3067\u306f\u753b\u9762\u53f3\u4e0a\u306e\u4e09\u70b9\u30ea\u30fc\u30c0\u30fc\uff08\ufe19\uff09\u3092\u30bf\u30c3\u30d7",Object(m.jsx)("br",{})]}),Object(m.jsxs)("li",{children:["\u3010\u30db\u30fc\u30e0\u753b\u9762\u306b\u8ffd\u52a0\u3011\u3092\u9078\u629e \u2192 \u30a2\u30a4\u30b3\u30f3\u304c\u30db\u30fc\u30e0\u753b\u9762\u306b\u8ffd\u52a0\u3055\u308c\u307e\u3059",Object(m.jsx)("br",{})]})]})]}),Object(m.jsxs)("section",{id:"culturalEducation",children:[Object(m.jsx)("h3",{children:"\u4eac\u90fd\u5e02\u6587\u5316\u8ca1\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u80b2\u6210\u8b1b\u5ea7\u3068\u306f"}),Object(m.jsx)("p",{children:"\u6b74\u53f2\u7684\u5efa\u9020\u7269\u306e\u8abf\u67fb\u3084\u4fdd\u5b58\u30fb\u6d3b\u7528\u3068\u305d\u308c\u3092\u751f\u304b\u3057\u305f\u307e\u3061\u3065\u304f\u308a\u3092\u3001\u8b1b\u7fa9\u3068\u6f14\u7fd2\u3001\u4fee\u4e86\u8ab2\u984c\u3067\u5b9f\u8df5\u7684\u306b\u5b66\u3076\u8b1b\u5ea7\u3067\u3059\u3002\u4fee\u4e86\u8005\u306f\u4eac\u90fd\u5e02\u6587\u5316\u8ca1\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u3078\u767b\u9332\u3057\u3001\u6d3b\u8e8d\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u30022024\u5e74\u5ea6\u306f14\u671f\u751f\u3068\u3057\u306636\u540d\u3092\u8fce\u3048\u307e\u3057\u305f\u3002"}),Object(m.jsxs)("h3",{children:[Object(m.jsx)("br",{}),"\u53e4\u6750\u6587\u5316\u306e\u4f1a"]}),Object(m.jsx)("p",{children:"\u65e5\u672c\u306e\u4f1d\u7d71\u7684\u306a\u6728\u9020\u5efa\u7bc9\u6587\u5316\u306e\u7d99\u627f\u3068\u767a\u5c55\u3092\u76ee\u6307\u3057\u3001\u6728\u6750\u3084\u53e4\u6750\u306e\u5229\u6d3b\u7528\u3068\u5730\u57df\u6d3b\u6027\u5316\u3092\u76ee\u7684\u3068\u3057\u305f\u6d3b\u52d5\u3092\u3057\u3066\u3044\u307e\u3059\u3002"}),Object(m.jsx)("p",{children:Object(m.jsx)("a",{href:"http://www.kozai.or.jp/",target:"_blank",rel:"noopener noreferrer",children:"\u53e4\u6750\u6587\u5316\u306e\u4f1a\u30db\u30fc\u30e0\u30da\u30fc\u30b8"})})]})]})})}),W=n(69),H=(n(92),function(e){var t=Object(b.f)(),n=a.a.useState([]),c=Object(l.a)(n,2),r=c[0],i=c[1];return a.a.useEffect((function(){for(var t=[],n=0;n<e.data.length;n++){var c=e.data[n];-1===t.indexOf(c["\u30ab\u30c6\u30b4\u30ea"])&&t.push(c["\u30ab\u30c6\u30b4\u30ea"])}i(t)}),[e.data]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"head"}),Object(m.jsx)("div",{className:"category",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"category-item",children:[Object(m.jsx)("label",{htmlFor:"category-select",children:"\u30a8\u30ea\u30a2\u304b\u3089\u9078\u3076"}),Object(m.jsx)(W.a,{onChange:function(e){e&&t("/list?category=".concat(e.value))},options:r.map((function(e){return{value:e,label:e}}))})]})})})]})}),B=n(155),$=n(157),I=(n(108),function(e){var t=e.data,n=Object(c.useState)([]),a=Object(l.a)(n,2),r=a[0],i=a[1],s=Object(c.useState)(),o=Object(l.a)(s,2),j=o[0],d=o[1],u=Object(c.useRef)(null);return Object(c.useEffect)((function(){for(var e=[],n=function(n){var c=t[n];c["\u753b\u50cf"]&&e.push(Object(m.jsx)(B.a,{className:"mui-image-list-item",children:Object(m.jsx)("img",{src:c["\u753b\u50cf"],alt:c["\u30b9\u30dd\u30c3\u30c8\u540d"],loading:"lazy",onClick:function(){return function(e){e&&d(e)}(c)},onError:function(e){e.target.parentNode.remove()}})},n))},c=0;c<t.length;c++)n(c);i(e);var a=function(){if(u.current){var e,t=(null===(e=document.querySelector(".head"))||void 0===e?void 0:e.clientHeight)||0,n=window.innerHeight-t;u.current.style.height="".concat(n,"px")}};return window.addEventListener("resize",a),a(),function(){window.removeEventListener("resize",a)}}),[t]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"head"}),Object(m.jsx)("div",{className:"images",ref:u,children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)($.a,{id:"mui-image-list",sx:{width:"100%",height:"100%"},cols:2,rowHeight:164,children:r}),j?Object(m.jsx)(N,{shop:j,close:function(){d(void 0)}}):Object(m.jsx)(m.Fragment,{})]})})]})}),U=(n(111),function(){return Object(m.jsx)("div",{className:"tabbar",children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsxs)(s.b,{to:"/",children:[Object(m.jsx)("div",{className:"icon",children:Object(m.jsx)(f.c,{})}),Object(m.jsx)("div",{className:"text",children:"MAP"})]})}),Object(m.jsx)("li",{children:Object(m.jsxs)(s.b,{to:"/list",children:[Object(m.jsx)("div",{className:"icon",children:Object(m.jsx)(f.e,{})}),Object(m.jsx)("div",{className:"text",children:"\u4e00\u89a7"})]})}),Object(m.jsx)("li",{children:Object(m.jsxs)(s.b,{to:"/category",children:[Object(m.jsx)("div",{className:"icon",children:Object(m.jsx)(f.f,{})}),Object(m.jsx)("div",{className:"text",children:"\u30a8\u30ea\u30a2\u691c\u7d22"})]})}),Object(m.jsx)("li",{children:Object(m.jsxs)(s.b,{to:"/about",children:[Object(m.jsx)("div",{className:"icon",children:Object(m.jsx)(w.a,{})}),Object(m.jsx)("div",{className:"text",children:"MAP\u306b\u3064\u3044\u3066"})]})})]})})}),q=function(e){return e.replace(/[\uff01-\uff5e]/g,(function(e){return String.fromCharCode(e.charCodeAt(0)-65248)})).replace(/\u3000/g," ")},D=function(e){var t=e[0];return e.slice(1).map((function(e){return t.reduce((function(n,c){var a=e[t.indexOf(c)];return n[c]=q(a||""),n}),{})}))},J=function(){var e=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.sort((function(e,t){return Date.parse(t["\u30bf\u30a4\u30e0\u30b9\u30bf\u30f3\u30d7"])-Date.parse(e["\u30bf\u30a4\u30e0\u30b9\u30bf\u30f3\u30d7"])})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=a.a.useState([]),t=Object(l.a)(e,2),n=t[0],c=t[1];return a.a.useEffect((function(){fetch("".concat(".","/data.json?timestamp=").concat((new Date).getTime())).then((function(e){return e.ok?e.text():Promise.reject(e.status)})).then((function(e){var t=JSON.parse(e);if("values"in t===!1)return console.log("No Data Found at Spreadsheet"),void c([]);for(var n=D(t.values),a=[],r=0;r<n.length;r++){var i=n[r];if(i["\u7def\u5ea6"]&&i["\u7d4c\u5ea6"]&&i["\u30b9\u30dd\u30c3\u30c8\u540d"]&&(i["\u7def\u5ea6"].match(/^-?[0-9]+(\.[0-9]+)?$/)&&i["\u7d4c\u5ea6"].match(/^-?[0-9]+(\.[0-9]+)?$/))){var s=Object(o.a)(Object(o.a)({},i),{},{index:r});a.push(s)}}J(a).then((function(e){c(e)}))}))}),[]),Object(m.jsxs)("div",{className:"app",children:[Object(m.jsx)("div",{className:"app-body",children:Object(m.jsxs)(b.c,{children:[Object(m.jsx)(b.a,{path:"/",element:Object(m.jsx)(M,{data:n})}),Object(m.jsx)(b.a,{path:"/list",element:Object(m.jsx)(R,{data:n})}),Object(m.jsx)(b.a,{path:"/category",element:Object(m.jsx)(H,{data:n})}),Object(m.jsx)(b.a,{path:"/images",element:Object(m.jsx)(I,{data:n})}),Object(m.jsx)(b.a,{path:"/about",element:Object(m.jsx)(T,{})})]})}),Object(m.jsx)("div",{className:"app-footer",children:Object(m.jsx)(U,{})})]})},V=(n(112),n(67));var G=function(e){var t=e.url,n=Object(V.a)().Canvas;return Object(m.jsx)(n,{text:t,options:{type:"image/png",margin:0,width:128}})},K=n(149),Q=n(151),X=n(153),Y=n(150),ee=n(152),te=n(154),ne=n(22),ce=(n(135),function(){var e=window.location.href.replace(/\?.+$/,"").replace(/#.+$/,"");return Object(m.jsx)("div",{className:"share",children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"/",children:Object(m.jsx)(K.a,{url:e,hashtags:["".concat(ne.title)],title:"".concat(ne.title),children:Object(m.jsx)(Y.a,{size:32,round:!0})})})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"/",children:Object(m.jsx)(Q.a,{url:e,hashtag:"#".concat(ne.title),children:Object(m.jsx)(ee.a,{size:32,round:!0})})})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"/",children:Object(m.jsx)(X.a,{url:e,title:"".concat(ne.title),children:Object(m.jsx)(te.a,{size:32,round:!0})})})})]})})}),ae=function(){var e=ne.logo_image_url||"".concat(".","/logo.svg");return Object(m.jsxs)("div",{className:"about",children:[Object(m.jsx)("div",{className:"branding",children:Object(m.jsx)("img",{className:"image",src:e,alt:""})}),Object(m.jsx)("div",{className:"description",children:ne.description}),Object(m.jsx)("div",{className:"qrcode",children:Object(m.jsx)(G,{url:window.location.href})}),Object(m.jsx)(ce,{})]})};n(136);var re=function(){return Object(m.jsx)("div",{className:"outer-container",children:Object(m.jsxs)("div",{className:"inner-container",children:[Object(m.jsx)(ae,{}),Object(m.jsx)(Z,{})]})})},ie=(n(137),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function se(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(s.a,{children:Object(m.jsx)(re,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");ie?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):se(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):se(t,e)}))}}()},22:function(e){e.exports=JSON.parse('{"title":"\u4eac\u90fd\u6e67\u304d\u6c34MAP","description":"MAP","form_url":"","logo_image_url":"https://tadaota.github.io/icon-water.svg","background_image_url":"https://tadaota.github.io/icon-water.svg","primary_color":"#277edb","orderby":"distance"}')},78:function(e,t,n){},85:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){}},[[138,1,2]]]);
//# sourceMappingURL=main.35fe7085.chunk.js.map