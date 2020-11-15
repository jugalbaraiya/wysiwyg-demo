import React, { Component } from 'react';

import PostInnerText from './PostInnerText';
class PostItems extends Component {
	createPosts(post) {
		return (
			<li key={post.key}>
				<PostInnerText id={post.id} innerText={post.text} />
			</li>
		);
	}
	render() {
		var postEntries = this.props.entries;
		var listItems = postEntries.map(this.createPosts);
		return <ul className="postList">{listItems}</ul>;
	}
}

export default PostItems;
