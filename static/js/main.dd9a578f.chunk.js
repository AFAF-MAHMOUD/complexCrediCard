(this["webpackJsonpcomplex-credit-card"]=this["webpackJsonpcomplex-credit-card"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(2),c=a.n(l),s=(a(13),a(3)),i=a(4),m=a(6),o=a(5),u=a(7),d=(a(14),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).changeCardHolder=function(e){e.target.value.match(/^[0-9\b]+$/)?a.setState({validUser:{status:!1,message:"Tape only text"}}):e.target.value.length>20?a.setState({validUser:{status:!1,message:"Max length 20"}}):a.setState({cardHolder:e.target.value,valid:{status:!0,message:""}})},a.changeValidTh=function(e){a.setState({validThru:e.target.value.substring(0,2)+e.target.value.substring(2,4)})},a.transformCardNumber=function(e){if(e.length>15){var t=e.slice(0,16);t=t.toString();for(var a="",n=0;n<e.length;n+=4)a+=t.slice(n,n+4)+" ";return a.trim()}e=e.toString();for(var r="",l=0;l<e.length;l+=4)r+=e.slice(l,l+4)+" ";return r.trim()},a.validDate=function(e){return 4===e.length&&(e=e.toString()).slice(0,2)+"/"+e.slice(2)},a.changeNumber=function(e){a.setState({cardNumber:e.target.value})},a.state={displayMessageDate:"12/08",displayMessageUser:"Enter the user name",cardNumber:".... .... .... ....",validThru:"****",cardHolder:"afef mahmoud",validUser:{status:!0,message:""},validDate:{status:!0,message:""}},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"form-container"},r.a.createElement("div",{className:"main-container"},r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"CREDIT CARD")),r.a.createElement("div",{className:"chip"},r.a.createElement("img",{src:"https://cdn.iconscout.com/icon/premium/png-512-thumb/credit-card-chip-1522262-1288452.png"})),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"info"},r.a.createElement("div",{className:"main-number"},r.a.createElement("h2",null," ",this.transformCardNumber(this.state.cardNumber))),r.a.createElement("div",{className:"sec-num-validth"},r.a.createElement("div",{className:"sec-num"},r.a.createElement("h2",null," 5422")),r.a.createElement("div",{className:"valid-thru"},r.a.createElement("div",{className:"m-y"},r.a.createElement("p",null," MONTH/YEAR")),r.a.createElement("div",{className:"container"},r.a.createElement("div",null,r.a.createElement("p",null,"VALID ",r.a.createElement("br",null),"THRU")),r.a.createElement("div",null,r.a.createElement("i",{className:"fas fa-caret-right"})),r.a.createElement("div",null,r.a.createElement("h2",{className:"sec-num"},this.validDate(this.state.validThru)))))),r.a.createElement("div",{className:"card-holder"},r.a.createElement("h2",null,this.state.cardHolder.toUpperCase()))),r.a.createElement("div",{className:"logo"},r.a.createElement("img",{src:"https://www.logolynx.com/images/logolynx/e0/e01dbbb3068c7f5135b90b0ce91445f9.png"})))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("form",null,r.a.createElement("input",{type:"number",placeholder:"Credit card number",onChange:function(t){return e.changeNumber(t)}}),r.a.createElement("br",null),r.a.createElement("input",{maxLength:"4",type:"text",placeholder:this.state.displayMessageDate,onChange:function(t){return e.changeValidTh(t)}}),r.a.createElement("br",null),r.a.createElement("input",{type:"text",placeholder:this.state.displayMessageUser,onChange:function(t){return e.changeCardHolder(t)}}),r.a.createElement("br",null),this.state.validUser.status?null:r.a.createElement("span",{style:{color:"#ff0000"}},this.state.validUser.message)))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.dd9a578f.chunk.js.map