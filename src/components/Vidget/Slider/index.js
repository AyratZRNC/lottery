import React, {Component} from 'react';


export default class Slider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            slide: [],
            currentSlideIndex: 0,
            isCycleMode: false

        };
        this.nextSlideHandler = this.nextSlideHandler.bind(this);

    }


    nextSlideHandler(e) {
        let newIndex = this.state.currentSlideIndex;
        if (e.currentTarget.dataset.direction === 'next') {
            newIndex = this.state.currentSlideIndex + 1;
        } else {
            newIndex = this.state.currentSlideIndex - 1;
        }
        this.setState({currentSlideIndex: newIndex});
    }
    render(){
        return(
            <div className="slider">
                <div>
                    <button
                        data-direction="prev"
                        onClick={this.nextSlideHandler}
                    >PREV</button>
                </div>
                <div>
                    {this.state.currentSlideIndex}
                </div>
                <div>
                    <button
                        data-direction="next"
                        onClick={this.nextSlideHandler}
                    >NEXT</button>
                </div>
            </div>
        )
    }

}