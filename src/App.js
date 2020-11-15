import React, { Component } from 'react';

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

// import Wysiwyg from './components/wysiwyg/Wysiwyg';
import Post from './components/Post';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
				
				</header>
				<section>
					<Post/>
					{/* <Wysiwyg /> */}
				</section>
			</div>
		);
	}
}

export default App;
