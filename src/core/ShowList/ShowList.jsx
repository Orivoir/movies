import React from 'react';
import './ShowList.css';

export default class ShowList extends React.Component {

    constructor( props ) {

        super(props);
        
        this.onFavorite = this.onFavorite.bind( this );
        this.onSee = this.onSee.bind( this );
    }

    removeToSee( item ) {

        const itemName = `to-see-${item.id}-${item.title.slice(0,3)}`;

        if( localStorage.getItem( itemName ) ) {
            this.toSeeCount( -1 );
        }

        localStorage.removeItem( `${itemName}`) ;
        this.forceUpdate();
    }

    favoris( item ) {

        const status = localStorage.getItem( `favorite-${item.id}-${item.title.slice(0,3)}`) ;
        return !!status;
    }

    toSee( item ) {
        
        const status = localStorage.getItem( `to-see-${item.id}-${item.title.slice(0,3)}`) ;
        return !!status;
    }

    favoriteCount( many ) {

        let count = parseInt( localStorage.getItem('count-favorites') ) ;
        count = !isNaN( count ) ? count: 0;

        count += many;

        localStorage.setItem( 'count-favorites' , count );

        return count;
    }

    toSeeCount( many ) {
        
        let count = parseInt( localStorage.getItem('count-to-see') ) ;
        count = !isNaN( count ) ? count: 0;

        count += many;

        localStorage.setItem( 'count-to-see' , count );

        return count;
    }
    
    /**
     * @BindMethod [constructor]
     * @param {SyntheticEvent} e 
     */
    onFavorite( e ) {

        const item = e.item;
        const method = (!item.statusFavorite ? 'set':'remove')+'Item';
        
        this.favoriteCount( /set/.test(method) ? 1 : -1 );

        localStorage[method]( `favorite-${item.id}-${item.title.slice(0,3)}` , !item.statusFavorite ? true : undefined );
        
        this.forceUpdate();
    }

    /**
     * @BindMethod [constructor]
     * @param {SyntheticEvent} e 
     */
    onSee( e ) {
        
        const 
            item  = e.item
            ,method = (!item.status2see ? 'set':'remove')+'Item'
        ;
        
        this.toSeeCount( /set/.test(method) ? 1 : -1 );

        localStorage[method]( `to-see-${item.id}-${item.title.slice(0,3)}` , !item.status2see ? true : undefined );

        this.forceUpdate();
    }

    render() {

        const {items} = this.props;

        return (
            <ul className="ShowList">
                {
                    items.map( item => (
                        <li key={(Date.now()/(Math.random()*1.25)).toString() }>
                            <section>
                                <figure>
                                    <img
                                        src={`http://image.tmdb.org/t/p/w300${( item.poster_path || item.backdrop_path )}`}
                                        alt="poster film"
                                    />
                                </figure>
                            </section>

                            <section>
                                <h2>{item.title || item.original_title}</h2>

                                <p className="overview">
                                    {item.overview || 'résumé indisponible'}
                                </p>

                                <div>
                                    <button
                                        onClick={e => {
                                            e.preventDefault();
                                            e.item = item;
                                            e.item.statusFavorite = this.favoris(item);
                                            
                                            this.removeToSee( item );
                                            this.onFavorite( e );
                                        }}
                                        className="favorite"
                                    >
                                        <ion-icon name={`heart${!this.favoris(item) ? "-broken":""}`}></ion-icon>
                                        <i class={`ion-icon fas fa-heart${this.favoris(item) ? "-broken":""}`}></i>
                                    </button>
                                    
                                    <button
                                        onClick={e => {
                                            e.preventDefault();
                                            e.item = item;
                                            e.item.status2see = this.toSee(item);
                                            
                                            if( !this.favoris( item ) ) {
                                                this.onSee( e );
                                            }
                                        }}
                                        className="to-see"
                                    >
                                        <i class={`ion-icon far fa-eye${!this.toSee(item) ? '':'-slash'}`}></i>
                                    </button>
                                </div>

                            </section>
                        </li>
                    ) )
                }
            </ul>
        ) ;
    }
} ;