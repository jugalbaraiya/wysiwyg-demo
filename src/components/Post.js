import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCoffee,
	faBold,
	faItalic,
	faUnderline,
	faStrikethrough,
	faAlignLeft,
	faAlignCenter,
	faAlignRight,
	faAlignJustify,
	faCut,
	faCopy,
	faPaste,
	faIndent,
	faOutdent,
	faSubscript,
	faSuperscript,
	faUndo,
	faRedo,
	faListUl,
	faListOl,
	faParagraph,
	faTrash,
	faLink,
	faUnlink,
	faImage,
	faCode,
	faEdit,
	faColumns
} from '@fortawesome/free-solid-svg-icons';
import 'semantic-ui-css/semantic.min.css';

import avatar from './images/avatar-1.png';

import './Post.css';

import PostItems from './PostItems';

export default class Post extends Component {
	constructor(props) {
		super(props);

		this.state = {
			posts: []
		};
		this.addPost = this.addPost.bind(this);
	}

	execCmdHandller(command) {
		document.execCommand(command, false, null);
		this.defaultFocus();
	}

	execCmdWithArgHandller(command, arg) {
		document.execCommand(command, false, arg);
	}

	deleteSelectedHandler() {
		document.execCommand('delete', false, '');
		this.defaultFocus();
	}
	addLinkHandler() {
		var link = prompt('Enter the Hiperlink', 'http://');
		document.execCommand('createLink', false, link);
		this.defaultFocus();
	}
	addUnlinkHandler() {
		document.execCommand('unLink', false, '');
		this.defaultFocus();
	}
	addImageHandler() {
		var imageURL = prompt(
			'Enter the Image URL',
			'https://lh3.googleusercontent.com/1iFv657Te-Er_gxyBpAmstR1_cdAQwNK33ibg0MRx5jxBBh5A2PvmbohgkW3dYT2T-I=w340'
		);
		document.execCommand('insertImage', false, imageURL);
		this.defaultFocus();
	}

	componentDidMount() {
		document.getElementById('wysiwyg').focus();
	}

	defaultFocus() {
		document.getElementById('wysiwyg').focus();
	}

	addPost(e) {
		this._textareaElement.value = document.getElementById('wysiwyg').innerHTML;
		if (this._textareaElement.value !== '') {
			var newPost = {
				text: this._textareaElement.value,
				key: Date.now(),
				id: Date.now()
			};

			this.setState((prevState) => {
				return {
					posts: prevState.posts.concat(newPost)
				};
			});
		}

		this._textareaElement.value = '';
		document.getElementById('wysiwyg').innerHTML = '';
		this.defaultFocus();
		//  console.log(this.state.posts);
		e.preventDefault();
	}

	updateSingleDivHandler() {
		document.getElementById('wysiwyg').innerHTML = `
        <div class="wrapper">
            <article class="main-1">
                <img src=${avatar} class="float-left" />
                <h1>The standard Lorem Ipsum</h1>
                <h3>The standard Lorem Ipsum passage, used since the 1500s</h3>
                <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum."
                </p>
                <h3>
                    Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
                </h3>
                <p>
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                    veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                    voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                    consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
                    porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
                    magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                    exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                    consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit
                    esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
                    voluptas nulla pariatur?"
                </p>
            </article>
        </div>
`;
	}
	updateTwoDivHandler() {
		document.getElementById('wysiwyg').innerHTML = `
                    <div class="wrapper">
                        <aside class="aside aside-1">
							<img src="https://static.fnac-static.com/multimedia/Images/FR/NR/30/0a/35/3476016/1540-1/tsp20150929150131/Steve-Jobs.jpg" />
							<img src="https://i2.linio.com/p/325a74e5686c58c647fc4af4a7c3914b-product.jpg" />
							<img src="https://static.fnac-static.com/multimedia/FR/Images_Produits/FR/fnac.com/Visual_Principal_340/0/7/6/3760181900670/tsp20120919144621/Coffret-Amitabh-Bachchan-3-Films.jpg" />
						</aside>
						<article class="main-2">
							<img src=${avatar} class="float-left" />
							<h1>The standard Lorem Ipsum</h1>
							<h3>The standard Lorem Ipsum passage, used since the 1500s</h3>
							<p>
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
								dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
								Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
								mollit anim id est laborum."
							</p>
							<h3>Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</h3>
							<p>
								"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
								laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
								architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
								sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
								voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
								amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
								labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
								nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
								consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
								nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
								pariatur?"
							</p>
							<h3>1914 translation by H. Rackham</h3>
							<p>
								"But I must explain to you how all this mistaken idea of denouncing pleasure and
								praising pain was born and I will give you a complete account of the system, and expound
								the actual teachings of the great explorer of the truth, the master-builder of human
								happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure,
								but because those who do not know how to pursue pleasure rationally encounter
								consequences that are extremely painful. Nor again is there anyone who loves or pursues
								or desires to obtain pain of itself, because it is pain, but because occasionally
								circumstances occur in which toil and pain can procure him some great pleasure. To take
								a trivial example, which of us ever undertakes laborious physical exercise, except to
								obtain some advantage from it? But who has any right to find fault with a man who
								chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain
								that produces no resultant pleasure?"
							</p>
							<h3>Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</h3>
							<p>
								"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
								voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
								occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
								mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
								expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque
								nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda
								est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut
								rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non
								recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
								voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
							</p>
							<h3>1914 translation by H. Rackham</h3>
							<p>
								"On the other hand, we denounce with righteous indignation and dislike men who are so
								beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire,
								that they cannot foresee the pain and trouble that are bound to ensue; and equal blame
								belongs to those who fail in their duty through weakness of will, which is the same as
								saying through shrinking from toil and pain. These cases are perfectly simple and easy
								to distinguish. In a free hour, when our power of choice is untrammelled and when
								nothing prevents our being able to do what we like best, every pleasure is to be
								welcomed and every pain avoided. But in certain circumstances and owing to the claims of
								duty or the obligations of business it will frequently occur that pleasures have to be
								repudiated and annoyances accepted. The wise man therefore always holds in these matters
								to this principle of selection: he rejects pleasures to secure other greater pleasures,
								or else he endures pains to avoid worse pains."
							</p>
						</article>
                    </div>
        `;
	}

	updateThreeDivHandler() {
		document.getElementById('wysiwyg').innerHTML = `
                    <div class="wrapper">
                        <aside class="aside aside-1">
							<img src="https://static.fnac-static.com/multimedia/Images/FR/NR/30/0a/35/3476016/1540-1/tsp20150929150131/Steve-Jobs.jpg" />
							<img src="https://i2.linio.com/p/325a74e5686c58c647fc4af4a7c3914b-product.jpg" />
                            <img src="https://static.fnac-static.com/multimedia/Images/FR/NR/4e/a0/5f/6266958/1540-0/tsp20170913225458/Playing-It-My-Way.jpg" />
                            <img src="https://static.fnac-static.com/multimedia/FR/Images_Produits/FR/fnac.com/Visual_Principal_340/0/7/6/3760181900670/tsp20120919144621/Coffret-Amitabh-Bachchan-3-Films.jpg" />
						</aside>
						<article class="main">
							<img src=${avatar} class="float-left" />
							<h1>The standard Lorem Ipsum</h1>
							<h3>The standard Lorem Ipsum passage, used since the 1500s</h3>
							<p>
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
								dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
								Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
								mollit anim id est laborum."
							</p>
							<h3>Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</h3>
							<p>
								"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
								laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
								architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
								sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
								voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
								amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
								labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
								nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
								consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
								nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
								pariatur?"
							</p>
							<h3>1914 translation by H. Rackham</h3>
							<p>
								"But I must explain to you how all this mistaken idea of denouncing pleasure and
								praising pain was born and I will give you a complete account of the system, and expound
								the actual teachings of the great explorer of the truth, the master-builder of human
								happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure,
								but because those who do not know how to pursue pleasure rationally encounter
								consequences that are extremely painful. Nor again is there anyone who loves or pursues
								or desires to obtain pain of itself, because it is pain, but because occasionally
								circumstances occur in which toil and pain can procure him some great pleasure. To take
								a trivial example, which of us ever undertakes laborious physical exercise, except to
								obtain some advantage from it? But who has any right to find fault with a man who
								chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain
								that produces no resultant pleasure?"
							</p>
							<h3>Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</h3>
							<p>
								"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
								voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
								occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
								mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
								expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque
								nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda
								est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut
								rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non
								recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
								voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
							</p>
							<h3>1914 translation by H. Rackham</h3>
							<p>
								"On the other hand, we denounce with righteous indignation and dislike men who are so
								beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire,
								that they cannot foresee the pain and trouble that are bound to ensue; and equal blame
								belongs to those who fail in their duty through weakness of will, which is the same as
								saying through shrinking from toil and pain. These cases are perfectly simple and easy
								to distinguish. In a free hour, when our power of choice is untrammelled and when
								nothing prevents our being able to do what we like best, every pleasure is to be
								welcomed and every pain avoided. But in certain circumstances and owing to the claims of
								duty or the obligations of business it will frequently occur that pleasures have to be
								repudiated and annoyances accepted. The wise man therefore always holds in these matters
								to this principle of selection: he rejects pleasures to secure other greater pleasures,
								or else he endures pains to avoid worse pains."
							</p>
						</article>
						<aside class="aside aside-2">
							<article>
								<header>
									<h1>Aside Post Lorem Ipsum passages</h1>
								</header>
								<aside>
									<time>15 Sep. 2018</time>
								</aside>
								<div>
									<div>
										<p>
											<strong>Lorem Ipsum</strong> is simply dummy text of the printing and
											typesetting industry. Lorem Ipsum has been the industry’s standard dummy
											text ever since the 1500s, when an unknown printer took a galley of type and
											scrambled it to make a type specimen book. It has survived not only five
											centuries, but also the leap into electronic typesetting, remaining
											essentially unchanged. It was popularised in the 1960s with the release of
											Letraset sheets containing Lorem Ipsum passages, and more recently with
											desktop publishing software like Aldus PageMaker including versions of Lorem
											Ipsum.
										</p>
										<footer>
											<strong>Tags: </strong>
											<a href="http://">Demo Theme</a>
										</footer>
									</div>
								</div>
							</article>
							<article>
								<header>
									<h1>Aside Post Lorem Ipsum passages</h1>
								</header>
								<aside>
									<time>15 Sep. 2018</time>
								</aside>
								<div>
									<div>
										<p>
											<strong>Lorem Ipsum</strong> is simply dummy text of the printing and
											typesetting industry. Lorem Ipsum has been the industry’s standard dummy
											text ever since the 1500s, when an unknown printer took a galley of type and
											scrambled it to make a type specimen book. It has survived not only five
											centuries, but also the leap into electronic typesetting, remaining
											essentially unchanged. It was popularised in the 1960s with the release of
											Letraset sheets containing Lorem Ipsum passages, and more recently with
											desktop publishing software like Aldus PageMaker including versions of Lorem
											Ipsum.
										</p>
										<footer>
											<strong>Tags: </strong>
											<a href="http://">Demo Theme</a>
										</footer>
									</div>
								</div>
							</article>
						</aside>
                    </div>
        `;
	}
	render() {
		return (
			<div className="post-container">
				<div className="post-list">
					<header className="header-1">
						<h1>Create Your Post</h1>
					</header>
					<PostItems entries={this.state.posts} />
				</div>

				<header className="header">
					<ReactTooltip />
					<button className="btn" data-tip="Bold" onClick={() => this.execCmdHandller('bold')}>
						<FontAwesomeIcon icon={faBold} />
					</button>
					<button className="btn" data-tip="Italic" onClick={() => this.execCmdHandller('italic')}>
						<FontAwesomeIcon icon={faItalic} />
					</button>
					<button className="btn" data-tip="Underline" onClick={() => this.execCmdHandller('underline')}>
						<FontAwesomeIcon icon={faUnderline} />
					</button>
					<button
						className="btn"
						data-tip="Hightlight Text"
						onClick={(e) => this.execCmdWithArgHandller('hiliteColor', 'yellow')}
					>
						H
					</button>
					<button
						className="btn"
						data-tip="Strikethrough"
						onClick={() => this.execCmdHandller('strikeThrough')}
					>
						<FontAwesomeIcon icon={faStrikethrough} />
					</button>
					<button className="btn" data-tip="Left" onClick={() => this.execCmdHandller('justifyLeft')}>
						<FontAwesomeIcon icon={faAlignLeft} />
					</button>
					<button className="btn" data-tip="Center" onClick={() => this.execCmdHandller('justifyCenter')}>
						<FontAwesomeIcon icon={faAlignCenter} />
					</button>
					<button className="btn" data-tip="Right" onClick={() => this.execCmdHandller('justifyRight')}>
						<FontAwesomeIcon icon={faAlignRight} />
					</button>
					<button className="btn" data-tip="Justify" onClick={() => this.execCmdHandller('justifyFull')}>
						<FontAwesomeIcon icon={faAlignJustify} />
					</button>
					<button className="btn" data-tip="Cut" onClick={() => this.execCmdHandller('cut')}>
						<FontAwesomeIcon icon={faCut} />
					</button>
					<button className="btn" data-tip="Copy" onClick={() => this.execCmdHandller('copy')}>
						<FontAwesomeIcon icon={faCopy} />
					</button>
					<button className="btn" data-tip="Indent" onClick={() => this.execCmdHandller('indent')}>
						<FontAwesomeIcon icon={faIndent} />
					</button>
					<button className="btn" data-tip="Outdent" onClick={() => this.execCmdHandller('outdent')}>
						<FontAwesomeIcon icon={faOutdent} />
					</button>
					<button className="btn" data-tip="Subscript" onClick={() => this.execCmdHandller('subscript')}>
						<FontAwesomeIcon icon={faSubscript} />
					</button>
					<button className="btn" data-tip="Superscript" onClick={() => this.execCmdHandller('superscript')}>
						<FontAwesomeIcon icon={faSuperscript} />
					</button>
					<button
						className="btn"
						data-tip="Unordered List"
						onClick={() => this.execCmdHandller('insertUnorderedList')}
					>
						<FontAwesomeIcon icon={faListUl} />
					</button>
					<button
						className="btn"
						data-tip="Ordered List"
						onClick={() => this.execCmdHandller('insertOrderedList')}
					>
						<FontAwesomeIcon icon={faListOl} />
					</button>
					<button className="btn" data-tip="Delete" onClick={() => this.deleteSelectedHandler()}>
						<FontAwesomeIcon icon={faTrash} />
					</button>
					<button className="btn" data-tip="Hyperlink" onClick={() => this.addLinkHandler()}>
						<FontAwesomeIcon icon={faLink} />
					</button>
					<button className="btn" data-tip="Unlink" onClick={() => this.addUnlinkHandler()}>
						<FontAwesomeIcon icon={faUnlink} />
					</button>
					<button className="btn" data-tip="Image" onClick={() => this.addImageHandler()}>
						<FontAwesomeIcon icon={faImage} />
					</button>
					<button className="btn" data-tip="Select All" onClick={() => this.execCmdHandller('selectAll')}>
						Select All
					</button>
					<button
						className="btn"
						data-tip="Single Column Template"
						onClick={() => this.updateSingleDivHandler()}
					>
						1-column
					</button>
					<button
						className="btn"
						data-tip="Double Column Template"
						onClick={() => this.updateTwoDivHandler()}
					>
						2-column
					</button>
					<button
						className="btn"
						data-tip="Triple Column Template"
						onClick={() => this.updateThreeDivHandler()}
					>
						3-column
					</button>
					<button
						className="btn"
						data-tip="Paragraph"
						onClick={() => this.execCmdHandller('insertParagraph')}
					>
						<FontAwesomeIcon icon={faParagraph} />
					</button>
					<select
						className="btn"
						data-tip="Headings"
						onChange={(e) => this.execCmdWithArgHandller('formatBlock', e.target.value)}
					>
						<option value="">Headings</option>
						<option value="H1">H1</option>
						<option value="H2">H2</option>
						<option value="H3">H3</option>
						<option value="H4">H4</option>
						<option value="H5">H5</option>
						<option value="H6">H6</option>
					</select>
					<select
						className="btn"
						data-tip="Select Font"
						onChange={(e) => this.execCmdWithArgHandller('fontName', e.target.value)}
					>
						<option value="">Select Font</option>
						<option value="Arial">Arial</option>
						<option value="Comis Sans MS">Comis Sans MS</option>
						<option value="Courier">Courier</option>
						<option value="Georgia">Georgia</option>
						<option value="Tahoma">Tahoma</option>
						<option value="Times New Roman">Times New Roman</option>
						<option value="Vardana">Vardana</option>
					</select>
					<select
						className="btn"
						data-tip="Select Font Size"
						onChange={(e) => this.execCmdWithArgHandller('fontSize', e.target.value)}
					>
						<option value="">FontSize</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
						<option value="7">7</option>
					</select>
					Fore Color:
					<input
						className="btn pad3"
						type="color"
						onChange={(e) => this.execCmdWithArgHandller('foreColor', e.target.value)}
					/>
					Background Color:
					<input
						className="btn pad3"
						type="color"
						onChange={(e) => this.execCmdWithArgHandller('hiliteColor', e.target.value)}
					/>
					<button className="btn" data-tip="Undo" onClick={() => this.execCmdHandller('undo')}>
						<FontAwesomeIcon icon={faUndo} />
					</button>
					<button className="btn" data-tip="Redo" onClick={() => this.execCmdHandller('redo')}>
						<FontAwesomeIcon icon={faRedo} />
					</button>
				</header>

				<form onSubmit={this.addPost}>
					<div className="wrapper-main">
						<div className="wysiwyg">
							<div id="wysiwyg" class="wrapper" contenteditable="true">
								<article class="main-1">
									<img src={avatar} class="float-left" />
									<h1>The standard Lorem Ipsum</h1>
									<h3>The standard Lorem Ipsum passage, used since the 1500s</h3>
									<p>
										"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
										nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
										fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
										culpa qui officia deserunt mollit anim id est laborum."
									</p>
									<h3>
										Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
									</h3>
									<p>
										"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
										doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
										veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
										voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
										consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
										porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
										velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
										magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
										exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
										consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit
										esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
										voluptas nulla pariatur?"
									</p>
								</article>
							</div>
						</div>
						<div class="wysiwyg-footer">
							<textarea ref={(a) => (this._textareaElement = a)} placeholder="Enter Post" hidden={true} />
							<button className="btn" data-tip="Click to Post" type="submit">
								Add Post
							</button>
						</div>
					</div>
				</form>
			</div>
		);
	}
}
