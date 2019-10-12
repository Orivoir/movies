import React from 'react';
import Back from './../../../core/Back/Back';
import {getKeys} from './../../../library/Storage';
import {searchMovieById} from './../../../API/themoviedb';
import ShowList from './../../../core/ShowList/ShowList';
import  './Favorites.css';

export default class Favorites extends React.Component {
    
    state = {
        movies: []
        ,idMovies: []
    } ;

    constructor(props) {

        super( props );
        
        const fav = getKeys( /^favorite-/ );

        this.state.idMovies = fav.map( key => {

            const full = key.split('-');

            full.shift();

            const id = full[0];

            return id;
        } ) ;
    }

    componentDidMount(){

        this.favorite();
    }

    favorite() {

        const {idMovies} = this.state;

        if( !idMovies.length ) return;

        searchMovieById( idMovies[0] ).then( data => {

            idMovies.shift();

            this.setState( state => ({
                movies: [...state.movies , data]
                ,idMovies: idMovies
            }) , () => (
                this.favorite()
            ) ) ;

        } ) ;
    }
 
    render() {

        const {movies} = this.state;

        return(
            <>
                <Back target="/" />

                <ShowList
                    items={movies} name="favoris"
                />
            </>
        );
    }
};
