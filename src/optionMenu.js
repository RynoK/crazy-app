import React, {Component}from 'react';
import {DataBaseContext} from './DataBaseContext'


 class optionMenu extends Component {
    

    static contextType = DataBaseContext;





   componentDidMount() {
      const M = window.M;
      document.addEventListener('DOMContentLoaded', function() { 
         let elems = document.querySelectorAll('.collapsible');
         let instances = M.Collapsible.init(elems, {});
       });

       document.addEventListener('DOMContentLoaded', function() {
         let elems = document.querySelectorAll('.fixed-action-btn');
         let instances = M.FloatingActionButton.init(elems, {}); 
       });


    }
    render(){ 

{/* SENSOR */}
const dataSensorsList = this.context.sensors.length ?(this.context.sensors.map(sensor =>{
   return (
     
   

      <li><a class="waves-effect red btn-large" style={{margin: "10px"}} key={sensor.id}>{sensor.device_name}  ---------->  {sensor.mac_address}</a></li>

   
   )

})
):( <div className="sensor-notFound"><h2>EMPTY</h2></div>)

{/* SENSOR */}
{/* ACTUATOR*/}


const dataActuatorsList = this.context.actuators.length ?(this.context.actuators.map(actuator =>{
   return (
     
   

      <li><a class="waves-effect red btn-large" style={{margin: "10px"}} key={actuator.id}>{actuator.device_name}  ----------> {actuator.mac_address}</a></li>

   
   )

})
):( <div className="sensor-notFound"><h2>EMPTY</h2></div>)







{/* ACTUATOR*/}

    return (
     

       
       




<div>
{this.context.welcomeMenuPage ?(

  



<div><h3 className='red-text center'>MY DEVICES</h3>
<ul class="collapsible">
  <li>
    <div class="collapsible-header">
      <i class="material-icons"><a class="btn-floating btn-large waves-effect waves-light red btn-small"><i class="material-icons">add</i></a></i>
      SENSORS
      <span class="badge red white-text">{this.context.sensors.length}</span></div>
    <div class="collapsible-body"><p>{dataSensorsList}</p></div>
  </li>
 
</ul>
</div>



):('')}



{this.context.welcomeMenuPage ?(   

<div>
<ul class="collapsible">
  <li>
    <div class="collapsible-header">
      <i class="material-icons"><a class="btn-floating btn-large waves-effect waves-light red btn-small"><i class="material-icons">add</i></a></i>
      ACTUATORS
      <span class="badge red white-text">{this.context.actuators.length}</span></div>
    <div class="collapsible-body"><p>{dataActuatorsList}</p></div>
  </li>
 
</ul> 

</div>


):('')}
      


</div>

    )
    }
}

export default optionMenu;