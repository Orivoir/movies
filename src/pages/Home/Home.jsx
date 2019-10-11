import React from 'react';
import SearchBar from './../../core/SearchBar/SearchBar';
import ShowList from './../../core/ShowList/ShowList';

export default class Home extends React.Component {

    state = {
        films: []
    } ;

    constructor( props ) {

        super( props );

        this.onFilms = this.onFilms.bind( this );
    }

    /**
     * @BindMethod [constructor]
     * @param {array} films 
     */
    onFilms( films ) {

        this.setState( {
            films: films
        } );
    }

    render() {

        const {films} = this.state;

        return (
            <>
                <SearchBar onFilms={this.onFilms} />
                <ShowList 
                    items={films}
                />
            </>
        );
    }

} ;