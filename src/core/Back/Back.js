import React , {useState} from 'react';
import {Redirect} from 'react-router-dom';
import './Back.css';

function Back({target,state}) {

    const [redirect,setRedirect] = useState( false );

    return (
        <>
        {
            !redirect ?
                <a 
                    href="/"
                    onClick={e => e.preventDefault()}
                >
                    <section
                        onClick={() => setRedirect( <Redirect to={
                            {
                                pathname: target
                                ,state: state || {}
                            }
                        } /> ) }
                        className="Back"
                    >
                    <i class="ion-icon fas fa-hand-point-left"></i>
                    <span>Retour</span>
                    </section>
                </a>:
                redirect
        }
        </>
    );
}

export default Back;