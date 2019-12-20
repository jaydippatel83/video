import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onInputChange = event => {
        this.setState({ term: event.target.value });
    };
    onFormSubmit = event => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    }

    render() {
        return (
            <div className ="search-bar ui segment container">
                <form className ="ui form" onSubmit={this.onFormSubmit}>
                    <div className ="field">
                        <div className="ui action input">
                            <input type="text" value={this.state.term} onChange={this.onInputChange} placeholder="Search..." />
                            <button className="ui youtube button">
                                <i className="youtube icon"></i>
                                Search
                            </button>
                        </div>

                    </div>
                </form>
            </div>
        )
    };
};
export default SearchBar;