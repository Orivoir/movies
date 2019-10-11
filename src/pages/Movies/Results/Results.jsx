import React from 'react';
import ShowList from './../../../core/ShowList/ShowList';
import {Redirect} from 'react-router-dom'

export default class Result extends React.Component {

    render() {


        return (
            <>
             {
                !this.props.location.state ?
                
                <Redirect to="/" /> :
                <>
                    <ShowList items={
                        this.props.location.state.films
                    } />
                </>
            }
            </>

        ) ;
    }

} ;