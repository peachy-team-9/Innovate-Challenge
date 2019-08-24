import React from 'react';
import './App.css';
import './style.css';

class SearchArea extends React.Component {
	 render() {
		  return (
				<div> Insert Search Stuff here </div>
		  );
	 }
}

function InterestedStar(props) {
	 var source = "notfavorite.png";
	 if (props.value.interested)
		  source = "favorite.png";
	 return (
		  <input type="image" class="favorite-star" onClick={props.onClick} src={source} />
	 );
}

class SchoolCard extends React.Component {

	 render() {
		  return (
				<table class="tg greedy-width">
					 <tr>
						  <th class="tg th" rowspan="2"><img class="card-school-picture" src={this.props.picture} /></th>
						  <th class="tg th greedy-width">{this.props.name} <br /> {this.props.interestedCnt} Interested </th>
						  <th class="tg th favorite-star"><InterestedStar value={this.props} onClick={() => this.props.onClick(this.props)} /></th>
					 </tr>
					 <tr>
						  <td class="tg td" colspan="2">{this.props.description}</td>
					 </tr>
				</table>
		  );
	 }
}

class SearchResults extends React.Component {

	 constructor(props) {
		  super(props);
		  this.state = {
				schoolCards: props.schoolCards
		  };
	 }

	 onClick(cardKey) {
		  const cards = this.state.schoolCards.slice();
		  var keys = cards.map(function (card) { return card[5]; });
		  var idx = keys.indexOf(cardKey);
		  cards[idx][3] = !cards[idx][3];
		  this.setState({ cards: cards });
	 }

	 renderSchoolCard(card) {
		  return (
				<SchoolCard key={card[5]}
					 picture={card[0]}
					 name={card[1]}
					 description={card[2]}
					 interested={card[3]}
					 interestedCnt={card[4]}
					 onClick={() => this.onClick(card[5])}
				/>
		  );
	 }

	 render() {
		  const schoolCards = this.state.schoolCards;
		  const listItems = this.state.schoolCards.map((card) =>
				<li>{this.renderSchoolCard(card)}</li>
		  );

		  return (
				<ul>{listItems}</ul>
		  );
	 }
}

class Details extends React.Component {
	 render() {
		  return (
				<div className="shopping-list">
					 Put stuff here
            </div>
		  );
	 }
}

function App() {
	 const seedData = [["clarksburg.png", "Clarksburg High School", "To Provide a blah blah blah", true, 15, 1],
	 ["montgomery.png", "Montgomery Elementary School", "Home of the Mountain Lions", false, 9, 2],
	 ["lorem.png", "Lorem Ipsum Middle", "Lorem Ipsum dolor sit amet, consectetur blah blah", false, 0, 3]];

	 return (

		  <div class="container">

				<div class="middle">

					 <div class="container">
						  <main class="content">
								<div id="search">

									 <SearchArea />

								</div>
								<div id="results">

									 <SearchResults schoolCards={seedData} />

								</div>
								<div id="details">

									 <Details />

								</div>
						  </main>
					 </div>

					 <aside class="right-sidebar" backgroundColor="blue">
						  rightsidebar.jpg
					  </aside>

					 <aside class="left-sidebar" backgroundColor="red">
						  leftsidebar.jpg
					 </aside>

				</div>
		  </div>
	 );
}

export default App;
