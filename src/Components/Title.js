import React,{Component} from 'react'

class Title extends Component{
    render(){
    return(
    
      <div style={{}}>
        <div style={{float: 'right'}}>
            <button>Logout</button>
        </div>
        <div style={{float: 'left'}}>
            <button>Profile</button>
        </div>
       <div style={{clear: 'both'}}></div>
        <div>
           <h1>{this.props.title}</h1>
        </div>
    </div>
    )
    }
  }

  export default Title