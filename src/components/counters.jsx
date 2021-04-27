import React, { Component } from 'react';

import Counter from './counter'

class Counters extends Component {
    state = { 
        counters: [
            {id: 1, value:8, name: 'Peak Milk' , price: 900},
            {id: 2, value:0, name: 'Vaselin', price: 450},
            {id: 3, value:2, name: 'Delto Soap', price: 320},
            {id: 4, value:4, name: 'Hand Sanitizer', price: 800},
            {id: 5, value:0, name: 'Bread', price: 250},
            {id: 6, value:0, name: 'Coco-Cola Coke', price: 100},
            {id: 7, value:0, name: 'Hollandia Milk', price: 950},
            {id: 8, value:0, name: 'Milo', price: 1050},
            {id: 9, value:0, name: 'Loya Milk', price: 600},
        ],
        total: 0
     }

    handleIncrement= (counter)=>{
        const counters = [...this.state.counters]
        const index = counters.indexOf(counter)
        counters[index].value ++
        this.setState({ counters })

        this.total()
    }

    handleDecrement= (counter)=>{
        const counters = [...this.state.counters]
        const index = counters.indexOf(counter)
        counters[index].value --
        this.setState({ counters })
        this.total()
    }

    handleDelete= (counter)=>{
        const counters = this.state.counters.filter(c => c.id !== counter)
        this.setState({ counters })
        
        console.log(counter)
        console.log(this.state.counters)

        this.total()
    }

    reset= () =>{
        this.state.counters.map(counter => {
            const counters = [...this.state.counters]
            const index = counters.indexOf(counter)
            counters[index].value = 0
            this.setState({ counters })
        })

        this.total()
    }

    total = () => {
        
        const products = this.state.counters.filter(c => c.value != 0)
        if (products.length < 1) this.setState({total : 0})
        let sum = 0;
        for (var i=0; i < products.length; i++){
            sum = sum + (products[i].price * products[i].value) 
        }
        this.setState({total : sum})
    }

    componentDidMount(){
        this.total()
    }

    render() { 
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <span className="badge badge-primary m-2">{this.state.counters.filter(c => c.value > 0).length}</span>
                            <button onClick={this.reset} className="btn btn-primary btn-sm">Reset</button> | &nbsp;
                        <hr/>
                    </div>
                    <div className="col-md-6"> 
                        {this.state.counters.map(c => <Counter key={c.id} onDelete={this.handleDelete} onIncreament={this.handleIncrement} onDecreament={this.handleDecrement} counter={c} />)}
                    </div>
                    <div className="col-md-6"> 
                    <p>Selected Items</p> 
                    <button className="btn btn-primary" onClick={this.total}>Texting</button>
                    <table className="table table-bordered">
                        <thead>
                            <th>#</th>
                            <th>Name</th>
                            <th>Qty</th>
                            <th>Price</th>
                            <th>Amount</th>
                        </thead>
                        <tbody>
                            { 
                                this.state.counters.filter(c => c.value != 0).map((count, i) => 
                                    <tr>
                                        <td>{i + 1}</td>
                                        <td>{count.name}</td>
                                        <td>{count.value}</td>
                                        <td>{count.price}</td>
                                        <td>{count.price * count.value}</td>
                                    </tr>)
                            }
                            {this.total}
                            <tr>
                                <td colspan="4">Total</td>
                                <td> {this.state.total} </td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        )
    }
}
 
export default Counters;