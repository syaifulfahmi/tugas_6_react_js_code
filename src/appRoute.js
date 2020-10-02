import React from 'react';
import {HashRouter as Router, Route } from 'react-router-dom';
import App from './App';
import MenuMakanan from './Page/MenuMakanan';
import MenuMinuman from './Page/MenuMinuman';
import Kontak from './Page/Kontak'

const appRoute = () => (
	<Router>
		<>
			<Route path="/" exact component={App} />
			<Route path="/menu_makanan" exact component={MenuMakanan} />
			<Route path="/menu_minuman" exact component={MenuMinuman} />
			<Route path="/kontak" exact component={Kontak} />
		</>
	</Router>
	);

export default appRoute;