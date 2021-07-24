import React, { Component } from "react";

import './withSearch.css';

const withSearch = WrappedComponent => {
    return class extends Component {
        state = {
            searchTerm: ""
        };
        handleSearch = event => {
            this.setState({ searchTerm: event.target.value });
        };

        render() {
            return (
                <div>
                    <div className="search-box">
                        <input
                            className="Search"
                            onChange={this.handleSearch}
                            value={this.state.searchTerm}
                            type="search"
                            placeholder="Search here"
                        />
                    </div>
                    <WrappedComponent searchTerm={this.state.searchTerm} />
                </div>
            );
        }
    };
};
export default withSearch;