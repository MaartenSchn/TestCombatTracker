import React, { Component, useEffect } from 'react';

class Buttons extends Component {
    state = {
        name:"",
        init:"",
        tp:"",

        enemyName:"",
        enemyAmount:"",
        enemyTw:"",
        enemyTwAmount:"",
        enemyTpMod:"",
        enemyInitMod:"",

        enemyDbName:"",
        enemyDbAmount:"",
        enemyDbTw:"",
        enemyDbTwAmount:"",
        enemyDbTpMod:"",
        enemyDbInitMod:"",

        enemySaveName:"",
        enemySaveTw:"",
        enemySaveTwAmount:"",
        enemySaveTpMod:"",
        enemySaveInitMod:"",

    } 

    newPlayerClick = () =>{this.props.addNewPlayer(this.state.name, this.state.init, this.state.tp);
    }

    handleNameChange = event =>{
        this.setState({name: event.target.value});
    }
    handleInitChange = event =>{
        this.setState({init: event.target.value});
    }
    handleTpChange = event =>{
        this.setState({tp:event.target.value});
    }


    handleEnemyNameChange = event =>{
        this.setState({enemyName:event.target.value});
    }
    handleEnemyAmountChange = event =>{
        this.setState({enemyAmount:event.target.value});
    }
    handleEnemyTwChange = event =>{
        this.setState({enemyTw:event.target.value});
    }
    handleEnemyTwAmountChange = event =>{
        this.setState({enemyTwAmount:event.target.value});
    }
    handleEnemyTpModChange = event =>{
        this.setState({enemyTpMod:event.target.value});
    }
    handleEnemyInitModChange = event =>{
        this.setState({enemyInitMod:event.target.value});
    }
    newManualEnemyClick = () =>{
        this.props.addManualEnemy(this.state.enemyName, this.state.enemyAmount, this.state.enemyTw, 
            this.state.enemyTwAmount, this.state.enemyTpMod, this.state.enemyInitMod)
    }

    handleEnemyDbNameChange = event =>{
        this.setState({enemyDbName: event.target.value});
    }

    handleEnemyDbAmountChange = event =>{
        this.setState({enemyDbAmount: event.target.value})
    }

    newDbEnemyClick = () => {
            fetch("http://localhost:8080/demo/EnemyName?name=" + this.state.enemyDbName)
            .then(res =>{
                return res.json()
            })
            .then(data =>{
                if(data.length < 1){
                    window.alert("Eintrag nicht gefunden!")
                } else {
                console.log(data[0])
                this.setState({enemyDbInitMod:data[0].initMod,
                                enemyDbTpMod:data[0].tpMod,
                                enemyDbTw:data[0].tpDice,
                                enemyDbTwAmount:data[0].tpDiceAmount})
                this.props.addManualEnemy(this.state.enemyDbName, this.state.enemyDbAmount, data[0].tpDice, 
                        data[0].tpDiceAmount, data[0].tpMod, data[0].initMod)
            }
                    
            })
            
    }


    handleSaveEnemyNameChange = event =>{
        this.setState({enemySaveName:event.target.value});
    }
    handleSaveEnemyAmountChange = event =>{
        this.setState({enemySaveAmount:event.target.value});
    }
    handleSaveEnemyTwChange = event =>{
        this.setState({enemySaveTw:event.target.value});
    }
    handleSaveEnemyTwAmountChange = event =>{
        this.setState({enemySaveTwAmount:event.target.value});
    }
    handleSaveEnemyTpModChange = event =>{
        this.setState({enemySaveTpMod:event.target.value});
    }
    handleSaveEnemyInitModChange = event =>{
        this.setState({enemySaveInitMod:event.target.value});
    }
    saveNewEnemy = () => {
        fetch("http://localhost:8080/demo/addEnemy?name=" + this.state.enemySaveName + "&tpDice=" + this.state.enemySaveTw +
        "&tpDiceAmount=" + this.state.enemySaveTwAmount + "&tpMod=" + this.state.enemySaveTpMod + "&initMod=" + this.state.enemySaveInitMod,{
            method: "POST"
        })
        .then(data =>{
            if(data.ok===true){
                window.alert("Gegner in DB gespeichert.")
            } else {
                window.alert("Es ist ein Fehler aufgetreten.")
            }
        })
    }

    

    render() { 
        return <div className="button-group" role="group">
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Neuer Gegner
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <div className="form-floating mb-3">
                    <input onChange={this.handleEnemyNameChange} type="name" className="form-control" id="IdLabel" placeholder="1"/>
                    <label htmlFor="floatingInput">Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={this.handleEnemyAmountChange} type="number" className="form-control" id="IdLabel" placeholder="1"/>
                    <label htmlFor="floatingInput">Anzahl an Gegnern</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={this.handleEnemyTwChange} type="number" className="form-control" id="IdLabel" placeholder="1"/>
                    <label htmlFor="floatingInput">Trefferwürfel</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={this.handleEnemyTwAmountChange} type="number" className="form-control" id="IdLabel" placeholder="1"/>
                    <label htmlFor="floatingInput">Anzahl an Trefferwürfeln</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={this.handleEnemyTpModChange} type="number" className="form-control" id="IdLabel" placeholder="1"/>
                    <label htmlFor="floatingInput">Trefferpunkte Mod</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={this.handleEnemyInitModChange} type="number" className="form-control" id="IdLabel" placeholder="1"/>
                    <label htmlFor="floatingInput">Initiative Mod</label>
                </div>
                <li><button onClick={this.newManualEnemyClick} type="button" className="btn btn-secondary">Gegner Hinzufügen</button></li>
            </ul>
        </div>


        <div className="btn-group">
            <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Gegner aus DB importieren
            </button>
            <ul className="dropdown-menu">
            <div className="form-floating mb-3">
                    <input onChange={this.handleEnemyDbNameChange} type="name" className="form-control" id="IdLabel" placeholder="1"/>
                    <label htmlFor="floatingInput">Name des Gegners</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={this.handleEnemyDbAmountChange} type="number" className="form-control" id="IdLabel" placeholder="1"/>
                    <label htmlFor="floatingInput">Anzahl der Gegner dieses Typs</label>
                </div>
                <li><button onClick={this.newDbEnemyClick} type="button" className="btn btn-secondary">Gegner Hinzufügen</button></li>
            </ul>
        </div>


        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Neuer Spieler
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <div className="form-floating mb-3">
                    <input onChange={this.handleNameChange} type="ID" className="form-control" id="IdLabel" placeholder="1"/>
                    <label htmlFor="floatingInput">Name</label>
                </div>
                <div className="form-floating">
                    <input onChange={this.handleInitChange} type="Name" className="form-control" id="NameLabel" placeholder="Horst"/>
                    <label htmlFor="floatingInput">Initiative</label>
                </div>
                <div className="form-floating">
                    <input onChange={this.handleTpChange} type="TP" className="form-control" id="TpLabel" placeholder="Horst"/>
                    <label htmlFor="floatingInput">Trefferpunkte</label>
                </div>
                <li><button onClick={this.newPlayerClick} type="button" className="btn btn-secondary">Spieler Hinzufügen</button></li>
            </ul>
        </div>

        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Gegner in DB Speichern
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <div className="form-floating mb-3">
                    <input onChange={this.handleSaveEnemyNameChange} type="name" className="form-control" id="IdLabel" placeholder="1"/>
                    <label htmlFor="floatingInput">Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={this.handleSaveEnemyTwChange} type="number" className="form-control" id="IdLabel" placeholder="1"/>
                    <label htmlFor="floatingInput">Trefferwürfel</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={this.handleSaveEnemyTwAmountChange} type="number" className="form-control" id="IdLabel" placeholder="1"/>
                    <label htmlFor="floatingInput">Anzahl an Trefferwürfeln</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={this.handleSaveEnemyTpModChange} type="number" className="form-control" id="IdLabel" placeholder="1"/>
                    <label htmlFor="floatingInput">Trefferpunkte Mod</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={this.handleSaveEnemyInitModChange} type="number" className="form-control" id="IdLabel" placeholder="1"/>
                    <label htmlFor="floatingInput">Initiative Mod</label>
                </div>
                <li><button onClick={this.saveNewEnemy} type="button" className="btn btn-secondary">Gegner Hinzufügen</button></li>
            </ul>
        </div>

        <button onClick={this.props.deleteEncounter} type="button" className="btn btn-secondary">Encounter löschen</button>
      </div>;
    }
}
 
export default Buttons;