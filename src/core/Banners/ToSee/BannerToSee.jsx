import React from 'react';
import {Redirect} from 'react-router-dom';

export default class BannerToSee extends React.Component {

    state = {
        redirect: false
    } ;

    get count() {

        const count = parseInt(localStorage.getItem('count-to-see'));

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
                            redirect: <Redirect to="/see" />
                        } )
                    }
                >
                    <div>
                        <ion-icon name="eye"></ion-icon>
                        ( {this.count} )
                    </div>
                </section>
            </>
        ) ;
    }
    
};
