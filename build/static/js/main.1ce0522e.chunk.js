(this["webpackJsonptest-bootstrap"]=this["webpackJsonptest-bootstrap"]||[]).push([[0],{70:function(e,t,c){},71:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(0),a=c.n(r),s=c(34),i=c.n(s),o=c(14),j=c(7),l=c(17),u=c(13),b=c.n(u),d=c(15),p=c(12),h=c(73),O=c(72),x=c(36),v=c(74),m=c(39),f=c(16),g=c.n(f),N="http://localhost:5000",y=function(e){var t=Object(r.useState)(null),c=Object(p.a)(t,2),s=c[0],i=c[1],o=Object(r.useState)(""),j=Object(p.a)(o,2),u=j[0],f=j[1],y=Object(r.useState)(""),w=Object(p.a)(y,2),F=w[0],k=w[1],S=Object(r.useState)(!1),C=Object(p.a)(S,2),D=C[0],z=C[1],E=Object(r.useRef)(),P=function(e){"over"===e?E.current.style.border="2px solid #000":"leave"===e&&(E.current.style.border="2px dashed #e9ebeb")},R=function(){var t=Object(d.a)(b.a.mark((function t(c){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c.preventDefault(),t.prev=1,!s){t.next=11;break}return(n=new FormData).append("file",s),k(""),t.next=8,g.a.post("".concat(N,"/upload"),n,{headers:{"Content-Type":"multipart/form-data"}});case 8:e.history.push("/list"),t.next=12;break;case 11:k("S'il vous pla\xeet, ajoutez votre image");case 12:t.next=17;break;case 14:t.prev=14,t.t0=t.catch(1),t.t0.response&&k(t.t0.response.data);case 17:case"end":return t.stop()}}),t,null,[[1,14]])})));return function(e){return t.apply(this,arguments)}}();return Object(n.jsx)(a.a.Fragment,{children:Object(n.jsxs)(h.a,{className:"search-form",onSubmit:R,children:[F&&Object(n.jsx)("p",{className:"errorMsg",children:F}),Object(n.jsx)(O.a,{children:Object(n.jsx)(x.a,{children:"Placez votre image ci-dessous !"})}),Object(n.jsxs)("div",{className:"upload-section",children:[Object(n.jsx)(m.a,{onDrop:function(e){var t=Object(p.a)(e,1)[0];i(t);var c=new FileReader;c.onload=function(){f(c.result)},c.readAsDataURL(t),z(t.name.match(/\.(jpeg|jpg|png)$/)),E.current.style.border="2px dashed #e9ebeb"},onDragEnter:function(){return P("over")},onDragLeave:function(){return P("leave")},children:function(e){var t=e.getRootProps,c=e.getInputProps;return Object(n.jsxs)("div",Object(l.a)(Object(l.a)({},t({className:"drop-zone"})),{},{ref:E,children:[Object(n.jsx)("input",Object(l.a)({},c())),Object(n.jsx)("p",{children:"Glissez votre image ici ou cliquez ici pour la s\xe9lectionner"}),s&&Object(n.jsxs)("div",{children:[Object(n.jsx)("strong",{children:"Image s\xe9lectionn\xe9e:"})," ",s.name]})]}))}}),u?D?Object(n.jsx)("div",{className:"image-preview",children:Object(n.jsx)("img",{className:"preview-image",src:u,alt:"Preview"})}):Object(n.jsx)("div",{className:"preview-message",children:Object(n.jsx)("p",{children:"L'aper\xe7u de votre image est indisponible"})}):Object(n.jsx)("div",{className:"preview-message",children:Object(n.jsx)("p",{children:"L'aper\xe7u de votre image s'affichera ici apr\xe8s votre s\xe9lection"})})]}),Object(n.jsx)(v.a,{variant:"primary",type:"submit",children:"Envoyer"})]})})},w=function(){return Object(n.jsxs)("div",{className:"header",children:[Object(n.jsx)("h1",{children:"Focus +"}),Object(n.jsxs)("nav",{children:[Object(n.jsx)(o.b,{activeClassName:"active",to:"/",exact:!0,children:"Accueil"}),Object(n.jsx)(o.b,{activeClassName:"active",to:"/focus+",children:"Focus+"}),Object(n.jsx)(o.b,{activeClassName:"active",to:"/video",children:"Video tuto"}),Object(n.jsx)(o.b,{activeClassName:"active",to:"/forum",children:"Forum"})]})]})},F=function(){return Object(n.jsx)(a.a.Fragment,{children:Object(n.jsx)(O.a,{children:Object(n.jsx)(x.a,{children:"Bienvenue sur la partie vid\xe9o"})})})},k=function(){return Object(n.jsx)(a.a.Fragment,{children:Object(n.jsx)(O.a,{children:Object(n.jsx)(x.a,{children:"Bienvenue sur la partie Forum"})})})},S=function(){return Object(n.jsx)(a.a.Fragment,{children:Object(n.jsx)(O.a,{children:Object(n.jsx)(x.a,{children:"Bienvenue sur Focus +"})})})},C=c(38),D=c.n(C),z=function(){var e=Object(r.useState)([]),t=Object(p.a)(e,2),c=t[0],a=t[1],s=Object(r.useState)(""),i=Object(p.a)(s,2),o=i[0],j=i[1];Object(r.useEffect)((function(){(function(){var e=Object(d.a)(b.a.mark((function e(){var t,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get("".concat(N,"/getAllFiles"));case 3:t=e.sent,c=t.data,j(""),a(c),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),e.t0.response&&j(e.t0.response.data);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var l=function(){var e=Object(d.a)(b.a.mark((function e(t,c,n){var r,a,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get("".concat(N,"/download/").concat(t),{responseType:"blob"});case 3:return r=e.sent,a=c.split("/"),s=a[a.length-1],j(""),e.abrupt("return",D()(r.data,s,n));case 10:e.prev=10,e.t0=e.catch(0),e.t0.response&&400===e.t0.response.status&&j("Erreur pendant le t\xe9l\xe9chargement. R\xe9essayer plus tard.");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,c,n){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"files-container",children:[o&&Object(n.jsx)("p",{className:"errorMsg",children:o}),Object(n.jsxs)("table",{className:"files-table",children:[Object(n.jsx)("thead",{children:Object(n.jsx)("tr",{children:Object(n.jsx)("th",{children:"Vos images sont disponibles"})})}),Object(n.jsx)("tbody",{children:c.length>0?c.map((function(e){var t=e._id,c=e.file_path,r=e.file_mimetype;return Object(n.jsx)("tr",{children:Object(n.jsx)("td",{children:Object(n.jsx)("a",{href:"#/",onClick:function(){return l(t,c,r)},children:"T\xe9l\xe9charger"})})},t)})):Object(n.jsx)("tr",{children:Object(n.jsx)("td",{colSpan:3,style:{fontWeight:"300"},children:"Pas d'image g\xe9n\xe9r\xe9e trouv\xe9e."})})})]})]})},E=function(){return Object(n.jsx)(o.a,{children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(w,{}),Object(n.jsx)("div",{className:"main-content",children:Object(n.jsxs)(j.c,{children:[Object(n.jsx)(j.a,{component:S,path:"/",exact:!0}),Object(n.jsx)(j.a,{component:y,path:"/focus+",exact:!0}),Object(n.jsx)(j.a,{component:F,path:"/video",exact:!0}),Object(n.jsx)(j.a,{component:k,path:"/forum",exact:!0}),Object(n.jsx)(j.a,{component:z,path:"/list",exact:!0})]})})]})})};c(69),c(70);i.a.render(Object(n.jsx)(E,{}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.1ce0522e.chunk.js.map