var CodeBlock = require('./CodeBlock.jsx');
var CodeBlockViewer = require('./CodeBlockViewer.jsx');
var React = require('react');
var iii = require('iii');


class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state={modelCode:"",errorCode:"", };
  }

  onCodeChange(newCode) {
    this.evaluateCode(newCode);
  }



  evaluateCode(code){
    try {
      var newModelCode = iii.parser.parse(code,{startRule:"interaction"});
      this.setState({errorCode:""});

      console.log("parsedCode =",JSON.stringify(newModelCode));
      this.setState({modelCode:newModelCode});




    } catch (errorMessage) {
      this.setState({errorCode:errorMessage});
      console.log(errorMessage);
    }
  }




  render() {
    return (
      <div className="Main">
        <CodeBlock   errorCode={this.state.errorCode}  modelCode={this.state.modelCode} code={this.state.code} evaluateCode={this.evaluateCode.bind(this)}  onCodeChange={this.onCodeChange.bind(this)}   />
        <CodeBlockViewer interaction={this.state.modelCode} />
      </div>
    );
  }
}


React.render(<Main/>, document.getElementById("main"));
