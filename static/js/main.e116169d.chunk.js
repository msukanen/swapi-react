(this["webpackJsonpswapi-react"]=this["webpackJsonpswapi-react"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(9),s=n.n(a),i=(n(15),n(16),n(10)),j=(n(17),n(6)),o=n.n(j),u=n(7),l=n(2),b=n(3),d=n(5),h=n(4),p=n(0),O=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(p.jsx)("span",{children:this.props.data.name})}}],[{key:"create",value:function(e){return Object(p.jsx)(n,{data:e})}}]),n}(r.a.Component),x=O,f=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(p.jsx)("span",{children:this.props.data.name})}}],[{key:"create",value:function(e){return Object(p.jsx)(n,{data:e})}}]),n}(r.a.Component),v=f;function m(e){return"male"===e.gender&&e}function g(e){return"female"===e.gender&&e}function k(e){return"n/a"===e.gender&&e}function y(e,t){var n=document.getElementById("fetchInput"),c=n?n.value:void 0;if(void 0===t&&void 0!==c&&Number.isInteger(parseInt(c))){var r=document.getElementById("cboxInclDriver");return r&&r.checked&&(c=c>0?c-1:0),e.passengers>=c&&e}return e}var w=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var c;return Object(l.a)(this,n),(c=t.call(this,e)).state={items:[]},c}return Object(b.a)(n,[{key:"render",value:function(){var e,t=this;function n(e,t,n,r){return c.apply(this,arguments)}function c(){return c=Object(u.a)(o.a.mark((function e(t,n,c,a){var s,i,j,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=function(){return i=Object(u.a)(o.a.mark((function e(t,n,c){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Getting ".concat(n,"...")),e.next=3,r(t,n);case 3:return a=e.sent,e.abrupt("return",void 0!==c?a.filter((function(e){return c(e)})):a);case 5:case"end":return e.stop()}}),e)}))),i.apply(this,arguments)},s=function(e,t,n){return i.apply(this,arguments)},e.next=4,s(t,n,c);case 4:j=e.sent,console.log("Got ".concat(n,"...")),l=[],j.forEach((function(e){return l.push({data:e,renderFunc:a})})),t.setState({items:l});case 9:case"end":return e.stop()}}),e)}))),c.apply(this,arguments)}function r(e,t){return a.apply(this,arguments)}function a(){return(a=Object(u.a)(o.a.mark((function e(t,n){var c,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"males"!==n&&"females"!==n&&"droids"!==n||(n="people"),e.next=3,fetch(t.props.url+n);case 3:if(!(c=e.sent).ok){e.next=11;break}return e.next=7,c.json();case 7:return r=e.sent,e.abrupt("return",r.results);case 11:console.log(c.status);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(p.jsx)("table",{children:Object(p.jsxs)("tbody",{children:[Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:Object(p.jsx)("input",{type:"text",id:"fetchInput"})}),Object(p.jsx)("td",{children:Object(p.jsx)("button",{onClick:function(){return n(t,"droids",k,x.create)},children:"D"})}),Object(p.jsx)("td",{children:Object(p.jsx)("button",{onClick:function(){return n(t,"males",m,x.create)},children:"M"})}),Object(p.jsx)("td",{children:Object(p.jsx)("button",{onClick:function(){return n(t,"females",g,x.create)},children:"F"})}),Object(p.jsx)("td",{children:Object(p.jsx)("button",{onClick:function(){return n(t,"vehicles",y,v.create)},children:"V"})})]}),Object(p.jsx)("tr",{children:Object(p.jsx)("td",{colSpan:"4",style:{textAlign:"left"},children:Object(p.jsxs)("div",{id:"resultArea",children:[this.state.items.length>0?(e=this.state.items[0],e.data&&(e=e.data),g(e)||m(e)||k(e),Object(p.jsx)(p.Fragment,{})):"",Object(p.jsx)("br",{}),this.state.items.map((function(e){return Object(p.jsxs)(p.Fragment,{children:[e.renderFunc?e.renderFunc(e.data):e.data,Object(p.jsx)("br",{})]})}))]})})})]})})}}]),n}(r.a.Component),N=w,C=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var e=this;return Object(p.jsx)("nav",{className:"navbar navbar-inverse navbar-fixed-top",children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsxs)("div",{className:"navbar-header",children:[Object(p.jsxs)("button",{type:"button",className:"navbar-toggle collapsed","data-toggle":"collapse","data-target":"#navbar","aria-expanded":"false","aria-controls":"navbar",children:[Object(p.jsx)("span",{className:"sr-only",children:"Toggle navigation"}),Object(p.jsx)("span",{className:"icon-bar"}),Object(p.jsx)("span",{className:"icon-bar"}),Object(p.jsx)("span",{className:"icon-bar"})]}),Object(p.jsx)("a",{className:"navbar-brand",href:"http://github.com/msukanen/swapi-react",children:Object(p.jsx)("img",{src:"".concat(".","/gfx/yoda.gif"),height:"64",alt:"Fetch-H#1 (SWAPI)"})})]}),Object(p.jsx)("div",{id:"navbar",className:"collapse navbar-collapse",children:Object(p.jsxs)("ul",{className:"nav navbar-nav",children:[Object(p.jsx)("li",{className:"active",children:Object(p.jsx)("a",{href:"#",onClick:function(){e.props.stateFunc(0)},children:Object(p.jsx)("img",{src:"home.svg",width:"22",height:"22",alt:"Home"})})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"#",onClick:function(){e.props.stateFunc("about")},children:Object(p.jsx)("img",{src:"question-mark.svg",width:"22",height:"22",alt:"About"})})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"#",onClick:function(){e.props.stateFunc("contact")},children:"Contact"})})]})})]})})}}]),n}(r.a.Component),F=C,A="https://swapi.dev/api/",I=Object(p.jsx)("b",{children:'Markku "Marsupilami" Sukanen'});var S=function(){return Object(p.jsxs)("section",{children:[Object(p.jsxs)("h1",{children:["Ab",Object(p.jsx)("sub",{children:"0"}),"u7"]}),Object(p.jsx)("h3",{children:"Author"}),Object(p.jsx)("p",{children:I}),Object(p.jsx)("p",{children:"A coder by heart and dreams, and so on and so forth."}),Object(p.jsx)("h3",{children:'This "App"'}),Object(p.jsxs)("p",{children:['Welp, this "app" is about ',Object(p.jsxs)("code",{children:["S",Object(p.jsx)("sub",{children:"tar"}),"W",Object(p.jsx)("sub",{children:"ars"}),"API"]})," and how to fetch stuff with it from ",Object(p.jsx)("code",{children:A}),". Have fun!"]})]})},E=Object(p.jsx)(p.Fragment,{children:"classified@no-email.spam"});var M=function(){return Object(p.jsx)("div",{id:"contact",children:Object(p.jsxs)("section",{children:[Object(p.jsx)("h1",{children:"Contact"}),Object(p.jsx)("p",{children:I}),Object(p.jsxs)("p",{children:["e-mail: ",Object(p.jsx)("code",{children:E})]})]})})};var B=function(){var e=Object(c.useState)(0),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(F,{stateFunc:r}),"about"===n?Object(p.jsx)(S,{}):"contact"===n?Object(p.jsx)(M,{}):Object(p.jsx)(N,{url:A})]})};s.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(B,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.e116169d.chunk.js.map