import React, {Component} from 'react';
import style from './style.use.less'

export default class Test extends Component {
    static defaultProps = {
        step: 2000
    }

    constructor(props) {
        super(props)
        this.state = {
            currentCarousel: 0,
            translateList: [],
        }
    }

    componentWillMount() {
        style.use()
    }

    componentWillUnmount() {
        style.unuse()
        clearInterval(this.timerID);
    }

    componentDidMount() {
        this.getTranslateList();
        this.timerID = setInterval(() => {
                this.setState(pre => {
                    pre.currentCarousel++
                    return {
                        currentCarousel: pre.currentCarousel%4
                    }
                })
                this.getTranslateList();
            },
            this.props.step
        );
        
        
    }

    getTranslateList() {
        let list = [];
        let currentCarousel = this.state.currentCarousel;
        this.props.children.forEach((item, index)=> {
            if (currentCarousel === index) {
                list.push(0)
                if (this.props.children.length - 1 === index) {
                    list[0] = 100
                }
            } else if (this.props.children.length - 1 === index && currentCarousel === 0) {
                list.push(-100)
            } else if (currentCarousel === index - 1) {
                list.push(100)
            } else if (currentCarousel === index + 1) {
                list.push(-100)
            } else {
                list.push(300)
            }
        })
        this.setState({
            translateList: list
        })
    }

    render() {
        return( 
            <div className = 'carousel-container'>
                {this.props.children.map((item, index) => {
                    return <div className = {`carousel-item ${this.state.translateList[index] === 300 ? '' : 'has-animate'}`} style = {{transform: `translateX(${this.state.translateList[index]}%)`}} key = {index} >{item}</div>
                })}
            </div>
        )
    }
}