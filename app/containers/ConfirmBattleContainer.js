var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/githubHelpers');

var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      isLoading: true,
      playersInfo: [],
    }
  },
  componentDidMount: function () {
    var query = this.props.location.query;
    console.log('componentDidMount');
    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
      .then( players => {
        this.setState({
          isLoading: false,
          playersInfo: [players[0], players[1]]
        })
      });

  },
  handleInitiateBttle: function(){
    this.context.router.push({
      pathname: '/results',
      state: {
        playersInfo: this.state.playersInfo
      }
    })
  },
  render: function () {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playersInfo={this.state.playersInfo}
        onInitiateBattle={this.handleInitiateBttle} />
    )
  }
});

module.exports = ConfirmBattleContainer;
