(this.webpackJsonpsolarconnect=this.webpackJsonpsolarconnect||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(7),a=n.n(s),i=(n(12),n(2)),j=n(3);n(13);var u=/\s*(?:,|$)\s*/,l=(n(14),n(0));var o=function(e){var t=e.setNumArr,n=e.setTictoc,r=(e.tictoc,Object(c.useState)("")),s=Object(j.a)(r,2),a=s[0],o=s[1];return Object(l.jsx)("div",{className:"input-box",children:Object(l.jsx)("div",{className:"input-info",children:Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault();var c=a.split(u).filter((function(e){return""!==e})).map((function(e){return Number(e)}));if(0===c.length||c.some((function(e){return e!==e})))alert("\uc62c\ubc14\ub974\uc9c0 \uc54a\uc740 \ud615\uc2dd\uc785\ub2c8\ub2e4.");else{var r=function(e){for(var t=e.length,n=Object(i.a)(e),c=0;c<t;c++)for(var r=0;r<t;r++)if(n[c]<n[r]){var s=[n[r],n[c]];n[c]=s[0],n[r]=s[1]}return n}(c);t(Object(i.a)(r))}n(3),o(""),setTimeout((function(){return n((function(e){return e-3}))}),3e3)},children:[Object(l.jsx)("input",{type:"text",onChange:function(e){o(e.target.value)},value:a,placeholder:"\uc22b\uc790,\uc22b\uc790 \ud615\uc2dd\uc73c\ub85c \uc785\ub825"}),Object(l.jsx)("div",{style:{marginTop:"20px"},children:Object(l.jsx)("button",{children:"\uc2dc\uc791 \ubc84\ud2bc"})})]})})})},b=["\uc77c\uc694\uc77c","\uc6d4\uc694\uc77c","\ud654\uc694\uc77c","\uc218\uc694\uc77c","\ubaa9\uc694\uc77c","\uae08\uc694\uc77c","\ud1a0\uc694\uc77c"],d=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],O=["January","February","March","April","May","June","July","August","September","October","November","December"],x={display:"flex",justifyContent:"center",alignItems:"center"},h={width:"100%",padding:"20px",margin:"20px 0px",border:"1px solid #C9C9C9"};var p=function(e){var t=e.Language,n=Object(c.useState)(new Date),r=Object(j.a)(n,2),s=r[0],a=r[1];function i(e){return e?d[(new Date).getDay()]:b[(new Date).getDay()]}return Object(c.useEffect)((function(){setInterval((function(){a(new Date)}),1e3)}),[]),Object(l.jsx)("div",{style:x,children:t?Object(l.jsxs)("div",{style:h,children:[Object(l.jsxs)("span",{children:[s.getHours(),"h"]})," ",Object(l.jsxs)("span",{children:[s.getMinutes(),"m"]}),Object(l.jsxs)("span",{children:[s.getSeconds(),"s"]}),Object(l.jsx)("span",{children:O[(new Date).getMonth()]}),Object(l.jsx)("span",{children:i(t)})," ",Object(l.jsx)("span",{children:s.getDate()})," ",Object(l.jsx)("span",{children:s.getFullYear()})]}):Object(l.jsxs)("div",{style:h,children:[Object(l.jsxs)("span",{children:[s.getFullYear(),"\ub144"]}),Object(l.jsxs)("span",{children:[s.getMonth()+1,"\uc6d4"]}),Object(l.jsxs)("span",{children:[s.getDate(),"\uc77c"]}),Object(l.jsx)("span",{children:i(t)}),Object(l.jsxs)("span",{children:[s.getHours(),"\uc2dc"]})," ",Object(l.jsxs)("span",{children:[s.getMinutes(),"\ubd84"]}),Object(l.jsxs)("span",{children:[s.getSeconds(),"\ucd08"]})]})})};n(16);var f=function(e){var t=e.numArr.join(", ");return Object(l.jsx)("div",{className:"result-box",children:Object(l.jsx)("div",{className:"result-info",children:t})})};var g=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(3),a=Object(j.a)(s,2),u=a[0],b=a[1];return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)("div",{children:[Object(l.jsx)(p,{}),Object(l.jsx)(o,{setNumArr:r,setTictoc:b,tictoc:u}),Object(l.jsx)(f,{numArr:n}),0===u&&Object(l.jsx)(f,{numArr:Object(i.a)(n).reverse()}),Object(l.jsx)(p,{Language:!0})]})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};a.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root")),v()}],[[17,1,2]]]);
//# sourceMappingURL=main.b6600495.chunk.js.map