(this["webpackJsonptest-bootstrap"]=this["webpackJsonptest-bootstrap"]||[]).push([[0],{71:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var r=a(1),c=a(0),n=a.n(c),s=a(35),i=a.n(s),o=a(17),j=a(7),l=a(16),u=a(9),d=a.n(u),b=a(14),p=a(8),h=a(75),x=a(73),O=a(37),m=a(76),v=a(40),f=a(15),g=a.n(f),w="http://localhost:5000",y=function(e){var t=Object(c.useState)(null),a=Object(p.a)(t,2),s=a[0],i=a[1],o=Object(c.useState)(""),j=Object(p.a)(o,2),u=j[0],f=j[1],y=Object(c.useState)(""),S=Object(p.a)(y,2),N=S[0],k=S[1],C=Object(c.useState)(!1),F=Object(p.a)(C,2),z=F[0],D=F[1],E=Object(c.useRef)(),I=function(e){"over"===e?E.current.style.border="2px solid #000":"leave"===e&&(E.current.style.border="2px dashed #e9ebeb")},P=function(){var t=Object(b.a)(d.a.mark((function t(a){var r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),t.prev=1,!s){t.next=11;break}return(r=new FormData).append("file",s),k(""),t.next=8,g.a.post("".concat(w,"/upload"),r,{headers:{"Content-Type":"multipart/form-data"}});case 8:e.history.push("/list"),t.next=12;break;case 11:k("S'il vous pla\xeet, ajoutez votre image");case 12:t.next=17;break;case 14:t.prev=14,t.t0=t.catch(1),t.t0.response&&k(t.t0.response.data);case 17:case"end":return t.stop()}}),t,null,[[1,14]])})));return function(e){return t.apply(this,arguments)}}();return Object(r.jsx)(n.a.Fragment,{children:Object(r.jsxs)(h.a,{className:"search-form",onSubmit:P,children:[N&&Object(r.jsx)("p",{className:"errorMsg",children:N}),Object(r.jsx)(x.a,{children:Object(r.jsx)(O.a,{children:"Placez votre image ci-dessous !"})}),Object(r.jsxs)("div",{className:"upload-section",children:[Object(r.jsx)(v.a,{onDrop:function(e){var t=Object(p.a)(e,1)[0];i(t);var a=new FileReader;a.onload=function(){f(a.result)},a.readAsDataURL(t),D(t.name.match(/\.(jpeg|jpg|png)$/)),E.current.style.border="2px dashed #e9ebeb"},onDragEnter:function(){return I("over")},onDragLeave:function(){return I("leave")},children:function(e){var t=e.getRootProps,a=e.getInputProps;return Object(r.jsxs)("div",Object(l.a)(Object(l.a)({},t({className:"drop-zone"})),{},{ref:E,children:[Object(r.jsx)("input",Object(l.a)({},a())),Object(r.jsx)("p",{children:"Glissez votre image ici ou cliquez ici pour la s\xe9lectionner"}),s&&Object(r.jsxs)("div",{children:[Object(r.jsx)("strong",{children:"Image s\xe9lectionn\xe9e:"})," ",s.name]})]}))}}),u?z?Object(r.jsx)("div",{className:"image-preview",children:Object(r.jsx)("img",{className:"preview-image",src:u,alt:"Preview"})}):Object(r.jsx)("div",{className:"preview-message",children:Object(r.jsx)("p",{children:"L'aper\xe7u de votre image est indisponible"})}):Object(r.jsx)("div",{className:"preview-message",children:Object(r.jsx)("p",{children:"L'aper\xe7u de votre image s'affichera ici apr\xe8s votre s\xe9lection"})})]}),Object(r.jsx)(m.a,{variant:"primary",type:"submit",children:"Envoyer"})]})})},S=function(){return Object(r.jsxs)("div",{className:"header",children:[Object(r.jsx)("h1",{children:"Focus +"}),Object(r.jsxs)("nav",{children:[Object(r.jsx)(o.b,{activeClassName:"active",to:"/",exact:!0,children:"Accueil"}),Object(r.jsx)(o.b,{activeClassName:"active",to:"/focus+",children:"Focus+"}),Object(r.jsx)(o.b,{activeClassName:"active",to:"/video",children:"Video tuto"}),Object(r.jsx)(o.b,{activeClassName:"active",to:"/forum",children:"Forum"})]})]})},N=function(){return Object(r.jsx)(n.a.Fragment,{children:Object(r.jsx)(x.a,{children:Object(r.jsx)(O.a,{children:"Bienvenue sur la partie vid\xe9o"})})})},k=function(){return Object(r.jsx)(n.a.Fragment,{children:Object(r.jsx)(x.a,{children:Object(r.jsx)(O.a,{children:"Bienvenue sur la partie Forum"})})})},C=a(74),F=function(){return Object(r.jsx)(n.a.Fragment,{children:Object(r.jsxs)(x.a,{children:[Object(r.jsx)(O.a,{children:Object(r.jsxs)(C.a,{children:[Object(r.jsx)(m.a,{href:"/login",children:"Se connecter"}),Object(r.jsx)(m.a,{href:"/signup",children:"S'inscrire"})]})}),Object(r.jsx)(O.a,{children:Object(r.jsx)(m.a,{href:"/focus+",children:"Accessibilit\xe9 des documents"})}),Object(r.jsx)(O.a,{children:Object(r.jsx)(m.a,{href:"/forum",children:"Forum"})}),Object(r.jsx)(O.a,{children:Object(r.jsx)(m.a,{href:"/video",children:"Vid\xe9o tuto"})})]})})},z=a(39),D=a.n(z),E=function(){var e=Object(c.useState)([]),t=Object(p.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(""),i=Object(p.a)(s,2),o=i[0],j=i[1];Object(c.useEffect)((function(){(function(){var e=Object(b.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get("".concat(w,"/getAllFiles"));case 3:t=e.sent,a=t.data,j(""),n(a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),e.t0.response&&j(e.t0.response.data);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var l=function(){var e=Object(b.a)(d.a.mark((function e(t,a,r){var c,n,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get("".concat(w,"/download/").concat(t),{responseType:"blob"});case 3:return c=e.sent,n=a.split("/"),s=n[n.length-1],j(""),e.abrupt("return",D()(c.data,s,r));case 10:e.prev=10,e.t0=e.catch(0),e.t0.response&&400===e.t0.response.status&&j("Erreur pendant le t\xe9l\xe9chargement. R\xe9essayer plus tard.");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,a,r){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{className:"files-container",children:[o&&Object(r.jsx)("p",{className:"errorMsg",children:o}),Object(r.jsxs)("table",{className:"files-table",children:[Object(r.jsx)("thead",{children:Object(r.jsx)("tr",{children:Object(r.jsx)("th",{children:"Vos images sont disponibles"})})}),Object(r.jsx)("tbody",{children:a.length>0?a.map((function(e){var t=e._id,a=e.file_path,c=e.file_mimetype;return Object(r.jsx)("tr",{children:Object(r.jsx)("td",{children:Object(r.jsx)("a",{href:"#/",onClick:function(){return l(t,a,c)},children:"T\xe9l\xe9charger"})})},t)})):Object(r.jsx)("tr",{children:Object(r.jsx)("td",{colSpan:3,style:{fontWeight:"300"},children:"Pas d'image g\xe9n\xe9r\xe9e trouv\xe9e."})})})]})]})},I=a(19),P=function(e){var t=Object(c.useState)({username:"",password:""}),a=Object(p.a)(t,2),s=a[0],i=a[1],o=Object(c.useState)(""),j=Object(p.a)(o,2),u=j[0],v=j[1],f=function(e){i(Object(l.a)(Object(l.a)({},s),{},Object(I.a)({},e.target.name,e.target.value)))},y=function(){var e=Object(b.a)(d.a.mark((function e(t){var a,r,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,a=s.username,r=s.password,""===a.trim()||""===r.trim()){e.next=12;break}return(c=new FormData).append("username",a),c.append("password",r),v(""),e.next=10,g.a.post("".concat(w,"/login"),c,{headers:{"Content-Type":"multipart/form-data"}});case 10:e.next=13;break;case 12:v("Please enter all the field values.");case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),e.t0.response&&v(e.t0.response.data);case 18:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)(n.a.Fragment,{children:[Object(r.jsx)(x.a,{children:Object(r.jsx)(O.a,{children:Object(r.jsx)(m.a,{href:"/signup",children:"S'incrire"})})}),Object(r.jsxs)(h.a,{className:"search-form",onSubmit:y,children:[u&&Object(r.jsx)("p",{className:"errorMsg",children:u}),Object(r.jsx)(x.a,{children:Object(r.jsx)(O.a,{children:Object(r.jsx)(h.a.Group,{controlId:"username",children:Object(r.jsx)(h.a.Control,{type:"text",name:"username",value:s.username||"",placeholder:"Entrez votre nom d'utilisateur",onChange:f})})})}),Object(r.jsx)(x.a,{children:Object(r.jsx)(O.a,{children:Object(r.jsx)(h.a.Group,{controlId:"password",children:Object(r.jsx)(h.a.Control,{type:"text",name:"password",value:s.password||"",placeholder:"Entrez votre mot de passe",onChange:f})})})}),Object(r.jsx)(m.a,{variant:"primary",type:"submit",children:"Se Connecter"})]})]})},G=function(e){var t=Object(c.useState)(""),a=Object(p.a)(t,2),s=a[0],i=a[1],o=Object(c.useState)(""),j=Object(p.a)(o,2),l=j[0],u=j[1],v=Object(c.useState)(""),f=Object(p.a)(v,2),y=f[0],S=f[1],N=function(){var e=Object(b.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,""===s.trim()||""===l.trim()){e.next=8;break}return S(""),e.next=6,g.a.post("".concat(w,"/signup"),{username:s,password:l},{});case 6:e.next=9;break;case 8:S("S'il vous pla\xeet entrez un nom d'utilisateur et un mot de passe.");case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),e.t0.response&&S(e.t0.response.data);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)(n.a.Fragment,{children:[Object(r.jsx)(x.a,{children:Object(r.jsx)(O.a,{children:Object(r.jsx)(m.a,{href:"/login",children:"Se connecter"})})}),Object(r.jsxs)(h.a,{className:"search-form",onSubmit:N,children:[y&&Object(r.jsx)("p",{className:"errorMsg",children:y}),Object(r.jsx)(x.a,{children:Object(r.jsx)(O.a,{children:Object(r.jsx)(h.a.Group,{controlId:"username",children:Object(r.jsx)(h.a.Control,{type:"text",name:"username",value:s||"",placeholder:"Entrez votre nom d'utilisateur",onChange:function(e){i(e.target.value)}})})})}),Object(r.jsx)(x.a,{children:Object(r.jsx)(O.a,{children:Object(r.jsx)(h.a.Group,{controlId:"password",children:Object(r.jsx)(h.a.Control,{type:"text",name:"password",value:l||"",placeholder:"Entrez votre mot de passe",onChange:function(e){u(e.target.value)}})})})}),Object(r.jsx)(m.a,{variant:"primary",type:"submit",children:"S'incrire"})]})]})},R=function(){return Object(r.jsx)(o.a,{children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(S,{}),Object(r.jsx)("div",{className:"main-content",children:Object(r.jsxs)(j.c,{children:[Object(r.jsx)(j.a,{component:F,path:"/",exact:!0}),Object(r.jsx)(j.a,{component:F,path:"/Focus_plus",exact:!0}),Object(r.jsx)(j.a,{component:y,path:"/focus+",exact:!0}),Object(r.jsx)(j.a,{component:N,path:"/video",exact:!0}),Object(r.jsx)(j.a,{component:k,path:"/forum",exact:!0}),Object(r.jsx)(j.a,{component:E,path:"/list",exact:!0}),Object(r.jsx)(j.a,{component:P,path:"/login",exact:!0}),Object(r.jsx)(j.a,{component:G,path:"/signup",exact:!0})]})})]})})};a(70),a(71);i.a.render(Object(r.jsx)(R,{}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.06f2e18c.chunk.js.map