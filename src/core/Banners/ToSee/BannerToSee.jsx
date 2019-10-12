import React from 'react';

export default class BannerToSee extends React.Component {

    get count() {

        const count = parseInt(localStorage.getItem('count-to-see'));

        return !isNaN(count) ? count: 0;
    }

    render() {

        return(
            <section>
                <div>
                    <ion-icon name="eye"></ion-icon>
                    ( {this.count} )
                </div>
            </section>
        ) ;
    }
    
};
