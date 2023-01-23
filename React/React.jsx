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