(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{10:function(e,t,a){e.exports={sidebar:"sidebar_sidebar__1e7pc",sidebarContent:"sidebar_sidebarContent__1sKug",projectTitleDiv:"sidebar_projectTitleDiv__2P3PQ",projectTitle:"sidebar_projectTitle__1pvBM",titleInfo:"sidebar_titleInfo__2lNAR",logo:"sidebar_logo__3qfmd",arrow:"sidebar_arrow___gDPU",currentSection:"sidebar_currentSection__2qlr7",link:"sidebar_link__wn0gN",currentlySelected:"sidebar_currentlySelected__3kOqO",collapseButtonDiv:"sidebar_collapseButtonDiv__1MoPy",collapseButton:"sidebar_collapseButton__2_uMu"}},101:function(e,t,a){},13:function(e,t,a){e.exports={header:"header_header__3yTey",logo:"header_logo__M33yO",brandName:"header_brandName__3pQSA",headerLinks:"header_headerLinks__3H4wX",userLogo:"header_userLogo__OBtgQ",createButton:"header_createButton__3x95u",logoDiv:"header_logoDiv__OcF6j",userProfileText:"header_userProfileText__3G2LS",searchButton:"header_searchButton__TusBM",search:"header_search__1Kq4f"}},154:function(e,t){},157:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),l=a.n(c),s=(a(101),a(102),a(3)),o=a(11),i=a(7),u=a.n(i),m=function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),c=a[0],l=a[1],i=Object(n.useState)(""),m=Object(s.a)(i,2),d=m[0],p=m[1],E=Object(n.useState)(""),v=Object(s.a)(E,2),h=v[0],b=v[1];return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col text-center"},r.a.createElement("h1",null,"Geera"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6 container shadow rounded border"},r.a.createElement("div",{className:"row my-3"},r.a.createElement("div",{className:"col font-weight-bold text-center"},"Log in to your account")),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={email:c,password:d};u.a.post("http://localhost:8000/api/users/login",t,{withCredentials:!0}).then((function(e){localStorage.setItem("userID",e.data.user._id),localStorage.setItem("userName",e.data.user.name),Object(o.d)("/home")})).catch((function(e){b(e.response.data.message)}))}},r.a.createElement("div",{className:"row"},h&&r.a.createElement("span",{className:"text-danger"},h)),r.a.createElement("div",{className:"row"},r.a.createElement("input",{className:"col text-center m-3",type:"email",placeholder:"Enter email",value:c,onChange:function(e){return l(e.target.value)}})),r.a.createElement("div",{className:"row"},r.a.createElement("input",{className:"col text-center m-3",type:"password",placeholder:"Enter password",value:d,onChange:function(e){return p(e.target.value)}})),r.a.createElement("div",{className:"row my-3"},r.a.createElement("div",{className:"col text-center"},r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Continue")))),r.a.createElement("div",{className:"row my-3"},r.a.createElement("div",{className:"col text-center"},r.a.createElement(o.a,{to:"/register"},"Sign up for an account"))))))},d=function(e){var t,a,c,l,i,m,d,p,E=Object(n.useState)(""),v=Object(s.a)(E,2),h=v[0],b=v[1],g=Object(n.useState)(""),f=Object(s.a)(g,2),k=f[0],j=f[1],_=Object(n.useState)(""),N=Object(s.a)(_,2),O=N[0],w=N[1],y=Object(n.useState)(""),S=Object(s.a)(y,2),C=S[0],x=S[1],P=Object(n.useState)([]),T=Object(s.a)(P,2),I=T[0],B=T[1];return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col text-center"},r.a.createElement("h1",null,"Geera"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6 container shadow rounded border"},r.a.createElement("div",{className:"row my-3"},r.a.createElement("div",{className:"col font-weight-bold text-center"},"Sign up for your account")),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={email:h,name:k,password:O,confirmPassword:C};u.a.post("http://localhost:8000/api/users",t,{withCredentials:!0}).then((function(e){localStorage.setItem("userID",e.data.user._id),localStorage.setItem("userName",e.data.user.name),Object(o.d)("/welcome")})).catch((function(e){B(e.response.data.errors)}))}},r.a.createElement("div",{className:"row"},I&&r.a.createElement("span",{className:"text-danger"},null===I||void 0===I||null===(t=I.email)||void 0===t||null===(a=t.properties)||void 0===a?void 0:a.message)),r.a.createElement("div",{className:"row"},r.a.createElement("input",{className:"col text-center m-3",type:"email",placeholder:"Enter email address",value:h,onChange:function(e){return b(e.target.value)}})),r.a.createElement("div",{className:"row"},I&&r.a.createElement("span",{className:"text-danger"},null===I||void 0===I||null===(c=I.name)||void 0===c||null===(l=c.properties)||void 0===l?void 0:l.message)),r.a.createElement("div",{className:"row"},r.a.createElement("input",{className:"col text-center m-3",type:"text",placeholder:"Enter full name",value:k,onChange:function(e){return j(e.target.value)}})),r.a.createElement("div",{className:"row"},I&&r.a.createElement("span",{className:"text-danger"},null===I||void 0===I||null===(i=I.password)||void 0===i||null===(m=i.properties)||void 0===m?void 0:m.message)),r.a.createElement("div",{className:"row"},r.a.createElement("input",{className:"col text-center m-3",type:"password",placeholder:"Create password",value:O,onChange:function(e){return w(e.target.value)}})),r.a.createElement("div",{className:"row"},I&&r.a.createElement("span",{className:"text-danger"},null===I||void 0===I||null===(d=I.confirmPassword)||void 0===d||null===(p=d.properties)||void 0===p?void 0:p.message)),r.a.createElement("div",{className:"row"},r.a.createElement("input",{className:"col text-center m-3",type:"password",placeholder:"Confirm password",value:C,onChange:function(e){return x(e.target.value)}})),r.a.createElement("div",{className:"row my-3"},r.a.createElement("div",{className:"col text-center"},r.a.createElement("button",{className:"btn btn-primary"},"Sign Up")))),r.a.createElement("div",{className:"row my-3"},r.a.createElement("div",{className:"col text-center"},r.a.createElement(o.a,{to:"/login"},"Already have an account? Log in"))))))},p=a(18),E=a(13),v=a.n(E),h=a(27),b=a(162),g=a(91),f=a(165),k=a(34);function j(e){var t=e.projects,a=e.setProjects,c=e.setCurrentProject,l=e.setTasks,i=e.setFilteredTasks;Object(n.useEffect)((function(){u.a.get("http://localhost:8000/api/projects/user/"+localStorage.getItem("userID"),{withCredentials:!0}).then((function(e){a(e.data)}))}),[a]);var m=function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),c=a[0],l=a[1];return r.a.createElement(h.a,Object.assign({show:c,onToggle:function(e,t,a){"select"!==a.source&&"change"!==a.source?l(e):l(!0)}},e))};return r.a.createElement("div",{className:v.a.header},r.a.createElement("div",null,r.a.createElement("img",{className:v.a.logo,src:"https://cdn.dribbble.com/users/317366/screenshots/3696949/dribbble-icecream.png",alt:"logo"}),r.a.createElement("span",{className:v.a.brandName},"Geera Software"),r.a.createElement("span",{className:v.a.headerLinks},"Your Work"),r.a.createElement(m,{as:b.a},r.a.createElement(k.a,{style:{backgroundColor:"transparent",border:"none"}},r.a.createElement("span",{className:v.a.headerLinks},"Projects")),r.a.createElement(h.a.Menu,null,t&&t.map((function(e){return r.a.createElement(h.a.Item,{key:e._id,onSelect:function(){return function(e){c(e),u.a.get("http://localhost:8000/api/projects/"+e._id).then((function(e){l(e.data.tasks),i(e.data.tasks)}))}(e,e._id)}},e.name)})),r.a.createElement(h.a.Divider,null),r.a.createElement(h.a.Item,{onSelect:function(){var e=document.getElementById("projectName").value;u.a.post("http://localhost:8000/api/projects",{name:e,users:[localStorage.getItem("userID")]},{withCredentials:!0}).then((function(e){var n=[].concat(Object(p.a)(t),[e.data.project]);a(n)})).catch((function(e){return console.log(e)}))}},"+ Create New Project"),r.a.createElement(g.a,{id:"projectName",type:"text",placeholder:"New project name"}))),r.a.createElement("span",{className:v.a.headerLinks},"Filters"),r.a.createElement("button",{className:v.a.createButton,onClick:e.showModal},"Create")),r.a.createElement(f.a,{title:r.a.createElement("div",{className:v.a.logoDiv},r.a.createElement("img",{className:v.a.userLogo,src:"https://www.underconsideration.com/brandnew/archives/boundless_logo_detail.png",alt:"user"}),r.a.createElement("span",{className:v.a.userProfileText},"Your profile and settings")),id:"nav-dropdown"},r.a.createElement(f.a.ItemText,null,localStorage.getItem("userName")),r.a.createElement(f.a.Divider,null),r.a.createElement(f.a.Item,{onSelect:function(){localStorage.clear(),Object(o.d)("/login")}},"Sign Out")))}var _=a(10),N=a.n(_),O=a(163),w=a(90);function y(e){var t=e.setTasks,a=e.tasks,c=e.setFilteredTasks,l=e.setCurrentView,i=e.currentProj,m=e.allProjects,d=e.setAllProjects,p=e.setCurrentProj,E=Object(n.useState)(3),v=Object(s.a)(E,2),h=v[0],b=v[1],g=Object(n.useState)(!1),f=Object(s.a)(g,2),k=f[0],j=f[1],_=function(){return j(!1)};function y(e){switch(b(e.target.id),l("tasks"),e.target.id){case"1":var t=a.filter((function(e){return e.assignee===localStorage.getItem("userID")&&"0"===e.status}));c(t);break;case"2":var n=a.filter((function(e){return e.creator===localStorage.getItem("userID")}));c(n);break;case"3":c(a);break;case"4":var r=a.filter((function(e){return"0"===e.status}));c(r);break;case"5":var s=a.filter((function(e){return"1"===e.status}));c(s)}}return null===i?r.a.createElement("div",null,"Loading..."):r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{show:k,onHide:_},r.a.createElement(O.a.Header,{closeButton:!0},r.a.createElement(O.a.Title,null,"Are you sure you want to delete ",i.name,"?")),r.a.createElement(O.a.Body,null,"Deleting the project will also delete all tasks associated with the project and cannot be undone."),r.a.createElement(O.a.Footer,null,r.a.createElement(w.a,{variant:"primary",onClick:_},"Cancel"),r.a.createElement(w.a,{variant:"danger",onClick:function(){u.a.delete("http://localhost:8000/api/projects/"+i._id).then((function(e){_();var a=m.filter((function(e){return e._id!==i._id}));d(a),a.length<1?Object(o.d)("/welcome"):(p(a[0]),t(a[0].tasks),c(a[0].tasks))})).catch((function(e){console.log(e)}))}},"Delete"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:N.a.sidebar},r.a.createElement("div",{className:N.a.sidebarContent},r.a.createElement("div",{className:N.a.projectTitleDiv},r.a.createElement("img",{className:N.a.logo,src:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Picasa.svg/256px-Picasa.svg.png",alt:"logo"}),r.a.createElement("div",null,r.a.createElement("span",{className:N.a.projectTitle},i.name))),r.a.createElement("svg",{width:"240",height:"24"},r.a.createElement("rect",{x:"4",y:"12",rx:"2",ry:"2",width:"220",height:"1",style:{stroke:"black",strokeWidth:"1",opacity:"0.1"}})),r.a.createElement("div",{className:N.a.currentSection},"Issues and Filters"),r.a.createElement("div",{id:"1",onClick:y,className:"1"===h?N.a.currentlySelected:N.a.link},"My open issues"),r.a.createElement("div",{id:"2",onClick:y,className:"2"===h?N.a.currentlySelected:N.a.link},"Reported by me"),r.a.createElement("div",{id:"3",onClick:y,className:"3"===h?N.a.currentlySelected:N.a.link},"All issues"),r.a.createElement("div",{id:"4",onClick:y,className:"4"===h?N.a.currentlySelected:N.a.link},"Open issues"),r.a.createElement("div",{id:"5",onClick:y,className:"5"===h?N.a.currentlySelected:N.a.link},"Done issues"),r.a.createElement("svg",{width:"240",height:"24"},r.a.createElement("rect",{x:"4",y:"12",rx:"2",ry:"2",width:"220",height:"1",style:{stroke:"black",strokeWidth:"1",opacity:"0.1"}})),r.a.createElement("div",{id:"6",onClick:function(){b(6),l("settings")},className:"6"===h?N.a.currentlySelected:N.a.link},"Project Settings"),r.a.createElement("div",{onClick:function(){return j(!0)},className:N.a.link+" text-danger"},"Delete Project")),r.a.createElement("div",{className:N.a.collapseButtonDiv},r.a.createElement("svg",{className:N.a.collapseButton,width:"26",height:"26"},r.a.createElement("circle",{cx:"13",cy:"13",r:"12",stroke:"white",strokeWidth:"1",fill:"white"}),r.a.createElement("foreignObject",{x:"7",y:"-2",width:"24",height:"24"},r.a.createElement("p",{style:{fontWeight:"bold"}},"<"))))))))}var S=a(26),C=a.n(S),x=a(164);function P(e){var t=e.closeModal,a=(e.currentProject,e.projects),c=e.users,l=Object(n.useState)(""),o=Object(s.a)(l,2),i=o[0],m=o[1],d=Object(n.useState)(""),p=Object(s.a)(d,2),E=p[0],v=p[1],h=Object(n.useState)(0),b=Object(s.a)(h,2),g=b[0],f=b[1],k=Object(n.useState)(null),j=Object(s.a)(k,2),_=j[0],N=j[1],O=localStorage.getItem("userID"),y=Object(n.useState)(0),S=Object(s.a)(y,2),P=S[0],T=S[1],I=Object(n.useState)((function(){return C()(":8000")})),B=Object(s.a)(I,1)[0];return null==a?r.a.createElement("p",null,"Loading..."):r.a.createElement(x.a,{onSubmit:function(e){e.preventDefault();var t={name:i,description:E,priority:g,assignee:_,creator:O,status:"0",projectID:P};u.a.post("http://localhost:8000/api/tasks/",t,{withCredentials:!0}).then((function(e){return B.emit("new task created",e.data.task),e.data})).catch((function(e){console.log("this is from new task page: ",e.response.data.errors)}))}},r.a.createElement(x.a.Group,null,r.a.createElement(x.a.Label,null,"Project"),r.a.createElement(x.a.Control,{as:"select",value:P,onChange:function(e){T(e.target.value),console.log("we changed project to: ",e.target.value)}},a.map((function(e,t){return r.a.createElement("option",{key:t,value:e._id},e.name)})))),r.a.createElement(x.a.Group,null,r.a.createElement(x.a.Label,null,"Summary"),r.a.createElement(x.a.Control,{type:"text",value:i,onChange:function(e){return m(e.target.value)}})),r.a.createElement(x.a.Group,null,r.a.createElement(x.a.Label,null,"Description"),r.a.createElement(x.a.Control,{as:"textarea",rows:"2",value:E,onChange:function(e){return v(e.target.value)}})),r.a.createElement(x.a.Group,null,r.a.createElement(x.a.Label,null,"Assignee"),r.a.createElement(x.a.Control,{as:"select",value:_,onChange:function(e){return N(e.target.value)}},r.a.createElement("option",{value:null},"Unassigned"),c.map((function(e,t){return r.a.createElement("option",{value:e._id,key:t},e.name)})))),r.a.createElement(x.a.Group,null,r.a.createElement(x.a.Label,null,"Priority"),r.a.createElement(x.a.Control,{as:"select",value:g,onChange:function(e){return f(e.target.value)}},r.a.createElement("option",{value:1},"High"),r.a.createElement("option",{value:2},"Medium"),r.a.createElement("option",{value:3},"Low"))),r.a.createElement("div",{className:"text-right"},r.a.createElement(w.a,{variant:"primary",type:"submit",onClick:t},"Create")))}function T(e){var t=e.currentProject,a=e.setFilteredTasks,c=Object(n.useState)(""),l=Object(s.a)(c,2),o=l[0],i=l[1],u=Object(n.useState)(!1),m=Object(s.a)(u,2),d=m[0],p=m[1];if(null==t)return"Loading...";var E=t.tasks;return r.a.createElement("div",{className:"mt-3"},r.a.createElement("p",{className:"text-secondary"},"Project / ",t.name),r.a.createElement("h4",null,"All issues"),r.a.createElement("input",{type:"text",value:o,onChange:function(e){return i(e.target.value)},className:v.a.search}),r.a.createElement("button",{type:"submit",onClick:function(){a(E.filter((function(e){return e.name.includes(o)||e.description.includes(o)}))),p(!0)},className:v.a.searchButton,disabled:""===o},"Advanced search"),d&&r.a.createElement("button",{onClick:function(){a(t.tasks),i(""),p(!1)},className:v.a.searchButton},"Clear Search"))}var I=a(20),B=a.n(I);function D(e){var t=e.filteredTasks,a=e.setTaskNumber,c=(e.id,e.task),l=Object(n.useState)(null),i=Object(s.a)(l,2),u=i[0],m=i[1],d=Object(n.useState)(null),E=Object(s.a)(d,2),v=E[0],g=E[1],f=Object(n.useState)((function(){return C()(":8000")})),j=Object(s.a)(f,1)[0];if(Object(n.useEffect)((function(){c&&g(c.number)}),[c]),Object(n.useEffect)((function(){m(t)}),[t]),Object(n.useEffect)((function(){return j.on("new task added",(function(e){m((function(t){return[].concat(Object(p.a)(t),[e])}))})),function(){return j.disconnect(!0)}}),[j]),null===u)return"Loading...";var _=function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),c=a[0],l=a[1];return r.a.createElement(h.a,Object.assign({show:c,onToggle:function(e,t,a){"select"!==a.source&&"change"!==a.source?l(e):l(!0)}},e))},N=function(e){m(function t(a){if(a.length<2)return a;var n=Math.floor(a.length/2);return function(t,a){for(var n=[],r=0,c=0;r<t.length&&c<a.length;)t[r][e]<a[c][e]?(n.push(t[r]),r++):(n.push(a[c]),c++);for(;r<t.length;)n.push(t[r]),r++;for(;c<a.length;)n.push(a[c]),c++;return n}(t(a.slice(0,n)),t(a.slice(n,a.length)))}(u))};return r.a.createElement("div",{className:B.a.panel},r.a.createElement(_,{as:b.a},r.a.createElement(k.a,{style:{backgroundColor:"transparent",border:"none"}},r.a.createElement("span",{style:{color:"black"}},"Sort by")),r.a.createElement(h.a.Menu,null,r.a.createElement(h.a.Item,{onSelect:function(){return N("createdAt")}},"Created"),r.a.createElement(h.a.Item,{onSelect:function(){return N("priority")}},"Priority"),r.a.createElement(h.a.Item,{onSelect:function(){return N("status")}},"Status"))),r.a.createElement("div",{className:B.a.issueGroup},u.map((function(e){return r.a.createElement("div",{key:e._id,className:e.number===v?"".concat(B.a.selected," ").concat(B.a.issue):"".concat(B.a.notSelected," ").concat(B.a.issue),onClick:function(){return function(e){g(e.number),a(e._id),Object(o.d)("/home/geer/"+e._id)}(e)}},r.a.createElement("span",null,e.name),r.a.createElement("br",null),r.a.createElement("span",{className:B.a.issueNumber},r.a.createElement("img",{className:B.a.checkbox,src:"https://upload.wikimedia.org/wikipedia/donate/thumb/8/89/Ooui-checkbox-selected.svg/1024px-Ooui-checkbox-selected.svg.png",alt:"check"}),"GEER-",e.number))}))),r.a.createElement("div",{className:B.a.bottom},r.a.createElement("span",{className:B.a.bottomText},null!==v?"issue ".concat(v," of ").concat(u.length):" ")))}function A(e){var t=e.task,a=Object(n.useState)(t.name),c=Object(s.a)(a,2),l=c[0],o=c[1],i=Object(n.useState)(t.name),m=Object(s.a)(i,2),d=m[0],p=m[1],E=Object(n.useState)(!1),v=Object(s.a)(E,2),h=v[0],b=v[1];return r.a.createElement("div",null,r.a.createElement("h1",{onClick:function(){return b(!h)}},l),r.a.createElement("div",{style:h?{visibility:"visible"}:{visibility:"hidden"}},r.a.createElement("input",{type:"text",value:d,onChange:function(e){return p(e.target.value)}}),r.a.createElement("button",{type:"button",onClick:function(){u.a.put("http://localhost:8000/api/tasks/".concat(t._id),{name:d},{withCredentials:!0}).then((function(e){o(d),b(!1)})).catch(console.log)},className:"btn btn-primary btn-sm"},"Change Name"),r.a.createElement("button",{type:"button",onClick:function(){p(l),b(!1)},className:"btn btn-danger btn-sm"},"Cancel")))}var L=a(8),U=a.n(L);function F(e){var t=e.task,a=Object(n.useState)(""),c=Object(s.a)(a,2),l=c[0],o=c[1],i=Object(n.useState)(t.comments),m=Object(s.a)(i,2),d=m[0],E=m[1],v=t._id,h=Object(n.useState)((function(){return C()(":8000")})),b=Object(s.a)(h,1)[0];return Object(n.useEffect)((function(){return b.on("new comment added",(function(e){E((function(t){return[].concat(Object(p.a)(t),[e])}))})),function(){return b.disconnect(!0)}}),[b]),void 0===d?"Loading...":r.a.createElement("div",null,r.a.createElement("div",{className:U.a.commentArea},d.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("p",null,e.sender),r.a.createElement("p",null,e.message))}))),r.a.createElement("textarea",{type:"text",value:l,onChange:function(e){return o(e.target.value)},placeholder:"leave a comment",className:U.a.textInput}),r.a.createElement("button",{type:"button",onClick:function(){var e={sender:localStorage.getItem("userName"),message:l};u.a.put("http://localhost:8000/api/tasks/".concat(v),{comments:[].concat(Object(p.a)(d),[e])},{withCredentials:!0}).then((function(t){b.emit("new comment created",e),o("")})).catch(console.log)},className:U.a.saveButton},"Save"),r.a.createElement("button",{type:"button",onClick:function(){return o("")},className:U.a.cancelButton},"Cancel"))}function G(){return r.a.createElement("h3",null,"Task History")}function M(){return r.a.createElement("h3",null,"Task Work Log")}function H(e){var t=e.task,a=Object(n.useState)("comments"),c=Object(s.a)(a,2),l=c[0],o=c[1];return r.a.createElement("div",{className:U.a.taskActivity},r.a.createElement("h5",null,"Activity"),r.a.createElement("div",null,r.a.createElement("span",{style:{fontWeight:"bold"}},"Show:"),r.a.createElement("button",{onClick:function(){return o("comments")},className:"comments"===l?U.a.selectedButton:U.a.taskButton},"Comments"),r.a.createElement("button",{onClick:function(){return o("history")},className:"history"===l?U.a.selectedButton:U.a.taskButton},"History"),r.a.createElement("button",{onClick:function(){return o("work log")},className:"work log"===l?U.a.selectedButton:U.a.taskButton},"Work Log")),r.a.createElement("div",{className:"row"},r.a.createElement("p",null)),"comments"===l?r.a.createElement(F,{task:t}):r.a.createElement(r.a.Fragment,null),"history"===l?r.a.createElement(G,null):r.a.createElement(r.a.Fragment,null),"work log"===l?r.a.createElement(M,null):r.a.createElement(r.a.Fragment,null))}function W(e){var t=e.currentTask,a=e.allUsers,c=Object(n.useState)(null===t.assignee?"Unassigned":t.assignee),l=Object(s.a)(c,2),o=l[0],i=l[1];return void 0===o?"Loading...":r.a.createElement("div",{className:U.a.dropdown},r.a.createElement("h5",null,"Assignee"),r.a.createElement(g.a,{as:"select",value:o,onChange:function(e){return a=e.target.value,i(a),"Unassigned"===a&&(a=null),void u.a.put("http://localhost:8000/api/tasks/".concat(t._id),{assignee:a},{withCredentials:!0}).then((function(e){return e.data})).catch(console.log);var a}},r.a.createElement("option",{value:"Unassigned"},"Unassigned"),a.map((function(e,t){return r.a.createElement("option",{key:t,value:e._id},e.name)}))))}function q(e){var t=e.task,a=Object(n.useState)(t.description),c=Object(s.a)(a,2),l=c[0],o=c[1],i=Object(n.useState)(t.description),m=Object(s.a)(i,2),d=m[0],p=m[1],E=t._id;return r.a.createElement("div",null,r.a.createElement("h5",null,"Description"),r.a.createElement("textarea",{value:d,onChange:function(e){return p(e.target.value)},placeholder:"Add a description...",className:U.a.textInput}),r.a.createElement("button",{type:"button",className:U.a.saveButton,onClick:function(){u.a.put("http://localhost:8000/api/tasks/".concat(E),{description:d},{withCredentials:!0}).then((function(e){o(d)})).catch(console.log)}},"Save"),r.a.createElement("button",{type:"button",className:U.a.cancelButton,onClick:function(){return p(l)}},"Cancel"))}function Q(e){var t=e.currentTask,a=(e.setTask,Object(n.useState)(t.priority)),c=Object(s.a)(a,2),l=c[0],o=c[1];return r.a.createElement("div",{className:U.a.dropdown},r.a.createElement("h5",null,"Priority"),r.a.createElement(g.a,{as:"select",value:l,onChange:function(e){return a=e.target.value,void u.a.put("http://localhost:8000/api/tasks/".concat(t._id),{priority:a},{withCredentials:!0}).then((function(){return o(a)})).catch(console.log);var a}},r.a.createElement("option",{value:1},"High"),r.a.createElement("option",{value:2},"Medium"),r.a.createElement("option",{value:3},"Low")))}function R(e){var t=e.currentTask,a=e.allUsers,c=Object(n.useState)(null===t.creator?"Unassigned":t.creator),l=Object(s.a)(c,2),o=l[0],i=l[1];return void 0===o?"Loading...":r.a.createElement("div",{className:U.a.dropdown},r.a.createElement("h5",null,"Reporter"),r.a.createElement(g.a,{as:"select",value:o,onChange:function(e){return a=e.target.value,i(a),"Unassigned"===a&&(a=null),void u.a.put("http://localhost:8000/api/tasks/".concat(t._id),{creator:a},{withCredentials:!0}).then((function(e){return e.data})).catch(console.log);var a}},r.a.createElement("option",{value:"Unassigned"},"Unassigned"),a.map((function(e,t){return r.a.createElement("option",{key:t,value:e._id},e.name)}))))}function V(e){var t=e.currentTask,a=Object(n.useState)(t.status),c=Object(s.a)(a,2),l=c[0],o=c[1];return r.a.createElement("div",{className:U.a.dropdown},r.a.createElement("h5",null,"Status"),r.a.createElement(g.a,{as:"select",value:l,onChange:function(e){return a=e.target.value,o(a),void u.a.put("http://localhost:8000/api/tasks/".concat(t._id),{status:a},{withCredentials:!0}).then((function(e){return e.data})).catch(console.log);var a}},r.a.createElement("option",{value:"0"},"To Do"),r.a.createElement("option",{value:"1"},"Done")))}function Y(e){var t=e.allUsers,a=e.taskNumber,c=Object(n.useState)(!1),l=Object(s.a)(c,2),o=l[0],i=l[1],m=Object(n.useState)(null),d=Object(s.a)(m,2),p=d[0],E=d[1];return Object(n.useEffect)((function(){i(!1),u.a.get("http://localhost:8000/api/tasks/".concat(a),{withCredentials:!0}).then((function(e){E(e.data),i(!0)})).catch(console.log)}),[a]),o?(void 0===a&&console.log("tasknumber undefined"),r.a.createElement("div",{className:"row ".concat(U.a.taskInfo," ")},r.a.createElement("div",{className:"col-8"},r.a.createElement("p",null,"GEER-",p.number),r.a.createElement(A,{task:p}),r.a.createElement(q,{task:p}),r.a.createElement(H,{task:p})),void 0===a?r.a.createElement("div",{className:"col-4"},r.a.createElement("p",null,"Select or create a task to get started!")):r.a.createElement("div",{className:"col-4"},r.a.createElement(V,{currentTask:p}),r.a.createElement(W,{allUsers:t,currentTask:p}),r.a.createElement(R,{allUsers:t,currentTask:p}),r.a.createElement(Q,{currentTask:p,setTask:E})))):"Loading..."}var J=a(41),K=a.n(J);function z(e){var t=e.id,a=e.task,c=e.filteredTasks,l=e.setFilteredTasks,o=e.currentProject,i=e.allUsers,u=Object(n.useState)(t),m=Object(s.a)(u,2),d=m[0],p=m[1];return r.a.createElement("div",{className:K.a.taskParent},r.a.createElement(T,{currentProject:o,setFilteredTasks:l}),r.a.createElement("div",{className:K.a.taskContent},r.a.createElement(D,{setTaskNumber:p,filteredTasks:c,id:t,task:a}),r.a.createElement(Y,{allUsers:i,taskNumber:d})))}var X=function(e){var t=e.setCurrentView,a=e.currentProj,c=e.setCurrentProj,l=e.allProjects,o=e.setAllProjects,i=Object(n.useState)(""),m=Object(s.a)(i,2),d=m[0],E=m[1],v=Object(n.useState)([]),h=Object(s.a)(v,2),b=h[0],g=h[1],f=Object(n.useState)([]),k=Object(s.a)(f,2),j=k[0],_=k[1];return Object(n.useEffect)((function(){u.a.get("http://localhost:8000/api/users").then((function(e){_(e.data)})),u.a.get("http://localhost:8000/api/projects/"+a._id).then((function(e){E(e.data.name),g(e.data.users)}))}),[a]),null===a?r.a.createElement("div",null,"Loading..."):r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var n={name:d,users:b.map((function(e){return e._id}))};o(l.map((function(e){return e.name===a.name&&(e.name=d),e}))),a.name=d,c(a),u.a.put("http://localhost:8000/api/projects/"+a._id,n,{withCredentials:!0}).then((function(e){t("tasks")})).catch((function(e){console.log(e)}))}},r.a.createElement("div",{className:"row my-4 text-left"},r.a.createElement("h1",null,"Project Settings")),r.a.createElement("div",{className:"row my-2"},r.a.createElement("div",{className:"col-2"},r.a.createElement("label",null,"Name: ")),r.a.createElement("input",{className:"col-3",type:"text",value:d,onChange:function(e){return E(e.target.value)}})),r.a.createElement("div",{className:"row my-2"},r.a.createElement("div",{className:"col-2"},r.a.createElement("label",null,"Add User: ")),r.a.createElement("select",{id:"userToAdd",className:"col-3"},j.map((function(e,t){return r.a.createElement("option",{key:t,value:t},e.name)}))),r.a.createElement("div",{className:"col-2"},r.a.createElement("button",{onClick:function(e){e.preventDefault();var t=document.getElementById("userToAdd");g([].concat(Object(p.a)(b),[j[t.value]]))},className:"btn btn-primary"},"Add User"))),r.a.createElement("div",{className:"row my-2"},r.a.createElement("div",{className:"col-2"},r.a.createElement("label",null,"Users : ")),r.a.createElement("div",{className:"col-7"},b.map((function(e,t){return r.a.createElement("div",{onClick:function(){return t=e._id,void g(b.filter((function(e){return e._id!==t})));var t},value:e._id,key:t,className:"mr-2 btn btn-secondary"},e.name," X")})))),r.a.createElement("div",{className:"row my-5"},r.a.createElement("div",{className:"col-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6 text-right"},r.a.createElement("div",{onClick:function(){return t("tasks")},className:"btn btn-secondary"},"Cancel")),r.a.createElement("div",{className:"col-6"},r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Save Changes")))))))};function Z(e){var t=e.id,a=Object(n.useState)(!1),c=Object(s.a)(a,2),l=c[0],i=c[1],m=Object(n.useState)(null),d=Object(s.a)(m,2),E=d[0],v=d[1],h=Object(n.useState)(null),b=Object(s.a)(h,2),g=b[0],f=b[1],k=Object(n.useState)(null),_=Object(s.a)(k,2),N=_[0],w=_[1],S=Object(n.useState)([]),x=Object(s.a)(S,2),T=x[0],I=x[1],B=Object(n.useState)([]),D=Object(s.a)(B,2),A=D[0],L=D[1],U=Object(n.useState)("tasks"),F=Object(s.a)(U,2),G=F[0],M=F[1],H=Object(n.useState)((function(){return C()(":8000")})),W=Object(s.a)(H,1)[0],q=Object(n.useState)(null),Q=Object(s.a)(q,2),R=Q[0],V=Q[1];Object(n.useEffect)((function(){if(null!==localStorage.getItem("userID"))return u.a.get("http://localhost:8000/api/projects/user/"+localStorage.getItem("userID"),{withCredentials:!0}).then((function(e){if(0===e.data.length)return Object(o.d)("/welcome");f(e.data),w(e.data[0]),L(e.data[0].tasks),I(e.data[0].tasks)})),u.a.get("http://localhost:8000/api/users",{withCredentials:!0}).then((function(e){return v(e.data)})),t&&u.a.get("http://localhost:8000/api/tasks/"+t,{withCredentials:!0}).then((function(e){return V(e.data)})).catch(console.log),W.on("new task added",(function(e){I((function(t){return[].concat(Object(p.a)(t),[e])}))})),function(){return W.disconnect(!0)};Object(o.d)("/login")}),[W]);var Y=function(){return i(!1)};return null==g?r.a.createElement("p",null,"Loading..."):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement(j,{showModal:function(){return i(!0)},setCurrentProject:w,projects:g,setProjects:f,setTasks:I,setFilteredTasks:L}))),r.a.createElement(O.a,{size:"lg",show:l,onHide:Y},r.a.createElement(O.a.Header,{closeButton:!0},r.a.createElement("div",{className:"ml-1"},r.a.createElement(O.a.Title,null,"Create issue"))),r.a.createElement(O.a.Body,null,r.a.createElement(P,{closeModal:Y,currentProject:N,setCurrentProject:w,projects:g,users:E}))),r.a.createElement("div",{className:K.a.main},r.a.createElement(y,{tasks:T,setTasks:I,filteredTasks:A,setFilteredTasks:L,setCurrentView:M,currentProj:N,allProjects:g,setCurrentProj:w,setAllProjects:f}),"tasks"===G?r.a.createElement(z,{id:t,task:R,filteredTasks:A,setFilteredTasks:L,currentProject:N,allUsers:E}):r.a.createElement(X,{currentProj:N,setCurrentView:M,setCurrentProj:w,allProjects:g,setAllProjects:f})))}function $(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],l=localStorage.getItem("userName");Object(n.useEffect)((function(){null!==localStorage.getItem("userID")||Object(o.d)("/login")}));return r.a.createElement("div",{style:{textAlign:"center",margin:"48px"}},r.a.createElement("h1",null,"Welcome to Geera ",l,"!"),r.a.createElement("p",null,"Get started by creating your first project!"),r.a.createElement("input",{type:"text",value:a,onChange:function(e){return c(e.target.value)},placeholder:"enter a project name...",style:{display:"block",margin:"12px auto",padding:"4px"}}),r.a.createElement("button",{type:"button",onClick:function(){u.a.post("http://localhost:8000/api/projects",{name:a,users:[localStorage.getItem("userID")]},{withCredentials:!0}).then((function(){return Object(o.d)("/home")})).catch((function(e){return console.log(e)}))},className:"btn btn-primary"},"Create Project!"))}var ee=function(){var e=function(e){e.preventDefault()};return r.a.createElement("div",{className:"App"},r.a.createElement(o.c,null,r.a.createElement(o.b,{from:"/",to:"/register",noThrow:!0}),r.a.createElement(d,{path:"/register"}),r.a.createElement(m,{path:"/login"}),r.a.createElement(Z,{path:"/home",onSubmit:e}),r.a.createElement(Z,{path:"/home/geer/:id",onSubmit:e}),r.a.createElement($,{path:"/welcome"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement("link",{rel:"stylesheet",href:"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css",integrity:"sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk",crossOrigin:"anonymous"}),r.a.createElement(r.a.StrictMode,null,r.a.createElement(ee,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},20:function(e,t,a){e.exports={panel:"issues_panel__207Cn",dropDownButton:"issues_dropDownButton__f7nzu",issueGroup:"issues_issueGroup__27twK",issue:"issues_issue__3IAkc",notSelected:"issues_notSelected__1k_sH",selected:"issues_selected__1_okQ",issueName:"issues_issueName__ue5C-",checkbox:"issues_checkbox__1xUis",issueNumber:"issues_issueNumber__2GqnJ",refresh:"issues_refresh__1WQUY",refreshIcon:"issues_refreshIcon__24jlv",bottom:"issues_bottom__3VEod",bottomText:"issues_bottomText__1AVmM"}},41:function(e,t,a){e.exports={main:"main_main__3FV-q",taskParent:"main_taskParent__2w02u",taskContent:"main_taskContent__1S0qo"}},8:function(e,t,a){e.exports={taskInfo:"task_taskInfo__2MtGG",taskActivity:"task_taskActivity__1JvHC",taskButton:"task_taskButton__U1yRi",selectedButton:"task_selectedButton__3sP09",saveButton:"task_saveButton__3jhzE",cancelButton:"task_cancelButton__1ymNr",textInput:"task_textInput__1BFQU",commentArea:"task_commentArea__2mocv",dropdown:"task_dropdown__HYrqs"}},96:function(e,t,a){e.exports=a(157)}},[[96,1,2]]]);
//# sourceMappingURL=main.3a33a06d.chunk.js.map