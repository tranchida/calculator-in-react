'use client'

import React from "react";

export default class Calculator extends React.Component {

    state = {
        proteins: 0,
        glucides: 0,
        lipides: 0,
        fibres: 0,
        poid: 0,
        points: 0
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
        this.calculate()
    }

    calculate() {

        const { proteins, glucides, lipides, fibres, poid } = this.state;

        this.setState({points: Math.round((proteins / 11 + glucides / 9 + lipides / 4 + fibres / 30) * poid) / 100});
    }

    render() {

        const { proteins, glucides, lipides, fibres, poid, points } = this.state;

        return (
            <section className="section">
                <div className="container">
                    <form>
                        <div className="field">
                            <label className="label">Protéines</label>
                            <div className="control">
                                <input name="proteins" className="input is-rounded" type="number" value={proteins} onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Glucides</label>
                            <div className="control">
                                <input name="glucides" className="input is-rounded" type="number" value={glucides} onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Lipides</label>
                            <div className="control">
                                <input name="lipides" className="input is-rounded" type="number" value={lipides} onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Fibres</label>
                            <div className="control">
                                <input name="fibres" className="input is-rounded" type="number" value={fibres} onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Poids en grammes</label>
                            <div className="control">
                                <input name="poid" className="input is-rounded" type="number" value={poid} onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="notification is-info">
                            Points pour {poid} g : <b>{points}</b>
                        </div>
                    </form>
                </div>
            </section>
        )
    };
}
