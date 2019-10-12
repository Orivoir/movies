const 
    API_KEY = '1ccc920bf3f9b1d1ab7eb98254b66e04'
    ,headers = new Headers()
;
headers.append( 'Content-Type' ,'application/json' );

export const searchMoviesByText = function( text ) {

    return new Promise( ( resolve , reject ) => {
        
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${text}&language=fr`,{
            method: 'GET'
            ,headers: headers
        })
        .then( response => response.json() )
        .then( data => resolve( data ) )
        .catch( err => reject( err ) )
    } ) ;
} ;

export const searchMovieById = function( id ) {

    return new Promise( ( resolve , reject ) => {
        
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=fr&external_source=imdb_id`,{
            method: 'GET'
            ,headers: headers
        })
        .then( response => response.json() )
        .then( data => resolve( data ) )
        .catch( err => reject( err ) )
    } ) ;

} ;