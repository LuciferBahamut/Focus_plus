(this.webpackJsonpfocus_plus=this.webpackJsonpfocus_plus||[]).push([[0],{70:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var r=a(1),c=a(0),n=a.n(c),s=a(34),i=a.n(s),o=a(16),j=a(8),l=a(18),u=a(9),b=a.n(u),d=a(11),p=a(7),h=a(74),O=a(72),x=a(36),m=a(75),v=a(39),f=a(12),g=a.n(f),y="http://localhost:5000",w=function(e){var t=Object(c.useState)(null),a=Object(p.a)(t,2),s=a[0],i=a[1],o=Object(c.useState)(""),j=Object(p.a)(o,2),u=j[0],f=j[1],w=Object(c.useState)(""),S=Object(p.a)(w,2),N=S[0],k=S[1],C=Object(c.useState)(!1),z=Object(p.a)(C,2),F=z[0],E=z[1],P=Object(c.useRef)(),I=function(e){"over"===e?P.current.style.border="2px solid #000":"leave"===e&&(P.current.style.border="2px dashed #e9ebeb")},D=function(){var t=Object(d.a)(b.a.mark((function t(a){var r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),t.prev=1,!s){t.next=11;break}return(r=new FormData).append("file",s),k(""),t.next=8,g.a.post("".concat(y,"/upload"),r,{headers:{"Content-Type":"multipart/form-data"}});case 8:e.history.push("/list"),t.next=12;break;case 11:k("S'il vous pla\xeet, ajoutez votre image");case 12:t.next=17;break;case 14:t.prev=14,t.t0=t.catch(1),t.t0.response&&k(t.t0.response.data);case 17:case"end":return t.stop()}}),t,null,[[1,14]])})));return function(e){return t.apply(this,arguments)}}();return Object(r.jsx)(n.a.Fragment,{children:Object(r.jsxs)(h.a,{className:"search-form",onSubmit:D,children:[N&&Object(r.jsx)("p",{className:"errorMsg",children:N}),Object(r.jsx)(O.a,{children:Object(r.jsx)(x.a,{children:"Placez votre image ci-dessous !"})}),Object(r.jsxs)("div",{className:"upload-section",children:[Object(r.jsx)(v.a,{onDrop:function(e){var t=Object(p.a)(e,1)[0];i(t);var a=new FileReader;a.onload=function(){f(a.result)},a.readAsDataURL(t),E(t.name.match(/\.(jpeg|jpg|png)$/)),P.current.style.border="2px dashed #e9ebeb"},onDragEnter:function(){return I("over")},onDragLeave:function(){return I("leave")},children:function(e){var t=e.getRootProps,a=e.getInputProps;return Object(r.jsxs)("div",Object(l.a)(Object(l.a)({},t({className:"drop-zone"})),{},{ref:P,children:[Object(r.jsx)("input",Object(l.a)({},a())),Object(r.jsx)("p",{children:"Glissez votre image ici ou cliquez ici pour la s\xe9lectionner"}),s&&Object(r.jsxs)("div",{children:[Object(r.jsx)("strong",{children:"Image s\xe9lectionn\xe9e:"})," ",s.name]})]}))}}),u?F?Object(r.jsx)("div",{className:"image-preview",children:Object(r.jsx)("img",{className:"preview-image",src:u,alt:"Preview"})}):Object(r.jsx)("div",{className:"preview-message",children:Object(r.jsx)("p",{children:"L'aper\xe7u de votre image est indisponible"})}):Object(r.jsx)("div",{className:"preview-message",children:Object(r.jsx)("p",{children:"L'aper\xe7u de votre image s'affichera ici apr\xe8s votre s\xe9lection"})})]}),Object(r.jsx)(m.a,{variant:"primary",type:"submit",children:"Envoyer"})]})})},S=function(){return Object(r.jsxs)("div",{className:"header",children:[Object(r.jsx)("h1",{children:"Focus +"}),Object(r.jsxs)("nav",{children:[Object(r.jsx)(o.b,{activeClassName:"active",to:"/",exact:!0,children:"Accueil"}),Object(r.jsx)(o.b,{activeClassName:"active",to:"/focus+",children:"Focus+"}),Object(r.jsx)(o.b,{activeClassName:"active",to:"/video",children:"Video tuto"}),Object(r.jsx)(o.b,{activeClassName:"active",to:"/forum",children:"Forum"})]}),Object(r.jsx)("p",{children:"Ceci n'est qu'un prototype"})]})},N=function(){return Object(r.jsx)(n.a.Fragment,{children:Object(r.jsx)(O.a,{children:Object(r.jsx)(x.a,{children:"Bienvenue sur la partie vid\xe9o"})})})},k=function(){var e=Object(c.useState)([]),t=Object(p.a)(e,2),a=t[0],s=t[1],i=Object(c.useState)(""),o=Object(p.a)(i,2),j=o[0],l=o[1];return Object(c.useEffect)((function(){(function(){var e=Object(d.a)(b.a.mark((function e(){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get("".concat(y,"/getAllMessage"));case 3:t=e.sent,a=t.data,l(""),s(a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),e.t0.response&&l(e.t0.response.data);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(r.jsxs)(n.a.Fragment,{children:[Object(r.jsxs)(O.a,{children:[j&&Object(r.jsx)("p",{className:"errorMsg",children:j}),Object(r.jsx)(x.a,{md:{offset:10},children:Object(r.jsx)(m.a,{href:"/createPost",children:"Nouveau Poste"})})]}),Object(r.jsx)("table",{className:"files-table",children:Object(r.jsx)("tbody",{children:a.length>0?a.map((function(e){var t=e._id,a=e.username,c=e.message;return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{className:"file-title",children:a}),Object(r.jsx)("td",{className:"file-description",children:c})]},t)})):Object(r.jsx)("tr",{children:Object(r.jsx)("td",{colSpan:3,style:{fontWeight:"300"},children:"Pas de post trouv\xe9, veuillez r\xe9essayez plus tard."})})})}),Object(r.jsx)(O.a,{children:Object(r.jsx)(x.a,{md:{offset:10},children:Object(r.jsx)(m.a,{href:"/createPost",children:"Nouveau Poste"})})})]})},C=a(73),z=function(){return Object(r.jsx)(n.a.Fragment,{children:Object(r.jsxs)(O.a,{children:[Object(r.jsx)(x.a,{children:Object(r.jsxs)(C.a,{children:[Object(r.jsx)(m.a,{href:"/login",children:"Se connecter"}),Object(r.jsx)(m.a,{href:"/signup",children:"S'inscrire"})]})}),Object(r.jsx)(x.a,{children:Object(r.jsx)(m.a,{href:"/focus+",children:"Accessibilit\xe9 des documents"})}),Object(r.jsx)(x.a,{children:Object(r.jsx)(m.a,{href:"/forum",children:"Forum"})}),Object(r.jsx)(x.a,{children:Object(r.jsx)(m.a,{href:"/video",children:"Vid\xe9o tuto"})})]})})},F=a(38),E=a.n(F),P=function(){var e=Object(c.useState)([]),t=Object(p.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(""),i=Object(p.a)(s,2),o=i[0],j=i[1];Object(c.useEffect)((function(){(function(){var e=Object(d.a)(b.a.mark((function e(){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get("".concat(y,"/getAllFiles"));case 3:t=e.sent,a=t.data,j(""),n(a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),e.t0.response&&j(e.t0.response.data);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var l=function(){var e=Object(d.a)(b.a.mark((function e(t,a,r){var c,n,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get("".concat(y,"/download/").concat(t),{responseType:"blob"});case 3:return c=e.sent,n=a.split("/"),s=n[n.length-1],j(""),e.abrupt("return",E()(c.data,s,r));case 10:e.prev=10,e.t0=e.catch(0),e.t0.response&&400===e.t0.response.status&&j("Erreur pendant le t\xe9l\xe9chargement. R\xe9essayer plus tard.");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,a,r){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{className:"files-container",children:[o&&Object(r.jsx)("p",{className:"errorMsg",children:o}),Object(r.jsxs)("table",{className:"files-table",children:[Object(r.jsx)("thead",{children:Object(r.jsx)("tr",{children:Object(r.jsx)("th",{children:"Vos images sont disponibles"})})}),Object(r.jsx)("tbody",{children:a.length>0?a.map((function(e){var t=e._id,a=e.file_path,c=e.file_mimetype;return Object(r.jsx)("tr",{children:Object(r.jsx)("td",{children:Object(r.jsx)("a",{href:"#/",onClick:function(){return l(t,a,c)},children:"T\xe9l\xe9charger"})})},t)})):Object(r.jsx)("tr",{children:Object(r.jsx)("td",{colSpan:3,style:{fontWeight:"300"},children:"Pas d'image g\xe9n\xe9r\xe9e trouv\xe9e."})})})]})]})},I=function(e){var t=Object(c.useState)(""),a=Object(p.a)(t,2),s=a[0],i=a[1],o=Object(c.useState)(""),j=Object(p.a)(o,2),l=j[0],u=j[1],v=Object(c.useState)(""),f=Object(p.a)(v,2),w=f[0],S=f[1],N=function(){var e=Object(d.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,""===s.trim()||""===l.trim()){e.next=8;break}return S(""),e.next=6,g.a.post("".concat(y,"/login"),{username:s,password:l});case 6:e.next=9;break;case 8:S("S'il vous pla\xeet entrez un nom d'utilisateur et un mot de passe.");case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),e.t0.response&&S(e.t0.response.data);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)(n.a.Fragment,{children:[Object(r.jsx)(O.a,{children:Object(r.jsx)(x.a,{children:Object(r.jsx)(m.a,{href:"/signup",children:"S'incrire"})})}),Object(r.jsxs)(h.a,{className:"search-form",onSubmit:N,children:[w&&Object(r.jsx)("p",{className:"errorMsg",children:w}),Object(r.jsx)(O.a,{children:Object(r.jsx)(x.a,{children:Object(r.jsx)(h.a.Group,{controlId:"username",children:Object(r.jsx)(h.a.Control,{type:"text",name:"username",value:s||"",placeholder:"Entrez votre nom d'utilisateur",onChange:function(e){i(e.target.value)}})})})}),Object(r.jsx)(O.a,{children:Object(r.jsx)(x.a,{children:Object(r.jsx)(h.a.Group,{controlId:"password",children:Object(r.jsx)(h.a.Control,{type:"text",name:"password",value:l||"",placeholder:"Entrez votre mot de passe",onChange:function(e){u(e.target.value)}})})})}),Object(r.jsx)(m.a,{variant:"primary",type:"submit",children:"Se Connecter"})]})]})},D=function(e){var t=Object(c.useState)(""),a=Object(p.a)(t,2),s=a[0],i=a[1],o=Object(c.useState)(""),j=Object(p.a)(o,2),l=j[0],u=j[1],v=Object(c.useState)(""),f=Object(p.a)(v,2),w=f[0],S=f[1],N=function(){var e=Object(d.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,""===s.trim()||""===l.trim()){e.next=8;break}return S(""),e.next=6,g.a.post("".concat(y,"/signup"),{username:s,password:l});case 6:e.next=9;break;case 8:S("S'il vous pla\xeet entrez un nom d'utilisateur et un mot de passe.");case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),e.t0.response&&S(e.t0.response.data);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)(n.a.Fragment,{children:[Object(r.jsx)(O.a,{children:Object(r.jsx)(x.a,{children:Object(r.jsx)(m.a,{href:"/login",children:"Se connecter"})})}),Object(r.jsxs)(h.a,{className:"search-form",onSubmit:N,children:[w&&Object(r.jsx)("p",{className:"errorMsg",children:w}),Object(r.jsx)(O.a,{children:Object(r.jsx)(x.a,{children:Object(r.jsx)(h.a.Group,{controlId:"username",children:Object(r.jsx)(h.a.Control,{type:"text",name:"username",value:s||"",placeholder:"Entrez votre nom d'utilisateur",onChange:function(e){i(e.target.value)}})})})}),Object(r.jsx)(O.a,{children:Object(r.jsx)(x.a,{children:Object(r.jsx)(h.a.Group,{controlId:"password",children:Object(r.jsx)(h.a.Control,{type:"text",name:"password",value:l||"",placeholder:"Entrez votre mot de passe",onChange:function(e){u(e.target.value)}})})})}),Object(r.jsx)(m.a,{variant:"primary",type:"submit",children:"S'incrire"})]})]})},G=function(e){var t=Object(c.useState)(""),a=Object(p.a)(t,2),s=a[0],i=a[1],o=Object(c.useState)(""),j=Object(p.a)(o,2),l=j[0],u=j[1],v=Object(c.useState)(""),f=Object(p.a)(v,2),w=f[0],S=f[1],N=Object(c.useState)(""),k=Object(p.a)(N,2),C=k[0],z=k[1],F=function(){var t=Object(d.a)(b.a.mark((function t(a){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),t.prev=1,""===s.trim()||""===l.trim()){t.next=9;break}return z(""),t.next=6,g.a.post("".concat(y,"/postMsg"),{username:s,message:l,password:w});case 6:e.history.push("/forum"),t.next=10;break;case 9:z("S'il vous pla\xeet entrez un nom d'utilisateur et un mot de passe.");case 10:t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),t.t0.response&&z(t.t0.response.data);case 15:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e){return t.apply(this,arguments)}}();return Object(r.jsxs)(n.a.Fragment,{children:[Object(r.jsx)(O.a,{children:Object(r.jsx)(x.a,{children:Object(r.jsx)(m.a,{href:"/forum",children:"Revenir au forum"})})}),Object(r.jsxs)(h.a,{className:"search-form",onSubmit:F,children:[C&&Object(r.jsx)("p",{className:"errorMsg",children:C}),Object(r.jsx)(O.a,{children:Object(r.jsx)(x.a,{children:Object(r.jsx)(h.a.Group,{controlId:"username",children:Object(r.jsx)(h.a.Control,{type:"text",name:"username",value:s||"",placeholder:"Entrez votre nom d'utilisateur",onChange:function(e){i(e.target.value)}})})})}),Object(r.jsx)(O.a,{children:Object(r.jsx)(x.a,{children:Object(r.jsx)(h.a.Group,{controlId:"password",children:Object(r.jsx)(h.a.Control,{type:"text",name:"message",value:l||"",placeholder:"Entrez votre message",onChange:function(e){u(e.target.value)}})})})}),Object(r.jsx)(O.a,{children:Object(r.jsx)(x.a,{children:Object(r.jsx)(h.a.Group,{controlId:"password",children:Object(r.jsx)(h.a.Control,{type:"text",name:"password",value:w||"",placeholder:"Entrez votre mot de passe pour valider votre post",onChange:function(e){S(e.target.value)}})})})}),Object(r.jsx)(m.a,{variant:"primary",type:"submit",children:"Poster mon message"})]})]})},M=function(){return Object(r.jsx)(o.a,{children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(S,{}),Object(r.jsx)("div",{className:"main-content",children:Object(r.jsxs)(j.c,{children:[Object(r.jsx)(j.a,{component:z,path:"/",exact:!0}),Object(r.jsx)(j.a,{component:z,path:"/Focus_plus",exact:!0}),Object(r.jsx)(j.a,{component:w,path:"/focus+",exact:!0}),Object(r.jsx)(j.a,{component:N,path:"/video",exact:!0}),Object(r.jsx)(j.a,{component:k,path:"/forum",exact:!0}),Object(r.jsx)(j.a,{component:G,path:"/createPost",exact:!0}),Object(r.jsx)(j.a,{component:P,path:"/list",exact:!0}),Object(r.jsx)(j.a,{component:I,path:"/login",exact:!0}),Object(r.jsx)(j.a,{component:D,path:"/signup",exact:!0})]})})]})})};a(69),a(70);i.a.render(Object(r.jsx)(M,{}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.f644471f.chunk.js.map