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
        this.inputSearch = React.createRef();     
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
   
            this.inputSearch.current.value = '';
            this.inputSearch.current.focus();
            this.inputSearch.current.setAttribute('placeholder' , search );

            this.setState( {
                errorSubmit: false
                ,search: ""
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
                        ref={this.inputSearch}
                        type="search" 
                        name="search"
                        id="search"
                        onChange={this.onChangeSearch}
                        autoComplete="off"
                    />
                    <button type="submit">search</button>
                    <span>{errorSubmit}</span>
                </form>
            </>
        ) ;
    }

} ;