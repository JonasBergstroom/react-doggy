(this["webpackJsonpreact-doggy"]=this["webpackJsonpreact-doggy"]||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){},27:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(19),r=c.n(a),i=(c(25),c(26),c(27),c(7)),o=c(0);var j=function(){return Object(o.jsx)("div",{className:"Home",style:{backgroundImage:"url('".concat("/react-doggy","/images/DogBg.png')")},children:Object(o.jsxs)("main",{children:[Object(o.jsx)("h1",{className:"Title",children:"Welcome!"}),Object(o.jsx)("div",{children:Object(o.jsx)(i.b,{className:"Button",to:"/List",children:"See the dogs"})})]})})},l=c(10),d=c(11),b=c(13),h=c(12),m=function(e){Object(b.a)(c,e);var t=Object(h.a)(c);function c(e){var n;return Object(l.a)(this,c),(n=t.call(this,e)).state={names:[]},n}return Object(d.a)(c,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.jsonbin.io/b/60882ce55210f622be3b4768").then((function(e){return e.json()})).then((function(t){return e.setState({names:t.dogs})}))}},{key:"render",value:function(){var e=this.state.names;return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("div",{className:"jumbotron",children:Object(o.jsx)("h1",{className:"display-1",children:"Doggy daycare: "})}),Object(o.jsx)("div",{className:"users",children:e.map((function(e){return Object(o.jsxs)(i.b,{className:"card",children:[Object(o.jsx)("img",{src:e.img,className:"card-img-top",alt:"".concat(e.name," img")}),Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsxs)("h5",{className:"card-title",children:[e.name," "]}),Object(o.jsx)(i.b,{href:"#",className:"btn btn-primary",to:"/Dogs/"+e.chipNumber,children:"More about this friend"})]})]},e.chipNumber)}))})]})}}]),c}(n.Component),u=(c(34),c(2)),O=function(e){Object(b.a)(c,e);var t=Object(h.a)(c);function c(e){var n;return Object(l.a)(this,c),(n=t.call(this,e)).state={names:[]},n}return Object(d.a)(c,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.jsonbin.io/b/60882ce55210f622be3b4768").then((function(e){return e.json()})).then((function(t){return e.setState({names:t.dogs})}))}},{key:"render",value:function(){var e=this.state.names,t=this.props.match.params.chipNumber;return console.log(t),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("div",{className:"jumbotron",children:Object(o.jsx)("h1",{className:"display-1",children:"Doggy daycare: "})}),Object(o.jsx)("div",{className:"users",children:e.filter((function(e){return e.chipNumber.toLowerCase()===t.toLowerCase()?e:null})).map((function(e){return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("img",{src:e.img,className:"card-img-top",alt:"".concat(e.name," img")}),Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsx)("h5",{className:"card-title",children:e.name}),Object(o.jsx)("h5",{className:"card-title",children:e.sex}),Object(o.jsxs)("h5",{className:"card-title",children:[e.breed," "]}),Object(o.jsxs)("p",{className:"card-text",children:["Owners name is:",e.owner.name," ",e.owner.lastName]}),Object(o.jsxs)("p",{className:"card-text",children:[e.owner.name,"s Number: ",e.owner.phoneNumber]})]})]},e.chipNumber)}))})]})}}]),c}(n.Component),x=Object(u.f)(O);var g=function(){return Object(o.jsx)(i.a,{basename:"/react-doggy",children:Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("header",{children:Object(o.jsx)(i.b,{className:"Logo",to:"/Home",children:Object(o.jsx)("h2",{children:"Home"})})}),Object(o.jsx)("main",{children:Object(o.jsxs)(u.c,{children:[Object(o.jsxs)(u.a,{exact:!0,path:"/Home",children:[" ",Object(o.jsx)(j,{})," "]}),Object(o.jsxs)(u.a,{exact:!0,path:"/List",children:[" ",Object(o.jsx)(m,{})," "]}),Object(o.jsxs)(u.a,{exact:!0,path:"/Dogs/:chipNumber",children:[" ",Object(o.jsx)(x,{})," "]})]})})]})})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,36)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),a(e),r(e)}))};r.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(g,{})}),document.getElementById("root")),p()}},[[35,1,2]]]);
//# sourceMappingURL=main.064ba863.chunk.js.map