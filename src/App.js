import React from 'react';
import { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayMessageDate: "12/08",
            displayMessageUser: "Enter the user name",
            cardNumber: ".... .... .... ....",
            validThru: "****",
            cardHolder: "afef mahmoud",
            validUser: {
                status: true,
                message: ""
            },
            validDate: {
                status: true,
                message: ""
            }

        }
    }
    changeCardHolder = (event) => {
        var onlyTextRegex = /^[0-9\b]+$/;
        if (event.target.value.match(onlyTextRegex)) {
            this.setState({
                validUser: { status: false, message: "Tape only text" }
            });
        } else if (event.target.value.length > 20) {
            this.setState({ validUser: { status: false, message: "Max length 20" } });
        } else {
            this.setState({
                cardHolder: event.target.value,
                valid: { status: true, message: "" }
            });
        }
    }
    changeValidTh = (event) => {
       // console.log(event.target.value.substring(0, 2))
        //console.log(event.target.value.substring(2, 4))
        this.setState({ validThru: event.target.value.substring(0, 2)
          +
        event.target.value.substring(2,4) })

    }
    transformCardNumber =( number) => {
        if(number.length >15){
            let x=number.slice(0,16)
            x=x.toString()
            let Str1 = ''
        for(let j =0; j < number.length; j += 4) {
          Str1 += x.slice(j, j + 4) + ' '
        }
        return Str1.trim()
        }
        number = number.toString()
        let Str = ''
        for(let i =0; i < number.length; i += 4) {
          Str += number.slice(i, i + 4) + ' '
        }
        return Str.trim()
      }
    validDate = (n) => {
        if (n.length !== 4) {
            return false
        }
        n = n.toString()
        return n.slice(0, 2) +'/' + n.slice(2)
    }

    changeNumber = (e) => {
        this.setState({ cardNumber: e.target.value })
        
    }

    render() {
        return (
            <div className="form-container">
                <div className="main-container">
                    <div className="header">
                        <h1>CREDIT CARD</h1>
                    </div>
                    <div className='chip'>
                        <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/credit-card-chip-1522262-1288452.png" />
                    </div>
                    <div className="content">
                        < div className="info">
                            <div className="main-number">
                                <h2> {this.transformCardNumber (this.state.cardNumber)}</h2>
                            </div>
                            <div className="sec-num-validth">
                                < div className="sec-num"><h2> 5422</h2></div>
                                <div className="valid-thru">
                                    <div className="m-y">
                                        <p> MONTH/YEAR</p>
                                    </div>
                                    <div className="container">
                                        <div>
                                            <p>VALID <br />THRU</p>
                                        </div>
                                        <div>
                                            <i className="fas fa-caret-right"></i>
                                        </div>
                                        <div>
                                            <h2 className="sec-num">{this.validDate(this.state.validThru)}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-holder" >
                                <h2>{this.state.cardHolder.toUpperCase()}</h2>
                            </div>
                        </div>

                        <div className="logo" >
                            <img src="https://www.logolynx.com/images/logolynx/e0/e01dbbb3068c7f5135b90b0ce91445f9.png" />
                        </div>


                    </div>

                </div>
                <br />
                <br />
                <br />
                <form>
                    <input
                        type="number"
                        placeholder="Credit card number"
                        onChange={(e) => this.changeNumber(e)} />
                    <br />
                    <input maxLength="4"
                        type="text"
                        placeholder={this.state.displayMessageDate}
                        onChange={(e) => this.changeValidTh(e)} /><br />
                    
                    <input type="text"
                      
                        placeholder={this.state.displayMessageUser}
                        onChange={(event) => this.changeCardHolder(event)} />
                    <br />
                    {!this.state.validUser.status ? (
                        <span style={{ color: "#ff0000" }}>{this.state.validUser.message}</span>) : null}

                </form>
            </div>

        );
    }
}

export default App;