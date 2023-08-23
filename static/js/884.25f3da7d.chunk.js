"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[884],{9137:function(n,t,e){e.d(t,{Df:function(){return u},M1:function(){return v},V0:function(){return Z},t2:function(){return f},tx:function(){return x}});var r=e(5861),i=e(4687),o=e.n(i),a=e(1243),c=e(1686),s=e.n(c),p="api_key=7d0a5671b3bac0f4af8c650bfdc346ed",l="https://api.themoviedb.org/3";function u(){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="",n.prev=1,n.next=4,a.Z.get("".concat(l,"/trending/movie/day?").concat(p));case 4:return t=n.sent,n.abrupt("return",t.data);case 8:n.prev=8,n.t0=n.catch(1),s().Notify.failure("Oops... I did it again."),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[1,8]])})))).apply(this,arguments)}function f(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="",n.prev=1,n.next=4,a.Z.get("".concat(l,"/movie/").concat(t,"?").concat(p));case 4:return e=n.sent,n.abrupt("return",e.data);case 8:n.prev=8,n.t0=n.catch(1),s().Notify.failure("Oops... I did it again."),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[1,8]])})))).apply(this,arguments)}function x(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="",n.prev=1,n.next=4,a.Z.get("".concat(l,"/movie/").concat(t,"/reviews?").concat(p));case 4:return e=n.sent,n.abrupt("return",e.data);case 8:n.prev=8,n.t0=n.catch(1),s().Notify.failure("Oops... I did it again."),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[1,8]])})))).apply(this,arguments)}function v(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="",n.prev=1,n.next=4,a.Z.get("".concat(l,"/movie/").concat(t,"/credits?").concat(p));case 4:return e=n.sent,n.abrupt("return",e.data);case 8:n.prev=8,n.t0=n.catch(1),s().Notify.failure("Oops... I did it again."),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[1,8]])})))).apply(this,arguments)}function Z(n){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="",n.prev=1,n.next=4,a.Z.get("".concat(l,"/search/movie?query=").concat(t,"&").concat(p));case 4:return e=n.sent,n.abrupt("return",e.data);case 8:n.prev=8,n.t0=n.catch(1),s().Notify.failure("Oops... I did it again."),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[1,8]])})))).apply(this,arguments)}},7978:function(n,t,e){e.d(t,{Z:function(){return C},M:function(){return U}});var r,i,o,a,c,s,p,l,u,d,f,h,x=e(7689),g=e(168),v=e(1087),m=e(7691),Z=m.ZP.section(r||(r=(0,g.Z)(["\n  /* display: flex; */\n  display: block;\n  /* padding: 20px; */\n  padding-top: 20px;\n  padding-bottom: 20px;\n"]))),y=m.ZP.div(i||(i=(0,g.Z)(["\n  display: flex;\n\n  margin-bottom: 20px;\n"]))),w=m.ZP.div(o||(o=(0,g.Z)(["\n  padding-left: 20px;\n  padding-top: 10px;\n"]))),b=m.ZP.h2(a||(a=(0,g.Z)(["\n  color: lightgrey;\n  font-weight: 500;\n  font-size: 25px;\n  margin: 0;\n  margin-bottom: 10px;\n"]))),j=m.ZP.p(c||(c=(0,g.Z)(["\n  color: lightgrey;\n  font-weight: 400;\n  font-size: 14px;\n\n  margin-bottom: 20px;\n  width: 700px;\n  line-height: 1.3;\n"]))),k=m.ZP.h3(s||(s=(0,g.Z)(["\n  color: lightgrey;\n  font-weight: 500;\n  font-size: 18px;\n  margin-bottom: 10px;\n"]))),P=m.ZP.ul(p||(p=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  color: lightgrey;\n  font-weight: 400;\n  font-size: 14px;\n  padding-left: 12px;\n"]))),_=m.ZP.li(l||(l=(0,g.Z)(["\n  &:not(:last-child) {\n    /* margin-bottom: 5px; */\n  }\n"]))),N=m.ZP.ul(u||(u=(0,g.Z)(["\n  display: flex;\n  margin-top: 15px;\n"]))),O=m.ZP.li(d||(d=(0,g.Z)(["\n  margin-left: 12px;\n  &:not(:last-child) {\n    margin-right: 5px;\n  }\n"]))),I=(0,m.ZP)(v.OL)(f||(f=(0,g.Z)(["\n  padding: 5px 8px;\n  border-radius: 4px;\n  text-decoration: none;\n  color: gray;\n  font-weight: 500;\n  &.active {\n    color: lightgray;\n    box-shadow: 0 0 5px 3px rgba(11, 127, 171, 0.7);\n  }\n"]))),S=(0,m.ZP)(v.rU)(h||(h=(0,g.Z)(["\n  cursor: pointer;\n  padding: 8px 16px;\n  border-radius: 4px;\n  text-decoration: none;\n  color: gray;\n  font-weight: 500;\n  box-shadow: 0 0 5px 3px rgba(11, 127, 171, 0.7);\n  margin-bottom: 25px;\n  width: 70px;\n  display: flex;\n  justify-content: center;\n\n  &:hover {\n    color: lightgray;\n  }\n"]))),z=e(184),U="https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",C=function(n){var t,e,r=n.movie,i=null!==(t=null===(e=(0,x.TH)().state)||void 0===e?void 0:e.from)&&void 0!==t?t:"/",o=r.title,a=r.release_date,c=r.overview,s=r.genres,p=r.vote_average,l=r.poster_path;return(0,z.jsxs)(Z,{children:[(0,z.jsx)(S,{to:i,children:"Go back"}),(0,z.jsxs)(y,{children:[(0,z.jsx)("img",{src:l?"https://image.tmdb.org/t/p/w500/".concat(l):U,alt:o,width:"250px",height:"375px"}),(0,z.jsxs)(w,{children:[(0,z.jsx)(b,{children:a?"".concat(o," (").concat(new Date(a).getFullYear(),")"):o}),(0,z.jsx)(j,{children:p?"User Score: ".concat(10*Math.round(p),"% "):"User Score: no score"}),(0,z.jsx)(k,{children:"Overview:"}),(0,z.jsx)(j,{children:c||"No overview"}),(0,z.jsx)(k,{children:"Genres:"}),(0,z.jsx)(P,{children:0!==s.length?s.map((function(n){return(0,z.jsx)(_,{children:n.name},n.id)})):"No genres"})]})]}),(0,z.jsx)(k,{children:"Additional information"}),(0,z.jsxs)(N,{children:[(0,z.jsx)(O,{children:(0,z.jsx)(I,{to:"cast",state:{from:i},children:"Cast"})}),(0,z.jsx)("li",{children:(0,z.jsx)(I,{to:"reviews",state:{from:i},children:"Reviews"})})]})]})}},2884:function(n,t,e){e.r(t);var r=e(5861),i=e(9439),o=e(4687),a=e.n(o),c=e(7689),s=e(2791),p=e(9137),l=e(7978),u=e(184);t.default=function(){var n=(0,s.useState)(null),t=(0,i.Z)(n,2),e=t[0],o=t[1],d=(0,s.useState)(""),f=(0,i.Z)(d,2),h=f[0],x=f[1],g=(0,c.UO)().movieId,v=(0,c.s0)();return(0,s.useEffect)((function(){var n=function(){var n=(0,r.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,p.t2)(g);case 3:t=n.sent,o(t),n.next=11;break;case 7:n.prev=7,n.t0=n.catch(0),x("No movies"),v("/",{replace:!0});case 11:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[g,v]),e?(0,u.jsxs)(u.Fragment,{children:[0!==e.length?(0,u.jsx)(l.Z,{movie:e}):(0,u.jsx)("div",{style:{color:"lightgrey",fontWeight:"400",fontSize:"14px",paddingLeft:"40px",paddingTop:"20px"},children:h}),(0,u.jsx)(s.Suspense,{fallback:null,children:(0,u.jsx)(c.j3,{})})]}):null}}}]);
//# sourceMappingURL=884.25f3da7d.chunk.js.map