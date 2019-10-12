export const getKeys =  function( regex ) {

    const r = regex instanceof RegExp ? regex: new RegExp( regex.toString() ) ;

    return Object.keys( localStorage ).filter( key => r.test( key ) ) ;
} ;