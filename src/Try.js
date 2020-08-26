import React, { Component, Fragment,useEffect } from 'react';
import './WelcomePage.css';
import Select from "react-select";






class Try extends Component {

    state={
        authToken:'',
        userName:'a',
        userPass:'',
        data:{digital_sensors:[1,2,3],digital_actuators:[1,2],digital_connections:[1]},
        newConnectionName:'d',
        device1:'',
        device2:'',
        user_id:'',
        mA:'ady',
        url:'https://crazyapp2020.herokuapp.com',
        changeNameField:'are you sure?',
        sensorName:false,
        actuatorName:false,
        selectedDeviceMac:'0',
        newSensorMAC:'0.0.0.0.1',
        newActuatorMAC:'0.0.0.0.1'


    }



///////TIMER FOR SENSORS

    reqTimer() {
      
      const interval = setInterval(() => {
        console.log('request...');
        
      
     // return () => clearInterval(interval);

////FETCH DATA
     fetch(this.state.url+'/user/'+this.props.location.state.userName, {
      method: 'GET',
      headers: {
        'Authorization': this.state.authToken
            
      }
      
      })
      .then(res => res.json())
      .then(data => {this.setState({data:data}) })
      .catch(err => { console.log(err) })
         
        }, 3000);
    }
   


///////TIMER FOR SENSORS


    componentDidMount (){
	//	this.setState({
     //       userName:this.props.location.state.name,
     //       userPass:this.props.location.state.pass
     //   })

        
     const M = window.M;M.AutoInit()
     document.addEventListener('DOMContentLoaded', function() {
         var elems = document.querySelectorAll('.modal');
         var instances = M.Modal.init(elems, {});
       });
     
       document.addEventListener('DOMContentLoaded', function() {
         var elems = document.querySelectorAll('select');
         var instances = M.FormSelect.init(elems, {});
       });





        //////// Get data from api
   
        
		(async () => {
			const rawResponse = await fetch(this.state.url+'/login', {
			  method: 'POST',
			  headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
              },
              
			  body: JSON.stringify({"username":this.props.location.state.userName,  "password":this.props.location.state.pass})
			 
			});
			const content = await rawResponse.json();
			
         
      this.setState({ authToken: 'Bearer '+content.access_token }) 
      

			
			fetch(this.state.url+'/user/'+this.props.location.state.userName, {
	method: 'GET',
	headers: {
	  'Authorization': this.state.authToken
	  	  
	}
	
  })
  .then(res => res.json())
  .then(data => {console.log(data);this.setState({data:data}) })
  .catch(err => { console.log(err) })
			this.reqTimer()
		  })();



    
  //////// Get data from api

////////////// GET USERS SENSORS


    }

//////////////EDIT DEVICE NAME/////
/////// Send changed name to server


sendName(){
  console.log('aaa');
  
}


////sensor name

editSensorName= (id)=>{
this.setState({sensorName:true})
this.setState({actuatorName:false})


console.log('----',this.state.selectedDeviceMac+'-----');
this.setState({selectedDeviceMac:id})
let deviceName=[];
      let i=0;
      let delConState = this.state.data.digital_sensors.map(sensor =>{
      
      if(sensor.mac_address==this.state.selectedDeviceMac&&this.state.changeNameField ){
i=this.state.changeNameField;
sensor.device_name=i
console.log('iiiiii',i)




      }
      else{}
    
      deviceName.push(sensor)
    
    
    
        
        console.log(deviceName)
       
      
      })
if(this.state.changeNameField){
      
      let sensorsCopy = JSON.parse(JSON.stringify(this.state.data))
       
       sensorsCopy.digital_sensors = deviceName;
       console.log(sensorsCopy)
       this.setState({
          data:sensorsCopy
        }) 
      console.log("aidddddddddd"+id)
/////////send data - change name
fetch(this.state.url+'/user/'+this.props.location.state.userName+'/sensors_list/digital_sensor/change_sensor_name/'+id, {
  method: 'PUT',
  headers: {
    'Authorization': this.state.authToken
    ,'Content-Type':'application/json'
  },
  body:JSON.stringify({
    
    "device_name": this.state.changeNameField
    


  })
}).then(function(response) {
  return response.json();
}).then(function(data) {
  console.log('Name change', id);
});

}
//this.setState({changeNameField:'device'})
}


////Actuator Name
editActuatorName= (id)=>{
  this.setState({sensorName:false})
  this.setState({actuatorName:true})

  console.log('----',id);
  let deviceName=[];
        let i=0;
        let delConState = this.state.data.digital_actuators.map(act =>{
        
        if(act.mac_address==id&&this.state.changeNameField){
  i=this.state.changeNameField;
  act.device_name=i;
  
  
 
  
        }
        else{}
        deviceName.push(act)
        })
      
      
      
      
      
          
          console.log(deviceName)
          
        
          if(this.state.changeNameField){
  
  
        let sensorsCopy = JSON.parse(JSON.stringify(this.state.data))
         
         sensorsCopy.digital_actuators = deviceName;
         console.log(sensorsCopy)
         this.setState({
            data:sensorsCopy
          }) 
          ////////send data - change name
fetch(this.state.url+'/user/'+this.props.location.state.userName+'/actuators_list/digital_actuator/change_actuator_name/'+id, {
  method: 'PUT',
  headers: {
    'Authorization': this.state.authToken
    ,'Content-Type':'application/json'
  },
  body:JSON.stringify({
    
    "device_name": this.state.changeNameField
    


  })
}).then(function(response) {
  return response.json();
}).then(function(data) {
  console.log('Name change', id);
});


}
  }
  

  
//////////////EDIT DEVICE NAME/////

//////ADD SENSOR////

addSensor = ()=>{
  
  fetch(this.state.url+'/sensors_list/digital_sensor/add/'+this.state.newSensorMAC, {
    method: 'PUT',
    headers: {
      'Authorization': this.state.authToken
      ,'Content-Type':'application/json'
    },
    body:JSON.stringify({
      
      "mac_address": "5C:CF:7F:8E:94:DE0",
      "device_name": "gg",
      "state": 0,
      "device_type": "digital_sensor",
      "user_id": this.state.data.id


    })
  }).then(function(response) {
    return response.json();
  }).then(function(data) {
    console.log('new sensor added:', '---');
  });

  }
  //////ADD SENSOR////
  //////ADD Actuator////

addActuator = ()=>{
  
  fetch(this.state.url+'/user/'+this.props.location.state.userName+'/actuators_list/digital_actuator/add/'+this.state.newActuatorMAC, {
    method: 'PUT',
    headers: {
      'Authorization': this.state.authToken
      ,'Content-Type':'application/json'
    },
    body:JSON.stringify({
      
      "mac_address": "5C:CF:7F:8E:94:DE0",
      "device_name": "gg",
      
      "device_type": "digital_actuator",
      "user_id": this.state.data.id


    })
  }).then(function(response) {
    return response.json();
  }).then(function(data) {
    console.log('new actuator added:', '---');
  });

  }
  //////ADD Actuator////
    //// ADD CONNECTION///
    
    
addConnection= ()=>{

let newConnection={"connection_name":this.state.newConnectionName,"sensor_mac_address": this.state.device1,"actuator_mac_address":this.state.device2,"id": this.state.data.id}
  
 
    let connectionsCopy = JSON.parse(JSON.stringify(this.state.data))
       
       connectionsCopy.digital_connections[ connectionsCopy.digital_connections.length] = newConnection;
       this.setState({
          data:connectionsCopy
        }) 

        

  let con ="qqq";
  fetch(this.state.url+"/user/"+this.props.location.state.userName+'/connections/digital/'+newConnection.connection_name, {
    method: 'POST',
    headers: {
      'Authorization': this.state.authToken
      ,'Content-Type':'application/json'
    },
    body:JSON.stringify({
      
      "sensor_mac_address": this.state.device1,
      "actuator_mac_address":this.state.device2,
      "user_id": this.state.data.id


    })
  }).then(function(response) {
    return response.json();
  }).then(function(data) {
    console.log('Created Connection:', con);
  });
}
    
  //// ADD CONNECTION///






    //// CHANGE SENSORS STATE///


    changeSensorState = (id)=>{
      
      console.log("-----SENSORS",id)
      
      
      let sensorState=[];
      let i=0;
      let delConState = this.state.data.digital_sensors.map(sensor =>{
      //return sensor.mac_address == id;
      if(sensor.mac_address==id){
i=!sensor.state;
sensor.state=i
sensor.state==false?(sensor.state=0):(sensor.state=1);




      }
      else{}
        sensorState.push(sensor)
        
      
      })
      
      console.log(sensorState)
      
      let sensorsCopy = JSON.parse(JSON.stringify(this.state.data))
       
       sensorsCopy.digital_sensors = sensorState;
       console.log(sensorsCopy)
       this.setState({
          data:sensorsCopy
        }) 
      
       
    
  
      
      
        
      
      
      fetch(this.state.url+'/sensors_list/digital_sensor/add/'+id, {
          method: 'PUT',
          headers: {
            'Authorization': this.state.authToken,
            'Content-Type':'application/json'
          },
          body:JSON.stringify({
            
           
           
            "state":i,
            "user_id":1
      
      
          })
        }).then(function(response) {
          return response.json();
        }).then(function(data) {
          console.log('Changed State:',id);
        });
     
      }


    //// CHANGE SENSORS STATE///
/////DELETE CONNECTION




deleteConnection = (id)=>{
console.log("-----",id.value)


let delConState = this.state.data.digital_connections.filter(con =>{
return con.connection_name !== id;



})

let connectionsCopy = JSON.parse(JSON.stringify(this.state.data))
   
   connectionsCopy.digital_connections = delConState
   
   this.setState({
      data:connectionsCopy
    }) 


  

fetch(this.state.url+"/user/"+this.props.location.state.userName+'/connections/digital/'+id, {
    method: 'DELETE',
    headers: {
      'Authorization': this.state.authToken,
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
      
      
      
      "user_id": this.state.data.id


    })
  }).then(function(response) {
    return response.json();
  }).then(function(data) {
    console.log('Deleted Connection:',id);
  });

}
//////////// DELETE CONNECTION ---- UP
/////DELETE SENSOR


deleteSensor = (id)=>{
  console.log("-----",id.value)
  
  
  let delSensorState = this.state.data.digital_connections.filter(con =>{
  return con.connection_name !== id;
  
  
  
  })
  
  let sensorsCopy = JSON.parse(JSON.stringify(this.state.data))
     
     sensorsCopy.digital_connections = delSensorState
     
     this.setState({
        data:sensorsCopy
      }) 
  
  
    
  
  fetch(this.state.url+"/user/"+this.props.location.state.userName+'/sensors_list/digital_sensor/delete/'+id, {
      method: 'DELETE',
      headers: {
        'Authorization': this.state.authToken,
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        
        
        
        "user_id": this.state.data.id
  
  
      })
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      console.log('Deleted Sensor:',id);
    });
  
  }


//////////// DELETE SENSOR ---- UP
/////DELETE ACTUATOR


deleteActuator = (id)=>{
  console.log("-----",id.value)
  
  
  let delActuatorState = this.state.data.digital_connections.filter(con =>{
  return con.connection_name !== id;
  
  
  
  })
  
  let actuatorsCopy = JSON.parse(JSON.stringify(this.state.data))
     
     actuatorsCopy.digital_connections = delActuatorState
     
     this.setState({
        data:actuatorsCopy
      }) 
  
  
    
  
  fetch(this.state.url+"/user/"+this.props.location.state.userName+'/actuators_list/digital_actuator/delete/'+id, {
      method: 'DELETE',
      headers: {
        'Authorization': this.state.authToken,
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        
        
        
        "user_id": this.state.data.id
  
  
      })
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      console.log('Deleted Actuators:',id);
    });
  
  }


////////////  DELETE ACTUATOR---- UP
  
    
///////////////////////////RENDER////////////////////////////////////
    render(){ 
   
     
///Set up a NEW SENSOR
let newSensorMAC = (e)=>{
  let newSensorMAC= e.target.value;
  this.setState({newSensorMAC:newSensorMAC})
}
///Set up a NEW SENSOR
//Set up a NEW ACTUATOR
let newActuatorMAC = (e)=>{
  let newActuatorMAC= e.target.value;
  this.setState({newActuatorMAC:newActuatorMAC})
}
///Set up a NEW ACTUATOR
      let handleNewConName= (e)=>{

        this.setState({newConnectionName:e.target.value})
        
        }
////modal add connection // 
        let selectFirstDevice= (e)=>{

this.setState({device1:e.target.value});

         
          
          }
          
        let selectSecondDevice= (e)=>{
          console.log(e.target.value);
          this.setState({device2:e.target.value});
          console.log(this.state.device2+'----')
                   
                    
                    }


         
////modal add connection///  this.setState({data:this.data})
                     

        let dataDevicesList=[];
        let userSensors=[];
        let userActuators=[];
        
        let connectionsList=[]
        
        let modalAct=[];
        let modalSen = [];

        let dataSDevices= this.state.data.digital_sensors.length ?(this.state.data.digital_sensors.map(sensor =>{
    
            dataDevicesList.push(<tr>
                
            
                <td><a class=" modal-trigger" href="#modal2"><i className='change-name'onClick={()=>{this.editSensorName(sensor.mac_address)}} className=" small material-icons grey-text text-darken-4">edit</i></a>{sensor.device_name}</td>
                <td >{sensor.mac_address}</td>
                <td>{sensor.device_type}</td>
                
            
                </tr>)

userSensors.push(
                
         <tr>
          
     <td>{sensor.device_name}</td>
      <td>{sensor.mac_address}</td>
      <td >{sensor.state}</td>
      <i onClick={()=>{this.changeSensorState(sensor.mac_address)}} className=" medium material-icons grey-text text-darken-4">refresh</i>
      <i onClick={()=>{this.deleteSensor(sensor.mac_address)}} className=" medium material-icons red-text text-darken-4">cancel</i>
      
                 
      </tr>
      //  sensor.device_name
        
    

    )

    //////////////////MODAL///



modalSen.push(
                
            
  <option value={sensor.mac_address}>{sensor.device_name}</option>
  
 )

 

 


 
 //////////////////MODAL////


            
            }) 
            ): (' ')

////actuators-list


let Act= this.state.data.digital_actuators.length ?(this.state.data.digital_actuators.map(sensor =>{
    
  userActuators.push(<tr>
      
  
     <td >{sensor.device_name}</td>
      <td>{sensor.mac_address}</td>
      
      <i onClick={()=>{this.deleteActuator(sensor.mac_address)}} className=" medium material-icons red-text text-darken-4">cancel</i>
  
      </tr>)

modalAct.push(
                
            
  <option value={sensor.mac_address} >{sensor.device_name}</option>
  
 )
 
 //////////////////MODAL////
   
 }) 
 ): (' ')

////actuators-list
            
        let dataADevices= this.state.data.digital_actuators.length ?(this.state.data.digital_actuators.map(sensor =>{
    
            dataDevicesList.push(<tr>
                
            
                <td><a class=" modal-trigger" href="#modal2"><i onClick={()=>{this.editActuatorName(sensor.mac_address)}} className=" small material-icons grey-text text-darken-4">edit</i></a>{sensor.device_name}</td>
                <td >{sensor.mac_address}</td>
                <td>{sensor.device_type}</td>
                
            
                </tr>)
            
           
//////////////////MODAL////this.setState({data:this})





//////////////////MODAL////
  
}) 

            ): (' ')


            let dataConnections= this.state.data.digital_connections.length ?(this.state.data.digital_connections.map(connection =>{
    
              connectionsList.push(<tr key={1}>
                  
              
                  <td>{connection.connection_name}</td>
                  <td >{connection.sensor_mac_address}</td>
                  <td>{connection.actuator_mac_address}</td>
                  <i onClick={()=>{this.deleteConnection(connection.connection_name)}} className=" medium material-icons red-text text-darken-4">cancel</i>
                 
                 
              
                  </tr>)
              
              }) 
              ): (' ') 
      
              
let changeNameField = (e)=>{
  
   let newName= e.target.value;
   let id=0;
   
 this.setState({changeNameField:newName})
 this.setState({sensorName:true})
 //this.editSensorName(id,newName)
 
}
let sendNameChange = (newName)=>{
 // this.setState({changeNameField:'newName'})
 console.log(this.state.sensorName);
 //this.setState({sensorName:true})
 if(this.state.sensorName){
 this.editSensorName()
 }else{
   this.editActuatorName()
 }

}


return(

    

<div>
  
    
  <div className='center'>
  
  

      <h3>Welcome {this.props.location.state.userName}</h3>
      
      <h4 style={{margin: "50px"}}>Devices</h4>



      
      
  
<div id="modal2" class="modal">
  <div class="modal-content">
    <h4>Edit Device</h4>
    <p>You can change the device name down below...</p>
    <input type="text"placeholder='Change Device Name...' onChange={changeNameField}/>
  </div>
  <div class="modal-footer">
    <a  class="modal-close waves-effect waves-green btn-flat" onClick={sendNameChange}>Change</a>
  </div>
</div>





<div id="modal3" class="modal">
  <div class="modal-content">
    <h4>Add Sensor</h4>
    <p>You can add sensors to the list</p>
    <input type="text"placeholder='Type your sensor MAC adress...' onChange={newSensorMAC}/>
    
  </div>
  <div class="modal-footer">
    <a  class="modal-close waves-effect waves-green btn-flat" onClick={this.addSensor}>Add</a>
  </div>
</div>




<div id="modal4" class="modal">
  <div class="modal-content">
    <h4>Add Actuator</h4>
    <p>You can add actuators to the list</p>
    <input type="text"placeholder='Type your sensor MAC adress...' onChange={newActuatorMAC}/>
    
  </div>
  <div class="modal-footer">
    <a  class="modal-close waves-effect waves-green btn-flat" onClick={this.addActuator}>Add</a>
  </div>
</div>

      


<div id="modal1" class="modal"> 
  <div class="modal-content">
    <h4>Make a Connection</h4>



    <div class="input-field col s12">
  <select onChange={selectFirstDevice} className='browser-default'>
    <option value="0" disabled selected>Choose your Sensor</option>
    {modalSen}
  </select>
  <label></label>
</div>


<div class="input-field col s12 ">
  <select onChange={selectSecondDevice} className='browser-default'>
    <option value="" disabled selected>Choose your Actuator</option>
   {modalAct}
    
    
  </select>
  <input type="text"placeholder='Connection Name...' onChange={handleNewConName}/>
  <label></label>
</div>





  </div >
  <div class="modal-footer">
    <button class="modal-close waves-effect waves-light btn" onClick={this.addConnection}>Done!</button>
  </div>
</div>
     
      
<table className="centered">
      <thead>
        <tr>
            <th>Device Name</th>
            <th>Device MAC</th>
            <th>Device Type</th>
            
           
        </tr>
      </thead>

      <tbody>
          

        {dataDevicesList}
        
         
      </tbody>
    </table>
    <h4 style={{margin: "50px"}}>Connections</h4>
    <button class="waves-effect waves-light btn modal-trigger"  data-target="modal1" style={{margin: "20px"} } >ADD CONNECTION</button>
    <table className="centered">
      <thead>
        <tr>
            <th>Connection Name</th>
            <th>Device1</th>
            <th>Device2</th>
        </tr>
      </thead>

      <tbody>{connectionsList}</tbody></table>
    





   
    <h4 style={{margin: "50px"}}>Sensors</h4>
    <button class="waves-effect waves-light btn modal-trigger"  data-target="modal3" style={{margin: "20px"} } >ADD   SENSOR</button> 
    <table className="centered">
      
      <thead>
        <tr>
            <th>Device Name</th>
            <th>Device MAC</th>
            <th>Device STATE</th>
        </tr>
      </thead>

      <tbody > {userSensors} 
        </tbody>
        </table>




        <h4 style={{margin: "50px"}}>Actuators</h4>
    <button class="waves-effect waves-light btn modal-trigger"  data-target="modal4" style={{margin: "20px"} } >ADD ACTUATOR</button> 
    <table className="centered">
      
      <thead>
        <tr>
            <th>Device Name</th>
            <th>Device MAC</th>
            <th>Device STATE</th>
        </tr>
      </thead>

      <tbody > {userActuators} 
        </tbody>
        </table>
        
      
    </div>

    </div>

    
  
   



)

    }




}

export default Try;