import React from 'react';
import './BannerFavorites.css';
import './../Banner.css';
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
                    className="banner banner-favorite"
                    onClick={
                        () => this.setState( {
                            redirect: <Redirect to="/favorites" />
                        } )
                    }
                >

                    <div>
                        <i className="ion-icon fas fa-heart"></i>
                        <span>( {this.count} )</span>
                    </div>

                    <p>
                        Ullamco velit et et laborum enim laboris.
                        Cillum ullamco fugiat eu consectetur non Lorem dolor fugiat consectetur ut.
                        Voluptate occaecat nostrud esse ullamco consequat reprehenderit adipisicing pariatur officia sint.
                        Ut id id dolore id mollit aute amet in pariatur irure est aute.
                        Adipisicing duis mollit mollit reprehenderit occaecat consectetur aliqua deserunt.
                        Vos films préférés !
                    </p>

                </section>
            </>
        );
    }
};
