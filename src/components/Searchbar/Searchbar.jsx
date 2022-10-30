

import PropTypes from 'prop-types'
import { Component } from 'react'
import { BsSearch } from 'react-icons/bs';
import { SearchButton, SearchForm, SearchInput } from './Searchbar.stylled'

export class Searchbar extends Component {
    state = {
        searchText: "",
    }

    onInputChange = (e) => {
        this.setState({
            searchText: e.target.value,
        })
    }
    render() {
        return (
            <header>
                <SearchForm onSubmit={this.props.onSubmit}>
                    <SearchButton type="submit">
                        <BsSearch size="20" />
                    </SearchButton>

                    <SearchInput 
                        onChange={this.onInputChange}
                        name='searchInput'
                        type="text"
                        autoComplete="off"
                        value={this.state.searchText}
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </SearchForm>
            </header>
        )
    }
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired
}