import React, { Component } from 'react';

class TrashSymbol extends Component {
    state = {  } 
    render() { 
        return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32"><path fill="black" d="M12 12h2v12h-2zm6 0h2v12h-2z"/><path fill="black" d="M4 6v2h2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h2V6zm4 22V8h16v20zm4-26h8v2h-8z"/></svg>;
    }
}
 
export default TrashSymbol;