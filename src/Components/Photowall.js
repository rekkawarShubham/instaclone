import React,{Component} from 'react'
import Photo from "./Photo"
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom' 
class Photowall extends Component{
   render(){
    return <div>
        <Link className="addIcon" to="/AddPhoto"/>
    <div className="photoGrid">  
        {this.props.posts
        .sort(function(x,y){
          return y.id - x.id
        })
        .map((post ,index) => <Photo key={index} post={post} onRemovePhoto={this.props.onRemovePhoto} />)}
    </div>
    </div>
   }
}

Photowall.propTypes ={
    posts : PropTypes.array.isRequired,
    onRemovePhoto : PropTypes.func.isRequired
}
export default Photowall