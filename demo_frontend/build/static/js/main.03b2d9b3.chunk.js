(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{115:function(e,t,n){e.exports=n(252)},120:function(e,t,n){},139:function(e,t,n){},252:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),c=n.n(o),i=(n(120),n(99)),l=n(100),s=n(112),u=n(101),d=n(113),h=n(255),m=n(254),p=n(102),v=n.n(p),w=(n(139),h.a.Search),f="https://naivegenerator.com/api/generate/",E=function(e){var t=e.text;return r.a.createElement("div",{className:"App-text"},r.a.createElement("span",null,t))},g=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).handleGenerate=function(t){v.a.post(f,{query:t}).then(function(t){1e4!==t.data&&200===t.status?e.setState({text:t.data.text}):alert("\u751f\u6210\u5931\u8d25\uff01\u8bf7\u7a0d\u540e\u91cd\u8bd5\u3002")})},e.state={text:""},e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"App-generate"},r.a.createElement(w,{placeholder:"\u8f93\u5165 query",enterButton:"\u751f\u6210",size:"large",style:{width:300},onSearch:this.handleGenerate})),r.a.createElement("div",null,r.a.createElement(E,this.state)))}}]),t}(r.a.Component),b=m.a.create()(g);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[115,1,2]]]);
//# sourceMappingURL=main.03b2d9b3.chunk.js.map