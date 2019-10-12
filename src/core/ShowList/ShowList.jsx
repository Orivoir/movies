import React from 'react';
import './ShowList.css';
import ShowItem from './ShowItem';

export default class ShowList extends React.Component {

    render() {

        const {items} = this.props;

        return (
            <ul className="ShowList">
                {
                    items.map( item => (
                        <ShowItem item={item} />
                    ) )
                }
            </ul>
        ) ;
    }
} ;