this.mydcc=function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Change_trace_mapbox=t.Change_trace=t.Relayout=t.Listener=t.Listener_mapbox=t.ExampleComponent=void 0;var o=n(5),u=r(o),a=n(7),i=r(a),l=n(6),f=r(l),s=n(8),c=r(s),p=n(3),d=r(p),y=n(4),b=r(y);t.ExampleComponent=u.default,t.Listener_mapbox=i.default,t.Listener=f.default,t.Relayout=c.default,t.Change_trace=d.default,t.Change_trace_mapbox=b.default},function(e,t,n){e.exports=n(11)()},function(e,t){!function(){e.exports=this.React}()},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(2),f=r(l),s=n(1),c=r(s),p=function(e){function t(){return o(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"render",value:function(){var e=this.props,t=e.id,n=e.aim,r=e.data,o=e.style,u=e.setProps;if(document.getElementById(n)&&null==r.disable){var a=document.getElementById(n);null!=a.data[0]&&Plotly.deleteTraces(a,0),Plotly.addTraces(a,r),u&&u({data:{disable:"yes"}})}return f.default.createElement("div",{id:t,style:o})}}]),t}(l.Component);t.default=p,p.propTypes={id:c.default.string.isRequired,aim:c.default.string.isRequired,data:c.default.object,style:c.default.object},p.defaultProps={data:{disable:"yes"}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(2),f=r(l),s=n(1),c=r(s),p=function(e){function t(){return o(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"render",value:function(){var e=this.props,t=e.id,n=e.aim,r=e.data,o=e.style,u=e.setProps;if(document.getElementById(n)&&null==r.disable){var a=document.getElementById(n);Plotly.addTraces(a,r),Plotly.deleteTraces(a,0),u&&u({data:{disable:"yes"}})}return f.default.createElement("div",{id:t,style:o})}}]),t}(l.Component);t.default=p,p.propTypes={id:c.default.string.isRequired,aim:c.default.string.isRequired,data:c.default.object,style:c.default.object},p.defaultProps={data:{disable:"yes"}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(2),f=r(l),s=n(1),c=r(s),p=function(e){function t(){return o(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"render",value:function(){var e=this.props.label;return f.default.createElement("div",null,"ExampleComponent: ",e)}}]),t}(l.Component);t.default=p,p.propTypes={label:c.default.string.isRequired}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(2),f=r(l),s=n(1),c=r(s),p=function(e){function t(){return o(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"render",value:function(){var e=this.props,t=e.id,n=e.aim,r=e.style,o=e.data,u=e.setProps;if(document.getElementById(n)&&""==o.x){var a=document.getElementById(n);u&&u({data:{x:"act",y:"act"}}),a.addEventListener("mousemove",function(e){var t=a._fullLayout.xaxis,n=a._fullLayout.yaxis,r=a._fullLayout.margin.l,o=a._fullLayout.margin.t,i=a.offsetLeft,l=a.offsetTop,f=t.p2c(e.x-r-i),s=n.p2c(e.y-o-l);u&&u({data:{x:f,y:s}})})}return f.default.createElement("div",{id:t,style:r})}}]),t}(l.Component);t.default=p,p.propTypes={id:c.default.string.isRequired,aim:c.default.string.isRequired,style:c.default.object,data:c.default.object},p.defaultProps={data:{x:"",y:""}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(2),f=r(l),s=n(1),c=r(s),p=function(e){function t(){return o(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"render",value:function(){var e=this.props,t=e.id,n=e.aim,r=e.style,o=e.data,u=e.setProps;if(document.getElementById(n)&&""==o.x){var a=document.getElementById(n),i=a._fullLayout.mapbox._subplot.xaxis,l=a._fullLayout.mapbox._subplot.yaxis,s=a._fullLayout.margin.l,c=a._fullLayout.margin.t;u&&u({data:{x:"act",y:"act"}}),a.addEventListener("mousemove",function(e){var t=i.p2c(e.x-s),n=l.p2c(e.y-c);u&&u({data:{x:t,y:n}})})}return f.default.createElement("div",{id:t,style:r})}}]),t}(l.Component);t.default=p,p.propTypes={id:c.default.string.isRequired,aim:c.default.string.isRequired,style:c.default.object,data:c.default.object},p.defaultProps={data:{x:"",y:""}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(2),f=r(l),s=n(1),c=r(s),p=function(e){function t(){return o(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"render",value:function(){var e=this.props,t=e.id,n=e.aim,r=e.layout,o=e.style,u=e.setProps;if(document.getElementById(n)&&null==r.disable){var a=document.getElementById(n);Plotly.relayout(a,r),u&&u({layout:{disable:"yes"}})}return f.default.createElement("div",{id:t,style:o})}}]),t}(l.Component);t.default=p,p.propTypes={id:c.default.string.isRequired,aim:c.default.string.isRequired,layout:c.default.object,style:c.default.object},p.defaultProps={layout:{disable:"yes"}}},function(e,t){"use strict";function n(e){return function(){return e}}var r=function(){};r.thatReturns=n,r.thatReturnsFalse=n(!1),r.thatReturnsTrue=n(!0),r.thatReturnsNull=n(null),r.thatReturnsThis=function(){return this},r.thatReturnsArgument=function(e){return e},e.exports=r},function(e,t,n){"use strict";function r(e,t,n,r,u,a,i,l){if(o(t),!e){var f;if(void 0===t)f=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[n,r,u,a,i,l],c=0;f=new Error(t.replace(/%s/g,function(){return s[c++]})),f.name="Invariant Violation"}throw f.framesToPop=1,f}}var o=function(e){};e.exports=r},function(e,t,n){"use strict";var r=n(9),o=n(10),u=n(12);e.exports=function(){function e(e,t,n,r,a,i){i!==u&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t){"use strict";var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";e.exports=n}]);