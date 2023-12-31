import React, { Component } from 'react';
import SortSymbol from './sortSymbol';
import UpSymbol from './upSymbol';
import DownSymbol from './downSymbol';
import TrashSymbol from './trashSymbol';

class Table extends Component {
    state = { 
    } 
    render() { 
        return<table className="table">
                <thead className='table'>
                    <tr className='generatetColumns'>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th className='sortButton' scope="col">Initiative <button onClick={this.props.sortArray}><SortSymbol/></button></th>
                        <th scope='col'>Trefferpunkte </th>
                    </tr>
                    {this.props.entitie.map(unit=> <tr key={unit.id} className='generatetColumns'>
                        <th>{unit.id}</th>
                        <th className='dropdown'>
                            <div>{unit.name}</div>
                                <div className='dropdown-content'>
                                    <p>AC: </p>
                                    <p>Att: </p>
                                </div>
                        </th>
                        <th>{unit.init}</th>
                        <th type="number" className='sortButton'>{unit.tp}<button onClick={()=>this.props.decreaseTp(unit.id)}><DownSymbol/></button><button onClick={() => this.props.increaseTp(unit.id)}><UpSymbol/></button>
                        <button onClick={()=>this.props.deleteUnit(unit.id, unit.name)}><TrashSymbol/></button></th>
                    </tr>)}
                </thead>
            </table>

            
    }
}
 
export default Table;
