import React, {Component} from 'react';
import style from './style.use.less'

export default class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weekList: [
                {name: '一', className: ''},
                {name: '二', className: ''},
                {name: '三', className: ''},
                {name: '四', className: ''},
                {name: '五', className: ''},
                {name: '六', className: ''},
                {name: '日', className: ''}
            ],
            dayList: [
                {
                    day: '01',
                    className: '',
                },
                {
                    day: '02',
                    className: '',
                },
                {
                    day: '03',
                    className: '',
                },
                {
                    day: '04',
                    className: '',
                },
                {
                    day: '05',
                    className: '',
                },
                {
                    day: '06',
                    className: '',
                },
                {
                    day: '07',
                    className: '',
                }
            ]
        }

        this.renderHeader = this.renderHeader.bind(this);
        this.renderBody = this.renderBody.bind(this)
    }

    componentWillMount() {
       style.use()
    }
    componentWillUnmount() {
       style.unuse()
    }

    renderHeader() {
        return(
            <div className = 'calendar-header'>头部</div>
        )
    }

    renderBody() {
        return(
            <div className = 'calendar-body'>
                <div className = 'week-container'>
                    {this.state.weekList.map(week => {
                        return <div key = {week.name} className = {`week ${week.className}`}>{week.name}</div>
                    })}
                </div>
                <div className = 'day-container'>
                    {this.state.dayList.map( dayObject => {
                        return <div key = {dayObject.day} className = {`day ${dayObject.className}`}>{dayObject.day}</div>
                    })}
                </div>
            </div>
        )
    }

    render() {
        return(
            <div className = 'calendar'>
                {this.renderHeader()}
                {this.renderBody()}
            </div>
        )
    }
}