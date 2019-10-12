import React from 'react';
import {searchMoviesByText} from './../../API/themoviedb';
import './SearchBar.css';

export default class SearchBar extends React.Component {

    state = {
        search: ""
        ,errorSubmit: false
        ,error: false
    } ;

    constructor(props) {

        super( props );

        this.onChangeSearch = this.onChangeSearch.bind( this );     
        this.onSubmitSearch = this.onSubmitSearch.bind( this );
        this.onBlurSearch = this.onBlurSearch.bind( this );
        this.inputSearch = React.createRef();     
    }

    /**
     * @BindMethod [constructor]
     * @param {SyntheticEvent} e 
     */
    onBlurSearch( e ) {

        this.setState( {
            errorSubmit: false,
            error: false
        } ) ;
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
                errorSubmit: "Taille de texte invalide",
                error: true
            } ) ;

        } else{
   
            this.inputSearch.current.value = '';
            this.inputSearch.current.focus();
            this.inputSearch.current.setAttribute('placeholder' , search );

            this.setState( {
                errorSubmit: false
                ,error: false
                ,search: ""
            } , () => {
                searchMoviesByText( search )
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

        const error = e.target.value.trim() < 2; 

        this.setState( {
            search: e.target.value
            ,error: error
        } ) ;
    }
    
    render() {

        const {errorSubmit,error} = this.state;

        return (
            <>
                <form class="SearchBar" onSubmit={this.onSubmitSearch}>
                    {/* <label htmlFor="search">search movies</label> */}
                    
                    <input
                        ref={this.inputSearch}
                        type="search" 
                        name="search"
                        id="search"
                        className={ error ? 'error': '' }
                        onChange={this.onChangeSearch}
                        autoComplete="off"
                        placeholder={ errorSubmit ? errorSubmit : "cherchez films ..."}
                        onBlur={this.onBlurSearch}
                    />
                    <button type="submit">
                        <ion-icon name="search"></ion-icon>
                    </button>
                </form>
            </>
        ) ;
    }

} ;