import React from 'react';
import SearchBar from './../../core/SearchBar/SearchBar';

export default class Home extends React.Component {

    state = {
        films: []
    } ;

    constructor( props ) {

        super( props );

        this.onFilms = this.onFilms.bind( this );
    }

    onFilms( films ) {

        this.setState( {
            films: films
        } );
    }

    render() {

        return (
            <>
                <SearchBar onFilms={this.onFilms} />
            </>
        );
    }

} ;