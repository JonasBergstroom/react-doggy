(this["webpackJsonpreact-doggy"]=this["webpackJsonpreact-doggy"]||[]).push([[0],{25:function(e,c,t){},26:function(e,c,t){},27:function(e,c,t){},34:function(e,c,t){},35:function(e,c,t){"use strict";t.r(c);var s=t(1),n=t.n(s),a=t(19),r=t.n(a),i=(t(25),t(26),t(27),t(7)),j=t(0);var o=function(){return Object(j.jsx)("div",{className:"Home",style:{backgroundImage:"url('".concat("/react-doggy","/images/DogBg.png')")},children:Object(j.jsxs)("main",{children:[Object(j.jsx)("h1",{className:"Title",children:"Welcome!"}),Object(j.jsx)("div",{children:Object(j.jsx)(i.b,{className:"Button",to:"/List",children:"See the dogs"})})]})})},l=t(10),d=t(11),b=t(13),h=t(12),m=function(e){Object(b.a)(t,e);var c=Object(h.a)(t);function t(e){var s;return Object(l.a)(this,t),(s=c.call(this,e)).state={names:[]},s}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.jsonbin.io/b/60882ce55210f622be3b4768").then((function(e){return e.json()})).then((function(c){return e.setState({names:c.dogs})}))}},{key:"render",value:function(){var e=this.state.names;return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("div",{className:"jumbotron",children:Object(j.jsx)("h1",{className:"display-1",children:"Doggy daycare: "})}),Object(j.jsx)("div",{className:"users",children:e.map((function(e){return Object(j.jsxs)(i.b,{className:"card",children:[Object(j.jsx)("img",{src:e.img,className:"card-img-top",alt:"".concat(e.name," img")}),Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsxs)("h5",{className:"card-Dog",children:[e.name," "]}),Object(j.jsx)(i.b,{href:"#",className:"btn btn-primary",to:"/Dogs/"+e.chipNumber,children:"More about this friend"})]})]},e.chipNumber)}))})]})}}]),t}(s.Component),u=(t(34),t(2)),O=function(e){Object(b.a)(t,e);var c=Object(h.a)(t);function t(e){var s;return Object(l.a)(this,t),(s=c.call(this,e)).state={names:[]},s}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.jsonbin.io/b/60882ce55210f622be3b4768").then((function(e){return e.json()})).then((function(c){return e.setState({names:c.dogs})}))}},{key:"render",value:function(){var e=this.state.names,c=this.props.match.params.chipNumber;return console.log(c),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("div",{className:"jumbotron",children:Object(j.jsx)("h1",{className:"display-1",children:"Doggy daycare: "})}),Object(j.jsx)("div",{className:"users",children:e.filter((function(e){return e.chipNumber.toLowerCase()===c.toLowerCase()?e:null})).map((function(e){return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("img",{src:e.img,className:"card-img-top",alt:"".concat(e.name," img")}),Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h5",{className:"card-Name",children:e.name}),Object(j.jsxs)("h5",{className:"card-DogsAge",children:[e.age," Year"]}),Object(j.jsx)("h5",{className:"card-Sex",children:e.sex}),Object(j.jsxs)("h5",{className:"card-Breed",children:[e.breed," "]}),Object(j.jsxs)("h5",{className:"card-Present",children:[e.present," "]}),Object(j.jsxs)("p",{className:"card-OwnersName",children:["Owners name is:",e.owner.name," ",e.owner.lastName]}),Object(j.jsxs)("p",{className:"card-OwnersPhones",children:[e.owner.name,"s Number: ",e.owner.phoneNumber]})]})]},e.chipNumber)}))})]})}}]),t}(s.Component),x=Object(u.f)(O);var g=function(){return Object(j.jsx)(i.a,{basename:"/",children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("header",{children:Object(j.jsx)(i.b,{className:"Logo",to:"/",children:Object(j.jsx)("h2",{className:"HomeBtn",children:"Home"})})}),Object(j.jsx)("main",{children:Object(j.jsxs)(u.c,{children:[Object(j.jsxs)(u.a,{exact:!0,path:"/",children:[" ",Object(j.jsx)(o,{})," "]}),Object(j.jsxs)(u.a,{exact:!0,path:"/List",children:[" ",Object(j.jsx)(m,{})," "]}),Object(j.jsxs)(u.a,{exact:!0,path:"/Dogs/:chipNumber",children:[" ",Object(j.jsx)(x,{})," "]})]})})]})})},N=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,36)).then((function(c){var t=c.getCLS,s=c.getFID,n=c.getFCP,a=c.getLCP,r=c.getTTFB;t(e),s(e),n(e),a(e),r(e)}))};r.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root")),N()}},[[35,1,2]]]);
//# sourceMappingURL=main.6ae6f170.chunk.js.map