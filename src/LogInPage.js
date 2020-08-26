import React, { Component, Fragment } from 'react';
import {DataBaseContext} from './DataBaseContext';


import './Login.css'
const heroku = 'https://crazyapp2020.herokuapp.com/auth';
const serverLaptop = 'https://crazyapp2020.herokuapp.com/';
const aToken= 'Bearer';

class LogInPage extends Component {
	_isMounted = false;
	static contextType = DataBaseContext;

	state = {

authToken:"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1OTgyOTA1MjQsIm5iZiI6MTU5ODI5MDUyNCwianRpIjoiZTY4Mzg3OWQtYTVkNy00MDJmLWFhMmItOWZiZTJjOTA5YWYzIiwiZXhwIjoxNjI5ODQ3NDUwLCJpZGVudGl0eSI6MSwiZnJlc2giOnRydWUsInR5cGUiOiJhY2Nlc3MifQ.XLmGarf6kLp-XFHsw1lwMY5SZUlJG-S2Gj48kDMneH0"
,
userSensors:'',

userName:'',
userPass:'',
uT:aToken,
validUser:false


	}

    componentDidMount() {
		this._isMounted = true;
		const M = window.M;
	

	}



	componentWillUnmount() {
		this._isMounted = false;
	  }
	han = (e,userCred) =>{
		userCred(e)
	}

	handleInputChange = (e) =>{
		this.setState({
			userName: e.target.value

		})


	}

	handlePassChange = (e) =>{
		this.setState({

			userPass: e.target.value
		})


	}

	handleLogin = () =>{
		console.log('sss')
		console.log('SUBMIT');

		(async () => {
			const rawResponse = await fetch(serverLaptop+'login', {
			  method: 'POST',
			  headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'

			  },

			  body: JSON.stringify({"username":this.state.userName,  "password":this.state.userPass})

			});
			const content = await rawResponse.json();


			this.setState({ authToken: aToken+content.access_token })
			console.log(this.state.authToken)
			fetch(serverLaptop+'users/'+this.state.userName, {
	method: 'GET',
	headers: {
	  'Authorization':  this.state.authToken

	}

  })
  .then(res => res.json())
  .then(data => { this.setState({userSensors: data.digital_sensors}); console.log(this.state.userSensors)})
  .catch(err => { console.log(err) })

		  })();
console.log('finish'+ this.state.authToken)
console.log(this.state.userPass)

/////////////

////////////// GET USERS SENSORS




	}


	handleSubmit = () =>{

		/// verify login user

let loginValidation =

this.state.validUser?( 'try/'+this.state.userName):(JSON.stringify('/'))
let str = loginValidation.replace(/"/g,"");
loginValidation= str;
return loginValidation;
/// verify login user

	}

	getToken = () =>{

		(async () => {
			const rawResponse = await fetch(serverLaptop+'login', {
			  method: 'POST',

			  headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',




			  },
			  body: JSON.stringify({"username":this.state.userName,  "password":this.state.userPass})

			}).then((resp) =>{
console.log(resp.status);
console.log(this.state.validUser)
resp.status==200?(this.setState({validUser:true})):(this.setState({validUser:false}))
				// Return the response as JSON
				return resp.json();

			}).then(data =>  {




				return data

			}).then( (data) =>{this.setState({authToken:data.access_token})})

			.catch(function (err) {

				// Log any errors
				console.log('something went wrong', err);


			});



		})();
		return this.state.authToken
	}






///////RENDER ---------------------






render(){
	//const {loginPageF} = this.context;



    ///////RETURN ---------------------
return(



<div class="row ">


	<div class="col s12 m8 l4 offset-m2 offset-l4">
		<div class="card">

			<div class="card-action teal lighten-1 white-text">
				<h3> App Login</h3>
			</div>

			<div class="card-content">
				<div class="form-field" >
					<label for="username">Username</label>
					<input type="text" id="username" onChange={this.handleInputChange}></input>
				</div><br></br>

				<div class="form-field">
					<label for="password">Password</label>
					<input type="password" id="password" onChange={this.handlePassChange}></input>
				</div><br></br>



				<div class="form-field">

				</div><br></br>
			</div>

		</div>
	</div>

</div>
)




    ///////RETURN ---------------------

}

///////RENDER ---------------------

}

export default LogInPage;
