var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var UserDetailsWrapper = require('./UserDetailsWrapper');
var UserDetails = require('./UserDetails');
var Link = require('react-router').Link;
var MainContainer = require('./MainContainer');
var Loading = require('./Loading')

function StartOver() {
  return (
    <div className='col-sm-12' style={styles.space}>
      <Link to='/playerOne'>
        <button type='button' className='btn btn-lg btn-danger'>Start Over</button>
      </Link>
    </div>
  )
}

function Results ({scores, playersInfo, isLoading}) {
  if(isLoading === true) {
    return (
      <Loading />
    )
  }
  if(scores[0] === scores[1]){
    return (
      <MainContainer>
        <h1> It's a tie!</h1>
        <StartOver />
      </MainContainer>
    )
  }

  var winningIndex = scores[0] > scores[1] ? 0 : 1;
  var losingIndex = winningIndex === 0 ? 1 : 0;
  return (
    <MainContainer>
      <h1>Results</h1>
      <div className='col-sm-8 col-sm-offset-2'>
        <UserDetailsWrapper header='Winner'>
          <UserDetails score={scores[winningIndex]} info={playersInfo[winningIndex]}/>
        </UserDetailsWrapper>
        <UserDetailsWrapper header='Loser'>
          <UserDetails score={scores[losingIndex]} info={playersInfo[losingIndex]}/>
        </UserDetailsWrapper>
      </div>
      <StartOver />
    </MainContainer>
  )
}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
}

module.exports = Results;
