import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.searchTermSubmit(this.state.term);
  };

  // We do not put on a set of parentheses when we pass a callback function to an event handler like onChange
  render() {
    return (
      <div>
        <h1 class="ui header center aligned">Image Search</h1>
        <div className="ui inverted segment">
          <div className="ui inverted form">
            <form onSubmit={this.onFormSubmit} className="ui form">
              <div className="field">
                <div className="ui icon input">
                  <input
                    type="text"
                    value={this.state.term}
                    onChange={e => this.setState({ term: e.target.value })}
                  />
                  <i class="search icon"></i>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
