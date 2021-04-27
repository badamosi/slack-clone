import React, { Component } from 'react';

class Counter extends Component {
    state= {
        count: this.props.counter.value,
    }
    render() { 
       
        const {counter} = this.props

        return (
            <div>
                <p>{this.props.counter.name} <br/> 
                <span className={this.getBadgeClass()}>{ this.formartCount() }</span>
                </p>
                
                <button onClick={() => {this.props.onDecreament(counter)}} className="btn btn-sm btn-primary m-2" disabled={ this.props.counter.value === 0? 'disabled': ''}> - </button>
                <button onClick={() => {this.props.onIncreament(counter)}} className="btn btn-sm btn-primary m-2"> + </button>
                <button onClick={() => {this.props.onDelete(counter.id)}} className="btn btn-sm btn-danger"> Delete </button>
                <hr/>
            </div>
            );
    }

    getBadgeClass(){
        let classes = "badge badge-sm m-2 badge-"
        classes += this.props.counter.value === 0? 'warning' : 'primary'
        return classes
    }

    formartCount(){
        const {value} = this.props.counter
        return value === 0 ? 'Zero' : value
    }

}
 
export default Counter;