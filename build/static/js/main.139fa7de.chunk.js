(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{120:function(e,t,n){e.exports=n(267)},236:function(e,t,n){},238:function(e,t,n){},240:function(e,t,n){n(241).config();e.exports={dev:!1,googleMaps:{apiKey:"AIzaSyC9sVb-mQe3X6Jyb0sfbYS969YS1h8-LAQ"}}},267:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(39),o=n.n(c),i=n(36),u=n(107),s=n(61),l=n(44),p=n(6),d=n.n(p),m=n(5),b=n(41),h=(n(63),{findLocationByLatLng:function(){var e=Object(b.a)(d.a.mark(function e(t,n){var a,r,c;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=[t,n].join(","),e.next=3,fetch("https://react-assessment-api.herokuapp.com/api/weather/location/search/?lattlong=".concat(a));case 3:if((r=e.sent).ok){e.next=6;break}return e.abrupt("return",{error:{code:r.status}});case 6:return e.next=8,r.json();case 8:return c=e.sent,e.abrupt("return",{data:c});case 10:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),findWeatherbyId:function(){var e=Object(b.a)(d.a.mark(function e(t){var n,a;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://react-assessment-api.herokuapp.com/api/weather/location/".concat(t,"/"));case 2:if((n=e.sent).ok){e.next=5;break}return e.abrupt("return",{error:{code:n.status}});case 5:return e.next=7,n.json();case 7:return a=e.sent,e.abrupt("return",{data:a});case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),droneData:function(){var e=Object(b.a)(d.a.mark(function e(){var t,n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://react-assessment-api.herokuapp.com/api/drone");case 2:if((t=e.sent).ok){e.next=5;break}return e.abrupt("return",{error:{code:t.status}});case 5:return e.next=7,t.json();case 7:return n=e.sent,e.abrupt("return",{data:n});case 9:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()}),f="COMMAND/FETCH_WEATHER_FOR_LAT_LNG",E="EVENT/API_ERROR_RECEIVED",O="EVENT/WEATHER_DATA_RECEIVED",v="EVENT/WEATHER_ID_RECEIVED",j="EVENT/DRONE_START_FETCH",g="EVENT/DRONE_INFO",y="EVENT/DRONE_CANCEL_FETCH",w=d.a.mark(_),x=d.a.mark(T),k=d.a.mark(N);function _(e){var t,n,a,r;return d.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.id,c.next=3,Object(m.b)(h.findWeatherbyId,t);case 3:if(n=c.sent,a=n.error,r=n.data,!a){c.next=12;break}return c.next=9,Object(m.e)({type:E,code:a.code});case 9:return c.next=11,Object(m.c)();case 11:return c.abrupt("return");case 12:return c.next=14,Object(m.e)({type:O,data:r});case 14:case"end":return c.stop()}},w)}function T(e){var t,n,a,r,c,o;return d.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.latitude,n=e.longitude,i.next=3,Object(m.b)(h.findLocationByLatLng,t,n);case 3:if(a=i.sent,r=a.error,c=a.data,!r){i.next=13;break}return console.log({error:r}),i.next=10,Object(m.e)({type:E,code:r.code});case 10:return i.next=12,Object(m.c)();case 12:return i.abrupt("return");case 13:if(o=!!c[0]&&c[0].woeid){i.next=20;break}return i.next=17,Object(m.e)({type:E});case 17:return i.next=19,Object(m.c)();case 19:return i.abrupt("return");case 20:return i.next=22,Object(m.e)({type:v,id:o});case 22:case"end":return i.stop()}},x)}function N(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.a)([Object(m.f)(f,T),Object(m.f)(v,_)]);case 2:case"end":return e.stop()}},k)}var C=[N],R=n(109),A=d.a.mark(L),D=d.a.mark(V);function L(e){return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(m.b)(R.toast.error,"Error Received: ".concat(e.code));case 2:case"end":return t.stop()}},A)}function V(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.f)(E,L);case 2:case"end":return e.stop()}},D)}var F=[V],S=d.a.mark(I),M=d.a.mark(H),W=d.a.mark(z);function I(){var e,t;return d.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:n.prev=0;case 1:return n.next=4,Object(m.b)(h.droneData);case 4:return e=n.sent,t=e.data,n.next=8,Object(m.e)({type:g,data:t});case 8:return n.next=10,Object(s.b)(4e3);case 10:n.next=1;break;case 12:n.next=21;break;case 14:return n.prev=14,n.t0=n.catch(0),n.next=18,Object(m.e)({type:E,code:n.t0.code});case 18:return n.next=20,Object(m.c)();case 20:return n.abrupt("return");case 21:case"end":return n.stop()}},S,null,[[0,14]])}function H(){var e;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Calling droneCancelFetch"),t.next=3,Object(m.d)(I);case 3:return e=t.sent,t.next=6,Object(m.c)(e);case 6:case"end":return t.stop()}},M)}function z(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.a)([Object(m.f)(j,I),Object(m.f)(y,H)]);case 2:case"end":return e.stop()}},W)}var G,P,B=[z],J=[].concat(Object(l.a)(F),Object(l.a)(C),Object(l.a)(B)),K=n(28),U=n(119),Q=n(19),Y={loading:!1,weatherId:null,name:"",temperature:"",weather_state_name:"",latitude:null,longitude:null,data:{}},X=(G={},Object(K.a)(G,f,function(e,t){return Object(Q.a)({},e,{loading:!0})}),Object(K.a)(G,v,function(e,t){return Object(Q.a)({},e,{weatherId:t.id})}),Object(K.a)(G,O,function(e,t){var n=t.data;if(!n.consolidated_weather)return e;var a,r=n.consolidated_weather[0],c=r.weather_state_name,o=r.the_temp,i=n.latt_long,u=n.title,s=i.split(","),l=Object(U.a)(s,2),p=l[0],d=l[1];return Object(Q.a)({},e,{loading:!1,latitude:p,longitude:d,temperatureinCelsius:o,temperatureinFahrenheit:(a=o,9*a/5+32),weather_state_name:c,name:u,data:t.data})}),G),Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0,n=X[t.type];return"undefined"===typeof n?e:n(e,t)},$={loading:!1,data:[],zoom:11},q=(P={},Object(K.a)(P,j,function(e,t){return Object(Q.a)({},e,{loading:!0})}),Object(K.a)(P,g,function(e,t){var n=t.data.data;return Object(Q.a)({},e,{loading:!1,data:n})}),P),ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0,n=q[t.type];return"undefined"===typeof n?e:n(e,t)},te=n(33),ne=n(14),ae=n(118),re=n.n(ae),ce=(n(139),n(72)),oe=n.n(ce),ie=n(112),ue=n.n(ie),se=n(113),le=n.n(se),pe=n(30),de=n(31),me=n(34),be=n(32),he=n(35),fe=n(111),Ee=n.n(fe),Oe=n(110),ve=n.n(Oe),je=Object(ne.withStyles)(function(e){return{root:{background:e.palette.secondary.main},label:{color:e.palette.primary.main}}})(ve.a),ge=function(e){function t(){return Object(pe.a)(this,t),Object(me.a)(this,Object(be.a)(t).apply(this,arguments))}return Object(he.a)(t,e),Object(de.a)(t,[{key:"componentDidMount",value:function(){this.props.onLoad()}},{key:"render",value:function(){var e=this.props,t=e.loading,n=e.name,a=e.weather_state_name,c=e.temperatureinFahrenheit;return t?r.a.createElement(Ee.a,null):r.a.createElement(je,{label:"Weather in ".concat(n,": ").concat(a," and ").concat(c,"\xb0")})}}]),t}(a.Component),ye=Object(te.b)(function(e,t){var n=e.weather;return{loading:n.loading,name:n.name,weather_state_name:n.weather_state_name,temperatureinFahrenheit:n.temperatureinFahrenheit}},function(e){return{onLoad:function(){return e({type:f,longitude:-95.3698,latitude:29.7604})}}})(ge),we=Object(ne.withStyles)({grow:{flexGrow:1}})(function(e){var t=e.classes;return r.a.createElement(ue.a,{position:"static"},r.a.createElement(le.a,null,r.a.createElement(oe.a,{variant:"h6",color:"inherit",className:t.grow},"test-react's"," EOG React Visualization Assessment"),r.a.createElement(ye,null)))}),xe=Object(ne.withStyles)(function(e){return{wrapper:{background:e.palette.background.main,height:"100vh"}}})(function(e){var t=e.classes;return r.a.createElement("div",{className:t.wrapper},e.children)});var ke=function(e){return r.a.createElement(a.Fragment,null,r.a.createElement(xe,null,r.a.createElement(we,null),e.children))},_e=n(42),Te=n(114),Ne=n.n(Te),Ce=(n(236),n(238),function(e){function t(){return Object(pe.a)(this,t),Object(me.a)(this,Object(be.a)(t).apply(this,arguments))}return Object(he.a)(t,e),Object(de.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"lds-grid"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))}}]),t}(a.Component));var Re=function(){return r.a.createElement("div",{className:"PageLoading"},r.a.createElement(Ce,null))},Ae=n(58),De=n.n(Ae),Le=n(60),Ve=n.n(Le),Fe=n(57),Se=n.n(Fe),Me=n(59),We=n.n(Me),Ie=n(240),He=function(e){var t=e.text;return r.a.createElement("div",{style:{fontWeight:"bold",color:"red",fontSize:"2em"}},t)},ze=Object(ne.withStyles)(function(e){return{root:{background:e.palette.primary.main},title:{color:"white"}}})(Se.a),Ge=function(e){function t(){return Object(pe.a)(this,t),Object(me.a)(this,Object(be.a)(t).apply(this,arguments))}return Object(he.a)(t,e),Object(de.a)(t,[{key:"componentWillMount",value:function(){this.props.dispatch({type:"EVENT/DRONE_START_FETCH"})}},{key:"componentWillUnmount",value:function(){this.props.dispatch({type:"EVENT/DRONE_CANCEL_FETCH"})}},{key:"render",value:function(){var e=this.props,t=e.classes,n=e.drone;if(n.loading)return r.a.createElement(Re,null);var a=n.data[n.data.length-1]||0,c=a.latitude,o=a.longitude;return r.a.createElement(De.a,{className:t.card},r.a.createElement(ze,{title:"GoogleMaps Position"}),r.a.createElement(We.a,null,r.a.createElement("div",{style:{height:"70vh",width:"100%"}},r.a.createElement(Ne.a,{bootstrapURLKeys:{key:Ie.googleMaps.apiKey},center:{lat:c,lng:o},defaultZoom:n.zoom},r.a.createElement(He,{lat:c,lng:o,text:"*"}))),r.a.createElement("br",null),r.a.createElement(Ve.a,{variant:"contained",size:"large",color:"primary",component:function(e){return r.a.createElement(_e.b,Object.assign({to:"/chart"},e))}},"Go to chart")))}}]),t}(a.Component);var Pe=Object(te.b)(function(e,t){return Object(Q.a)({},e,t)})(Object(ne.withStyles)({card:{margin:"5% 25%"}})(Ge)),Be=n(116),Je=Object(ne.withStyles)(function(e){return{root:{background:e.palette.primary.main},title:{color:"white"}}})(Se.a),Ke=function(e){function t(){return Object(pe.a)(this,t),Object(me.a)(this,Object(be.a)(t).apply(this,arguments))}return Object(he.a)(t,e),Object(de.a)(t,[{key:"componentWillMount",value:function(){this.props.dispatch({type:"EVENT/DRONE_START_FETCH"})}},{key:"componentWillUnmount",value:function(){this.props.dispatch({type:"EVENT/DRONE_CANCEL_FETCH"})}},{key:"render",value:function(){var e=this.props,t=e.classes,n=e.drone,a=n.data.map(function(e){return[new Date(e.timestamp),e.metric]});return n.loading?r.a.createElement(Re,null):r.a.createElement(De.a,{className:t.card},r.a.createElement(Je,{title:"GoogleMaps Position"}),r.a.createElement(We.a,null,r.a.createElement(Be.a,{width:"100%",height:"70vh",chartType:"LineChart",loader:r.a.createElement("div",null,"Loading chart"),data:[[{type:"date",label:"Timestamp"},"Metric"]].concat(Object(l.a)(a)),options:{hAxis:{title:"Time"},vAxis:{title:"Popularity"},series:{1:{curveType:"function"}}},rootProps:{"data-testid":"2"}}),r.a.createElement(Ve.a,{variant:"contained",size:"large",color:"primary",component:function(e){return r.a.createElement(_e.b,Object.assign({to:"/"},e))}},"Go to Map")))}}]),t}(a.Component);var Ue=Object(te.b)(function(e,t){return Object(Q.a)({},t,e)})(Object(ne.withStyles)({card:{margin:"5% 25%"}})(Ke)),Qe=n(71),Ye=function(){var e=Object(i.combineReducers)({weather:Z,drone:ee}),t=Object(u.composeWithDevTools)({}),n=Object(s.a)(),a=Object(i.applyMiddleware)(n),r=Object(i.createStore)(e,t(a));return J.forEach(n.run),r}(),Xe=Object(ne.createMuiTheme)({typography:{useNextVariants:!0},palette:{primary:{main:"rgb(39,49,66)"},secondary:{main:"rgb(197,208,222)"},background:{main:"rgb(226,231,238)"}}}),Ze=function(e){return r.a.createElement(_e.a,null,r.a.createElement(ne.MuiThemeProvider,{theme:Xe},r.a.createElement(re.a,null),r.a.createElement(te.a,{store:Ye},r.a.createElement(ke,null,r.a.createElement(Qe.a,{exact:!0,path:"/",component:Pe}),r.a.createElement(Qe.a,{exact:!0,path:"/chart",component:Ue})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Ze,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[120,2,1]]]);
//# sourceMappingURL=main.139fa7de.chunk.js.map