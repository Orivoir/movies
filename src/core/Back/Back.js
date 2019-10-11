import React , {useState} from 'react';
import {Redirect} from 'react-router-dom';
import './Back.css';

function Back({target,state}) {

    const [redirect,setRedirect] = useState( false );

    return (
        <>
        {
            !redirect ?
                <section
                onClick={() => setRedirect( <Redirect to={
                    {
                        pathname: target
                        ,state: state || {}
                    }
                } /> ) }
                >
                <ion-icon name="arrow-round-back"></ion-icon>
                <span>Retour</span>
                </section> :
                redirect
        }
        </>
    );
}

export default Back;