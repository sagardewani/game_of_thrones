(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[4],{109:function(e,t,a){"use strict";a.r(t);var c=a(71),n=a(5),r=a(0),s=a.n(r),i=a(3),o=a(49),l=a.n(o),j=a(1),u=a(50),d=a(52),b=a(54),p=a(21),h=a(103),f=a(104),x=a(105),m=a(111),O=a(106),v=a(107),g=a(46),k=a(55),N=a.n(k),w=a(56),y=a.n(w),_=a(6),z=function(){return function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t({type:_.c});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},B=function(){return function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t({type:_.d});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},S=a.p+"static/media/crown.467069d5.svg",C=a.p+"static/media/sword.8149fb4a.svg",L=a.p+"static/media/axes.442d342d.svg",T=a(101),I=a.p+"static/media/win.41c3b97f.jpg",P=a.p+"static/media/loss.b2b98a9b.jpg",H=a.p+"static/media/bg.1d3f370f.jpg";function M(){var e=Object(b.a)(["\n  position: absolute;\n  top: calc(50% - 30px);\n  left: calc(50% - 30px);\n"]);return M=function(){return e},e}var D=Object(g.css)(M()),F={backgroundImage:"url(".concat(H,")"),backgroundSize:"cover",backgroundPositionX:"center",paddingBottom:15},J={backgroundImage:"url(".concat(I,")"),backgroundSize:"cover"},E={backgroundImage:"url(".concat(P,")"),backgroundSize:"cover"},R=function(e){return(e=e.filter((function(e){return!!e}))).join(",")},X=Object(p.b)((function(e){return{loading:e.search.loadingBattle,battle_id:e.search.battle_id,selectedBattle:e.search.selectedBattle}}),{getSearchedBattle:function(e){return function(){var t=Object(u.a)(l.a.mark((function t(a){var c,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c={headers:{"Content-Type":"application/json"}},t.prev=1,a(B()),t.next=5,y.a.get("/".concat(e),c);case 5:n=t.sent,a({type:_.i,payload:n.data.response}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log("search error",t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.battle_id,a=e.selectedBattle,c=e.loading,s=e.getSearchedBattle,i=Object(r.useState)({name:"",year:"",battle_number:0,attacker_king:"",defender_king:"",attacker_1:"",attacker_2:"",attacker_3:"",attacker_4:"",defender_1:"",defender_2:"",defender_3:"",defender_4:"",attacker_outcome:"",battle_type:"",major_death:0,major_capture:0,attacker_size:0,defender_size:0,attacker_commander:"",defender_commander:"",summer:0,location:"",region:"",note:""}),o=Object(d.a)(i,2),b=o[0],p=o[1],g=Object(r.useState)(0),k=Object(d.a)(g,2),w=k[0],y=k[1],_=Object(r.useState)(!1),z=Object(d.a)(_,2),B=z[0],I=z[1],P=Object(r.useState)(null),H=Object(d.a)(P,2),M=H[0],X=H[1],Y=Object(r.useState)(null),q=Object(d.a)(Y,2),A=q[0],G=q[1],K=b.name,Q=b.year,U=b.battle_number,V=b.attacker_king,W=b.defender_king,Z=b.attacker_1,$=b.attacker_2,ee=b.attacker_3,te=b.attacker_4,ae=b.defender_1,ce=b.defender_2,ne=b.defender_3,re=b.defender_4,se=b.attacker_outcome,ie=b.battle_type,oe=(b.major_death,b.major_capture,b.attacker_size),le=b.defender_size,je=b.attacker_commander,ue=b.defender_commander,de=b.summer,be=b.location,pe=b.region,he=b.note,fe=function(){I(!1),y(0),M&&clearInterval(M)};return Object(r.useMemo)((function(){fe(),G(null),t&&s(t)}),[s,t]),Object(r.useEffect)((function(){var e=!0;function t(){return(t=Object(u.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e&&a&&p(Object(j.a)({},a));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return function(){t.apply(this,arguments)}(),function(){return e=!1}}),[a]),Object(n.jsx)("section",{className:"sptb p-2",children:Object(n.jsx)(h.a,{children:t?Object(n.jsx)(f.a,{children:Object(n.jsx)(x.a,{md:10,className:"m-auto",children:Object(n.jsx)("div",{className:"p-2",children:Object(n.jsxs)("div",{style:Object(j.a)({minHeight:697},F),className:"border shadow-lg bg-vs",children:[c&&Object(n.jsx)("div",{className:"custom_overlay",children:Object(n.jsx)(N.a,{css:D,size:60,loading:!0})}),B&&Object(n.jsx)("div",{className:"fixed-bar d-flex align-items-center justify-content-center",children:Object(n.jsx)(m.a,{animated:!0,now:w,min:0,max:100,className:"w-lg-60 w-md-60"})}),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(f.a,{className:"d-flex justify-content-center mb-2",children:Object(n.jsx)("div",{children:Object(n.jsx)("span",{className:"battle-name-label shadow",children:"".concat(U,". ").concat(K)})})}),Object(n.jsx)(f.a,{className:"d-flex justify-content-center mb-2",children:Object(n.jsxs)("div",{className:"battle-history text-white",children:[Object(n.jsx)("div",{children:"Location: ".concat(be)}),Object(n.jsx)("div",{children:"Region: ".concat(pe)}),Object(n.jsx)("div",{children:"Year: ".concat(Q," ")})]})}),Object(n.jsxs)(f.a,{children:[Object(n.jsx)(x.a,{md:6,xs:12,className:"p-4",children:Object(n.jsxs)("div",{className:"border battle-card left",style:"win"===se?J:E,children:[!!A&&("attacker"===A?Object(n.jsx)("div",{className:"text outcome",children:Object(n.jsx)(T.a,{color:"#ffc107",size:"32px"})}):Object(n.jsx)("div",{className:"text outcome",children:Object(n.jsx)(T.b,{color:"#2684ff",size:"32px"})})),Object(n.jsxs)("div",{className:"text",children:[Object(n.jsx)(O.a,{src:S,width:28,height:28,className:"mr-2"}),Object(n.jsx)("span",{children:V})]}),Object(n.jsxs)("div",{className:"text",children:[Object(n.jsx)(O.a,{src:C,width:28,height:28,className:"mr-2"}),Object(n.jsx)("span",{children:oe||0})]}),Object(n.jsxs)("div",{className:"text",children:[Object(n.jsx)(T.c,{size:"28px",className:"mr-2",color:"#ffc107"}),Object(n.jsx)("span",{children:je})]}),Object(n.jsxs)("div",{className:"text",children:[Object(n.jsx)(O.a,{src:L,width:28,height:28,className:"mr-2"}),Object(n.jsx)("span",{children:R([Z,$,ee,te])})]}),Object(n.jsxs)("div",{className:"text",children:[Object(n.jsx)(T.f,{size:"28px",className:"mr-2",color:"#ffc107"}),Object(n.jsx)("span",{children:ie})]}),Object(n.jsx)("div",{className:"text",children:!!de&&(de?Object(n.jsx)(T.e,{size:"28px",className:"mr-2",color:"#ffc107"}):Object(n.jsx)(T.d,{size:"28px",className:"mr-2",color:"#fff"}))})]})}),Object(n.jsx)(x.a,{md:6,xs:12,className:"p-4",children:Object(n.jsxs)("div",{className:"border battle-card right",style:"win"===se?E:J,children:[!!A&&("attacker"===A?Object(n.jsx)("div",{className:"text outcome",children:Object(n.jsx)(T.b,{color:"#2684ff",size:"32px"})}):Object(n.jsx)("div",{className:"text outcome",children:Object(n.jsx)(T.a,{color:"#ffc107",size:"32px"})})),Object(n.jsxs)("div",{className:"text skew-right",children:[Object(n.jsx)(O.a,{src:S,width:28,height:28,className:"mr-2"}),Object(n.jsx)("span",{children:W})]}),Object(n.jsxs)("div",{className:"text skew-right",children:[Object(n.jsx)(O.a,{src:C,width:28,height:28,className:"mr-2"}),Object(n.jsx)("span",{children:le||0})]}),Object(n.jsxs)("div",{className:"text skew-right",children:[Object(n.jsx)(T.c,{size:"28px",className:"mr-2",color:"#ffc107"}),Object(n.jsx)("span",{children:ue})]}),Object(n.jsxs)("div",{className:"text skew-right",children:[Object(n.jsx)(O.a,{src:L,width:28,height:28,className:"mr-2"}),Object(n.jsx)("span",{children:R([ae,ce,ne,re])})]}),Object(n.jsxs)("div",{className:"text",children:[Object(n.jsx)(T.f,{size:"28px",className:"mr-2",color:"#ffc107"}),Object(n.jsx)("span",{children:ie})]}),Object(n.jsx)("div",{className:"text",children:!!de&&(de?Object(n.jsx)(T.e,{size:"28px",className:"mr-2",color:"#ffc107"}):Object(n.jsx)(T.d,{size:"28px",className:"mr-2",color:"#fff"}))})]})})]}),!!he&&Object(n.jsx)(f.a,{className:"mt-2 mb-2",children:Object(n.jsx)(x.a,{children:Object(n.jsx)("span",{className:"text-white",children:he})})}),!!se&&Object(n.jsx)(f.a,{children:Object(n.jsx)(x.a,{md:4,className:"m-auto",children:Object(n.jsx)(v.a,{variant:"outline-info",className:"w-100",onClick:function(){I(!0),function(){var e=0;X(setInterval((function(){y(e+=10),e>=100&&(G("win"===se?"attacker":"defender"),fe())}),1e3))}()},title:"Start Fight",children:"Fight"})})})]})]})})})}):Object(n.jsx)(f.a,{children:Object(n.jsx)(x.a,{md:10,className:"m-auto",children:Object(n.jsx)("h3",{children:"Please Search for a battle..."})})})})})})),Y=function(){return function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t({type:_.b});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},q=function(){return function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t({type:_.a});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};function A(){var e=Object(b.a)(["\n  position: absolute;\n  top: calc(50% - 30px);\n  left: calc(50% - 30px);\n"]);return A=function(){return e},e}var G=Object(g.css)(A()),K=[{path:"/",exact:!0,name:"Home",component:X},{path:"/battles",exact:!0,name:"Battles",component:Object(p.b)((function(e){return{loading:e.battles.loadingList,loadingCount:e.battles.loadingCount,count:e.battles.count,list:e.battles.list}}),{getList:function(){return function(){var e=Object(u.a)(l.a.mark((function e(t){var a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{"Content-Type":"application/json"}},e.prev=1,t(Y()),e.next=5,y.a.get("/list",a);case 5:c=e.sent,t({type:_.h,payload:c.data.response}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("list error",e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},getCount:function(){return function(){var e=Object(u.a)(l.a.mark((function e(t){var a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{"Content-Type":"application/json"}},e.prev=1,t(q()),e.next=5,y.a.get("/count",a);case 5:c=e.sent,t({type:_.g,payload:c.data.response}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("count error",e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},resetComponent:function(){return function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t({type:_.e});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Object(i.f)((function(e){var t=e.list,a=e.loading,c=e.loadingCount,s=e.count,i=e.getCount,o=e.getList,l=e.resetComponent,j=Object(r.useState)(!0),u=Object(d.a)(j,2),b=u[0],p=u[1];return Object(r.useMemo)((function(){b&&(l(),p(!1)),i(),o()}),[l,p,i,o]),Object(n.jsxs)("section",{className:"sptb p-3",children:[(a||c)&&Object(n.jsx)("div",{className:"custom_overlay",children:Object(n.jsx)(N.a,{css:G,size:60,loading:!0})}),Object(n.jsx)(f.a,{children:Object(n.jsx)(x.a,{children:Object(n.jsx)("h3",{children:"Total Battles Occurred: ".concat(s)})})}),Object(n.jsx)(f.a,{children:Object(n.jsxs)(x.a,{children:[Object(n.jsx)("h3",{children:"Battle Places"}),Object(n.jsx)("ul",{children:t.map((function(e,t){return Object(n.jsx)("li",{children:e},t)}))})]})})]})})))}],Q=function(e){var t=e.routes;return Object(n.jsx)(r.Suspense,{fallback:"loading...",children:Object(n.jsx)(i.c,{children:t.map((function(e,t){try{return e.component&&Object(n.jsx)(i.a,{path:e.path,exact:e.exact,name:e.name,render:function(t){return Object(n.jsx)(e.component,Object(j.a)({},t))}},t)}catch(a){console.log("err",a)}}))})})},U=s.a.memo(Q),V=a(108),W=a(110),Z=a.p+"static/media/logo.3d2f4a32.jpg",$=a(100),ee=Object(p.b)((function(e){return{loading:e.search.loadingList,sortingParams:e.search.sortingParams}}),{searchBattle:function(e){return function(){var t=Object(u.a)(l.a.mark((function t(a){var c,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c={headers:{"Content-Type":"application/json"}},t.prev=1,c.params=e,a(z()),t.next=6,y.a.get("/search",c);case 6:return n=t.sent,a({type:_.l,payload:e}),a({type:_.j,payload:n.data.response}),t.abrupt("return",n);case 12:t.prev=12,t.t0=t.catch(1),console.log("search error",t.t0);case 15:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e){return t.apply(this,arguments)}}()},updateSearchedBattleID:function(e){return function(){var t=Object(u.a)(l.a.mark((function t(a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e&&a({type:_.k,payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},resetComponent:function(){return function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t({type:_.f});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t,a,c=e.loading,s=e.sortingParams,i=e.searchBattle,o=e.updateSearchedBattleID,l=e.resetComponent,u=Object(r.useState)({limit:40,king:"",location:"",type:""}),b=Object(d.a)(u,2),p=b[0],h=(b[1],Object(r.useState)(!0)),f=Object(d.a)(h,2),m=f[0],O=f[1],v=function(e){var t=Object(j.a)(Object(j.a)({},s),{},{location:e});return i(t).then((function(e){if(e.data.status)return e.data.response.map((function(e){return{value:e._id,label:e.name}}))}))};return Object(r.useMemo)((function(){m&&(l(),O(!1)),i(p)}),[l,O,i,p]),Object(n.jsx)(x.a,{md:8,lg:6,children:Object(n.jsx)($.a,{placeholder:"Search Battles...",cacheOptions:!0,isLoading:c,defaultOptions:!0,onChange:(a="searchBattle",function(e){var t=[];switch(e&&(e.length?t=e.map((function(e){return e.value})):e.value&&(t=e.value)),a){case"searchBattle":o(t)}}),loadOptions:function(e){return function(e,a){return function(){var c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:750;return clearTimeout(t),new Promise((function(n){t=setTimeout((function(){n(e(a))}),c)}))}}(v,e)()}})})})),te=function(){return Object(n.jsxs)(V.a,{bg:"light",fixed:"top",expand:"lg",children:[Object(n.jsx)(V.a.Brand,{href:"/",children:Object(n.jsx)(O.a,{src:Z,style:{height:60,width:60,padding:10},alt:"game of thrones"})}),Object(n.jsx)(V.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(n.jsxs)(V.a.Collapse,{id:"basic-navbar-nav",children:[Object(n.jsxs)(W.a,{className:"mr-auto",children:[Object(n.jsx)(W.a.Link,{href:"/",children:"Home"}),Object(n.jsx)(W.a.Link,{href:"/battles",children:"Battles"})]}),Object(n.jsx)(ee,{})]})]})};t.default=Object(i.f)((function(e){return Object(c.a)(e),Object(n.jsxs)(h.a,{children:[Object(n.jsx)(te,{}),Object(n.jsx)(U,{routes:K})]})}))}}]);
//# sourceMappingURL=4.bd10b683.chunk.js.map