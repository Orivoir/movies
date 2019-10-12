import React from 'react';
import Back from './../../../core/Back/Back';
import {getKeys} from './../../../library/Storage';
import {searchMovieById} from './../../../API/themoviedb';
import ShowList from './../../../core/ShowList/ShowList';
import  './ToSee.css';


export default class Favorites extends React.Component {
    
    state = {
        movies: []
        ,idMovies: []
    } ;

    constructor(props) {

        super( props );
        
        const fav = getKeys( /^to-see-/ );

        this.state.idMovies = fav.map( key => {

            const full = key.split('-');

            full.shift();
            full.shift();

            const id = full[0];

            return id;
        } ) ;
    }

    componentDidMount(){

        this.toSee();
    }

    toSee() {

        const {idMovies} = this.state;

        if( !idMovies.length ) return;

        searchMovieById( idMovies[0] ).then( data => {

            idMovies.shift();

            this.setState( state => ({
                movies: [...state.movies , data]
                ,idMovies: idMovies
            }) , () => (
                this.toSee()
            ) ) ;

        } ) ;
    }
 
    render() {

        const {movies} = this.state;

        return(
            <>
                <Back target="/" />

                <ShowList
                    items={movies}
                />
            </>
        );
    }
};
