import React from 'react';

class Form extends React.Component {
  // state = {
  //   firstName: "John",
  //   lastName: "Henry",
  //   userInput: ""
  // }

  // handleFirstNameChange = event => {
  //   this.setState({
  //     firstName: event.target.value
  //   })
  // }

  // handleLastNameChange = event => {
  //   this.setState({
  //     lastName: event.target.value
  //   })
  // }

  // handlerForm = (event) => {
  //   event.preventDefault();
  //   event.persist()
  //   if (event.target.name === "firstName") {
  //     this.setState({
  //       firstName: event.target.value })
  //   } else if (event.target.name=== "lastName") {
  //     this.setState({
  //       lastName: event.target.value })
  //   }
  // }

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log('event');
    
  //   console.log(this.state.lastName);
    
  // }

  render() {
    // console.log(this.state);
    
    return (
      console.log(this.props),
      
      // <form onSubmit={this.handleSubmit}>
      //   <input type="text" name="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />
      //   <input type="text" name="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
      //   <button type="submit">submit</button>
      // </form>

      // <form onSubmit={this.handleSubmit } >
      //   <input type="text" name="firstName" onChange={this.handlerForm} value={this.state.firstName} />
      //   <input type="text" name="lastName" onChange={this.handlerForm} value={this.state.lastName} />
      //   {/* <input type="submit"/> */}
      //   <button type="submit">submit</button>
      // </form>
      <div>
      <form>
        <input type="text" onChange={event => this.props.handleFirstNameChange(event)}value={this.props.formData.firstName}/>
        <input type="text" onChange={event => this.props.handleLastNameChange(event)} value={this.props.formData.lastName} />
        <input type="submit" />
      </form>
      </div>
    )
  }
}

export default Form;