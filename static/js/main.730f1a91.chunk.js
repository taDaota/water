(this["webpackJsonpgeolonia-pwa"]=this["webpackJsonpgeolonia-pwa"]||[]).push([[0],{108:function(e,t,n){},111:function(e,t,n){},112:function(e,t,n){},135:function(e,t,n){},136:function(e,t,n){},137:function(e,t,n){},138:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(31),s=n.n(r),i=n(11),o=n(29),l=n(7),j=n(38),d=n(30),u=n.n(d),h=n(6),b=(n(78),n(61)),p=n.n(b),f=function(e){var t={type:"FeatureCollection",features:[]};for(var n in e){var c=e[n];if(!c["\u7d4c\u5ea6"]||!c["\u7def\u5ea6"]||!c["\u30b9\u30dd\u30c3\u30c8\u540d"])return;for(var a={type:"Feature",geometry:{type:"Point",coordinates:[Number(c["\u7d4c\u5ea6"]),Number(c["\u7def\u5ea6"])]},properties:{_id:n}},r=0;r<Object.keys(c).length;r++){var s=Object.keys(c)[r];a.properties[s]=c[s]}t.features.push(a)}return t},x=function(e){e.addLayer({id:"clusters",type:"circle",source:"shops",filter:["has","point_count"],paint:{"circle-radius":20,"circle-color":"#FF0000","circle-opacity":1}}),e.addLayer({id:"cluster-count",type:"symbol",source:"shops",filter:["has","point_count"],paint:{"text-color":"#FFFFFF"},layout:{"text-field":"{point_count_abbreviated} \u4ef6","text-size":12,"text-font":["Noto Sans Regular"]}}),e.on("click","clusters",(function(t){var n=e.queryRenderedFeatures(t.point,{layers:["clusters"]}),c=n[0].properties.cluster_id;e.getSource("shops").getClusterExpansionZoom(c,(function(t,c){t||e.easeTo({center:n[0].geometry.coordinates,zoom:c})}))})),e.on("mouseenter","clusters",(function(){e.getCanvas().style.cursor="pointer"})),e.on("mouseleave","clusters",(function(){e.getCanvas().style.cursor=""}))},O=n(18),m=(n(85),n(2)),g=function(e){e.stopPropagation()},v=function(e){return Object(m.jsxs)("div",{className:"links",children:[e.data.Instagram?Object(m.jsx)("div",{className:"link",children:Object(m.jsx)("a",{href:"https://instagram.com/".concat(e.data.Instagram),children:Object(m.jsx)(O.d,{onClick:g,size:"20px"})})}):"",e.data.Twitter?Object(m.jsx)("div",{className:"link",children:Object(m.jsx)("a",{href:"https://twitter.com/".concat(e.data.Twitter),children:Object(m.jsx)(O.h,{onClick:g,size:"20px"})})}):"",e.data.Facebook?Object(m.jsx)("div",{className:"link",children:Object(m.jsx)("a",{href:"https://www.facebook.com/".concat(e.data.Facebook),children:Object(m.jsx)(O.b,{onClick:g,size:"20px"})})}):"",e.data["\u516c\u5f0f\u30b5\u30a4\u30c8"]?Object(m.jsx)("div",{className:"link",children:Object(m.jsx)("a",{href:e.data["\u516c\u5f0f\u30b5\u30a4\u30c8"],children:Object(m.jsx)(O.c,{onClick:g,size:"20px"})})}):""]})},w=(n(87),n(39)),y=function(e){var t="";return"number"!==typeof e||Number.isNaN(e)||(t=e>1e3?Math.round(e/1e3)+" km":Math.round(e)+" m"),t},N=function(e){var t=a.a.useRef(null),n=a.a.useState(null),c=Object(l.a)(n,2),r=c[0],s=c[1],o=e.shop,j=function(){e.close(),t.current&&(t.current.remove(),r.remove())};a.a.useEffect((function(){if(t.current){var e=new window.geolonia.Map({container:t.current,interactive:!1,zoom:14,style:"geolonia/gsi"});s(e)}}),[o,t]);var d,u=y(o.distance),h=o["\u30ab\u30c6\u30b4\u30ea"],b=o["\u7d39\u4ecb\u6587"];return Object(m.jsxs)("div",{className:"shop-single",children:[Object(m.jsx)("div",{className:"head",children:Object(m.jsxs)("button",{onClick:j,children:[Object(m.jsx)(w.b,{size:"16px",color:"#FFFFFF"})," \u9589\u3058\u308b"]})}),Object(m.jsx)("div",{className:"container",children:o?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h2",{children:o["\u30b9\u30dd\u30c3\u30c8\u540d"]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("span",{className:"nowrap",children:Object(m.jsx)(i.b,{to:"/list?category=".concat(h),children:Object(m.jsx)("span",{onClick:j,className:"category",children:h})})}),Object(m.jsx)("span",{className:"nowrap",children:u&&Object(m.jsxs)("span",{className:"distance",children:["\u73fe\u5728\u4f4d\u7f6e\u304b\u3089 ",u]})})]}),Object(m.jsx)("div",{style:{margin:"24px 0"},children:Object(m.jsx)(v,{data:o})}),o["\u753b\u50cf"]&&Object(m.jsx)("img",{src:o["\u753b\u50cf"],alt:o["\u30b9\u30dd\u30c3\u30c8\u540d"],style:{width:"100%"}}),Object(m.jsx)("p",{style:{margin:"24px 0",wordBreak:"break-all"},children:(d=b,d.split(/(\r\n)|(\n)|(\r)/g).map((function(e,t){var n="";return"\r\n"===e||"\n"===e||"\r"===e?n=Object(m.jsx)("br",{},t):void 0!==e&&(n=e),n})))}),Object(m.jsx)("div",{ref:t,style:{width:"100%",height:"200px",marginTop:"24px"},"data-lat":o["\u7def\u5ea6"],"data-lng":o["\u7d4c\u5ea6"],"data-navigation-control":"off"}),Object(m.jsx)("a",{className:"small",href:"https://www.google.com/maps/dir/?api=1&destination=".concat(o["\u7def\u5ea6"],",").concat(o["\u7d4c\u5ea6"]),target:"_blank",rel:"noopener noreferrer",children:"Google Maps\u3067\u9053\u9806\u3092\u78ba\u8a8d(\u4f4d\u7f6e\u60c5\u5831\u3092ON\u306b\u3057\u3066\u304f\u3060\u3055\u3044)"})]}):Object(m.jsx)(m.Fragment,{})})]})},k={width:"100%",height:"100%",position:"relative"},F=function(e){for(var t=["poi","poi-primary","poi-r0-r9","poi-r10-r24","poi-r25","poi-bus","poi-entrance"],n=0;n<t.length;n++){var c=t[n];e.setLayoutProperty(c,"visibility","none")}},C=function(e){var t=(e||window.location).hash.substring(2);return new URLSearchParams(t)},S=function(e){var t=a.a.useRef(null),n=a.a.useState(),c=Object(l.a)(n,2),r=c[0],s=c[1],i=a.a.useState(void 0),o=Object(l.a)(i,2),j=o[0],d=o[1],u=a.a.useState(""),h=Object(l.a)(u,2),b=h[0],O=h[1];a.a.useEffect((function(){!function(e,t){e&&t&&e.on("render",(function(){if(!e.getSource("shops")){F(e);var n=f(t);e.addSource("shops",{type:"geojson",data:n,cluster:!0,clusterMaxZoom:14,clusterRadius:25}),e.addLayer({id:"shop-points",type:"circle",source:"shops",filter:["all",["==","$type","Point"]],paint:{"circle-radius":13,"circle-color":"#FF0000","circle-opacity":.4,"circle-stroke-width":2,"circle-stroke-color":"#FFFFFF","circle-stroke-opacity":1}}),e.addLayer({id:"shop-symbol",type:"symbol",source:"shops",filter:["all",["==","$type","Point"]],paint:{"text-color":"#000000","text-halo-color":"#FFFFFF","text-halo-width":2},layout:{"text-field":"{\u30b9\u30dd\u30c3\u30c8\u540d}","text-font":["Noto Sans Regular"],"text-variable-anchor":["top","bottom","left","right"],"text-radial-offset":.5,"text-justify":"auto","text-size":12,"text-anchor":"top","text-max-width":12,"text-allow-overlap":!1}}),e.on("mouseenter","shop-points",(function(){e.getCanvas().style.cursor="pointer"})),e.on("mouseleave","shop-points",(function(){e.getCanvas().style.cursor=""})),e.on("mouseenter","shop-symbol",(function(){e.getCanvas().style.cursor="pointer"})),e.on("mouseleave","shop-symbol",(function(){e.getCanvas().style.cursor=""})),e.on("click","shop-points",(function(e){e.features[0].properties.cluster||d(e.features[0].properties)})),e.on("click","shop-symbol",(function(e){e.features[0].properties.cluster||d(e.features[0].properties)})),x(e)}}))}(r,e.data)}),[r,e.data]),a.a.useEffect((function(){var e,t=C();b&&t.set("map",b),(e=t).toString()&&(window.location.hash="#/?".concat(e.toString().replace(/%2F/g,"/")))}),[b]),a.a.useEffect((function(){if(t.current&&!r){var n=window.geolonia,c=f(e.data),a=p()(c),i=new n.Map({container:t.current,style:"geolonia/gsi",bounds:a,fitBoundsOptions:{padding:50}}),o=C();if(o&&o.get("map")){var l=(o.get("map")||"").split("/"),j=l[0],d=l[1],u=l[2];i.flyTo({center:[u,d],zoom:j})}else a&&i.fitBounds(a,{padding:50});var h=function(){F(i),s(i),i.on("moveend",(function(){var e=i.getCenter(),t=i.getZoom(),n=Math.round(100*t)/100,c=Math.ceil((n*Math.LN2+Math.log(512/360/.5))/Math.LN10),a=Math.pow(10,c),r=Math.round(e.lng*a)/a,s=Math.round(e.lat*a)/a,o=Math.ceil(n);O("".concat(o,"/").concat(s,"/").concat(r))}))},b=function(){i.resize()};return i.on("load",h),window.addEventListener("orientationchange",b),function(){window.removeEventListener("orientationchange",b),i.off("load",h)}}}),[t,r,e.data]);return Object(m.jsxs)("div",{style:k,children:[Object(m.jsx)("div",{ref:t,style:k,"data-geolocate-control":"on","data-marker":"off","data-gesture-handling":"off"}),j?Object(m.jsx)(N,{shop:j,close:function(){d(void 0)}}):Object(m.jsx)(m.Fragment,{})]})},_=function(e){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(S,{data:e.data})})},M=n(16),z=n(63),E=(n(88),function(e){var t=function(){e.popupHandler(e.data)},n=y(e.data.distance),c=e.data["\u30ab\u30c6\u30b4\u30ea"],a=e.data["\u753b\u50cf"],r=!!e.queryCategory;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"shop-link",children:[Object(m.jsx)("h2",{className:"shop-title",style:{wordBreak:"break-all"},onClick:t,children:e.data["\u30b9\u30dd\u30c3\u30c8\u540d"]}),Object(m.jsxs)("div",{className:"tag-box",children:[!r&&Object(m.jsx)("span",{className:"nowrap",children:Object(m.jsx)(i.b,{to:"/list?category=".concat(c),children:Object(m.jsx)("span",{className:"category",children:c})})}),Object(m.jsx)("span",{className:"nowrap",children:n&&Object(m.jsxs)("span",{className:"distance",children:["\u73fe\u5728\u4f4d\u7f6e\u304b\u3089 ",n]})})]}),Object(m.jsx)("div",{style:{margin:"10px 10px 10px 0"},children:a&&Object(m.jsx)("img",{src:a,alt:e.data["\u30b9\u30dd\u30c3\u30c8\u540d"],onClick:t})}),Object(m.jsx)("div",{className:"right",onClick:t,children:Object(m.jsx)(z.a,{size:"40px",color:"#CCCCCC"})})]})})}),P=(n(89),n(64)),L=n(44),A=function(){var e=Object(j.a)(u.a.mark((function e(t){var n,c,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e,t){window.navigator.geolocation&&window.navigator.geolocation.getCurrentPosition||e(null),window.navigator.geolocation.getCurrentPosition((function(t){var n=t.coords.latitude,c=t.coords.longitude;e([c,n])}),(function(t){e(null)}),{enableHighAccuracy:!0,timeout:5e3,maximumAge:0})}));case 2:if(!(n=e.sent)){e.next=10;break}return c=L.point(n),(a=t.map((function(e){var t=parseFloat(e["\u7d4c\u5ea6"]),n=parseFloat(e["\u7def\u5ea6"]);if(Number.isNaN(t)||Number.isNaN(n))return e;var a=L.point([t,n]),r=L.distance(c,a,{units:"meters"});return Object(o.a)(Object(o.a)({},e),{},{distance:r})}))).sort((function(e,t){return"number"!==typeof e.distance||Number.isNaN(e.distance)?1:"number"!==typeof t.distance||Number.isNaN(t.distance)?-1:e.distance-t.distance})),e.abrupt("return",a);case 10:return e.abrupt("return",t);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(e){var t=a.a.useState(),n=Object(l.a)(t,2),c=n[0],r=n[1],s=a.a.useState(e.data),o=Object(l.a)(s,2),j=o[0],d=o[1],u=a.a.useState([]),h=Object(l.a)(u,2),b=h[0],p=h[1],f=a.a.useState(10),x=Object(l.a)(f,2),O=x[0],g=x[1],v=a.a.useState(!0),w=Object(l.a)(v,2),y=w[0],k=w[1],F=Object(i.c)(),C=Object(l.a)(F,1)[0].get("category");a.a.useEffect((function(){var t=e.data;C&&(t=e.data.filter((function(e){return e["\u30ab\u30c6\u30b4\u30ea"]===C})));var n=!0;if(n){A(t).then((function(e){n&&(p(e.slice(0,O)),d(e))}))}return function(){n=!1}}),[e.data,C,O]);var S=function(e){e&&r(e)},_=Object(m.jsx)("div",{className:"loader",style:{width:"100%",height:"200px",textAlign:"center",position:"relative",top:"100px"},children:"\u5834\u6240\u4e00\u89a7\u3092\u8aad\u307f\u8fbc\u307f\u4e2d\u3067\u3059..."},0);return Object(m.jsxs)("div",{id:"shop-list",className:"shop-list",children:[C&&Object(m.jsx)("div",{className:"shop-list-category",children:"\u30ab\u30c6\u30b4\u30ea\uff1a\u300c".concat(C,"\u300d")}),Object(m.jsx)(P.a,{dataLength:b.length,next:function(){b.length>=j.length?k(!1):(p([].concat(Object(M.a)(b),Object(M.a)(j.slice(O,O+10)))),g(O+10))},hasMore:y,loader:_,scrollableTarget:"shop-list",children:b.map((function(e,t){return Object(m.jsx)("div",{className:"shop",children:Object(m.jsx)(E,{data:e,popupHandler:S,queryCategory:C})},t)}))}),c?Object(m.jsx)(N,{shop:c,close:function(){r(void 0)}}):Object(m.jsx)(m.Fragment,{})]})},R=(n(91),n(19)),W=function(){return Object(m.jsx)("div",{className:"about-us",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("div",{className:"branding",children:[Object(m.jsx)("div",{className:"image",children:Object(m.jsx)("img",{src:"".concat(".","/icon-pwamap.svg"),alt:""})}),Object(m.jsx)("div",{className:"logo",children:"\u4eac\u90fd\u5e02\u6587\u5316\u8ca1\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u8b1b\u5ea7"})]}),Object(m.jsx)("p",{children:"\u4eac\u90fd\u5e02\u6587\u5316\u8ca1\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u80b2\u6210\u8b1b\u5ea7\u3068\u306f\u3001\u6b74\u53f2\u7684\u5efa\u9020\u7269\u306e\u8abf\u67fb\u3084\u4fdd\u5b58\u30fb\u6d3b\u7528\u3068\u305d\u308c\u3092\u751f\u304b\u3057\u305f\u307e\u3061\u3065\u304f\u308a\u306b\u3064\u3044\u3066\u3001\u8b1b\u7fa9\u3068\u6f14\u7fd2\u3001\u4fee\u4e86\u8ab2\u984c\u3067\u5b9f\u8df5\u7684\u306b\u5b66\u3076\u8b1b\u5ea7\u3067\u3059\u3002"}),Object(m.jsx)("p",{children:"\u7d04\uff16\u304b\u6708\u306b\u308f\u305f\u308a\u5408\u8a0814\u65e5\u9593\u3001\u5ea7\u5b66\u3068\u73fe\u5834\u7814\u4fee\u304c\u884c\u308f\u308c\u3001\u4fee\u4e86\u8005\u306f\u3001\u4eac\u90fd\u5e02\u6587\u5316\u8ca1\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u7b49\u3078\u767b\u9332\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),Object(m.jsx)("h2",{children:" \u4eac\u90fd\u30e2\u30c0\u30f3\u5efa\u7bc9\u796d"}),Object(m.jsx)("p",{children:Object(m.jsx)("a",{href:"https://kyoto.kenchikusai.jp/",target:"_blank",rel:"noreferrer",children:"https://kyoto.kenchikusai.jp/"})}),Object(m.jsx)("p",{children:"\u4eac\u90fd\u30e2\u30c0\u30f3\u5efa\u7bc9\u796d\u306f\u3001\u6642\u4ee3\u3092\u7d4c\u3066\u5b88\u3089\u308c\u3066\u304d\u305f\u4eac\u90fd\u306e\u30e2\u30c0\u30f3\u5efa\u7bc9\u3092\u4e00\u822c\u516c\u958b\u3059\u308b\u30a4\u30d9\u30f3\u30c8\u3067\u3001\u3053\u308c\u3089\u306e\u5efa\u7269\u304c\u751f\u304d\u305f\u6587\u5316\u8ca1\u3068\u3057\u3066\u672a\u6765\u306b\u53d7\u3051\u7d99\u304c\u308c\u308b\u3053\u3068\u3092\u76ee\u6307\u3057\u3066\u3044\u307e\u3059\u3002\u3053\u306e\u30a4\u30d9\u30f3\u30c8\u306f\u3001\u5909\u5316\u3059\u308b\u90fd\u5e02\u666f\u89b3\u306e\u4e2d\u3067\u91cd\u8981\u306a\u5efa\u7bc9\u3092\u795d\u3046\u305f\u3081\u306b\u30012022\u5e74\u306b\u4eac\u90fd\u5e02\u3068\u6c11\u9593\u56e3\u4f53\u304c\u9023\u643a\u3057\u3066\u59cb\u3081\u305f\u3082\u306e\u3067\u3059\u3002"}),Object(m.jsx)("h2",{children:"\u4eac\u90fd\u5730\u4e0b\u6c34MAP"}),Object(m.jsx)("p",{children:Object(m.jsx)("a",{href:"https://blog.kanko.jp/kyoto-sightseeing/kyoto-water",target:"_blank",rel:"noreferrer",children:"https://blog.kanko.jp/kyoto-sightseeing/kyoto-water"})}),Object(m.jsx)("p",{children:"\u203b\u4eac\u90fd\u5e02\u306b\u306f\u6570\u5343\u306e\u4e95\u6238\u304c\u3042\u308b\u3068\u3044\u308f\u308c\u3066\u3044\u307e\u3059\u3002\u3053\u3053\u3067\u306f\u6c34\u8cea\u691c\u67fb\u6e08\u307f\u7b87\u6240\u306e\u307f\u8a18\u8f09\u3057\u3066\u3044\u307e\u3059\u3002"}),R.form_url?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h2",{children:"\u30c7\u30fc\u30bf\u306e\u66f4\u65b0\u306b\u3064\u3044\u3066"}),Object(m.jsx)("p",{children:"\u3053\u306e\u30a2\u30d7\u30ea\u306e\u30c7\u30fc\u30bf\u3092\u66f4\u65b0\u3059\u308b\u306b\u306f\u4e0b\u306e\u300c + \u300d\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u3066\u30d5\u30a9\u30fc\u30e0\u306b\u5fc5\u8981\u306a\u60c5\u5831\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),Object(m.jsx)("div",{className:"goto-form",children:Object(m.jsx)("button",{children:Object(m.jsx)(O.f,{color:"#FFFFFF",onClick:function(){R.form_url&&(window.location.href=R.form_url)}})})})]}):Object(m.jsx)(m.Fragment,{})]})})},$=n(69),B=(n(92),function(e){var t=Object(h.f)(),n=a.a.useState([]),c=Object(l.a)(n,2),r=c[0],s=c[1];return a.a.useEffect((function(){for(var t=[],n=0;n<e.data.length;n++){var c=e.data[n];-1===t.indexOf(c["\u30ab\u30c6\u30b4\u30ea"])&&t.push(c["\u30ab\u30c6\u30b4\u30ea"])}s(t)}),[e.data]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"head"}),Object(m.jsx)("div",{className:"category",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"category-item",children:[Object(m.jsx)("label",{htmlFor:"category-select",children:"\u30ab\u30c6\u30b4\u30ea\u304b\u3089\u9078\u3076"}),Object(m.jsx)($.a,{onChange:function(e){e&&t("/list?category=".concat(e.value))},options:r.map((function(e){return{value:e,label:e}}))})]})})})]})}),q=n(155),D=n(157),H=(n(108),function(e){var t=e.data,n=Object(c.useState)([]),a=Object(l.a)(n,2),r=a[0],s=a[1],i=Object(c.useState)(),o=Object(l.a)(i,2),j=o[0],d=o[1];return Object(c.useEffect)((function(){for(var e=[],n=function(n){var c=t[n];c["\u753b\u50cf"]&&e.push(Object(m.jsx)(q.a,{className:"mui-image-list-item",children:Object(m.jsx)("img",{src:c["\u753b\u50cf"],alt:c["\u30b9\u30dd\u30c3\u30c8\u540d"],loading:"lazy",onClick:function(){return function(e){e&&d(e)}(c)},onError:function(e){e.target.parentNode.remove()}})},n))},c=0;c<t.length;c++)n(c);s(e)}),[t]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"head"}),Object(m.jsx)("div",{className:"images",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(D.a,{id:"mui-image-list",sx:{width:"100%",height:"100%"},cols:2,rowHeight:164,children:r}),j?Object(m.jsx)(N,{shop:j,close:function(){d(void 0)}}):Object(m.jsx)(m.Fragment,{})]})})]})}),J=(n(111),function(){return Object(m.jsx)("div",{className:"tabbar",children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsxs)(i.b,{to:"/",children:[Object(m.jsx)("div",{className:"icon",children:Object(m.jsx)(O.c,{})}),Object(m.jsx)("div",{className:"text",children:"\u30db\u30fc\u30e0"})]})}),Object(m.jsx)("li",{children:Object(m.jsxs)(i.b,{to:"/list",children:[Object(m.jsx)("div",{className:"icon",children:Object(m.jsx)(O.e,{})}),Object(m.jsx)("div",{className:"text",children:"\u4e00\u89a7"})]})}),Object(m.jsx)("li",{children:Object(m.jsxs)(i.b,{to:"/category",children:[Object(m.jsx)("div",{className:"icon",children:Object(m.jsx)(O.g,{})}),Object(m.jsx)("div",{className:"text",children:"\u30ab\u30c6\u30b4\u30ea"})]})}),Object(m.jsx)("li",{children:Object(m.jsxs)(i.b,{to:"/images",children:[Object(m.jsx)("div",{className:"icon",children:Object(m.jsx)(O.a,{})}),Object(m.jsx)("div",{className:"text",children:"\u5199\u771f\u304b\u3089\u63a2\u3059"})]})}),Object(m.jsx)("li",{children:Object(m.jsxs)(i.b,{to:"/about",children:[Object(m.jsx)("div",{className:"icon",children:Object(m.jsx)(w.a,{})}),Object(m.jsx)("div",{className:"text",children:"\u30de\u30c3\u30d7\u306b\u3064\u3044\u3066"})]})})]})})}),U=function(e){return e.replace(/[\uff01-\uff5e]/g,(function(e){return String.fromCharCode(e.charCodeAt(0)-65248)})).replace(/\u3000/g," ")},I=function(e){var t=e[0];return e.slice(1).map((function(e){return t.reduce((function(n,c){var a=e[t.indexOf(c)];return n[c]=U(a||""),n}),{})}))},Z=function(){var e=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.sort((function(e,t){return Date.parse(t["\u30bf\u30a4\u30e0\u30b9\u30bf\u30f3\u30d7"])-Date.parse(e["\u30bf\u30a4\u30e0\u30b9\u30bf\u30f3\u30d7"])})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=a.a.useState([]),t=Object(l.a)(e,2),n=t[0],c=t[1];return a.a.useEffect((function(){fetch("".concat(".","/data.json?timestamp=").concat((new Date).getTime())).then((function(e){return e.ok?e.text():Promise.reject(e.status)})).then((function(e){var t=JSON.parse(e);if("values"in t===!1)return console.log("No Data Found at Spreadsheet"),void c([]);for(var n=I(t.values),a=[],r=0;r<n.length;r++){var s=n[r];if(s["\u7def\u5ea6"]&&s["\u7d4c\u5ea6"]&&s["\u30b9\u30dd\u30c3\u30c8\u540d"]&&(s["\u7def\u5ea6"].match(/^-?[0-9]+(\.[0-9]+)?$/)&&s["\u7d4c\u5ea6"].match(/^-?[0-9]+(\.[0-9]+)?$/))){var i=Object(o.a)(Object(o.a)({},s),{},{index:r});a.push(i)}}Z(a).then((function(e){c(e)}))}))}),[]),Object(m.jsxs)("div",{className:"app",children:[Object(m.jsx)("div",{className:"app-body",children:Object(m.jsxs)(h.c,{children:[Object(m.jsx)(h.a,{path:"/",element:Object(m.jsx)(_,{data:n})}),Object(m.jsx)(h.a,{path:"/list",element:Object(m.jsx)(T,{data:n})}),Object(m.jsx)(h.a,{path:"/category",element:Object(m.jsx)(B,{data:n})}),Object(m.jsx)(h.a,{path:"/images",element:Object(m.jsx)(H,{data:n})}),Object(m.jsx)(h.a,{path:"/about",element:Object(m.jsx)(W,{})})]})}),Object(m.jsx)("div",{className:"app-footer",children:Object(m.jsx)(J,{})})]})},K=(n(112),n(67));var Q=function(e){var t=e.url,n=Object(K.a)().Canvas;return Object(m.jsx)(n,{text:t,options:{type:"image/png",margin:0,width:128}})},V=n(149),X=n(151),Y=n(153),ee=n(150),te=n(152),ne=n(154),ce=(n(135),function(){var e=window.location.href.replace(/\?.+$/,"").replace(/#.+$/,"");return Object(m.jsx)("div",{className:"share",children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"/",children:Object(m.jsx)(V.a,{url:e,hashtags:["".concat(R.title)],title:"".concat(R.title),children:Object(m.jsx)(ee.a,{size:32,round:!0})})})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"/",children:Object(m.jsx)(X.a,{url:e,hashtag:"#".concat(R.title),children:Object(m.jsx)(te.a,{size:32,round:!0})})})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"/",children:Object(m.jsx)(Y.a,{url:e,title:"".concat(R.title),children:Object(m.jsx)(ne.a,{size:32,round:!0})})})})]})})}),ae=function(){var e=R.logo_image_url||"".concat(".","/logo.svg");return Object(m.jsxs)("div",{className:"about",children:[Object(m.jsx)("div",{className:"branding",children:Object(m.jsx)("img",{className:"image",src:e,alt:""})}),Object(m.jsx)("div",{className:"description",children:R.description}),Object(m.jsx)("div",{className:"qrcode",children:Object(m.jsx)(Q,{url:window.location.href})}),Object(m.jsx)(ce,{})]})};n(136);var re=function(){return Object(m.jsx)("div",{className:"outer-container",children:Object(m.jsxs)("div",{className:"inner-container",children:[Object(m.jsx)(ae,{}),Object(m.jsx)(G,{})]})})},se=(n(137),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function ie(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(i.a,{children:Object(m.jsx)(re,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");se?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ie(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):ie(t,e)}))}}()},19:function(e){e.exports=JSON.parse('{"title":"\u4eac\u6e67\u6c34\u90fd","description":"MAP","form_url":"","logo_image_url":"https://geoloniamaps.github.io/pwamap/icon-pwamap.svg","background_image_url":"https://geoloniamaps.github.io/pwamap/geolonia_bgimage_1920_1080.png","primary_color":"#277edb","orderby":"distance"}')},78:function(e,t,n){},85:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){}},[[138,1,2]]]);
//# sourceMappingURL=main.730f1a91.chunk.js.map