import React from 'react';
import SearchBar from './../../core/SearchBar/SearchBar';
import {Redirect} from 'react-router-dom';
import BannerFavorites from './../../core/Banners/Favorites/BannerFavorites';
import BannerToSee from './../../core/Banners/ToSee/BannerToSee';

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
                <BannerFavorites />
                <BannerToSee />
                {
                    films.length ?
                    <Redirect to={
                        {
                            pathname: '/results'
                            ,state: {films: films}
                        }
                    } /> : null
                }
            </>
        );
    }

} ;