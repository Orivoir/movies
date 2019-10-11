import React from 'react';
import {searchFilmsByText} from './../../API/themoviedb';
import './SearchBar.css';

export default class SearchBar extends React.Component {

    state = {
        search: ""
        ,errorSubmit: false
    } ;

    constructor(props) {

        super( props );

        this.onChangeSearch = this.onChangeSearch.bind( this );     
        this.onSubmitSearch = this.onSubmitSearch.bind( this );     
    }

    /**
     * @BindMethod [constructor]
     * @param {SyntheticEvent} e 
     */
    onSubmitSearch( e ) {

        e.preventDefault();

        const {search} = this.state;

        if( search.trim().length < 2 ) {

            this.setState( {
                errorSubmit: "Taille de texte invalide"
            } ) ;

        } else{
   
            this.setState( {
                errorSubmit: false
            } , () => {
                searchFilmsByText( search )
                .then( data => {
                    this.props.onFilms( data.results );
                } ) ;
            } ) ;
        }
    }

    /**
     * @BindMethod [constructor]
     * @param {SyntheticEvent} e 
     */
    onChangeSearch( e ) {

        e.preventDefault();

        this.setState( {
            search: e.target.value
        } ) ;
    }
    
    render() {

        const {errorSubmit} = this.state;

        return (
            <>
                <form onSubmit={this.onSubmitSearch}>
                    <label htmlFor="search">search movies</label>
                    <input
                        type="search" 
                        name="search"
                        id="search"
                        onChange={this.onChangeSearch}
                    />
                    <button type="submit">search</button>
                    <span>{errorSubmit}</span>
                </form>
            </>
        ) ;
    }

} ;