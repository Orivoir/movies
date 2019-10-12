import React from 'react';
import './ShowList.css';
import ShowItem from './ShowItem';
import Empty from './../empty/empty';

export default class ShowList extends React.Component {

    render() {

        const {items,name} = this.props;

        return (
            <>
                {
                    !items.length &&
                    <Empty content={`vos films ${name}`} target="/" />
                }
                <ul className="ShowList">
                    {
                        items.map( item => (
                            <ShowItem item={item} />
                        ) )
                    }
                </ul>
            </>
        ) ;
    }
} ;