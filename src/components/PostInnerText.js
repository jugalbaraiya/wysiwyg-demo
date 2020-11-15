import React, { Component } from 'react';

class PostInnerText extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		var id = this.props.id;
		return <div id={id} />;
	}

	componentDidMount() {
		var id = this.props.id;
		var innerText = this.props.innerText;
		console.log(id + '-' + innerText);
		document.getElementById(id).innerHTML = innerText;
	}
}

export default PostInnerText;
