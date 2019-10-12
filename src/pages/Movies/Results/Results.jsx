import React from 'react';
import ShowList from './../../../core/ShowList/ShowList';
import {Redirect} from 'react-router-dom'
import Back from './../../../core/Back/Back';

export default class Result extends React.Component {

    render() {

        return (
            <>
             {
                !this.props.location.state ?
                
                <Redirect to="/" /> :
                <>
                    <Back
                        target="/"
                    />
                    <ShowList items={
                        this.props.location.state.films
                    } />
                </>
            }
            </>

        ) ;
    }

} ;