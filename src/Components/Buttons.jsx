import React, { Component } from 'react'
import Flashcard from './Flashcard'
class Buttons extends Component{
    constructor(){
        super()
        this.state={
            index: 0

        }
    }

    decrementHandler= () => {
        if(this.state.index < 1){
            this.setState({
                index: 24
            })
        }else{
            this.setState({
            index: this.state.index - 1
        })}
        
    }
    
    incrementHandler= () => {
        if(this.state.index >=24){
            this.setState({
                index: 0
            })
        }else{
            this.setState({
            index: this.state.index + 1
        })}
        
    }







    render(){
        console.log(this.state.index)
        return(
            <div>
                <Flashcard index={this.state.index}/>
                    <div className="buttonDiv">
                        <button className="previous" onClick={()=> this.decrementHandler()}> {`< Previous`} </button>

                        <div className="middleButtons">
                            <button>Edit</button>
                            <button>Delete</button>
                            <button>New</button>
                        </div>

                        <button className="next" onClick={()=> this.incrementHandler()}> {`Next >`} </button>
                    </div>
            </div>



        )
    }
}

export default Buttons