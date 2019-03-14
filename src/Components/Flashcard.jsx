import React, { Component } from 'react'
import data from '../data'



class Flashcard extends Component {
    constructor(){
        super()
        this.state={

        }
    }



    




    render(){
        console.log(data[0].name)
        return(
            <div className="blackBox">
                <div className="whiteBox">
                    <div className="leftWhiteBox">
                        <div className="name"> {data[this.props.index].name.first} {data[this.props.index].name.last}</div>
                        <br/>
                        <div> <strong>From: </strong> {data[this.props.index].city} </div>
                        <div><strong>Job Title:</strong> {data[this.props.index].title} </div>
                        <div><strong>Employer:</strong>   {data[this.props.index].employer} </div>
                        <br/>
                        <div> <strong>Favorite Movies:</strong>
                            <ol>
                                {data[this.props.index].favoriteMovies.map((movie)=> <li>{[movie]}</li>)}
                            </ol>
                        </div>
                        <h2> </h2>

                    </div>
                    <div className="rightWhiteBox">
                        <div>{data[this.props.index].id}/25</div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Flashcard