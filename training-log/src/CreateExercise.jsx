import React, { Component } from 'react'


class CreateExercise extends Component {
  constructor(){
    super()

    this.state = {
      name: "",
      description: "",
      duration: 0,
    }
  }

  render(){
    return(
      <div>
        <br></br>
        <h2>Create Exercise</h2>
          <form>

            <div className="form-group">
              <label>
                Name
              </label>
              <input required type="text" className="form-control"></input>
            </div>

            <div className="form-group">
              <label>
                Exercise
              </label>
              <input required type="text" className="form-control"></input>
            </div >

            <div className="form-group">
              <label>
                Reps
              </label>
              <input required type="text" className="form-control"></input>
            </div>

            <div className="form-group">
              <input type="submit" 
                value="submit" 
                className="btn btn-primary" 
              />
            </div>

          </form>
      </div>
    )
  }
}

export default CreateExercise