import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  render() {
    return(
      <form>
        <label>
          Name: {' '}
          <input type="text" value={this.state.value}/>
        </label>
        <br />
        <br/>
        
        <label>
          Password:
          <input type="password" value={this.state.value} />
        </label><br />
        <br />
        <input type="checkbox" />  Remeber me
        <br />
        <br />
        <input type="submit" value="Submit" />
          
        
         
        
      </form>
      
      
    );
    
  }
  
}
render(<NameForm />, document.getElementById('root'));

