(this.webpackJsonpquiz=this.webpackJsonpquiz||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(4),a=n.n(s),o=(n(9),n(0));function i(){var e=0;return Object(o.jsx)("div",{children:Object(o.jsxs)("nav",{className:"navbar navbar-expand-sm bg-dark navbar-dark",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"#",children:"Quiz App"}),Object(o.jsxs)("ul",{className:"navbar-nav",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link",href:"#",children:"Home"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link",href:"#",children:"Result"})})]}),Object(o.jsxs)("div",{className:"custom-control custom-switch float-lg-right",children:[Object(o.jsx)("input",{type:"checkbox",onChange:function(){e%2!==0?(document.body.style.background="#fff",document.body.style.color="#000000"):(document.body.style.background="#000000",document.body.style.color="#ffffff"),e++},className:"custom-control-input",id:"switch1"}),Object(o.jsx)("label",{className:"custom-control-label",htmlFor:"switch1",children:"Toggle me"})]})]})})}var l=n(2);function u(e){return Object(o.jsxs)("div",{children:[Object(o.jsx)("hr",{}),Object(o.jsxs)("h2",{children:["Score ",e.marks," out of ",e.toQ]})]})}function d(e){var t=Object(c.useState)(""),n=Object(l.a)(t,2),r=n[0],s=n[1];return Object(o.jsx)("button",{className:" m-2 btn btn-secondary",onMouseEnter:function(e){s("#6c757d"),e.target.style.backgroundColor=r,e.preventDefault()},onMouseLeave:function(e){s("#ffc107"),e.target.style.backgroundColor=r,e.preventDefault()},onClick:function(t){e.valuebtn(t.target.innerText),t.preventDefault()},children:e.val})}function b(e){var t=Object(c.useState)(null),n=Object(l.a)(t,2),r=n[0],s=n[1],a=function(t){e.cor===t&&(s(!0),e.markscal(r)),console.log(e.cor,t,r)},i=e.ans.map((function(t,n){return Object(o.jsx)(d,{valuebtn:a,val:t,cor:e.cor},n)}));return Object(o.jsxs)("div",{className:"card bg-primary text-white my-3 py-3 px-5",children:[Object(o.jsxs)("p",{children:["Q.",e.Qid,"  ",e.quest]}),Object(o.jsx)("div",{className:"buttons",children:i})]})}function j(e){var t=Object(c.useState)(0),n=Object(l.a)(t,2),r=n[0],s=n[1],a=e.ques,i=function(e){null===e&&s(r+1)},d=a.map((function(e,t){return Object(o.jsx)(b,{markscal:i,quest:e.question,ans:e.answers,cor:e.correct,Qid:e.questionId},t)}));return Object(o.jsxs)("div",{className:"card m-5 p-5",children:[d,Object(o.jsx)(u,{toQ:d.length,marks:r})]})}var h=function(){return Object(o.jsxs)("div",{className:"App ",children:[Object(o.jsx)(i,{}),Object(o.jsx)("h1",{style:{textAlign:"center"},className:"card-body",children:"Simple Quiz Application"}),Object(o.jsx)(j,{ques:[{question:"What does HTML stand for? ?",answers:["HyperText Markup Language","HyperType Markup Language","HyperText Markup List","HyperText type Markup Language"],correct:"HyperText Markup Language",questionId:"1"},{question:"Who is making the Web standards ?",answers:["Mozilla Mdn","Chrome","Opera","Brave"],correct:"Mozilla Mdn",questionId:"2"},{question:"Choose the correct HTML element for the largest heading: ?",answers:["h2","html","head","h1"],correct:"h1",questionId:"3"},{question:"What is the correct HTML element for inserting a line break ?",answers:["Br","Hr","P","Body"],correct:"Br",questionId:"4"},{question:"Choose the correct HTML element to define important text ",answers:["Bold","impotant","strong","Italic"],correct:"strong",questionId:"5"}]})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,12)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};a.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root")),m()},9:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.400d5301.chunk.js.map