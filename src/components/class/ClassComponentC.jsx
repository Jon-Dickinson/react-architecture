import React from "react";
import SearchResults from "../function/FunctionComponentC";
import PropTypes from "prop-types";

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  //  runs after DOM render
  componentDidMount() { }

  //  removes and updates
  componentWillUnmount() { }

  function() {
    this.setState({  });
  }
   
  handleChange = event => {
    let value = event.target.value;
    this.setState({ value });
    this.props.performSearch(value);
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="vertical-inline-flex bg-color--blue pad-all-20 shadow-3">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            className="input-outline"
            placeholder="Search ..."
          />
        </form>
        <div className="vertical-inline-flex">
          <SearchResults articles={this.props.articles} />
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  performSearch: PropTypes.func,
  articles: PropTypes.array
};

export default Search;