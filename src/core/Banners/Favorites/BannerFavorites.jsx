import React from 'react';
import './BannerFavorites.css';

export default class BannerFavorites extends React.Component {
    
    get count() {

        const count = parseInt(localStorage.getItem('count-favorites'));

        return !isNaN(count) ? count: 0;
    }

    render() {

        return(
            <section>

                <div>
                    <ion-icon name="heart"></ion-icon>
                    ( {this.count} )
                </div>

            </section>
        );
    }
};
