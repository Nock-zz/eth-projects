import React from 'react';
import ReactDOM from 'react-dom';


class SharedComponent extends React.Component {
  constructor(props) {
    super(props);
  this.state = {x: 1, y: 0};
  this.info = {author: "Nick"};
  }
  
  
   
  render() {
    return (
      <div>
       <p>
       <i> {this.props.render(this.info)}</i>
       <b> x is {this.state.x}</b>       
       </p>
      </div>
    );
  }
}

const SayHello = () => (
  <SharedComponent render={({author}) => (
    <span>the info is {author}</span>
  )} />
);

class Main extends React.Component {
  render() {
    return (
      <div style={{ height: '100%' }}>
        <SayHello/>
      </div>
    )
}
}

ReactDOM.render(<Main />, document.getElementById('root'));


// class Main extends React.Component {
//   render() {
//     return (
//       <h1>Hello world!</h1>
//     );
//   }
// }

