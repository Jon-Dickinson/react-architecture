import React from "react"
import PropTypes from "prop-types";

const SearchResults = ({ articles = [] }) => (
  <div className="vertical-inline-flex bg-color--magenta pad-lr-20 pad-tb-10 shadow-3">
    <ul>
      {articles.map(({ webUrl, webTitle }) => (
        <li key={webUrl}>
          <a className="color-ffffff font-s--14" href={webUrl} target="_blank" rel="noopener noreferrer">
            {webTitle}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

SearchResults.propTypes = {
  articles: PropTypes.array
};

export default SearchResults;