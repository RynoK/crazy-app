(this["webpackJsonpcrazy-app"]=this["webpackJsonpcrazy-app"]||[]).push([[0],{21:function(e,t,a){},26:function(e,t,a){e.exports=a(38)},32:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(23),l=a.n(o),c=a(16),r=a(10),i=a(3),d=a(4),u=a(6),m=a(5),h=a(14),g=a(8),p=a.n(g),f=a(11),E=Object(n.createContext)(),v=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={uName:"User",sensors:[],actuators:[],authT:"11"},e.loginPageF=function(t){e.setState({uName:t})},e.sendToken=function(t){e.setState({authT:t}),console.log(e.state.authT+"-------------")},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(f.a)(p.a.mark((function e(){var t,a,n,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.context.sensores){e.next=18;break}return"http://192.168.0.117:5000/sensors_list/digital_sensors",e.next=4,fetch("http://192.168.0.117:5000/sensors_list/digital_sensors");case 4:return t=e.sent,e.next=7,t.json();case 7:return a=e.sent,this.setState({sensors:a.digital_sensors}),"http://192.168.0.117:5000/actuators_list/digital_actuators",e.next=12,fetch("http://192.168.0.117:5000/actuators_list/digital_actuators");case 12:return n=e.sent,e.next=15,n.json();case 15:s=e.sent,this.setState({actuators:s.connections}),console.log("---------"+this.state.actuators);case 18:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return s.a.createElement(E.Provider,{value:Object(h.a)({},this.state,{loginPageF:this.loginPageF,sendToken:this.sendToken})},this.props.children)}}]),a}(n.Component),y=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=window.M;document.addEventListener("DOMContentLoaded",(function(){var t=document.querySelectorAll(".collapsible");e.Collapsible.init(t,{})})),document.addEventListener("DOMContentLoaded",(function(){var t=document.querySelectorAll(".fixed-action-btn");e.FloatingActionButton.init(t,{})}))}},{key:"render",value:function(){var e=this.context.sensors.length?this.context.sensors.map((function(e){return s.a.createElement("li",null,s.a.createElement("a",{class:"waves-effect red btn-large",style:{margin:"10px"},key:e.id},e.device_name,"  ----------\x3e  ",e.mac_address))})):s.a.createElement("div",{className:"sensor-notFound"},s.a.createElement("h2",null,"EMPTY")),t=this.context.actuators.length?this.context.actuators.map((function(e){return s.a.createElement("li",null,s.a.createElement("a",{class:"waves-effect red btn-large",style:{margin:"10px"},key:e.id},e.device_name,"  ----------\x3e ",e.mac_address))})):s.a.createElement("div",{className:"sensor-notFound"},s.a.createElement("h2",null,"EMPTY"));return s.a.createElement("div",null,this.context.welcomeMenuPage?s.a.createElement("div",null,s.a.createElement("h3",{className:"red-text center"},"MY DEVICES"),s.a.createElement("ul",{class:"collapsible"},s.a.createElement("li",null,s.a.createElement("div",{class:"collapsible-header"},s.a.createElement("i",{class:"material-icons"},s.a.createElement("a",{class:"btn-floating btn-large waves-effect waves-light red btn-small"},s.a.createElement("i",{class:"material-icons"},"add"))),"SENSORS",s.a.createElement("span",{class:"badge red white-text"},this.context.sensors.length)),s.a.createElement("div",{class:"collapsible-body"},s.a.createElement("p",null,e))))):"",this.context.welcomeMenuPage?s.a.createElement("div",null,s.a.createElement("ul",{class:"collapsible"},s.a.createElement("li",null,s.a.createElement("div",{class:"collapsible-header"},s.a.createElement("i",{class:"material-icons"},s.a.createElement("a",{class:"btn-floating btn-large waves-effect waves-light red btn-small"},s.a.createElement("i",{class:"material-icons"},"add"))),"ACTUATORS",s.a.createElement("span",{class:"badge red white-text"},this.context.actuators.length)),s.a.createElement("div",{class:"collapsible-body"},s.a.createElement("p",null,t))))):"")}}]),a}(n.Component);y.contextType=E;var _=Object(n.createContext)(),N=(n.Component,a(21),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={userN:""},e.testModal=function(e){console.log(e),console.log("dddd");document.getElementById("modal1"),document.getElementById("myBtn")},e.dataName=function(){return e.context.loginPageF("fff"),"aaa"},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;if(!this.context.loginPage){var t=window.M;t.AutoInit(),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".modal");t.Modal.init(e,{})})),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll("select");t.FormSelect.init(e,{})}))}var a=window.location.href.match(/\b(\w+)$/g)[0];this.setState({userN:a}),fetch("http://192.168.0.100:5000/user/"+a,{method:"GET",headers:{Authorization:this.state.authToken}}).then((function(e){return e.json()})).then((function(t){e.setState({userSensors:t.digital_sensors}),console.log(e.state.userSensors)})).catch((function(e){console.log(e)})),console.log("--------"+this.context.authT)}},{key:"handleClick",value:function(){var e=window.M;e.AutoInit(),document.addEventListener("DOMContentLoaded",(function(){var t=document.querySelectorAll(".modal");e.Modal.init(t,{})})),document.addEventListener("DOMContentLoaded",(function(){var t=document.querySelectorAll("select");e.FormSelect.init(t,{})}))}},{key:"render",value:function(){var e=this,t=[];this.context.sensors.length&&this.context.sensors.map((function(e){t.push(s.a.createElement("tr",null,s.a.createElement("td",null,e.device_name),s.a.createElement("td",null,e.mac_address),s.a.createElement("td",null,e.device_type)))})),this.context.actuators.length&&this.context.actuators.map((function(e){t.push(s.a.createElement("tr",null,s.a.createElement("td",null,e.device_name),s.a.createElement("td",null,e.mac_address),s.a.createElement("td",null,e.device_type)))})),this.context.hardC,this.context.actuators.length&&this.context.actuators.map((function(e){return e}));return s.a.createElement(_.Consumer,null,(function(a){a.userName,a.userCred;return s.a.createElement("div",null,s.a.createElement("div",{className:"center"},s.a.createElement("h3",null,"Welcome ",e.state.userN),s.a.createElement("div",{id:"modal1",class:"modal"},s.a.createElement("div",{class:"modal-content"},s.a.createElement("h4",null,"Make a Connection"),s.a.createElement("div",{class:"input-field col s12"},s.a.createElement("select",null,s.a.createElement("option",{value:"0",disabled:!0,selected:!0},"Choose your Sensor"),s.a.createElement("option",{value:"1"},"Option 1"),s.a.createElement("option",{value:"2"},"Option 2"),s.a.createElement("option",{value:"3"},"Option 3")),s.a.createElement("label",null)),s.a.createElement("div",{class:"input-field col s12 "},s.a.createElement("select",null,s.a.createElement("option",{value:"",disabled:!0,selected:!0},"Choose your Actuator"),s.a.createElement("option",{value:"1"},"Option 1")),s.a.createElement("input",{type:"text",placeholder:"Connection Name..."}),s.a.createElement("label",null))),s.a.createElement("div",{class:"modal-footer"},s.a.createElement("a",{href:"#!",class:"modal-close waves-effect waves-light btn"},"Done!"))),s.a.createElement("button",{class:"waves-effect waves-light btn modal-trigger","data-target":"modal1",style:{margin:"20px"},onClick:e.handleClick()},"ADD CONNECTION"),s.a.createElement("table",{className:"centered"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Device Name"),s.a.createElement("th",null,"Device MAC"),s.a.createElement("th",null,"Device Type"))),s.a.createElement("tbody",null,t))))}))}}]),a}(n.Component));N.contextType=E;var S=N,b=(a(32),"https://crazyapp2020.herokuapp.com/"),C=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s)))._isMounted=!1,e.state={authToken:"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1OTgyOTA1MjQsIm5iZiI6MTU5ODI5MDUyNCwianRpIjoiZTY4Mzg3OWQtYTVkNy00MDJmLWFhMmItOWZiZTJjOTA5YWYzIiwiZXhwIjoxNjI5ODQ3NDUwLCJpZGVudGl0eSI6MSwiZnJlc2giOnRydWUsInR5cGUiOiJhY2Nlc3MifQ.XLmGarf6kLp-XFHsw1lwMY5SZUlJG-S2Gj48kDMneH0",userSensors:"",userName:"",userPass:"",uT:"Bearer",validUser:!1},e.han=function(e,t){t(e)},e.handleInputChange=function(t){e.setState({userName:t.target.value})},e.handlePassChange=function(t){e.setState({userPass:t.target.value})},e.handleLogin=function(){console.log("sss"),console.log("SUBMIT"),Object(f.a)(p.a.mark((function t(){var a,n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(b+"login",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:e.state.userName,password:e.state.userPass})});case 2:return a=t.sent,t.next=5,a.json();case 5:n=t.sent,e.setState({authToken:"Bearer"+n.access_token}),console.log(e.state.authToken),fetch(b+"users/"+e.state.userName,{method:"GET",headers:{Authorization:e.state.authToken}}).then((function(e){return e.json()})).then((function(t){e.setState({userSensors:t.digital_sensors}),console.log(e.state.userSensors)})).catch((function(e){console.log(e)}));case 9:case"end":return t.stop()}}),t)})))(),console.log("finish"+e.state.authToken),console.log(e.state.userPass)},e.handleSubmit=function(){var t=e.state.validUser?"try/"+e.state.userName:JSON.stringify("/"),a=t.replace(/"/g,"");return t=a},e.getToken=function(){return Object(f.a)(p.a.mark((function t(){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(b+"login",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:e.state.userName,password:e.state.userPass})}).then((function(t){return console.log(t.status),console.log(e.state.validUser),200==t.status?e.setState({validUser:!0}):e.setState({validUser:!1}),t.json()})).then((function(e){return e})).then((function(t){e.setState({authToken:t.access_token})})).catch((function(e){console.log("something went wrong",e)}));case 2:t.sent;case 3:case"end":return t.stop()}}),t)})))(),e.state.authToken},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this._isMounted=!0;window.M;this.context.loginPageF("loser")}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){this.context.loginPageF;return s.a.createElement("div",{class:"row "},s.a.createElement("div",{class:"col s12 m8 l4 offset-m2 offset-l4"},s.a.createElement("div",{class:"card"},s.a.createElement("div",{class:"card-action teal lighten-1 white-text"},s.a.createElement("h3",null," App Login")),s.a.createElement("div",{class:"card-content"},s.a.createElement("div",{class:"form-field"},s.a.createElement("label",{for:"username"},"Username"),s.a.createElement("input",{type:"text",id:"username",onChange:this.handleInputChange})),s.a.createElement("br",null),s.a.createElement("div",{class:"form-field"},s.a.createElement("label",{for:"password"},"Password"),s.a.createElement("input",{type:"password",id:"password",onChange:this.handlePassChange})),s.a.createElement("br",null),s.a.createElement("div",{class:"form-field"},s.a.createElement(c.b,{to:{pathname:this.handleSubmit(),state:{user:this.state.userName,token:this.state.authToken,userName:this.state.userName,pass:this.state.userPass}}},s.a.createElement("button",{class:"btn-large waves-effect waves-dark",onClick:(this.handleSubmit,this.getToken)},"Login"))),s.a.createElement("br",null)))))}}]),a}(n.Component);C.contextType=E;var w=C,O=a(15),T=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={authToken:"",userName:"a",userPass:"",data:{digital_sensors:[1,2,3],digital_actuators:[1,2],digital_connections:[1]},newConnectionName:"d",device1:"",device2:"",user_id:"",mA:"ady",url:"https://crazyapp2020.herokuapp.com",changeNameField:"are you sure?",sensorName:!1,actuatorName:!1,selectedDeviceMac:"0",newSensorMAC:"0.0.0.0.1",newActuatorMAC:"0.0.0.0.1"},e.editSensorName=function(t){e.setState({sensorName:!0}),e.setState({actuatorName:!1}),console.log("----",e.state.selectedDeviceMac+"-----"),e.setState({selectedDeviceMac:t});var a=[],n=0;e.state.data.digital_sensors.map((function(t){t.mac_address==e.state.selectedDeviceMac&&e.state.changeNameField&&(n=e.state.changeNameField,t.device_name=n,console.log("iiiiii",n)),a.push(t),console.log(a)}));if(e.state.changeNameField){var s=JSON.parse(JSON.stringify(e.state.data));s.digital_sensors=a,console.log(s),e.setState({data:s}),console.log("aidddddddddd"+t),fetch(e.state.url+"/user/"+e.props.location.state.userName+"/sensors_list/digital_sensor/change_sensor_name/"+t,{method:"PUT",headers:{Authorization:e.state.authToken,"Content-Type":"application/json"},body:JSON.stringify({device_name:e.state.changeNameField})}).then((function(e){return e.json()})).then((function(e){console.log("Name change",t)}))}},e.editActuatorName=function(t){e.setState({sensorName:!1}),e.setState({actuatorName:!0}),console.log("----",t);var a=[],n=0;e.state.data.digital_actuators.map((function(s){s.mac_address==t&&e.state.changeNameField&&(n=e.state.changeNameField,s.device_name=n),a.push(s)}));if(console.log(a),e.state.changeNameField){var s=JSON.parse(JSON.stringify(e.state.data));s.digital_actuators=a,console.log(s),e.setState({data:s}),fetch(e.state.url+"/user/"+e.props.location.state.userName+"/actuators_list/digital_actuator/change_actuator_name/"+t,{method:"PUT",headers:{Authorization:e.state.authToken,"Content-Type":"application/json"},body:JSON.stringify({device_name:e.state.changeNameField})}).then((function(e){return e.json()})).then((function(e){console.log("Name change",t)}))}},e.addSensor=function(){fetch(e.state.url+"/sensors_list/digital_sensor/add/"+e.state.newSensorMAC,{method:"PUT",headers:{Authorization:e.state.authToken,"Content-Type":"application/json"},body:JSON.stringify({mac_address:"5C:CF:7F:8E:94:DE0",device_name:"gg",state:0,device_type:"digital_sensor",user_id:e.state.data.id})}).then((function(e){return e.json()})).then((function(e){console.log("new sensor added:","---")}))},e.addActuator=function(){fetch(e.state.url+"/user/"+e.props.location.state.userName+"/actuators_list/digital_actuator/add/"+e.state.newActuatorMAC,{method:"PUT",headers:{Authorization:e.state.authToken,"Content-Type":"application/json"},body:JSON.stringify({mac_address:"5C:CF:7F:8E:94:DE0",device_name:"gg",device_type:"digital_actuator",user_id:e.state.data.id})}).then((function(e){return e.json()})).then((function(e){console.log("new actuator added:","---")}))},e.addConnection=function(){var t={connection_name:e.state.newConnectionName,sensor_mac_address:e.state.device1,actuator_mac_address:e.state.device2,id:e.state.data.id},a=JSON.parse(JSON.stringify(e.state.data));a.digital_connections[a.digital_connections.length]=t,e.setState({data:a});fetch(e.state.url+"/user/"+e.props.location.state.userName+"/connections/digital/"+t.connection_name,{method:"POST",headers:{Authorization:e.state.authToken,"Content-Type":"application/json"},body:JSON.stringify({sensor_mac_address:e.state.device1,actuator_mac_address:e.state.device2,user_id:e.state.data.id})}).then((function(e){return e.json()})).then((function(e){console.log("Created Connection:","qqq")}))},e.changeSensorState=function(t){console.log("-----SENSORS",t);var a=[],n=0;e.state.data.digital_sensors.map((function(e){e.mac_address==t&&(n=!e.state,e.state=n,0==e.state?e.state=0:e.state=1),a.push(e)}));console.log(a);var s=JSON.parse(JSON.stringify(e.state.data));s.digital_sensors=a,console.log(s),e.setState({data:s}),fetch(e.state.url+"/sensors_list/digital_sensor/add/"+t,{method:"PUT",headers:{Authorization:e.state.authToken,"Content-Type":"application/json"},body:JSON.stringify({state:n,user_id:1})}).then((function(e){return e.json()})).then((function(e){console.log("Changed State:",t)}))},e.deleteConnection=function(t){console.log("-----",t.value);var a=e.state.data.digital_connections.filter((function(e){return e.connection_name!==t})),n=JSON.parse(JSON.stringify(e.state.data));n.digital_connections=a,e.setState({data:n}),fetch(e.state.url+"/user/"+e.props.location.state.userName+"/connections/digital/"+t,{method:"DELETE",headers:{Authorization:e.state.authToken,"Content-Type":"application/json"},body:JSON.stringify({user_id:e.state.data.id})}).then((function(e){return e.json()})).then((function(e){console.log("Deleted Connection:",t)}))},e.deleteSensor=function(t){console.log("-----",t.value);var a=e.state.data.digital_connections.filter((function(e){return e.connection_name!==t})),n=JSON.parse(JSON.stringify(e.state.data));n.digital_connections=a,e.setState({data:n}),fetch(e.state.url+"/user/"+e.props.location.state.userName+"/sensors_list/digital_sensor/delete/"+t,{method:"DELETE",headers:{Authorization:e.state.authToken,"Content-Type":"application/json"},body:JSON.stringify({user_id:e.state.data.id})}).then((function(e){return e.json()})).then((function(e){console.log("Deleted Sensor:",t)}))},e.deleteActuator=function(t){console.log("-----",t.value);var a=e.state.data.digital_connections.filter((function(e){return e.connection_name!==t})),n=JSON.parse(JSON.stringify(e.state.data));n.digital_connections=a,e.setState({data:n}),fetch(e.state.url+"/user/"+e.props.location.state.userName+"/actuators_list/digital_actuator/delete/"+t,{method:"DELETE",headers:{Authorization:e.state.authToken,"Content-Type":"application/json"},body:JSON.stringify({user_id:e.state.data.id})}).then((function(e){return e.json()})).then((function(e){console.log("Deleted Actuators:",t)}))},e}return Object(d.a)(a,[{key:"reqTimer",value:function(){var e=this;setInterval((function(){console.log("request..."),fetch(e.state.url+"/user/"+e.props.location.state.userName,{method:"GET",headers:{Authorization:e.state.authToken}}).then((function(e){return e.json()})).then((function(t){e.setState({data:t})})).catch((function(e){console.log(e)}))}),3e3)}},{key:"componentDidMount",value:function(){var e=this,t=window.M;t.AutoInit(),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".modal");t.Modal.init(e,{})})),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll("select");t.FormSelect.init(e,{})})),Object(f.a)(p.a.mark((function t(){var a,n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e.state.url+"/login",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:e.props.location.state.userName,password:e.props.location.state.pass})});case 2:return a=t.sent,t.next=5,a.json();case 5:n=t.sent,e.setState({authToken:"Bearer "+n.access_token}),fetch(e.state.url+"/user/"+e.props.location.state.userName,{method:"GET",headers:{Authorization:e.state.authToken}}).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({data:t})})).catch((function(e){console.log(e)})),e.reqTimer();case 9:case"end":return t.stop()}}),t)})))()}},{key:"sendName",value:function(){console.log("aaa")}},{key:"render",value:function(){var e=this,t=[],a=[],n=[],o=[],l=[],c=[];this.state.data.digital_sensors.length&&this.state.data.digital_sensors.map((function(n){t.push(s.a.createElement("tr",null,s.a.createElement("td",null,s.a.createElement("a",{class:" modal-trigger",href:"#modal2"},s.a.createElement("i",Object(O.a)({className:"change-name",onClick:function(){e.editSensorName(n.mac_address)}},"className"," small material-icons grey-text text-darken-4"),"edit")),n.device_name),s.a.createElement("td",null,n.mac_address),s.a.createElement("td",null,n.device_type))),a.push(s.a.createElement("tr",null,s.a.createElement("td",null,n.device_name),s.a.createElement("td",null,n.mac_address),s.a.createElement("td",null,n.state),s.a.createElement("i",{onClick:function(){e.changeSensorState(n.mac_address)},className:" medium material-icons grey-text text-darken-4"},"refresh"),s.a.createElement("i",{onClick:function(){e.deleteSensor(n.mac_address)},className:" medium material-icons red-text text-darken-4"},"cancel"))),c.push(s.a.createElement("option",{value:n.mac_address},n.device_name))})),this.state.data.digital_actuators.length&&this.state.data.digital_actuators.map((function(t){n.push(s.a.createElement("tr",null,s.a.createElement("td",null,t.device_name),s.a.createElement("td",null,t.mac_address),s.a.createElement("i",{onClick:function(){e.deleteActuator(t.mac_address)},className:" medium material-icons red-text text-darken-4"},"cancel"))),l.push(s.a.createElement("option",{value:t.mac_address},t.device_name))})),this.state.data.digital_actuators.length&&this.state.data.digital_actuators.map((function(a){t.push(s.a.createElement("tr",null,s.a.createElement("td",null,s.a.createElement("a",{class:" modal-trigger",href:"#modal2"},s.a.createElement("i",{onClick:function(){e.editActuatorName(a.mac_address)},className:" small material-icons grey-text text-darken-4"},"edit")),a.device_name),s.a.createElement("td",null,a.mac_address),s.a.createElement("td",null,a.device_type)))})),this.state.data.digital_connections.length&&this.state.data.digital_connections.map((function(t){o.push(s.a.createElement("tr",{key:1},s.a.createElement("td",null,t.connection_name),s.a.createElement("td",null,t.sensor_mac_address),s.a.createElement("td",null,t.actuator_mac_address),s.a.createElement("i",{onClick:function(){e.deleteConnection(t.connection_name)},className:" medium material-icons red-text text-darken-4"},"cancel")))}));return s.a.createElement("div",null,s.a.createElement("div",{className:"center"},s.a.createElement("h3",null,"Welcome ",this.props.location.state.userName),s.a.createElement("h4",{style:{margin:"50px"}},"Devices"),s.a.createElement("div",{id:"modal2",class:"modal"},s.a.createElement("div",{class:"modal-content"},s.a.createElement("h4",null,"Edit Device"),s.a.createElement("p",null,"You can change the device name down below..."),s.a.createElement("input",{type:"text",placeholder:"Change Device Name...",onChange:function(t){var a=t.target.value;e.setState({changeNameField:a}),e.setState({sensorName:!0})}})),s.a.createElement("div",{class:"modal-footer"},s.a.createElement("a",{class:"modal-close waves-effect waves-green btn-flat",onClick:function(t){console.log(e.state.sensorName),e.state.sensorName?e.editSensorName():e.editActuatorName()}},"Change"))),s.a.createElement("div",{id:"modal3",class:"modal"},s.a.createElement("div",{class:"modal-content"},s.a.createElement("h4",null,"Add Sensor"),s.a.createElement("p",null,"You can add sensors to the list"),s.a.createElement("input",{type:"text",placeholder:"Type your sensor MAC adress...",onChange:function(t){var a=t.target.value;e.setState({newSensorMAC:a})}})),s.a.createElement("div",{class:"modal-footer"},s.a.createElement("a",{class:"modal-close waves-effect waves-green btn-flat",onClick:this.addSensor},"Add"))),s.a.createElement("div",{id:"modal4",class:"modal"},s.a.createElement("div",{class:"modal-content"},s.a.createElement("h4",null,"Add Actuator"),s.a.createElement("p",null,"You can add actuators to the list"),s.a.createElement("input",{type:"text",placeholder:"Type your sensor MAC adress...",onChange:function(t){var a=t.target.value;e.setState({newActuatorMAC:a})}})),s.a.createElement("div",{class:"modal-footer"},s.a.createElement("a",{class:"modal-close waves-effect waves-green btn-flat",onClick:this.addActuator},"Add"))),s.a.createElement("div",{id:"modal1",class:"modal"},s.a.createElement("div",{class:"modal-content"},s.a.createElement("h4",null,"Make a Connection"),s.a.createElement("div",{class:"input-field col s12"},s.a.createElement("select",{onChange:function(t){e.setState({device1:t.target.value})},className:"browser-default"},s.a.createElement("option",{value:"0",disabled:!0,selected:!0},"Choose your Sensor"),c),s.a.createElement("label",null)),s.a.createElement("div",{class:"input-field col s12 "},s.a.createElement("select",{onChange:function(t){console.log(t.target.value),e.setState({device2:t.target.value}),console.log(e.state.device2+"----")},className:"browser-default"},s.a.createElement("option",{value:"",disabled:!0,selected:!0},"Choose your Actuator"),l),s.a.createElement("input",{type:"text",placeholder:"Connection Name...",onChange:function(t){e.setState({newConnectionName:t.target.value})}}),s.a.createElement("label",null))),s.a.createElement("div",{class:"modal-footer"},s.a.createElement("button",{class:"modal-close waves-effect waves-light btn",onClick:this.addConnection},"Done!"))),s.a.createElement("table",{className:"centered"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Device Name"),s.a.createElement("th",null,"Device MAC"),s.a.createElement("th",null,"Device Type"))),s.a.createElement("tbody",null,t)),s.a.createElement("h4",{style:{margin:"50px"}},"Connections"),s.a.createElement("button",{class:"waves-effect waves-light btn modal-trigger","data-target":"modal1",style:{margin:"20px"}},"ADD CONNECTION"),s.a.createElement("table",{className:"centered"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Connection Name"),s.a.createElement("th",null,"Device1"),s.a.createElement("th",null,"Device2"))),s.a.createElement("tbody",null,o)),s.a.createElement("h4",{style:{margin:"50px"}},"Sensors"),s.a.createElement("button",{class:"waves-effect waves-light btn modal-trigger","data-target":"modal3",style:{margin:"20px"}},"ADD   SENSOR"),s.a.createElement("table",{className:"centered"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Device Name"),s.a.createElement("th",null,"Device MAC"),s.a.createElement("th",null,"Device STATE"))),s.a.createElement("tbody",null," ",a)),s.a.createElement("h4",{style:{margin:"50px"}},"Actuators"),s.a.createElement("button",{class:"waves-effect waves-light btn modal-trigger","data-target":"modal4",style:{margin:"20px"}},"ADD ACTUATOR"),s.a.createElement("table",{className:"centered"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Device Name"),s.a.createElement("th",null,"Device MAC"),s.a.createElement("th",null,"Device STATE"))),s.a.createElement("tbody",null," ",n))))}}]),a}(n.Component);var k=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(c.a,null,s.a.createElement(v,null,s.a.createElement(r.a,{exact:!0,path:"/",component:w}),s.a.createElement(r.a,{path:"/user",component:S}),s.a.createElement(r.a,{path:"/try",component:T}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.1db09c73.chunk.js.map