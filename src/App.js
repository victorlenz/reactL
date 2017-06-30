import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {

  constructor(props)
  {
    super(props);
      
      
   var db =[];
      
    if(localStorage.getItem('db')==null)
    {
      
      localStorage.setItem('db',JSON.stringify(db));
       
    }
      
      db = JSON.parse(localStorage.getItem('db'));
    //this.state = {abc:1,xyz:2,data:db,table:""};
   
      this.state={data:db};
      this.saveData=this.saveData.bind(this);
      console.log(this.state.table);
          
  }


  changeText(b,e)
  {
    //this.setState({abc:e.target.value});
    if(b==="name")
    {
      this.setState({name:e.target.value});
    }else if(b==="place")
    {
      this.setState({place:e.target.value});
    }
    else if(b==="contact")
      this.setState({contact:e.target.value});
    console.log(e.target.value);
    console.log(b);
  }

  saveData(e)
  {
    var db =[];
      
    if(localStorage.getItem('db')==null)
    {
      
      localStorage.setItem('db',JSON.stringify(db));
        db = JSON.parse(localStorage.getItem('db'));
    }
     db = JSON.parse(localStorage.getItem('db'));
    console.log(db);
    db.push({name: this.state.name, place: this.state.place, contact : this.state.contact});
      
    localStorage.setItem('db',JSON.stringify(db));
      
    this.setState({data:db});
      console.log(this.state.db);
      
      

  }
  render() {
      var table = this.state.data;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" onClick={this.al} />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>state value= {this.state.abc}

        <form>
        <input type="text" placeholder="Name" value={this.state.name} onChange={(e) => this.changeText("name", e)}/> <br/>
        <input type="text" placeholder="place" value={this.state.place} onChange={(e) =>this.changeText("place",e)}/> <br/>
        <input type="text" placeholder="contact" value={this.state.contact} onChange={(e) =>this.changeText("contact",e)}/> <br/>
        <input type="button" value="submit" onClick={this.saveData}/>
        </form>
    <br/>
            <table><thead>
                    
                        <td>Name</td> <td>Place</td> <td>contact</td>
                        {
                            table.map(function(table){
                                return <tr><td>{table.name}</td><td>{table.place}</td><td>{table.contact}</td></tr>;
                                
                            })
                        }
                    </thead>
                       
            </table>
      </div>

    );
  }
}

export default App;
