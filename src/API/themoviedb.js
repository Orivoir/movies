const API_KEY = '1ccc920bf3f9b1d1ab7eb98254b66e04';

export const searchFilmsByText = function( text ) {

    return new Promise( ( resolve , reject ) => {
        
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${text}`,{
            method: 'GET'
            ,headers: {
                'Content-Type': 'application/json'
            }
        })
        .then( response => response.json() )
        .then( data => resolve( data ) )
        .catch( err => reject( err ) )
    } ) ;
} ;