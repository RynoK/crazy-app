import React, { Component } from 'react';
import {DataBaseContext} from './DataBaseContext';
import {AuthContext} from './contexts/AuthContext'
import './WelcomePage.css';



//Custom Functions

class WelcomePage extends Component {
  state ={
    userN:''
  }
  

    static contextType = DataBaseContext;


    componentDidMount() {
      
      if(!this.context.loginPage){
        const M = window.M;M.AutoInit()
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.modal');
            var instances = M.Modal.init(elems, {});
          });
        
          document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('select');
            var instances = M.FormSelect.init(elems, {});
          });
                  
        } 

        ////get the name of the user from url -REGEX- LAST WORD

        let userN=window.location.href;
        let reg = /\b(\w+)$/g;
        const nameFound = userN.match(reg)[0];
        this.setState({userN:nameFound});
        
            


        ////get the name of the user from url -REGEX


  
    
          fetch('http://192.168.0.100:5000/user/'+nameFound, {
      method: 'GET',
      headers: {
        'Authorization':  this.state.authToken
            
      }
      })
      .then(res => res.json())
      .then(data => { this.setState({userSensors: data.digital_sensors}); console.log(this.state.userSensors)})
      .catch(err => { console.log(err) })
      
      
      
      

///this.context.loginPageF('sss')
console.log('--------'+this.context.authT)

        
    }
     

    handleClick(){
       
      const M = window.M;M.AutoInit()
      document.addEventListener('DOMContentLoaded', function() {
          var elems = document.querySelectorAll('.modal');
          var instances = M.Modal.init(elems, {});
        });
      
        document.addEventListener('DOMContentLoaded', function() {
          var elems = document.querySelectorAll('select');
          var instances = M.FormSelect.init(elems, {});
        });
     
        
    }


testModal = (e) =>{

  console.log(e);console.log('dddd')
  var modal = document.getElementById("modal1");
  var btn = document.getElementById("myBtn");
  
// Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 

//  e.target.style.display = "block";


}










 dataName= () =>{

  this.context.loginPageF('fff');
  return 'aaa'
}





    render() { 
{/* SENSOR */}

let dataDevicesList=[];
let actuatorsListt=[];

  let dataDevicesListtt= this.context.sensors.length ?(this.context.sensors.map(sensor =>{
    
dataDevicesList.push(<tr>
    

    <td>{sensor.device_name}</td>
    <td >{sensor.mac_address}</td>
    <td>{sensor.device_type}</td>

    </tr>)

}) 
): (' ')

let dataDevicesListt=this.context.actuators.length ?(this.context.actuators.map(actuator =>{
    

    dataDevicesList.push(<tr>

        <td>{actuator.device_name}</td>
        <td>{actuator.mac_address}</td>
        <td>{actuator.device_type}</td>
        
        </tr>)

}) 
): (' ')


/// Devices for modal pop-up

            
           
        
let thisT=this.context.hardC;

let tryS=this.context.actuators.length ?(this.context.actuators.map(actuator =>{
    


  
  
return actuator
      
     
  

}) 
): ('')



/// Devices for modal pop-up












///RETURN ------------------------------------------------------
        return(

          <AuthContext.Consumer>{(authContext) =>{
	
	const {userName, userCred} = authContext;
 


	

return(


<div>
  
    
    <div className='center'>
    
    

        <h3>Welcome {this.state.userN}</h3>
        
        
        

  
  <div id="modal1" class="modal">
    <div class="modal-content">
      <h4>Make a Connection</h4>



      <div class="input-field col s12">
    <select >
      <option value="0" disabled selected>Choose your Sensor</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </select>
    <label></label>
  </div>


  <div class="input-field col s12 ">
    <select >
      <option value="" disabled selected>Choose your Actuator</option>
      <option value="1">Option 1</option>
      
    </select>
    <input type="text"placeholder='Connection Name...'/>
    <label></label>
  </div>





    </div >
    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-light btn">Done!</a>
    </div>
  </div>
        <button class="waves-effect waves-light btn modal-trigger"  data-target="modal1" style={{margin: "20px"}} onClick={this.handleClick()}>ADD CONNECTION</button>
        
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
      </div>
      
</div>
)
}}</AuthContext.Consumer>
        )

    }


}

export default WelcomePage;