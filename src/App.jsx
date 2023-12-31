import { Button } from 'bootstrap';
import React, { Component } from 'react';
import Buttons from './components/buttons';
import Table from './components/table';
import "./index.css";

class App extends Component {
    state = { 
        entities:[]
     } 

    findHighestValue = () => {
        let highestValue=0;
        this.state.entities.forEach((elem, ind, arr) => {
            if(elem.id>highestValue){
                highestValue = elem.id;
            }
        })
        console.log(highestValue)
        return highestValue;
    }

    addPlayer = (name, init, tp) => {
        console.log("test")
        let currentEntities = this.state.entities;
        let id = this.findHighestValue() +1
        currentEntities.push(
            {
                id,
                name, 
                init,
                tp
            }
        )
        this.setState({entities: currentEntities})
        console.log(this.state)
    }
    decreaseTpMain = (id, tp) =>{
        console.log("decreaseTp");
        const unit = this.state.entities.find(element =>element.id ===id);
        console.log(unit);
        unit.tp--;
        this.setState({})
    }

    increaseTpMain = (id, tp) =>{
        const unit = this.state.entities.find(element => element.id === id);
        console.log(unit)
        unit.tp++;
        this.setState({})
    }
    deleteUnitMain = (id, name) => {
        if(window.confirm("Willst du " + name + " mit der ID: "+ id + " wirklich löschen?")){
            const unit = this.state.entities.find(element => element.id === id);
            const index = this.state.entities.indexOf(unit)
            console.log(unit, index)
            this.state.entities.splice(index, 1)
            this.setState({})
        }
    }

    sortArrayMain = () => {
        this.state.entities.sort(function(a, b){
            return b.init - a.init;
        });
        this.setState({})
    }

    getRndInteger(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        var rand = Math.floor(Math.random() * (max-min +1) + min);
        console.log("Random Number " + rand)
        return rand;
    }

    addManualEnemy = (name, amount, tw, twAmount, tpMod, initMod) => {
        console.log("test")
        let currentEntities = this.state.entities;
        for(let i = 0;i<amount;i++){
            var id = this.findHighestValue() +1;
            var tp = parseInt(tpMod);
            for(let k = 0;k<twAmount;k++){
                console.log("trefferpunkte" + tp)
                tp += parseInt(this.getRndInteger(1, tw))
            }
            var init = parseInt(this.getRndInteger(1, 20)) + parseInt(initMod);
            currentEntities.push(
                {
                    id,
                    name,
                    init,
                    tp
                }
            )
        }
        this.setState({entities: currentEntities})
        console.log(this.state)
    }
    deleteEntities = () =>{
        if (window.confirm("Bist du dir sicher, dass du den Encounter löschen willst?") === true){
            this.setState({entities: []})
        } else {}
    }

    render() { 
        return <React.Fragment>
            <div className='rootStyle'>
            <Buttons addNewPlayer={this.addPlayer} addManualEnemy={this.addManualEnemy} deleteEncounter={this.deleteEntities}></Buttons>
            <div className='main-container'>
                <Table entitie={this.state.entities} decreaseTp={this.decreaseTpMain} increaseTp={this.increaseTpMain} deleteUnit={this.deleteUnitMain}
                sortArray={this.sortArrayMain}/>
            </div>
            </div>
        </React.Fragment>;
    }
}
 
export default App;