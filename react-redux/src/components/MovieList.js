import {connect} from 'react-redux';
import React from 'react';

class MovieList extends React.Component {
  state = {
    
  };

//   changeTitle = e => {
//     e.preventDefault();
//     this.props.changeTitle(this.state.inputText);
//   };

  render() {
    return (
      <div>
        {/* <h1>{this.props.titleFromMSTP}</h1>
        <input
          type="text"
          value={this.state.inputText}
          onChange={e => this.setState({ inputText: e.target.value })}
        />
        <button onClick={this.changeTitle}>Change Title</button> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        movies: state.movies,
        moviesToWatch: state.moviesToWatch,
        user: state.user
    }
}

export default connect(mapStateToProps, {})(MovieList)