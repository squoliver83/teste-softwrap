import React from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import RegisterForm from './components/Menu/RegisterForm';
import RegistersTable from './components/RegistersTable/RegistersTable';
import AddForm from './components/RegistersTable/AddForm';
import EditForm from './components/RegistersTable/EditForm';

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/">
						<Menu />
					</Route>
					<Route path="/registersTable">
						<RegistersTable/>
					</Route>
					<Route path="/registerForm">
						<RegisterForm />
					</Route>
					<Route path="/addRegister">
						<AddForm />
					</Route>
					<Route path="/editRegister/:id">
						<EditForm />
					</Route>

				</Switch>
			</Router>

		</div>
	);
}

export default App;