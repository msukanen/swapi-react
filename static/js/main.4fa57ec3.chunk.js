(this["webpackJsonpswapi-react"]=this["webpackJsonpswapi-react"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(9),s=n.n(a),i=(n(14),n(15),n(16),n(6)),u=n.n(i),o=n(7),l=n(2),j=n(3),b=n(5),d=n(4),h=n(0),p=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(h.jsx)("span",{children:this.props.data.name})}}],[{key:"create",value:function(e){return Object(h.jsx)(n,{data:e})}}]),n}(c.a.Component),O=p,f=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(h.jsx)("span",{children:this.props.data.name})}}],[{key:"create",value:function(e){return Object(h.jsx)(n,{data:e})}}]),n}(c.a.Component),x=f;function v(e){return"male"===e.gender&&e}function m(e){return"female"===e.gender&&e}function g(e){return"n/a"===e.gender&&e}function y(e){var t=document.getElementById("fetchInput"),n=t?t.value:void 0;if(void 0!==n&&Number.isInteger(parseInt(n))){var r=document.getElementById("cboxInclDriver");return r&&r.checked&&(n=n>0?n-1:0),e.passengers>=n&&e}return e}var k=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).state={items:[]},r}return Object(j.a)(n,[{key:"render",value:function(){var e=this;function t(e,t,r,c){return n.apply(this,arguments)}function n(){return n=Object(o.a)(u.a.mark((function e(t,n,c,a){var s,i,l,j;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=function(){return i=Object(o.a)(u.a.mark((function e(t,n,c){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Getting ".concat(n,"...")),e.next=3,r(t,n);case 3:return a=e.sent,e.abrupt("return",void 0!==c?a.filter((function(e){return c(e)})):a);case 5:case"end":return e.stop()}}),e)}))),i.apply(this,arguments)},s=function(e,t,n){return i.apply(this,arguments)},e.next=4,s(t,n,c);case 4:l=e.sent,j=[],l.forEach((function(e){return j.push({data:e,renderFunc:a})})),t.setState({items:j});case 8:case"end":return e.stop()}}),e)}))),n.apply(this,arguments)}function r(e,t){return c.apply(this,arguments)}function c(){return(c=Object(o.a)(u.a.mark((function e(t,n){var r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"males"!==n&&"females"!==n&&"droids"!==n||(n="people"),e.next=3,fetch(t.props.url+n);case 3:if(!(r=e.sent).ok){e.next=11;break}return e.next=7,r.json();case 7:return c=e.sent,e.abrupt("return",c.results);case 11:console.log(r.status);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(h.jsx)("table",{children:Object(h.jsxs)("tbody",{children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"text",id:"fetchInput"})}),Object(h.jsx)("td",{children:Object(h.jsx)("button",{onClick:function(){return t(e,"droids",g,O.create)},children:"D"})}),Object(h.jsx)("td",{children:Object(h.jsx)("button",{onClick:function(){return t(e,"males",v,O.create)},children:"M"})}),Object(h.jsx)("td",{children:Object(h.jsx)("button",{onClick:function(){return t(e,"females",m,O.create)},children:"F"})}),Object(h.jsx)("td",{children:Object(h.jsx)("button",{onClick:function(){return t(e,"vehicles",y,x.create)},children:"V"})})]}),Object(h.jsx)("tr",{children:Object(h.jsx)("td",{colSpan:"4",style:{textAlign:"left"},children:Object(h.jsx)("div",{id:"resultArea",children:this.state.items.map((function(e){return Object(h.jsxs)(h.Fragment,{children:[e.renderFunc?e.renderFunc(e.data):e.data,Object(h.jsx)("br",{})]})}))})})})]})})}}]),n}(c.a.Component),N=k,w=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(h.jsx)("nav",{className:"navbar navbar-inverse navbar-fixed-top",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("div",{className:"navbar-header",children:[Object(h.jsxs)("button",{type:"button",className:"navbar-toggle collapsed","data-toggle":"collapse","data-target":"#navbar","aria-expanded":"false","aria-controls":"navbar",children:[Object(h.jsx)("span",{className:"sr-only",children:"Toggle navigation"}),Object(h.jsx)("span",{className:"icon-bar"}),Object(h.jsx)("span",{className:"icon-bar"}),Object(h.jsx)("span",{className:"icon-bar"})]}),Object(h.jsxs)("a",{className:"navbar-brand",href:"/#",children:[Object(h.jsx)("b",{children:"Fetch-H#1"})," (SWAPI)"]})]}),Object(h.jsx)("div",{id:"navbar",className:"collapse navbar-collapse",children:Object(h.jsxs)("ul",{className:"nav navbar-nav",children:[Object(h.jsx)("li",{className:"active",children:Object(h.jsx)("a",{href:"/#",children:Object(h.jsx)("img",{src:"home.svg",width:"22",height:"22",alt:"Home"})})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"/#",onClick:function(){},children:Object(h.jsx)("img",{src:"question-mark.svg",width:"22",height:"22",alt:"About"})})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"/#",onClick:function(){},children:"Contact"})})]})})]})})}}]),n}(c.a.Component),C=w;var I=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(C,{}),Object(h.jsx)(N,{url:"https://swapi.dev/api/"})]})};s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(I,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.4fa57ec3.chunk.js.map