var React = require('react');
var _ = require('lodash');
var Utils = require('./iiiUtils.js');
var Input = require('./fitInput.jsx');

class CodeBlockViewer extends React.Component {

  render() {

    var content = this.props.interaction.operator;
    // "when$then$"
    content = Utils.replaceAll(content,"$","_$_");
    // "when_$_then_$_"
    content = content.split("_");
    // ["when","$","then","$"]

    var operandIndex = -1;
    content = _.map(content,function(x,n){
      if(x==="$") {
        operandIndex = operandIndex + 1;
        return ( <CodeBlockViewer key={n} interaction={this.props.interaction.operand[operandIndex]} >  </CodeBlockViewer>);
      } else {
        return <Input className={"codeBlockSpan"} key={n} value={x}>  </Input>
      }
    }.bind(this));
    // [<span>"when"<span>,<CodeBlockViewer/>,<span>"then"<span>,<CodeBlockViewer/>]

    return <div className={"codeBlock"}>{content}</div>;

//     var cont=[];
//     var n = 0;
//     console.log("cc",this.props.interaction.operator)
//
//
//
// {
//   type:"InteractionSimple",
//   operator:"when$then$",
//   operand:[{
//     type:"InteractionSimple",
//     operator:"a",
//     operand:[]
//   },{
//     type:"InteractionSimple",
//     operator:"b",
//     operand:[]
//   }]
// }
//
// <div>
//   <span>when</span>
//   <div>
//     <span>a</span>
//   </div>
//   <span>then</span>
//   <div>
//     <span>b</span>
//   </div>
// </div>
//
//
//
//
//     var operator = Utils.replaceAll(this.props.interaction.operator,"$","_$_").split("_");
//     // We need to remove empty elements who can exist
//     for(var k =0;k<operator.length;k++) {
//       if(operator[k]==='') operator.splice(k,1);
//     }
//
//     for( var i=0;i<operator.length;i++) {
//
//       if(operator[i]!=="$") {
//         // if(operator[i].startsWith("•"))
//         //   cont.push(<br key={"br"+i+"dot"}/>);
//
//         var str = operator[i];
//         var strs = str.split("\n");
//         var j=0;
//         // cont.push(<span key={"span"+i+"-"+0}>{strs[0]}</span>);
//         cont.push(<Input key={"span"+i+"-"+0} type='text' value={strs[0]}></Input>);
//         for(j=1;j<strs.length;j++ ) {
//           cont.push(<br key={"br"+i+"-"+j}/>);
//           // cont.push(<span key={"span"+i+"-"+j}>{strs[j]}</span>);
//           cont.push(<Input key={"span"+i+"-"+j} type='text' value={strs[j]}></Input>);
//         }
//
//         // if(operator[i].endsWith(":"))
//         //   cont.push(<br key={"br"+i+"comma"}/>);
//       } else {
//         cont.push(<CodeBlock interaction={this.props.interaction.operand[n]} key={"sub"+i}/>);
//         n=n+1;
//       }
//     }
//
//     return <code draggable={true} style={{backgroundColor:Utils.color(this.props.interaction)}}>{cont}</code> ;
  }

}

//
// CodeBlock.propTypes = {interaction:React.PropTypes.string,code:React.PropTypes.string,modelCode:React.PropTypes.string,};
//
// CodeBlock.defaultProps =  {errorCode:"",code:"(    Coucou   ( Bob ), il est  ( (13) heures (27) minutes )  )",modelCode:""};


module.exports = CodeBlockViewer;
