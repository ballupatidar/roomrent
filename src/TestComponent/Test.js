import './Test.css';

function Test(props) {

  return (<div>
        <h1>Test Component Loaded</h1>
        <h2>Add Result</h2>
        <h3>a = {props.a}</h3>
        <h3>b = {props.b}</h3>
        <h3>add = {props.a+props.b}</h3>
	  </div>);
}

export default Test;