import React, {Component} from 'react';
import style from './style.use.less';

export default class Test extends Component {
    static defaultProps = {
        step: 2000
    }

    constructor(props) {
        super(props)
        this.state = {
            currentCarousel: 0,
            translateList: [],
            animationStep: 1
        }

        this.handerCarouselBodyMouseOver = this.handerCarouselBodyMouseOver.bind(this);
        this.handerCarouselBodyMouseOut = this.handerCarouselBodyMouseOut.bind(this);
        this.handerCarouselFooterMouseOver = this.handerCarouselFooterMouseOver.bind(this);
        this.renderIndicators = this.renderIndicators.bind(this);
        this.getIndicatorsActive = this.getIndicatorsActive.bind(this);
        this.handlerNext = this.handlerNext.bind(this);
        this.handlerTransitionEnd = this.handlerTransitionEnd.bind(this);
    }

    componentWillMount() {
        style.use()
    }

    componentWillUnmount() {
        style.unuse()
        this.stopCarousel()
    }

    componentDidMount() {
        this.startCarousel()
        
    }

    /**
     * @description 开始轮播
     */
    startCarousel() {
        this.stopCarousel()
        this.timerID = setInterval(() => {
                console.log(this.state.currentCarousel)
                this.handlerCarousel()  
            },
            this.props.step
        );
    }

    handlerCarousel() {
        if (this.state.currentCarousel % (this.props.children.length + 1) !== this.props.children.length) {
            this.setState(pre => {
                pre.currentCarousel++;
                return {
                    animationStep: 1,
                    currentCarousel: pre.currentCarousel % (this.props.children.length + 1)
                }
            })
        }
    }

    handlerTransitionEnd() {
        if (this.state.currentCarousel % (this.props.children.length + 1) === this.props.children.length) {
            let step = this.state.animationStep;
            // requestAnimationFrame(() => {
                this.setState(pre => {
                    return {
                        animationStep: 0,
                        currentCarousel: 0,
                    }
                })
            // })
        }
    }

    /**
     * @description  停止轮播
     */
    stopCarousel() {
        clearInterval(this.timerID);
    }


    /**
     * @description 指示按钮的mouseover事件
     */
    handerCarouselFooterMouseOver(currentIndex) {
        this.setState({
            currentCarousel: currentIndex
        });
    }

    /**
     * @description 轮播的mouseover事件
     */
    handerCarouselBodyMouseOver() {
        this.stopCarousel();
    }

    /**
     * @description 轮播的mouseout事件
     */
    handerCarouselBodyMouseOut() {
        this.startCarousel();
    }

    /**
     * @description 轮播的mouseout事件
     */
    handlerNext() {
        this.handlerCarousel();
    }

    getIndicatorsActive(index) {
        let active;
        if (this.state.currentCarousel === index || this.state.currentCarousel === index + this.props.children.length) {
            return 'active';
        }
        return ''
    }
  

    /**
     * @description 导航的指示按钮
     */
    renderIndicators() {
        
        return (
            <div className = 'carousel-footer'>
                <ul className = 'indicators-container'>
                    {this.props.children.map((item, index) => {
                        let active = this.getIndicatorsActive(index)
                        return <li onMouseOver = {() => this.handerCarouselFooterMouseOver(index)} className = {`indicators-item ${active}`} key = {index} ></li>
                    })}
                </ul>
            </div>
        )
    }

    render() {
        return( 
            <div className = 'carousel-container' onMouseOver = {this.handerCarouselBodyMouseOver} onMouseOut = {this.handerCarouselBodyMouseOut}>
                <div className = 'carousel-body' onTransitionEnd = {this.handlerTransitionEnd} style = {{transition: `transform ${this.state.animationStep}s`,width: `${(this.props.children.length+2)*100}%`, transform: `translateX(${-100/(this.props.children.length+2)*(this.state.currentCarousel+1)}%)`}}>
                    <div className = {`carousel-item`} style = {{width: `${100/(this.props.children.length+2)}%`}} key = {'strat'} >{this.props.children[this.props.children.length-1]}</div>
                    {this.props.children.map((item, index) => {
                        return <div className = {`carousel-item`} style = {{width: `${100/(this.props.children.length+2)}%`}} key = {index} >{item}</div>
                    })}
                     <div className = {`carousel-item`} style = {{width: `${100/(this.props.children.length+2)}%`}} key = {'end'} >{this.props.children[0]}</div>
                </div>
                {this.renderIndicators()}
                <div>
                    <button onClick = {this.handlerNext}>下一个</button>
                </div>
            </div>
        )
    }
}