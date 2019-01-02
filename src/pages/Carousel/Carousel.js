import React from 'react';
import style from './style.use.less'
import Carouse from '../../components/Carousel/Carousel'

export default class Test extends React.Component {
    componentWillMount() {
        style.use()
    }

    componentWillUnmount() {
        style.unuse()
    }

    render() {
        return ( 
            <div className = 'carouse'>   
                <Carouse>
                    <div className = 'box'>1</div>
                    <div className = 'box'>2</div>
                    <div className = 'box'>3</div>
                    <div className = 'box'>4</div>
                </Carouse>
            </div>
            
        )
    }
}