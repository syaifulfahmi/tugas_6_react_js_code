import React, {Component} from 'react';
import Header from '../Page/Header'
import '../Style/Header.css';

class MenuHome extends Component {
	render () {
		return (
			<>
				<Header />
				<br />
				<h1>
					<center>Selamat Datang Di Halaman Utama Masakan Nusantara</center>
				</h1>
				<div className="image_header">
					<br />
				</div>
			</>
		);
	}
}

export default MenuHome;