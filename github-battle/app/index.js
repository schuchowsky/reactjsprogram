'use strict';
var React =require('react');
var ReactDOM = require('react-dom');

var FriendsContainer = React.createClass({
  render: function(){
    var name = 'Tyler McGinnis'
    var friends = ['Ean Platter', 'Murphy Randall', 'Merrick Christensen']
    return (
      <div>
        <h3> Name: {name} </h3>
        <ShowList names={friends} />
      </div>
    )
  }
});

var ShowList = React.createClass({
  render: function(){
    var listItems = this.props.names.map(function(friend){
      return <li> {friend} </li>;
    });
    return (
      <div>
        <h3> Friends </h3>
        <ul>
          {listItems}
        </ul>
      </div>
    )
  }
});

var HelloWorld = React.createClass({
  render: function() {
    return (
      <div> Hello, {this.props.name} </div>

    );
  }
});

var ProfilePic = React.createClass({
   render: function() {
     return (
       <img src={'https://scontent.fbfh3-1.fna.fbcdn.net/v/t1.0-9/11764_365764506863463_594435071_n.jpg?oh=d4d610ba6ed283242b1c63f46f521122&oe=5808B7A5'} />
     )
   }
 });

 var Link = React.createClass({
   changeURL: function(){
     window.location.replace(this.props.href);
   },
   render: function(){
     return (
       <span
          style={{color: 'blue', cursor: 'pointer'}}
          onClick={this.changeURL}>
          {this.props.children}
        </span>
     )
   }
 });

 var ProfileLink = React.createClass({
   render: function() {
     return (
       <Link href={'https://www.fb.com/' + this.props.username}>
         {this.props.username}
       </Link>
     )
   }
 });

 var Avatar = React.createClass({
   render: function() {
     return (
       <div>
         <ProfilePic username={this.props.username} />
         <ProfileLink username={this.props.username} />
       </div>
     )
   }
 });

 <Avatar username="tylermcginnis" />

ReactDOM.render(<HelloWorld name="Tyler"/>, document.getElementById('app'));
ReactDOM.render(<FriendsContainer />, document.getElementById('friends'));
ReactDOM.render(<Avatar username="rafael.arenas.9699" />, document.getElementById('avatar'));
