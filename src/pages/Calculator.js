import React from 'react';
import ReactDOM from 'react-dom';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { formatAmount } from './utils.js';
import './Calculator.css'

export class Calculator extends React.Component {
    constructor() {
        super();
        this.state = {
            yearIncome: 7747,
            otherIncome: 250,
            monthlyRent: 300,
            phoneBill: 35,
            otherBills: 60,
            travelCosts: 20,
            luxuries: 30,
            monthlyFood: 100
        }
    }

    render() {
        const yourBudget = Math.max(0, (((this.state.yearIncome / 12 ) + (this.state.otherIncome)) - (this.state.monthlyRent) - (this.state.phoneBill) - (this.state.otherBills) - (this.state.travelCosts) - (this.state.luxuries) - (this.state.monthlyFood) ));

        return (
            <React.Fragment>
                <Container maxWidth="lg">
                    
            <Grid  container spacing={1}>
              <Grid container item xs={6} spacing={1} style = {{paddingTop:'25px', paddingBottom: '25px', justifyContent:"center"}}>
                <div className="section">
                    <h1 className="title">
                        Student Budget Calculator
                    </h1>
                    <div className="columns">
                        <div className="column">
                            <h2 className="subtitle">
                               
                                <br />Your Current Finances
                            </h2>
                            <form>
                            <br />
                                <div className="field">
                                    <label className="label"> Maintenance Amount for 2020/2021</label>
                                    <div className="control">
                                        <input
                                            className="input"
                                            type="text"
                                            placeholder="Yearly Amount.."
                                            value={this.state.yearIncome}
                                            onChange={(e) => this.setState({ yearIncome: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label"> Other Monthly Income</label>
                                    <div className="control">
                                        <input
                                            className="input"
                                            type="text"
                                            placeholder="Other Income"
                                            value={this.state.otherIncome}
                                            onChange={(e) => this.setState({ otherIncome: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Rent per month</label>
                                    <div className="control">
                                        <input
                                            className="input"
                                            type="text"
                                            placeholder="Monthly Rent ..."
                                            value={this.state.monthlyRent}
                                            onChange={(e) => this.setState({ monthlyRent: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Monthly Phone Bill </label>
                                    <div className="control">
                                        <input
                                            className="input"
                                            type="text"
                                            placeholder="Phone Bill ..."
                                            value={this.state.phoneBill}
                                            onChange={(e) => this.setState({ phoneBill: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Monthly Other Bills </label>
                                    <div className="control">
                                        <input
                                            className="input"
                                            type="text"
                                            placeholder="Other Bills"
                                            value={this.state.otherBills}
                                            onChange={(e) => this.setState({ otherBills: e.target.value })}
                                        />
                                    </div>
                                </div>  
                                <div className="field">
                                    <label className="label">Monthly Food Budget</label>
                                    <div className="control">
                                        <input
                                            className="input"
                                            type="text"
                                            placeholder="Monthly Food Budget"
                                            value={this.state.monthlyFood}
                                            onChange={(e) => this.setState({ monthlyFood: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Monthly Travel Costs</label>
                                    <div className="control">
                                        <input
                                            className="input"
                                            type="text"
                                            placeholder="Travel Costs"
                                            value={this.state.travelCosts}
                                            onChange={(e) => this.setState({ travelCosts: e.target.value })}
                                        />
                                    </div>
                                </div>

                                  <div className="field">
                                    <label className="label">Monthly Luxuries  (Takeways, Cinema, Nails, etc)</label>
                                    <div className="control">
                                        <input
                                            className="input"
                                            type="text"
                                            placeholder="Luxuries"
                                            value={this.state.luxuries}
                                            onChange={(e) => this.setState({ luxuries: e.target.value })}
                                        />
                                    </div>
                                </div>
                              
                            </form>
                        </div>
                        <br/>
                        <div className="column">
                            <h2 className="subtitle">
                               
                                Your estimated monthly budget:
                            </h2>
                            <br />
                            <p>You have a budget of:</p> 
                            <p>&nbsp;</p>
                            {
                                yourBudget > 0 &&
                                <div className="notification is-primary">
                                    <h1 className="result">£{formatAmount(yourBudget, 0)}</h1>
                                </div>
                            }
                           
                            {
                                yourBudget <= 0 &&
                                <div className="notification is-warning">
                                    <h1 className="result">£{formatAmount(yourBudget,0)} <br/>Uh-oh!<br/>Budgeting can be hard. <p>Please speak to a student advisor</p><p>who can direct you to student budgeting services.</p><p>You can contact them <Link to='/ContactUs'> here. </Link></p></h1>
                                </div>
                            }
                            
                        
                        </div>
                    </div>
                </div>
                </Grid>
                <Grid container item xs={6} spacing={1} style = {{paddingTop:'25px', paddingBottom: '10px', justifyContent:"center"}}>
                    < p> This Calculator will help you see what sort of budget you'll have when you recieve your maintanence loan. It will take your yearly amount and subtract any expensives you have to give you a monthly budget. <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat augue sit amet felis feugiat, quis scelerisque libero maximus. Etiam vel lectus velit. 
                    Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In et maximus lectus, et cursus ipsum. Nullam ac nibh dignissim leo hendrerit euismod in at quam.
                     Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc et augue et tellus sollicitudin interdum at vitae mauris. Aenean in felis a lacus mollis condimentum. 
                     Phasellus vel neque eleifend, lobortis neque sit amet, dignissim erat. Sed vel augue eget velit lobortis euismod nec eget lacus. Donec commodo enim sit amet orci pretium, ac dapibus lacus vulputate. Nulla id aliquet est, eget porttitor purus.  </p>
                </Grid>
            </Grid>
            </Container>
            <Footer  style = {{paddingTop:'50px'}} title="University Center Peterborough" description="Park Crescent Campus ,Peterborough, Cambridgeshire PE1 4DZ, United Kingdom" />
            </React.Fragment>
        )
    }
}
export default Calculator;