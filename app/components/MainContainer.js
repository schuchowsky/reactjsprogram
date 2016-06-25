var React = require('react');
var styles = require('../styles');

function MainContainer({children}){
  return (
    <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
      {children}
    </div>
  )
}

module.exports = MainContainer;
