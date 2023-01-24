// 1.questions Pass Props to a Stateless Functional Component 
const CurrentDate = (props) => {
  return (
    <div>
      { /* Change code below this line */ }
      <p date={Date()}>The current date is: {props.date} </p>
     
      { /* Change code above this line */ }
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        { /* Change code below this line */ }
        <CurrentDate date={Date()}  />

        { /* Change code above this line */ }
      </div>
    );
  }
};
// 2.questions Pass an Array as Props
const List = (props) => {
  { /* Change code below this line */ }
  return <p>{props.tasks.join(', ')}</p>
  { /* Change code above this line */ }
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        { /* Change code below this line */ }
        <List tasks={["walk dog", "workout"]}    />
        <h2>Tomorrow</h2>
        <List  tasks={["green", "blue", "red"]}/>
        { /* Change code above this line */ }
      </div>
    );
  }
};
// 3.questions Use Default Props
const ShoppingCart = (props) => {
  return (
    <div>
      <h1> Shopping Cart Component</h1>

      
    </div>

  )
};
// Change code below this line
// ShoppingCart.defaultProps={ items: 0 }
// 4.questionsOverride Default Props
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}

Items.defaultProps = {
  quantity: 0
}

class ShoppingCartf extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    { /* Change code below this line */ }
    return <Items quantity={10}   />
    { /* Change code above this line */ }
  }
};
// 5questions Use PropTypes to Define the Props You Expect



const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity.number}</h1>
};

// Change code below this line
Items.propTypes = {  quantity: PropTypes.number.isRequired  }
// Change code above this line

Items.defaultProps = {
  quantity: 5
};

class ShoppingCarts extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items  />
  }
};
// 6.questions Access Props Using this.props
class App extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
            { /* Change code below this line */ }
            <Welcome name="Tarık" />
            {
              /* Change code above this line */ }
        </div>
    );
  }
};

class Welcome extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
           
          { /* Change code below this line */ }
          <p>Hello, <strong>
           {this.props.name}
          </strong>!</p>
          { /* Change code above this line */ }
        </div>
    );
  }
};
// 7.questions Review Using Props with Stateless Functional Components
const Camper = (props) => <p>{props.name}</p>;

Camper.defaultProps = { name: "CamperBot" };
Camper.propTypes = { name: PropTypes.string.isRequired };

// 8.Create a Stateful Component
class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // Only change code below this line
    this.state = {
      firstName:"meltemfeyza"
      }

    // Only change code above this line
  }
  render() {
    return (
      <div>
        <h1>{this.state.firstName}</h1>
      </div>
    );
  }
};
