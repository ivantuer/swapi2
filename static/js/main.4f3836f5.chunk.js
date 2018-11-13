(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(8),r=n.n(l),i=n(2),s=n(3),u=n(5),o=n(4),m=n(6),p=(n(14),function(){return c.a.createElement("header",null,c.a.createElement("h1",null,"STAR WARS API test")," ",c.a.createElement("p",null,"by Ivan Hrynevytsky"))}),f=(n(16),function(e){var t=e.changeField,n=e.currentField;return c.a.createElement("ul",{className:"list-flex"},c.a.createElement("li",{className:"".concat("films"===n&&"current"),onClick:t},"Films"),c.a.createElement("li",{className:"".concat("people"===n&&"current"),onClick:t},"People"),c.a.createElement("li",{className:"".concat("planets"===n&&"current"),onClick:t},"Planets"),c.a.createElement("li",{className:"".concat("species"===n&&"current"),onClick:t},"Species"),c.a.createElement("li",{className:"".concat("starships"===n&&"current"),onClick:t},"Starships"),c.a.createElement("li",{className:"".concat("vehicles"===n&&"current"),onClick:t},"Vehicles"))}),h=n(1),E=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(n=Object(u.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).state={characters:[],species:[],starships:[],vehicles:[],planets:[]},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillUnmount",value:function(){this.setState({characters:[],species:[],starships:[],vehicles:[],planets:[]})}},{key:"componentWillMount",value:function(){var e=this,t=this.props.curJson;t.characters&&t.characters.map(function(t){return fetch(t).then(function(e){return e.json()}).then(function(t){var n=Object(h.a)(e.state.characters).concat([t]);e.setState({characters:n})})}),t.species&&t.species.map(function(t){return fetch(t).then(function(e){return e.json()}).then(function(t){var n=Object(h.a)(e.state.species).concat([t]);e.setState({species:n})})}),t.starships&&t.starships.map(function(t){return fetch(t).then(function(e){return e.json()}).then(function(t){var n=Object(h.a)(e.state.starships).concat([t]);e.setState({starships:n})})}),t.vehicles&&t.vehicles.map(function(t){return fetch(t).then(function(e){return e.json()}).then(function(t){var n=Object(h.a)(e.state.vehicles).concat([t]);e.setState({vehicles:n})})}),t.planets&&t.planets.map(function(t){return fetch(t).then(function(e){return e.json()}).then(function(t){var n=Object(h.a)(e.state.planets).concat([t]);e.setState({planets:n})})})}},{key:"render",value:function(){var e=this.props,t=e.curJson,n=e.changePage,a=this.state,l=a.characters,r=a.species,i=a.starships,s=a.vehicles,u=a.planets;return c.a.createElement("div",{className:"field-element"},c.a.createElement("div",{className:"about"},c.a.createElement("p",null,"Film Title : ",c.a.createElement("span",null,t.title)),c.a.createElement("p",null,"Director : ",c.a.createElement("span",null,t.director)),c.a.createElement("p",null,"Episode #",c.a.createElement("span",null,t.episode_id)),c.a.createElement("p",null,"Release Date:"," ",c.a.createElement("span",null,t.release_date.split("-").join(".")))),c.a.createElement("div",{className:"flex-container"},c.a.createElement("div",{className:"flex"},c.a.createElement("p",null,"CHARACTERS"),l.length?l.map(function(e){return c.a.createElement("li",{key:e.name,onClick:function(){return n(e.url)}},e.name)}):c.a.createElement("li",null,"-")),c.a.createElement("div",{className:"flex"},c.a.createElement("p",null,"SPECIES"),r.length?r.map(function(e){return c.a.createElement("li",{key:e.name,onClick:function(){return n(e.url)}},e.name)}):c.a.createElement("li",null,"-")),c.a.createElement("div",{className:"flex"},c.a.createElement("p",null,"STARSHIPS"),i.length?i.map(function(e){return c.a.createElement("li",{key:e.name,onClick:function(){return n(e.url)}},e.name)}):c.a.createElement("li",null,"-")),c.a.createElement("div",{className:"flex"},c.a.createElement("p",null,"VEHICLES"),s.length?s.map(function(e){return c.a.createElement("li",{key:e.name,onClick:function(){return n(e.url)}},e.name)}):c.a.createElement("li",null,"-")),c.a.createElement("div",{className:"flex"},c.a.createElement("p",null,"PLANETS"),u.length?u.map(function(e){return c.a.createElement("li",{key:e.name,onClick:function(){return n(e.url)}},e.name)}):c.a.createElement("li",null,"-"))))}}]),t}(a.Component),v=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.curJson,n=e.changePage,a=e.value,l=e.inputSearch;return c.a.createElement("div",{className:"field-container"},c.a.createElement("input",{type:"text",value:a,placeholder:"Search...",onChange:l}),t&&t.count&&t.results.map(function(e){return c.a.createElement("li",{key:e.title,onClick:function(){n(e.url)}},e.title)}),t&&t.title&&c.a.createElement(E,{curJson:t,changePage:n}))}}]),t}(a.Component),d=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(n=Object(u.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).state={homeworld:[],species:[],starships:[],vehicles:[]},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillUnmount",value:function(){this.setState({homeworld:[],species:[],starships:[],vehicles:[]})}},{key:"componentWillMount",value:function(){var e=this,t=this.props.curJson;fetch(t.homeworld).then(function(e){return e.json()}).then(function(t){return e.setState({homeworld:t})}),t.species&&t.species.map(function(t){return fetch(t).then(function(e){return e.json()}).then(function(t){var n=Object(h.a)(e.state.species).concat([t]);e.setState({species:n})})}),t.starships&&t.starships.map(function(t){return fetch(t).then(function(e){return e.json()}).then(function(t){var n=Object(h.a)(e.state.starships).concat([t]);e.setState({starships:n})})}),t.vehicles&&t.vehicles.map(function(t){return fetch(t).then(function(e){return e.json()}).then(function(t){var n=Object(h.a)(e.state.vehicles).concat([t]);e.setState({vehicles:n})})})}},{key:"render",value:function(){var e=this.props,t=e.curJson,n=e.changePage,a=this.state,l=a.homeworld,r=a.species,i=a.starships,s=a.vehicles;return c.a.createElement("div",{className:"field-element"},c.a.createElement("div",{className:"about"},c.a.createElement("p",null,"Name : ",c.a.createElement("span",null,t.name)),c.a.createElement("p",null,"Hair Color : ",c.a.createElement("span",null,t.hair_color)),c.a.createElement("p",null,"Mass : ",c.a.createElement("span",null,t.mass)),c.a.createElement("p",null,"Height ",c.a.createElement("span",null,t.height))),c.a.createElement("div",{className:"flex-container"},c.a.createElement("div",{className:"flex"},c.a.createElement("p",null,"HOMEWORLD"),c.a.createElement("li",{onClick:function(){return n(l.url)}},l.name?l.name:"-")),c.a.createElement("div",{className:"flex"},c.a.createElement("p",null,"SPECIES"),r.length?r.map(function(e){return c.a.createElement("li",{key:e.name,onClick:function(){return n(e.url)}},e.name)}):c.a.createElement("li",null,"-")),c.a.createElement("div",{className:"flex"},c.a.createElement("p",null,"STARSHIPS"),i.length?i.map(function(e){return c.a.createElement("li",{key:e.name,onClick:function(){return n(e.url)}},e.name)}):c.a.createElement("li",null,"-")),c.a.createElement("div",{className:"flex"},c.a.createElement("p",null,"VEHICLES"),s.length?s.map(function(e){return c.a.createElement("li",{key:e.name,onClick:function(){return n(e.url)}},e.name)}):c.a.createElement("li",null,"-"))))}}]),t}(a.Component),g=function(e){var t=e.curJson,n=e.changePage,a=e.value,l=e.inputSearch,r=e.pageNumber;return c.a.createElement("div",{className:"field-container"},c.a.createElement("input",{type:"text",value:a,placeholder:"Search...",onChange:l}),t&&t.count&&t.results.map(function(e){return c.a.createElement("li",{key:e.name,onClick:function(){n(e.url)}},e.name)}),t&&t.name&&c.a.createElement(d,{curJson:t,changePage:n}),t&&t.count&&c.a.createElement("div",{className:"buttons"},c.a.createElement("button",{onClick:function(){t.previous&&n(t.previous)}},c.a.createElement("i",{className:"fas fa-backward"})),c.a.createElement("span",null,r),c.a.createElement("button",{onClick:function(){t.next&&n(t.next)}},c.a.createElement("i",{className:"fas fa-forward"}))))},b=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(n=Object(u.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).state={residents:[],films:[]},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillUnmount",value:function(){this.setState({residents:[],films:[]})}},{key:"componentWillMount",value:function(){var e=this,t=this.props.curJson;t.residents&&t.residents.map(function(t){return fetch(t).then(function(e){return e.json()}).then(function(t){var n=Object(h.a)(e.state.residents).concat([t]);e.setState({residents:n})})}),t.films&&t.films.map(function(t){return fetch(t).then(function(e){return e.json()}).then(function(t){var n=Object(h.a)(e.state.films).concat([t]);e.setState({films:n})})})}},{key:"render",value:function(){var e=this.props,t=e.curJson,n=e.changePage,a=this.state,l=a.residents,r=a.films;return c.a.createElement("div",{className:"field-element"},c.a.createElement("div",{className:"about"},c.a.createElement("p",null,"Planet Name : ",c.a.createElement("span",null,t.name)),c.a.createElement("p",null,"Climate : ",c.a.createElement("span",null,t.climate)),c.a.createElement("p",null,"Terrain : ",c.a.createElement("span",null,t.terrain)),c.a.createElement("p",null,"Population : ",c.a.createElement("span",null,t.population))),c.a.createElement("div",{className:"flex-container"},c.a.createElement("div",{className:"flex"},c.a.createElement("p",null,"RESIDENTS"),l.length?l.map(function(e){return c.a.createElement("li",{key:e.name,onClick:function(){return n(e.url)}},e.name)}):c.a.createElement("li",null,"-")),c.a.createElement("div",{className:"flex"},c.a.createElement("p",null,"FILMS"),r.map(function(e){return c.a.createElement("li",{key:e.title,onClick:function(){return n(e.url)}},e.title)}))))}}]),t}(a.Component),k=function(e){var t=e.curJson,n=e.changePage,a=e.value,l=e.inputSearch,r=e.pageNumber;return c.a.createElement("div",{className:"field-container"},c.a.createElement("input",{type:"text",value:a,placeholder:"Search...",onChange:l}),t&&t.count&&t.results.map(function(e){return c.a.createElement("li",{key:e.name,onClick:function(){n(e.url)}},e.name)}),t&&t.name&&c.a.createElement(b,{curJson:t,changePage:n}),t&&t.count&&c.a.createElement("div",{className:"buttons"},c.a.createElement("button",{onClick:function(){t.previous&&n(t.previous)}},c.a.createElement("i",{className:"fas fa-backward"})),c.a.createElement("span",null,r),c.a.createElement("button",{onClick:function(){t.next&&n(t.next)}},c.a.createElement("i",{className:"fas fa-forward"}))))},N=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(n=Object(u.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).state={people:[],films:[]},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillUnmount",value:function(){this.setState({people:[],films:[]})}},{key:"componentWillMount",value:function(){var e=this,t=this.props.curJson;t.people&&t.people.map(function(t){return fetch(t).then(function(e){return e.json()}).then(function(t){var n=Object(h.a)(e.state.people).concat([t]);e.setState({people:n})})}),t.films&&t.films.map(function(t){return fetch(t).then(function(e){return e.json()}).then(function(t){var n=Object(h.a)(e.state.films).concat([t]);e.setState({films:n})})})}},{key:"render",value:function(){var e=this.props,t=e.curJson,n=e.changePage,a=this.state,l=a.people,r=a.films;return c.a.createElement("div",{className:"field-element"},c.a.createElement("div",{className:"about"},c.a.createElement("p",null,"Species Name : ",c.a.createElement("span",null,t.name)),c.a.createElement("p",null,"Language : ",c.a.createElement("span",null,t.language)),c.a.createElement("p",null,"Classification : ",c.a.createElement("span",null,t.classification))),c.a.createElement("div",{className:"flex-container"},c.a.createElement("div",{className:"flex"},c.a.createElement("p",null,"PEOPLE"),l.length?l.map(function(e){return c.a.createElement("li",{key:e.name,onClick:function(){return n(e.url)}},e.name)}):c.a.createElement("li",null,"-")),c.a.createElement("div",{className:"flex"},c.a.createElement("p",null,"FILMS"),r.map(function(e){return c.a.createElement("li",{key:e.title,onClick:function(){return n(e.url)}},e.title)}))))}}]),t}(a.Component),j=function(e){var t=e.curJson,n=e.changePage,a=e.value,l=e.inputSearch,r=e.pageNumber;return c.a.createElement("div",{className:"field-container"},c.a.createElement("input",{type:"text",value:a,placeholder:"Search...",onChange:l}),t&&t.count&&t.results.map(function(e){return c.a.createElement("li",{key:e.name,onClick:function(){n(e.url)}},e.name)}),t&&t.name&&c.a.createElement(N,{curJson:t,changePage:n}),t&&t.count&&c.a.createElement("div",{className:"buttons"},c.a.createElement("button",{onClick:function(){t.previous&&n(t.previous)}},c.a.createElement("i",{className:"fas fa-backward"})),c.a.createElement("span",null,r),c.a.createElement("button",{onClick:function(){t.next&&n(t.next)}},c.a.createElement("i",{className:"fas fa-forward"}))))},S=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(n=Object(u.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).state={pilots:[],films:[]},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillUnmount",value:function(){this.setState({pilots:[],films:[]})}},{key:"componentWillMount",value:function(){var e=this,t=this.props.curJson;t.pilots&&t.pilots.map(function(t){return fetch(t).then(function(e){return e.json()}).then(function(t){var n=Object(h.a)(e.state.pilots).concat([t]);e.setState({pilots:n})})}),t.films&&t.films.map(function(t){return fetch(t).then(function(e){return e.json()}).then(function(t){var n=Object(h.a)(e.state.films).concat([t]);e.setState({films:n})})})}},{key:"render",value:function(){var e=this.props,t=e.curJson,n=e.changePage,a=this.state,l=a.pilots,r=a.films;return c.a.createElement("div",{className:"field-element"},c.a.createElement("div",{className:"about"},c.a.createElement("p",null,"Starship Name : ",c.a.createElement("span",null,t.name)),c.a.createElement("p",null,"Model : ",c.a.createElement("span",null,t.model)),c.a.createElement("p",null,"Passengers : ",c.a.createElement("span",null,t.passengers))),c.a.createElement("div",{className:"flex-container"},c.a.createElement("div",{className:"flex"},c.a.createElement("p",null,"PILOTS"),l.length?l.map(function(e){return c.a.createElement("li",{key:e.name,onClick:function(){return n(e.url)}},e.name)}):c.a.createElement("li",null,"-")),c.a.createElement("div",{className:"flex"},c.a.createElement("p",null,"FILMS"),r.map(function(e){return c.a.createElement("li",{key:e.title,onClick:function(){return n(e.url)}},e.title)}))))}}]),t}(a.Component),y=function(e){var t=e.curJson,n=e.changePage,a=e.value,l=e.inputSearch,r=e.pageNumber;return c.a.createElement("div",{className:"field-container"},c.a.createElement("input",{type:"text",value:a,placeholder:"Search...",onChange:l}),t&&t.count&&t.results.map(function(e){return c.a.createElement("li",{key:e.name,onClick:function(){n(e.url)}},e.name)}),t&&t.name&&c.a.createElement(S,{curJson:t,changePage:n}),t&&t.count&&c.a.createElement("div",{className:"buttons"},c.a.createElement("button",{onClick:function(){t.previous&&n(t.previous)}},c.a.createElement("i",{className:"fas fa-backward"})),c.a.createElement("span",null,r),c.a.createElement("button",{onClick:function(){t.next&&n(t.next)}},c.a.createElement("i",{className:"fas fa-forward"}))))},O=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(n=Object(u.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).state={pilots:[],films:[]},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillUnmount",value:function(){this.setState({pilots:[],films:[]})}},{key:"componentWillMount",value:function(){var e=this,t=this.props.curJson;t.pilots&&t.pilots.map(function(t){return fetch(t).then(function(e){return e.json()}).then(function(t){var n=Object(h.a)(e.state.pilots).concat([t]);e.setState({pilots:n})})}),t.films&&t.films.map(function(t){return fetch(t).then(function(e){return e.json()}).then(function(t){var n=Object(h.a)(e.state.films).concat([t]);e.setState({films:n})})})}},{key:"render",value:function(){var e=this.props,t=e.curJson,n=e.changePage,a=this.state,l=a.pilots,r=a.films;return c.a.createElement("div",{className:"field-element"},c.a.createElement("div",{className:"about"},c.a.createElement("p",null,"Vehicle Name : ",c.a.createElement("span",null,t.name)),c.a.createElement("p",null,"Model : ",c.a.createElement("span",null,t.model)),c.a.createElement("p",null,"Passengers : ",c.a.createElement("span",null,t.passengers))),c.a.createElement("div",{className:"flex-container"},c.a.createElement("div",{className:"flex"},c.a.createElement("p",null,"PILOTS"),l.length?l.map(function(e){return c.a.createElement("li",{key:e.name,onClick:function(){return n(e.url)}},e.name)}):c.a.createElement("li",null,"-")),c.a.createElement("div",{className:"flex"},c.a.createElement("p",null,"FILMS"),r.map(function(e){return c.a.createElement("li",{key:e.title,onClick:function(){return n(e.url)}},e.title)}))))}}]),t}(a.Component),C=function(e){var t=e.curJson,n=e.changePage,a=e.value,l=e.inputSearch,r=e.pageNumber;return c.a.createElement("div",{className:"field-container"},c.a.createElement("input",{type:"text",value:a,placeholder:"Search...",onChange:l}),t&&t.count?t.results.map(function(e){return c.a.createElement("li",{key:e.name,onClick:function(){n(e.url)}},e.name)}):"",t&&t.name?c.a.createElement(O,{curJson:t,changePage:n}):"",t&&t.count?c.a.createElement("div",{className:"buttons"},c.a.createElement("button",{onClick:function(){t.previous&&n(t.previous)}},c.a.createElement("i",{className:"fas fa-backward"})),c.a.createElement("span",null,r),c.a.createElement("button",{onClick:function(){t.next&&n(t.next)}},c.a.createElement("i",{className:"fas fa-forward"}))):"")},P=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(l)))).state={currentField:"",pageNumber:1},n.changeField=function(e){n.setState({currentField:e.target.innerText.toLowerCase(),curJson:void 0,value:"",pageNumber:1}),fetch("https://swapi.co/api/".concat(e.target.innerText.toLowerCase())).then(function(e){return e.json()}).then(function(e){return n.setState({curJson:e})})},n.inputSearch=function(e){var t=n.state.currentField;n.setState({value:e.target.value,currentField:"https://swapi.co/api/".concat(t,"/?search=").concat(e.target.value),pageNumber:1}),n.changePage("https://swapi.co/api/".concat(t,"/?search=").concat(e.target.value))},n.changePage=function(e){n.setState({currentPage:e,currentField:e.split("/")[4],pageNumber:-1===e.indexOf("search")?e.split("=")[1]:1}),fetch(e).then(function(e){return e.json()}).then(function(e){return n.setState({curJson:e})})},n.section=function(){var e=n.state,t=e.curJson,a=e.value,l=e.pageNumber;switch(n.state.currentField){case"films":return c.a.createElement(v,{pageNumber:l,curJson:t,changePage:n.changePage,value:a,inputSearch:n.inputSearch});case"people":return c.a.createElement(g,{pageNumber:l,curJson:t,changePage:n.changePage,value:a,inputSearch:n.inputSearch});case"planets":return c.a.createElement(k,{pageNumber:l,curJson:t,changePage:n.changePage,value:a,inputSearch:n.inputSearch});case"species":return c.a.createElement(j,{pageNumber:l,curJson:t,changePage:n.changePage,value:a,inputSearch:n.inputSearch});case"starships":return c.a.createElement(y,{pageNumber:l,curJson:t,changePage:n.changePage,value:a,inputSearch:n.inputSearch});case"vehicles":return c.a.createElement(C,{pageNumber:l,curJson:t,changePage:n.changePage,value:a,inputSearch:n.inputSearch});default:return""}},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.currentField;return c.a.createElement("div",null,c.a.createElement(f,{currentField:e,changeField:this.changeField}),this.section())}}]),t}(a.Component),x=(n(18),function(){return c.a.createElement("div",null,c.a.createElement(p,null),c.a.createElement(P,null))}),w=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(x,null)}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(20)}},[[9,2,1]]]);
//# sourceMappingURL=main.4f3836f5.chunk.js.map