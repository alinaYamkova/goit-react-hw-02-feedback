(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{1:function(e,t,a){e.exports={btn_list:"Feedback_btn_list__yHRva",list:"Feedback_list__Spefo",title:"Feedback_title__1susm",text:"Feedback_text__1WFgM",message:"Feedback_message__3N0Ag"}},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var c=a(2),s=a.n(c),n=a(4),i=a.n(n),r=a(5),o=a(6),l=a(7),d=a(9),b=a(8),u=a(1),j=a.n(u),h=a(18),x=a(0),g=function(e){var t=e.options,a=e.onLeaveFeedback;return Object(x.jsx)("ul",{className:j.a.btn_list,children:t.map((function(e){return Object(x.jsx)("li",{className:j.a.list,children:Object(x.jsx)("button",{name:e,type:"button",onClick:a,children:e},Object(h.a)())},e)}))})},O=function(e){var t=e.good,a=e.neutral,c=e.bad,s=e.total,n=e.positivePercentage;return Object(x.jsxs)("div",{className:j.a.statistics,children:[Object(x.jsxs)("p",{className:j.a.text,children:["Good: ",t]}),Object(x.jsxs)("p",{className:j.a.text,children:["Neutral: ",a]}),Object(x.jsxs)("p",{className:j.a.text,children:["Bad: ",c]}),Object(x.jsxs)("p",{className:j.a.text,children:["Total: ",s]}),Object(x.jsxs)("p",{className:j.a.text,children:["Positive feedback: ",n,"%"]})]})},p=function(e){var t=e.message;return Object(x.jsx)("span",{className:j.a.message,children:t})},v=function(e){var t=e.title,a=e.children;return Object(x.jsxs)("section",{children:[Object(x.jsx)("h2",{className:j.a.title,children:t}),a]})},m=(a(15),function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(o.a)(this,a);for(var c=arguments.length,s=new Array(c),n=0;n<c;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={good:0,neutral:0,bad:0},e.changeFeedbackValue=function(t){var a=t.target.name;e.setState((function(e){return Object(r.a)({},a,e[a]+1)}))},e.countTotalFeedback=function(){return e.state.good+e.state.neutral+e.state.bad},e.countPositiveFbPercentage=function(){var t=Math.round(e.state.good/(e.state.good+e.state.bad)*100);return console.dir(t),t},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,c=e.bad,s=this.countTotalFeedback;return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(v,{title:"Please leave feedback",children:Object(x.jsx)(g,{options:["good","neutral","bad"],onLeaveFeedback:this.changeFeedbackValue})}),Object(x.jsx)(v,{title:"Statistics",children:0===s?Object(x.jsx)(p,{message:"No feedback given"}):Object(x.jsx)(O,{good:t,neutral:a,bad:c,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFbPercentage()})})]})}}]),a}(c.Component));i.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(m,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.5d7a3803.chunk.js.map