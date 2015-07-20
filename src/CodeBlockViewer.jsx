var React = require('react');

var _ = require('lodash');

var PropTypes = React.PropTypes;

class CodeBlockViewer extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {

    var cont=[];
    var CodeBlock=this.props.modelCode;
    console.log(CodeBlock.operator);
    cont.push(<div type='text' value={CodeBlock.operator}> </div> );

   return (
     <div> {CodeBlock.operator} </div>
  );
}
}


CodeBlockViewer.propTypes = {
  modelCode: React.PropTypes.string,

};

CodeBlockViewer.defaultProps = {
  modelCode: "",

};
module.exports = CodeBlockViewer;
