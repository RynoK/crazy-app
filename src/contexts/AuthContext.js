import React, { Component, createContext } from 'react'


export const AuthContext = createContext(); 


class   AuthContextProvider extends Component{


state = {
    userName:'Ady'
}

componentDidUpdate(){

this.userCred()
}   

userCred = (userName) =>{
    this.setState({userName: userName})
    //console.log(this.state.userName)
   
}
//////RENDER////////////
    render (){





        return(
<AuthContext.Provider value={{...this.state, userCred:this.userCred}}>
{this.props.children}
</AuthContext.Provider>
        );

        
    }
}

export default AuthContextProvider;