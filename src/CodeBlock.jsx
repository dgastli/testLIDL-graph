var React = require('react');


class CodeBlock extends React.Component {

  constructor(props) {
    super(props);

  }


  componentDidMount() {
     this.props.evaluateCode(this.props.code);

  }

  codeChanged(e){
    this.props.onCodeChange(e.target.value);
  }





  render() {
    return (
      <div className="CodeBlock">
        <div className="TabContent">
          <textarea className={this.props.errorCode!==""?"error":""} defaultValue={this.props.code} name="code"  onChange={this.codeChanged.bind(this)} />

        </div>

      </div>
    );
  }
}

CodeBlock.propTypes = {errorCode:React.PropTypes.string,code:React.PropTypes.string,modelCode:React.PropTypes.string,};

CodeBlock.defaultProps =  {errorCode:"",code:"(    Coucou   ( Bob ), il est  ( (13) heures (27) minutes )  )",modelCode:""};

module.exports = CodeBlock;
