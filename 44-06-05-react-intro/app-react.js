// ReactDOM.render(<h1>Hello</h1>, document.getElementById("app"));

const Section = () => {
  return (
    <div>
      <Hello />
      <Greeting name="Computer" />
      <p>lorem</p>
    </div>
  );
};

class Hello extends React.Component {
  render() {
    return <h1>Hello</h1>;
  }
}

const Greeting = (props) => {
  return (
    <div>
      <p>My name is {props.name}</p>
    </div>
  );
};

ReactDOM.render(<Section />, document.getElementById("app"));
