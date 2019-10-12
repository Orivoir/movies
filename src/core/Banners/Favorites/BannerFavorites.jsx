import React from 'react';
import './BannerFavorites.css';
import {Redirect} from 'react-router-dom';

export default class BannerFavorites extends React.Component {
    
    state = {
        redirect: false
    } ;

    get count() {

        const count = parseInt(localStorage.getItem('count-favorites'));

        return !isNaN(count) ? count: 0;
    }

    render() {

        const {redirect} = this.state;

        return(
            <>
                {redirect ? redirect: null}
                <section
                    onClick={
                        () => this.setState( {
                            redirect: <Redirect to="/favorites" />
                        } )
                    }
                >

                    <div>
                        <ion-icon name="heart"></ion-icon>
                        ( {this.count} )
                    </div>

                </section>
            </>
        );
    }
};
