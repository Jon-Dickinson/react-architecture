import React from "react";
import Search from "../class/ClassComponentC";

import fetchArticles from "../../api/API1";

class SearchContainer extends React.Component {
  state = {
    articles: []
  };

  performSearch = event => {
    return fetchArticles(event).then(data =>
      this.setState({ articles: data.response.results })
    );
  };

  render() {
    return (
      <div className="vertical-inline-flex bg-661fff pad-all-20 shadow-3">
        <p className="color-ffffff">guardianapis.com API</p>
        <Search
          performSearch={this.performSearch}
          articles={this.state.articles}
        />
      </div>
    );
  }
}

export default SearchContainer;