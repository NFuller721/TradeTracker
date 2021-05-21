(this["webpackJsonpreact-frontend"]=this["webpackJsonpreact-frontend"]||[]).push([[0],{73:function(e,t,n){},76:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(10),s=n.n(a),o=n(57),i=n(9),u=n(42),j=n(116),l=n(15),p=n.n(l),b=n(16),f=n(21),d=function(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2}).format(e)},h=function(){var e=Object(f.a)(p.a.mark((function e(t,n){var r,c,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/Api/54657687969758647563/getBalance");case 2:return r=e.sent,e.next=5,r.json();case 5:if(c=e.sent,a=0,!c.Response.error.length){e.next=10;break}return console.error("Balance Error: ".concat(c.Response.error[0])),e.abrupt("return");case 10:Object.keys(c.Response.result).forEach((function(e){a+=parseFloat(c.Response.result[e])})),n(Object(b.a)(Object(b.a)({},t),{},{balance:d(a)}));case 12:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),O=function(){var e=Object(f.a)(p.a.mark((function e(t,n){var r,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/Api/54657687969758647563/loggedIn");case 2:return r=e.sent,e.next=5,r.json();case 5:c=e.sent,n(Object(b.a)(Object(b.a)({},t),{},{loggedIn:c.Response}));case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),g=function(){var e=Object(f.a)(p.a.mark((function e(t,n){var r,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/Api/54657687969758647563/getTrades");case 2:return r=e.sent,e.next=5,r.json();case 5:if(!(c=e.sent).Response.error.length){e.next=9;break}return console.error("Trades Error: ".concat(c.Response.error[0])),e.abrupt("return");case 9:n(Object(b.a)(Object(b.a)({},t),{},{trades:c.Response.result.trades}));case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),x=(n(107),n(110)),m=(n(111),n(112),n(113),n(114),n(115),n(4)),v=(n(73),function(){var e=Object(r.useState)({loggedIn:!0,balance:"$ 0.00",trades:{}}),t=Object(u.a)(e,2),n=t[0],c=t[1];return Object(r.useEffect)((function(){O(n,c),h(n,c),g(n,c)}),[]),Object(m.jsx)("div",{className:"HomePage",children:n.loggedIn?Object(m.jsx)(j.a,{children:"Home Page:"}):Object(m.jsx)(i.a,{to:"/login"})})}),y=n(33),w=n(119),S=n(120),k=(n(76),function(){var e=Object(r.useState)({ApiKey:"",SecretKey:""}),t=Object(u.a)(e,2),n=t[0],c=t[1],a=function(e){c(Object(b.a)(Object(b.a)({},n),{},Object(y.a)({},e.target.name,e.target.value)))};return Object(m.jsx)("div",{className:"LoginPage",children:Object(m.jsx)(x.a,{className:"FormPaper",square:!0,children:Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),fetch("/Api/54657687969758647563/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(){window.location.replace("/")}))},className:"LoginForm",children:[Object(m.jsx)(w.a,{variant:"filled",name:"ApiKey",placeholder:"Api Key",value:n.ApiKey,onChange:a}),Object(m.jsx)(w.a,{variant:"filled",name:"SecretKey",placeholder:"Secret Key",value:n.SecretKey,onChange:a,type:"password"}),Object(m.jsx)("div",{className:"Grow"}),Object(m.jsx)(S.a,{variant:"contained",type:"submit",children:"Login"})]})})})}),A=function(){var e=function(){var e=Object(f.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("/Api/54657687969758647563/logout").then((function(e){window.location.replace("/")}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){e()}),[]),Object(m.jsx)("div",{className:"LogoutPage"})},F=n(117),N=n(58),K=n(118),P=function(){var e=Object(F.a)("(prefers-color-scheme: dark)"),t=Object(N.a)({palette:{type:e?"dark":"light"}});return Object(m.jsx)(K.a,{theme:t,children:Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(x.a,{style:{height:"100vh",width:"100vw"},square:!0,children:Object(m.jsx)(o.a,{children:Object(m.jsxs)(i.d,{children:[Object(m.jsx)(i.b,{exact:!0,path:"/",children:Object(m.jsx)(v,{})}),Object(m.jsx)(i.b,{exact:!0,path:"/login",children:Object(m.jsx)(k,{})}),Object(m.jsx)(i.b,{exact:!0,path:"/logout",children:Object(m.jsx)(A,{})})]})})})})})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,121)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(P,{})}),document.getElementById("root")),R()}},[[78,1,2]]]);
//# sourceMappingURL=main.2bde4c6a.chunk.js.map