var React = require('react');
var Results = require('../components/Results');
var githubHelpers = require('../utils/githubHelpers');

var ResultsContainer = React.createClass({
  getInitialState: function(){
    return {
      isLoading: true,
      scores: []
    }
  },
  componentDidMount: function(){
    console.log(this.props.location.state.playersInfo)
    githubHelpers.battle(this.props.location.state.playersInfo)
      .then( scores => {
        this.setState({
          scores: scores,
          isLoading: false
        })
      })
  },
  render: function(){
    return (
      <Results
        isLoading={this.state.isLoading}
        scores={this.state.scores}
        playersInfo={this.props.location.state.playersInfo}/>
    )
  }
});

module.exports = ResultsContainer;
