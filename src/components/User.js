import React, { Component } from 'react'
import UserTemplate from './User_Templates'



export default class User extends Component {

    state = {
        name : 'Francis',
        lastname :'Jones',
        age:25,
        hobbies : ['football','cricket'],
        spanish : false,
        message(){
            console.log("Messge");
        },
        car : {brand:'porche',model:'P1'},
        mother : "lucy",
        color:'red'
    }

    changeColor = () =>{
       /* this.setState({
            color:'blue'
        })*/

        this.refs.myColor.style.color = 'blue'
    }

  render() {
      const style ={
          color:this.state.color
      }
    return (
      <div>
          <h4 style={style} ref="myColor">{this.state.mother}</h4>
          <div onClick={this.changeColor}>Change Color</div>
        <UserTemplate {...this.state}/>
      </div>
    )
  }
}
