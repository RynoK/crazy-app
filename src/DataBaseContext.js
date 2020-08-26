import React, {createContext, Component}from 'react';


export const DataBaseContext = createContext();


 class DataBaseContextC extends Component {

  
    state = {
      uName:'User',
       sensors:[],
          
       actuators:[],

       authT:'11'
       
      
    }


    

    async componentDidMount(){
if(this.context.sensores){
      {/* SENSOR */}
      const sensorsUrl="http://192.168.0.117:5000/sensors_list/digital_sensors";
      const sensorsResponse= await fetch(sensorsUrl);
      const sensorsData= await sensorsResponse.json();
      
      this.setState({sensors :sensorsData.digital_sensors})
      {/* SENSOR */}
      {/* ACTUATOR*/}
      const actuatorUrl="http://192.168.0.117:5000/actuators_list/digital_actuators";
      const actuatorResponse= await fetch(actuatorUrl);
      const actuatorsData= await actuatorResponse.json();
      
      this.setState({actuators :actuatorsData.connections})
      
      {/* ACTUATOR*/}
      console.log('---------'+this.state.actuators)
      
   }
}
///CUSTOM FUNCTIONS

   loginPageF = (uname) =>{
      this.setState({uName:uname})
     // return this.state.uName

   }

   sendToken = (token) =>{
      this.setState({authT:token})
      console.log(this.state.authT+'-------------')
      
   }
   

///CUSTOM FUNCTIONS
    
render() { 
   return(

<DataBaseContext.Provider value ={{...this.state, loginPageF:this.loginPageF, sendToken:this.sendToken}}>

{this.props.children}

</DataBaseContext.Provider>
   );
}


}
export default DataBaseContextC;