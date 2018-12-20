import React, {Component} from 'react';
import style from './style.use.css'

export default class Test extends Component {
    componentWillMount() {
        // style.use()
    }
    componentWillUnmount() {
        // style.unuse()
    }
    render() {
        return(
            <div className = {style.box}>
                <div>
                    {'测试'}
                </div>
            </div>
        )
    }
}