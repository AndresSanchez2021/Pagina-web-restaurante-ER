(this.webpackJsonpaplicacion=this.webpackJsonpaplicacion||[]).push([[0],{113:function(e,s,t){},114:function(e,s,t){},179:function(e,s,t){"use strict";t.r(s);var n=t(2),c=t.n(n),r=t(26),a=t.n(r),o=(t(110),t(111),t(112),t(113),t(17)),i=t(18),l=t(19),d=t(21),j=(t(114),t(10)),h=t(180),m=t(181),b=t(182),u=t(183),O=t(184),x=t(185),f=t(0),p=function(){return Object(f.jsxs)("div",{className:"col-12 center",children:[Object(f.jsx)("span",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary"}),Object(f.jsx)("p",{children:"Loading..."})]})},g="http://localhost:3001/",N=function(e){Object(l.a)(t,e);var s=Object(d.a)(t);function t(e){return Object(o.a)(this,t),s.call(this,e)}return Object(i.a)(t,[{key:"render",value:function(){var e=this.props.dishes.dishes.map((function(e){return Object(f.jsx)("div",{className:"col-12 col-md-5 m-1",children:Object(f.jsx)(h.a,{children:Object(f.jsxs)(j.b,{to:"/menu/".concat(e.id),children:[Object(f.jsx)(m.a,{width:"100%",src:g+e.image,alt:e.name}),Object(f.jsx)(b.a,{body:!0,className:"ml-5",children:Object(f.jsx)(u.a,{heading:!0,children:e.name})})]})})},e.id)}));return this.props.dishes.isLoading?Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("div",{className:"row",children:Object(f.jsx)(p,{})})}):this.props.dishes.errMess?Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("div",{className:"row",children:Object(f.jsx)("h4",{children:this.props.errMess})})}):Object(f.jsxs)("div",{className:"container",children:[Object(f.jsxs)("div",{className:"row",children:[Object(f.jsxs)(O.a,{children:[Object(f.jsx)(x.a,{children:Object(f.jsx)(j.b,{to:"/home",children:"Home"})}),Object(f.jsx)(x.a,{active:!0,children:"Menu"})]}),Object(f.jsxs)("div",{className:"col-12",children:[Object(f.jsx)("h3",{children:"Menu"}),Object(f.jsx)("hr",{})]})]}),Object(f.jsx)("div",{className:"row",children:e})]})}}]),t}(n.Component),v=t(9),y=t(186),w=t(187),M=t(188),L=t(189),k=t(190),E=t(191),S=t(193),C=t(197),F=t(199),T=t(192),D=t(207),A=t(194),I=t(195),R=t(196),P=t(198),q=function(e){Object(l.a)(t,e);var s=Object(d.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=s.call(this,e)).state={isNavOpen:!1,isModalOpen:!1},n.toggleNav=n.toggleNav.bind(Object(v.a)(n)),n.toggleModal=n.toggleModal.bind(Object(v.a)(n)),n.handleLogin=n.handleLogin.bind(Object(v.a)(n)),n}return Object(i.a)(t,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleLogin",value:function(e){this.toggleModal(),alert("username:"+this.username.value+"password: "+this.password.value+" remember "+this.remember.checked),e.preventDefault()}},{key:"render",value:function(){var e=this;return Object(f.jsxs)(c.a.Fragment,{children:[Object(f.jsx)(y.a,{dark:!0,expand:"md",children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)(w.a,{onClick:this.toggleNav}),Object(f.jsx)(M.a,{className:"mr-auto",href:"/",children:Object(f.jsx)("img",{src:"assets/images/logo.png",height:"30",width:"30",alt:"Ristorante con Fusion"})}),Object(f.jsx)(L.a,{isOpen:this.state.isNavOpen,navbar:!0,children:Object(f.jsxs)(k.a,{navbar:!0,children:[Object(f.jsx)(E.a,{children:Object(f.jsx)(j.c,{className:"nav-link",to:"/home",children:Object(f.jsx)("span",{className:"fa fa-home fa-lg",children:" Home"})})}),Object(f.jsx)(E.a,{children:Object(f.jsx)(j.c,{className:"nav-link",to:"/aboutus",children:Object(f.jsx)("span",{className:"fa fa-info fa-lg",children:" About us"})})}),Object(f.jsx)(E.a,{children:Object(f.jsx)(j.c,{className:"nav-link",to:"/menu",children:Object(f.jsx)("span",{className:"fa fa-list fa-lg",children:" Menu"})})}),Object(f.jsx)(E.a,{children:Object(f.jsx)(j.c,{className:"nav-link",to:"/contactus",children:Object(f.jsx)("span",{className:"fa fa-address-card fa-lg",children:" Contact us"})})}),Object(f.jsx)(k.a,{className:"ml-auto",navbar:!0,children:Object(f.jsx)(E.a,{children:Object(f.jsx)(T.a,{outline:!0,onClick:this.toggleModal,children:Object(f.jsx)("span",{className:"fa fa-sing-in fa-lg",children:"Login"})})})})]})})]})}),Object(f.jsx)(S.a,{children:Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("div",{className:"row row-header",children:Object(f.jsxs)("div",{className:"col-12 col-sm-6",children:[Object(f.jsx)("h1",{children:"Ristorante con Fusion"}),Object(f.jsx)("p",{children:"We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!"})]})})})}),Object(f.jsxs)(D.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal,children:[Object(f.jsx)(A.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal,children:"Login"}),Object(f.jsx)(I.a,{children:Object(f.jsxs)(R.a,{onSubmit:this.handleLogin,children:[Object(f.jsxs)(C.a,{children:[Object(f.jsx)(P.a,{htmlFor:"username",children:"Username"}),Object(f.jsx)(F.a,{type:"text",id:"username",name:"username",placeholder:"write your user name",innerRef:function(s){return e.username=s}})]}),Object(f.jsxs)(C.a,{children:[Object(f.jsx)(P.a,{htmlFor:"password",children:"Password"}),Object(f.jsx)(F.a,{type:"password",id:"password",name:"password",placeholder:"write your password",innerRef:function(s){return e.password=s}})]}),Object(f.jsx)(C.a,{check:!0,children:Object(f.jsxs)(P.a,{check:!0,children:[Object(f.jsx)(F.a,{type:"checkbox",name:"remember",innerRef:function(s){return e.remember=s}}),"Remember me"]})}),Object(f.jsx)(T.a,{type:"submit",value:"submit",className:"btn btn-primary",children:"Login"})]})})]})]})}}]),t}(n.Component);var H=function(e){return Object(f.jsx)("div",{className:"footer",children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsxs)("div",{className:"row justify-content-center",children:[Object(f.jsxs)("div",{className:"col-4 offset-1 col-sm-2",children:[Object(f.jsx)("h5",{children:"Links"}),Object(f.jsxs)("ul",{className:"list-unstyled",children:[Object(f.jsx)("li",{children:Object(f.jsx)(j.b,{to:"/home",children:"Home"})}),Object(f.jsx)("li",{children:Object(f.jsx)(j.b,{to:"/aboutus",children:"About"})}),Object(f.jsx)("li",{children:Object(f.jsx)(j.b,{to:"/menu",children:"Menu"})}),Object(f.jsx)("li",{children:Object(f.jsx)(j.b,{to:"/contactus.html",children:"Contact us"})})]})]}),Object(f.jsxs)("div",{className:"col-7 col-sm-5",children:[Object(f.jsx)("h5",{children:"Our Address"}),Object(f.jsxs)("address",{children:["121, Clear Water Bay Road",Object(f.jsx)("br",{}),"Clear Water Bay, Kowloon",Object(f.jsx)("br",{}),"HONG KONG",Object(f.jsx)("br",{}),Object(f.jsx)("i",{className:"fa fa-phone fa-lg"}),": +852 1234 5678",Object(f.jsx)("br",{}),Object(f.jsx)("i",{className:"fa fa-fax fa-lg"}),": +852 8765 4321",Object(f.jsx)("br",{}),Object(f.jsx)("i",{className:"fa fa-envelope fa-lg"}),": ",Object(f.jsx)("a",{href:"mailto:confusion@food.net",children:"confusion@food.net"})]})]}),Object(f.jsx)("div",{className:"col-12 col-sm-4 align-self-center",children:Object(f.jsxs)("div",{className:"text-center",children:[Object(f.jsx)("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+",children:Object(f.jsx)("i",{className:"fa fa-google-plus"})}),Object(f.jsx)("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id=",children:Object(f.jsx)("i",{className:"fa fa-facebook"})}),Object(f.jsx)("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/",children:Object(f.jsx)("i",{className:"fa fa-linkedin"})}),Object(f.jsx)("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/",children:Object(f.jsx)("i",{className:"fa fa-twitter"})}),Object(f.jsx)("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/",children:Object(f.jsx)("i",{className:"fa fa-youtube"})}),Object(f.jsx)("a",{className:"btn btn-social-icon",href:"mailto:",children:Object(f.jsx)("i",{className:"fa fa-envelope-o"})})]})})]}),Object(f.jsx)("div",{className:"row justify-content-center",children:Object(f.jsx)("div",{className:"col-auto",children:Object(f.jsx)("p",{children:"\xa9 Copyright 2018 Ristorante Con Fusion"})})})]})})},_=t(202),B=t(203),Y=t(200),G=t(201),W=t(13),J=t(29),K=function(e){return function(s){return s&&s.length>e}},z=function(e){Object(l.a)(t,e);var s=Object(d.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=s.call(this,e)).state={isModalOpen:!1},n.toggleModal=n.toggleModal.bind(Object(v.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(v.a)(n)),n}return Object(i.a)(t,[{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleSubmit",value:function(e){this.toggleModal(),this.props.postComment(this.props.dishId,e.rating,e.author,e.comment),console.log(JSON.stringify(e))}},{key:"render",value:function(){var e,s=this;return Object(f.jsxs)("div",{children:[Object(f.jsx)(T.a,{outline:!0,onClick:this.toggleModal,children:Object(f.jsx)("span",{className:"fa fa-pencil fa-lg ",children:"  Submit Comment"})}),Object(f.jsxs)(D.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal,children:[Object(f.jsx)(A.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal,children:Object(f.jsx)("div",{className:"title",children:"Submit Comment"})}),Object(f.jsx)(I.a,{children:Object(f.jsxs)(W.LocalForm,{onSubmit:function(e){return s.handleSubmit(e)},children:[Object(f.jsxs)(Y.a,{className:"form-group",children:[Object(f.jsx)(P.a,{htmlFor:"rating",md:12,children:"Rating"}),Object(f.jsx)(G.a,{md:12,children:Object(f.jsxs)(W.Control.select,{className:"form-control",model:".rating",id:"rating",name:"rating",placeholder:"",children:[Object(f.jsx)("option",{children:"1"}),Object(f.jsx)("option",{children:"2"}),Object(f.jsx)("option",{children:"3"}),Object(f.jsx)("option",{children:"4"}),Object(f.jsx)("option",{children:"5"})]})})]}),Object(f.jsxs)(Y.a,{className:"form-group",children:[Object(f.jsx)(P.a,{htmlFor:"author",md:12,children:"Your Name"}),Object(f.jsxs)(G.a,{md:12,children:[Object(f.jsx)(W.Control.text,{className:"form-control",placeholder:"Name",model:".author",id:"author",name:"author",validators:{maxLength:(e=15,function(s){return!s||s.length<=e}),minLength:K(2)}}),Object(f.jsx)(W.Errors,{className:"text-danger",model:".author",show:"touched",messages:{minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}})]})]}),Object(f.jsxs)(Y.a,{className:"form-group",children:[Object(f.jsx)(P.a,{md:12,htmlFor:"comment",children:"Comment"}),Object(f.jsx)(G.a,{md:12,children:Object(f.jsx)(W.Control.textarea,{className:"form-control",placeholder:"Your comments",model:".comment",id:"commetn",name:"comment",rows:"6"})})]}),Object(f.jsx)(Y.a,{children:Object(f.jsx)(T.a,{outline:!0,children:Object(f.jsx)("span",{className:"",children:"Submit"})})})]})})]})]})}}]),t}(n.Component);function U(e){var s=e.dish;return Object(f.jsx)("div",{className:"col-12 col-md-5 m-1",children:Object(f.jsx)(J.FadeTransform,{in:!0,transformProp:{exitTransform:"scale(0.5) translateY(-50%)"},children:Object(f.jsxs)(h.a,{children:[Object(f.jsx)(m.a,{top:!0,src:g+s.image}),Object(f.jsxs)(_.a,{children:[Object(f.jsx)(u.a,{children:s.name}),Object(f.jsx)(B.a,{children:s.description})]})]})})})}function Z(e){var s=e.comments,t=e.postComment,n=e.dishId;return console.log(s),null!=s?Object(f.jsxs)("div",{className:"col-12 col-md-5 m-1",children:[Object(f.jsx)("h4",{children:"Comments"}),Object(f.jsx)("ul",{className:"list-unstyled",children:Object(f.jsx)(J.Stagger,{in:!0,children:s.map((function(e){return Object(f.jsx)(J.Fade,{in:!0,children:Object(f.jsxs)("li",{children:[Object(f.jsx)("p",{children:e.comment}),Object(f.jsxs)("p",{children:["-- ",e.author," "]})]},e.id)})}))})}),Object(f.jsx)(z,{dishId:n,postComment:t})]}):Object(f.jsx)("div",{})}var $=function(e){return e.isLoading?Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("div",{className:"row justify-content-center",children:Object(f.jsx)(p,{})})}):e.errMess?Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("div",{className:"row",children:Object(f.jsx)("h4",{children:e.errMess})})}):null!=e.dish?Object(f.jsxs)("div",{className:"container",children:[Object(f.jsxs)("div",{className:"row",children:[Object(f.jsxs)(O.a,{children:[Object(f.jsx)(x.a,{children:Object(f.jsx)(j.b,{to:"/menu",children:"Menu"})}),Object(f.jsx)(x.a,{active:!0,children:e.dish.name})]}),Object(f.jsxs)("div",{className:"col-12",children:[Object(f.jsx)("h3",{children:e.dish.name}),Object(f.jsx)("hr",{})]})]}),Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)(U,{dish:e.dish}),Object(f.jsx)(Z,{comments:e.comments,postComment:e.postComment,dishId:e.dish.id})]})]}):Object(f.jsx)("div",{})},Q=t(204),V=t(205);function X(e){return e.leaderLoading?Object(f.jsx)(p,{}):e.leaderErrMess?Object(f.jsx)("h4",{children:e.errMess}):e.leaders.map((function(e){return Object(f.jsx)(J.Fade,{in:!0,children:Object(f.jsx)("div",{className:"col-12 mt-5",children:Object(f.jsxs)(Q.a,{tag:"li",className:"row",children:[Object(f.jsx)(Q.a,{left:!0,middle:!0,className:"col-2",children:Object(f.jsx)(Q.a,{object:!0,src:g+e.image,alt:e.name})}),Object(f.jsxs)(Q.a,{body:!0,className:"ml-5 col-9",children:[Object(f.jsx)(Q.a,{heading:!0,children:e.name}),Object(f.jsx)("p",{children:e.designation}),Object(f.jsx)("p",{children:e.description})]})]})},e.id)})}))}var ee=function(e){return Object(f.jsxs)("div",{className:"container",children:[Object(f.jsxs)("div",{className:"row",children:[Object(f.jsxs)(O.a,{children:[Object(f.jsx)(x.a,{children:Object(f.jsx)(j.b,{to:"/home",children:"Home"})}),Object(f.jsx)(x.a,{active:!0,children:"About Us"})]}),Object(f.jsxs)("div",{className:"col-12",children:[Object(f.jsx)("h3",{children:"About Us"}),Object(f.jsx)("hr",{})]})]}),Object(f.jsxs)("div",{className:"row row-content",children:[Object(f.jsxs)("div",{className:"col-12 col-md-6",children:[Object(f.jsx)("h2",{children:"Our History"}),Object(f.jsx)("p",{children:"Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us."}),Object(f.jsxs)("p",{children:["The restaurant traces its humble beginnings to ",Object(f.jsx)("em",{children:"The Frying Pan"}),", a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan."]})]}),Object(f.jsx)("div",{className:"col-12 col-md-5",children:Object(f.jsxs)(h.a,{children:[Object(f.jsx)(V.a,{className:"bg-primary text-white",children:"Facts At a Glance"}),Object(f.jsx)(_.a,{children:Object(f.jsxs)("dl",{className:"row p-1",children:[Object(f.jsx)("dt",{className:"col-6",children:"Started"}),Object(f.jsx)("dd",{className:"col-6",children:"3 Feb. 2013"}),Object(f.jsx)("dt",{className:"col-6",children:"Major Stake Holder"}),Object(f.jsx)("dd",{className:"col-6",children:"HK Fine Foods Inc."}),Object(f.jsx)("dt",{className:"col-6",children:"Last Year's Turnover"}),Object(f.jsx)("dd",{className:"col-6",children:"$1,250,375"}),Object(f.jsx)("dt",{className:"col-6",children:"Employees"}),Object(f.jsx)("dd",{className:"col-6",children:"40"})]})})]})}),Object(f.jsx)("div",{className:"col-12",children:Object(f.jsx)(h.a,{children:Object(f.jsx)(_.a,{className:"bg-faded",children:Object(f.jsxs)("blockquote",{className:"blockquote",children:[Object(f.jsx)("p",{className:"mb-0",children:"You better cut the pizza in four pieces because I'm not hungry enough to eat six."}),Object(f.jsxs)("footer",{className:"blockquote-footer",children:["Yogi Berra,",Object(f.jsx)("cite",{title:"Source Title",children:"The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014"})]})]})})})})]}),Object(f.jsxs)("div",{className:"row row-content",children:[Object(f.jsx)("div",{className:"col-12",children:Object(f.jsx)("h2",{children:"Corporate Leadership"})}),Object(f.jsx)("div",{className:"col-12",children:Object(f.jsx)(Q.a,{list:!0,children:Object(f.jsx)(J.Stagger,{in:!0,children:Object(f.jsx)(X,{leaders:e.leaders,leaderLoading:e.leaderLoading,leaderErrMess:e.leaderErrMess})})})})]})]})},se=t(206);function te(e){var s=e.item,t=e.isLoading,n=e.errMess;return t?Object(f.jsx)(p,{}):n?Object(f.jsx)("h4",{children:n}):Object(f.jsx)(J.FadeTransform,{in:!0,transformProp:{exitTransform:"scale(0.5) translateY(-50%)"},children:Object(f.jsxs)(h.a,{children:[Object(f.jsx)(m.a,{src:g+s.image,alt:s.name}),Object(f.jsxs)(_.a,{children:[Object(f.jsx)(u.a,{children:s.name}),s.designation?Object(f.jsx)(se.a,{children:s.designation}):null,Object(f.jsxs)(B.a,{children:[" ",s.description," "]})]})]})})}var ne=function(e){return console.log(e),Object(f.jsx)("div",{className:"container",children:Object(f.jsxs)("div",{className:"row align-items start",children:[Object(f.jsx)("div",{className:"col-12 col-md m-1",children:Object(f.jsx)(te,{item:e.dish,isLoading:e.dishesLoading,errMess:e.dishesErrMess})}),Object(f.jsx)("div",{className:"col-12 col-md m-1",children:Object(f.jsx)(te,{item:e.promotion,isLoading:e.promotionLoading,errMess:e.promotionErrMess})}),Object(f.jsx)("div",{className:"col-12 col-md m-1",children:Object(f.jsx)(te,{item:e.leader,isLoading:e.leaderLoading,errMess:e.leaderErrMess})})]})})},ce=function(e){return e&&e.length},re=function(e){return function(s){return!s||s.length<=e}},ae=function(e){return function(s){return s&&s.length>e}},oe=function(e){return!isNaN(Number(e))},ie=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},le=function(e){Object(l.a)(t,e);var s=Object(d.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=s.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(v.a)(n)),n}return Object(i.a)(t,[{key:"handleSubmit",value:function(e){console.log(JSON.stringify(e)),this.props.postFeedback(e),this.props.resetFeedbackForm()}},{key:"render",value:function(){var e=this;return Object(f.jsxs)("div",{className:"container",children:[Object(f.jsxs)("div",{className:"row",children:[Object(f.jsxs)(O.a,{children:[Object(f.jsx)(x.a,{children:Object(f.jsx)(j.b,{to:"/home",children:"Home"})}),Object(f.jsx)(x.a,{active:!0,children:"Contact us"})]}),Object(f.jsxs)("div",{className:"col-12",children:[Object(f.jsx)("h3",{children:"Contact us"}),Object(f.jsx)("hr",{})]})]}),Object(f.jsxs)("div",{className:"row row-content",children:[Object(f.jsx)("div",{className:"col-12",children:Object(f.jsx)("h3",{children:"Location Information"})}),Object(f.jsxs)("div",{className:"col-12 col-sm-4 offset-sm-1",children:[Object(f.jsx)("h5",{children:"Our Address"}),Object(f.jsxs)("address",{children:["121, Clear Water Bay Road",Object(f.jsx)("br",{}),"Clear Water Bay, Kowloon",Object(f.jsx)("br",{}),"HONG KONG",Object(f.jsx)("br",{}),Object(f.jsx)("i",{className:"fa fa-phone"}),": +852 1234 5678",Object(f.jsx)("br",{}),Object(f.jsx)("i",{className:"fa fa-fax"}),": +852 8765 4321",Object(f.jsx)("br",{}),Object(f.jsx)("i",{className:"fa fa-envelope"}),": ",Object(f.jsx)("a",{href:"mailto:confusion@food.net",children:"confusion@food.net"})]})]}),Object(f.jsx)("div",{className:"col-12 col-sm-6 offset-sm-1",children:Object(f.jsx)("h5",{children:"Map of our Location"})}),Object(f.jsx)("div",{className:"col-12 col-sm-11 offset-sm-1",children:Object(f.jsxs)("div",{className:"btn-group",role:"group",children:[Object(f.jsxs)("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678",children:[Object(f.jsx)("i",{className:"fa fa-phone"})," Call"]}),Object(f.jsxs)("a",{role:"button",className:"btn btn-info",children:[Object(f.jsx)("i",{className:"fa fa-skype"})," Skype"]}),Object(f.jsxs)("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net",children:[Object(f.jsx)("i",{className:"fa fa-envelope-o"})," Email"]})]})})]}),Object(f.jsxs)("div",{className:"row row-content",children:[Object(f.jsx)("div",{className:"col-12 ",children:Object(f.jsx)("h3",{children:"Send us your feedback"})}),Object(f.jsx)("div",{className:"col-12 col-md-9",children:Object(f.jsxs)(W.Form,{model:"feedback",onSubmit:function(s){return e.handleSubmit(s)},children:[Object(f.jsxs)(Y.a,{className:"form-group",children:[Object(f.jsx)(P.a,{htmlFor:"firstname",md:2,children:"First Name"}),Object(f.jsxs)(G.a,{md:10,children:[Object(f.jsx)(W.Control.text,{model:".firstname",id:"firstname",name:"firstname",placeholder:"First Name",className:"form-control",validators:{required:ce,minLength:ae(3),maxLength:re(15)}}),Object(f.jsx)(W.Errors,{className:"text-danger",model:".firstname",show:"touched",messages:{required:"Requires",minLength:"agregue mas",maxLength:"muy largo"}})]})]}),Object(f.jsxs)(Y.a,{className:"form-group",children:[Object(f.jsx)(P.a,{htmlFor:"lastname",md:2,children:"Last Name"}),Object(f.jsxs)(G.a,{md:10,children:[Object(f.jsx)(W.Control.text,{model:".lastname",id:"lastname",name:"lastname",placeholder:"Last Name",className:"form-control",validators:{required:ce,minLength:ae(3),maxLength:re(15)}}),Object(f.jsx)(W.Errors,{className:"text-danger",model:".lastname",show:"touched",messages:{required:"Requires",minLength:"agregue mas",maxLength:"muy largo"}})]})]}),Object(f.jsxs)(Y.a,{className:"form-group",children:[Object(f.jsx)(P.a,{htmlFor:"telnum",md:2,children:"Telephone Number"}),Object(f.jsxs)(G.a,{md:10,children:[Object(f.jsx)(W.Control.text,{model:".telnum",id:"telnum",name:"telnum",placeholder:"Telephone Number",className:"form-control",validators:{required:ce,minLength:ae(3),maxLength:re(15),isNumber:oe}}),Object(f.jsx)(W.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{required:"Requires",minLength:"agregue mas numeros ",maxLength:"muy largo el numero",isNumber:"deberia ser u numero"}})]})]}),Object(f.jsxs)(Y.a,{className:"form-group",children:[Object(f.jsx)(P.a,{htmlFor:"email",md:2,children:"Email"}),Object(f.jsxs)(G.a,{md:10,children:[Object(f.jsx)(W.Control.text,{model:".email",id:"email",name:"email",placeholder:"Email",className:"form-control",validators:{required:ce,validEmail:ie}}),Object(f.jsx)(W.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Requires",validEmail:"Email invalido!! "}})]})]}),Object(f.jsxs)(Y.a,{className:"form-group",children:[Object(f.jsx)(G.a,{md:{size:6,offset:2},children:Object(f.jsx)("div",{className:"form-check",children:Object(f.jsxs)(P.a,{check:!0,children:[Object(f.jsx)(W.Control.checkbox,{model:".agree",name:"agree",className:"form-check-input"}),Object(f.jsx)("strong",{children:"May we contact you"})]})})}),Object(f.jsx)(G.a,{md:{size:3,offset:1},children:Object(f.jsxs)(W.Control.select,{model:".contactType",name:"contactType",className:"form-control",children:[Object(f.jsx)("option",{children:"Tel."}),Object(f.jsx)("option",{children:"Email."})]})})]}),Object(f.jsxs)(Y.a,{className:"form-group",children:[Object(f.jsx)(P.a,{htmlFor:"message",md:2,children:"Your Feedback"}),Object(f.jsx)(G.a,{md:10,children:Object(f.jsx)(W.Control.textarea,{model:".message",id:"message",name:"message",placeholder:"Your Feedback",rows:"12",className:"form-control"})})]}),Object(f.jsx)(Y.a,{className:"form-group",children:Object(f.jsx)(G.a,{md:{size:10,offset:2},children:Object(f.jsx)(T.a,{type:"submit",color:"primary",children:"Send FeedBack"})})})]})})]})]})}}]),t}(n.Component),de=t(27),je="ADD_DISHES",he="DISHES_LOADING",me="DISHES_FAILED",be="ADD_COMMENT",ue="ADD_COMMENTS",Oe="COMMENTS_FAILED",xe="PROMOS_LOADING",fe="ADD_PROMOS",pe="PROMOS_FAILED",ge="LEADERS_LOADING",Ne="ADD_LEADERS",ve="LEADERS_FAILED",ye=function(e,s,t,n){return function(c){var r={dishId:e,rating:s,author:t,comment:n};return r.date=(new Date).toISOString(),fetch(g+"comments",{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var s=new Error("Error"+e.status+": "+e.statusText);throw s.response=e,s}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(e){console.log(e),c(function(e,s,t,n){return{type:be,payload:n}}())})).catch((function(e){console.log("Post comments",e.message)}))}},we=function(){return{type:he}},Me=function(e){return{type:me,payload:e}},Le=function(e){return{type:je,payload:e}},ke=function(e){return{type:Oe,payload:e}},Ee=function(e){return{type:ue,payload:e}},Se=function(){return{type:xe}},Ce=function(e){return{type:pe,payload:e}},Fe=function(e){return{type:fe,payload:e}},Te=function(){return{type:ge}},De=function(e){return{type:ve,payload:e}},Ae=function(e){return{type:Ne,payload:e}},Ie=t(60),Re=function(e){Object(l.a)(t,e);var s=Object(d.a)(t);function t(e){return Object(o.a)(this,t),s.call(this,e)}return Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchDishes(),this.props.fetchComments(),this.props.fetchPromos(),this.props.fetchLeaders()}},{key:"render",value:function(){var e=this;console.log(this.props);return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(q,{}),Object(f.jsx)(Ie.TransitionGroup,{children:Object(f.jsx)(Ie.CSSTransition,{classNames:"page",timeout:300,children:Object(f.jsxs)(j.f,{children:[Object(f.jsx)(j.e,{path:"/home",component:function(){return Object(f.jsx)(ne,{dish:e.props.dishes.dishes.filter((function(e){return e.featured}))[0],dishesLoading:e.props.dishes.isLoading,dishesErrMess:e.props.dishes.errMess,promotion:e.props.promotions.promotions.filter((function(e){return e.featured}))[0],promotionLoading:e.props.promotions.isLoading,promotionErrMess:e.props.promotions.errMess,leader:e.props.leaders.leaders.filter((function(e){return e.featured}))[0],leaderLoading:e.props.leaders.isLoading,leaderErrMess:e.props.leaders.errMess})}}),Object(f.jsx)(j.e,{exact:!0,path:"/menu",component:function(){return Object(f.jsx)(N,{dishes:e.props.dishes})}}),Object(f.jsx)(j.e,{path:"/menu/:dishId",component:function(s){var t=s.match;return Object(f.jsx)($,{dish:e.props.dishes.dishes.filter((function(e){return e.id===parseInt(t.params.dishId,10)}))[0],isLoading:e.props.dishes.isLoading,errMess:e.props.dishes.errMess,comments:e.props.comments.comments.filter((function(e){return e.dishId===parseInt(t.params.dishId,10)})),commentsErrMess:e.props.comments.errMess,postComment:e.props.postComment})}}),Object(f.jsx)(j.e,{exact:!0,path:"/contactus",component:function(){return Object(f.jsx)(le,{resetFeedbackForm:e.props.resetFeedbackForm,postFeedback:e.props.postFeedback})}}),Object(f.jsx)(j.e,{exact:!0,path:"/aboutus",component:function(){return Object(f.jsx)(ee,{leaders:e.props.leaders.leaders,leaderLoading:e.props.leaders.isLoading,leaderErrMess:e.props.leaders.errMess})}}),Object(f.jsx)(j.d,{to:"/home"})]})},this.props.location.key)}),Object(f.jsx)(H,{})]})}}]),t}(n.Component),Pe=Object(j.g)(Object(de.connect)((function(e){return{dishes:e.dishes,comments:e.comments,promotions:e.promotions,leaders:e.leaders}}),(function(e){return{postFeedback:function(s){return e(function(e){return function(s){var t={firstname:e.firstname,lastname:e.lastname,telnum:e.telnum,email:e.email,agree:e.agree,contactType:e.contactType,message:e.message};return t.date=(new Date).toISOString(),fetch(g+"feedback",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var s=new Error("Error"+e.status+": "+e.statusText);throw s.response=e,s}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(e){console.log(e),alert(JSON.stringify(e))})).catch((function(e){console.log("Post Feedback",e.message)}))}}(s))},postComment:function(s,t,n,c){return e(ye(s,t,n,c))},fetchDishes:function(){e((function(e){return e(we(!0)),fetch(g+"dishes").then((function(e){if(e.ok)return e;var s=new Error("Error"+e.status+": "+e.statusText);throw s.response=e,s}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(s){return e(Le(s))})).catch((function(s){return e(Me(s.message))}))}))},fetchComments:function(){e((function(e){return fetch(g+"comments").then((function(e){if(e.ok)return e;var s=new Error("Error"+e.status+": "+e.statusText);throw s.response=e,s}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(s){return e(Ee(s))})).catch((function(s){return e(ke(s.message))}))}))},fetchPromos:function(){e((function(e){return e(Se(!0)),fetch(g+"promotions").then((function(e){if(e.ok)return e;var s=new Error("Error"+e.status+": "+e.statusText);throw s.response=e,s}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(s){return e(Fe(s))})).catch((function(s){return e(Ce(s.message))}))}))},fetchLeaders:function(){e((function(e){return e(Te(!0)),fetch(g+"leaders").then((function(e){if(e.ok)return e;var s=new Error("Error"+e.status+": "+e.statusText);throw s.response=e,s}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(s){return e(Ae(s))})).catch((function(s){return e(De(s.message))}))}))},resetFeedbackForm:function(){e(W.actions.reset("feedback"))}}}))(Re)),qe=t(11),He=t(28),_e=t(104),Be=t.n(_e),Ye=t(105),Ge=t.n(Ye),We=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,dishes:[]},s=arguments.length>1?arguments[1]:void 0;switch(s.type){case je:return Object(qe.a)(Object(qe.a)({},e),{},{isLoading:!1,errMess:null,dishes:s.payload});case he:return Object(qe.a)(Object(qe.a)({},e),{},{isLoading:!0,errMess:null,dishes:[]});case me:return Object(qe.a)(Object(qe.a)({},e),{},{isLoading:!1,errMess:s.payload,dishes:[]});default:return e}},Je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errMess:null,comments:[]},s=arguments.length>1?arguments[1]:void 0;switch(s.type){case be:var t=s.payload;return Object(qe.a)(Object(qe.a)({},e),{},{comments:e.comments.concat(t)});case ue:return Object(qe.a)(Object(qe.a)({},e),{},{isLoading:!1,errMess:null,comments:s.payload});case Oe:return Object(qe.a)(Object(qe.a)({},e),{},{isLoading:!1,errMess:s.payload,comments:[]});default:return e}},Ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,promotions:[]},s=arguments.length>1?arguments[1]:void 0;switch(s.type){case fe:return Object(qe.a)(Object(qe.a)({},e),{},{isLoading:!1,errMess:null,promotions:s.payload});case xe:return Object(qe.a)(Object(qe.a)({},e),{},{isLoading:!0,errMess:null,promotions:[]});case pe:return Object(qe.a)(Object(qe.a)({},e),{},{isLoading:!1,errMess:s.payload,promotions:[]});default:return e}},ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,leaders:[]},s=arguments.length>1?arguments[1]:void 0;switch(s.type){case Ne:return Object(qe.a)(Object(qe.a)({},e),{},{isLoading:!1,errMess:null,leaders:s.payload});case ge:return Object(qe.a)(Object(qe.a)({},e),{},{isLoading:!0,errMess:null,leaders:[]});case ve:return Object(qe.a)(Object(qe.a)({},e),{},{isLoading:!1,errMess:s.payload,leaders:[]});default:return e}},Ue={firtsname:"",lastname:"",telnum:"",email:"",agree:!1,contactType:"Tel.",message:""},Ze=Object(He.createStore)(Object(He.combineReducers)(Object(qe.a)({dishes:We,comments:Je,promotions:Ke,leaders:ze},Object(W.createForms)({feedback:Ue}))),Object(He.applyMiddleware)(Be.a,Ge.a)),$e=function(e){Object(l.a)(t,e);var s=Object(d.a)(t);function t(){return Object(o.a)(this,t),s.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return Object(f.jsx)(de.Provider,{store:Ze,children:Object(f.jsx)(j.a,{children:Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(Pe,{})})})})}}]),t}(n.Component),Qe=$e,Ve=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,208)).then((function(s){var t=s.getCLS,n=s.getFID,c=s.getFCP,r=s.getLCP,a=s.getTTFB;t(e),n(e),c(e),r(e),a(e)}))};a.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(Qe,{})}),document.getElementById("root")),Ve()}},[[179,1,2]]]);
//# sourceMappingURL=main.bc2ade95.chunk.js.map