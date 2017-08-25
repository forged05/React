import React from 'react'
//不建議一開始就把App.js那一套{Compenet}寫法，初學者可以先這樣寫

class AlertButton extends React.Component {
    constructor() {
        super()

        this.state = {
            numberOne: 0,
            numberTwo: 0,
            sum: 0
        }
    }
    render() {
        return (
            <div>
                <input 
                    type="text" 
                    value={this.state.numberOne}
                    onChange={ (p) => {
                        this.setState({numberOne: +p.target.value})
                    } }
                        // 在p.target.value前面配上+可以讓字串轉述數值 
                        // 別像這邊這樣寫 this.state.numberOne = e.target.value。先setState後才能更動state 
                />
                <input 
                    type="text" 
                    value={this.state.numberTwo}
                    onChange={ (q) => {
                        this.setState({numberTwo: +q.target.value})
                    } } 
                />
                <h1>Result: {this.state.numberOne + this.state.numberTwo}</h1>
                <button onClick={() => { 
                    //alert('hello!')
                    this.setState({sum: this.state.numberOne + this.state.numberTwo})
                }}> 
                    Say Hello! 
                </button>
                <h2>Second Result: {this.state.sum}</h2>
            </div>
        // button 後半使用花括號的原因在於要承接裡面的函式
        // onChange那邊要使用狀態值，以函式來進行元件定義才可以使用，也才能配合生命週期使用，效能較好
        // 這樣的寫法主要在於可控性的衡量
        )
    }
}

export default AlertButton
//最後要進行導出自己的類別，記得要使用default。會跟App.js導入這個class時相對應