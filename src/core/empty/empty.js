import React , {useState} from 'react';
import './empty.css';
import {Redirect} from 'react-router-dom';

function Empty({content,target}) {

    const [redirect,setRedirect] = useState( false );

    return (
        <>
            {redirect}
            <p className="Empty">
                <strong>{content}</strong>
                &nbsp;sont actuellement vide ! 
                {
                    target &&
                    <>
                    <br />
                    vous pouvez les remplir
                    <button
                        onClick={() => setRedirect( <Redirect to={target} /> ) }
                    >
                        ici
                    </button>
                    </>
                }
            </p>
        </>
    );
}

export default Empty;