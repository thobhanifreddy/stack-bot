(this["webpackJsonpstack-bot"]=this["webpackJsonpstack-bot"]||[]).push([[0],{125:function(e,t,n){e.exports=n(207)},130:function(e,t,n){},131:function(e,t,n){},207:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(3),c=n.n(r),i=(n(130),n(209)),s=(n(131),n(53)),l=n.n(s),u=n(88),d=n(61),m=n(62),h=n(70),f=n(63),p=n(71),g=n(208),w=n(119),v=n(211),b=n(210),E=n(48),k=n.n(E),y=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(h.a)(this,Object(f.a)(t).call(this,e))).state={showModal:!1},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props.question;return o.a.createElement(o.a.Fragment,null,o.a.createElement(g.a.Item,{onClick:function(){return e.setState({showModal:!0})},style:{cursor:"pointer"}},o.a.createElement(g.a.Item.Meta,{avatar:o.a.createElement(w.a,{src:t.owner.profile_image,style:{margin:10}}),title:t.title,description:o.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",marginRight:20}},o.a.createElement("p",null,t.owner.display_name),o.a.createElement("p",null,k.a.unix(t.creation_date).fromNow()))})),o.a.createElement(v.a,{title:o.a.createElement("div",{style:{cursor:"pointer"},onClick:function(){return window.open(t.link)}}," ",o.a.createElement(b.a.Title,{level:3},t.title)," "),visible:this.state.showModal,okText:"Go To Stackoverflow",onOk:function(){return window.open(t.link)},onCancel:function(){return e.setState({showModal:!1})},width:700,bodyStyle:{height:400,overflowY:"scroll"}},o.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.body}})))}}]),t}(o.a.Component),O=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(h.a)(this,Object(f.a)(t).call(this,e))).componentDidMount=function(){n.fetchQuestions(n.state.page),window.addEventListener("scroll",Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=window.innerHeight+document.documentElement.scrollTop,!(document.documentElement.offsetHeight<t/2)){e.next=4;break}return e.abrupt("return");case 4:return n.setState({page:n.state.page+1,fetched:!0}),e.next=7,n.fetchQuestions(n.state.page);case 7:n.state.fetched&&n.setState({fetched:!1});case 8:case"end":return e.stop()}}),e)}))))},n.fetchQuestions=function(){var e=Object(u.a)(l.a.mark((function e(t){var a,o,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({loading:!0}),e.prev=1,e.next=4,fetch("https://api.stackexchange.com/2.2/questions?page=".concat(t,"&pagesize=20&order=desc&sort=creation&site=stackoverflow&filter=withBody"));case 4:return a=e.sent,e.next=7,a.json();case 7:(o=e.sent).items?(o=o.items,r=n.state.questions.concat(o),n.setState({questions:r,loading:!1})):n.setState({outOfQuota:!0,loading:!1}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0.message),n.setState({outOfQuota:!0,loading:!1});case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),n.state={questions:[],loading:!1,page:1,outOfQuota:!1,fetched:!1},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.questions,n=e.loading,a=e.outOfQuota;return console.log(a),n&&0===t.length?o.a.createElement(o.a.Fragment,null):a?o.a.createElement("h3",null,"Sorry, You have corssed the quota"):t&&o.a.createElement(g.a,{itemLayout:"horizontal",dataSource:t,renderItem:function(e){return o.a.createElement(y,{loading:n,question:e})}})}}]),t}(o.a.Component),j=function(){return o.a.createElement("div",null,o.a.createElement(i.a,{ghost:!1,title:"Stack Bot"}),o.a.createElement(O,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[125,1,2]]]);
//# sourceMappingURL=main.4e5e1c57.chunk.js.map