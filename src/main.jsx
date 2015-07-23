// var CodeBlock = require('./CodeBlock.jsx');
var CodeBlockViewer = require('./CodeBlockViewer.jsx');
var React = require('react');



var interactionToShow = {
  type:"InteractionSimple",
  operator:"when$then$",
  operand:[{
    type:"InteractionSimple",
    operator:"a",
    operand:[]
  },{
    type:"InteractionSimple",
    operator:"b",
    operand:[]
  }]
};



class Main extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (<CodeBlockViewer interaction={interactionToShow}/>);
  }
}


React.render(<Main/>, document.getElementById("main"));
