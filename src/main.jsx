// var CodeBlock = require('./CodeBlock.jsx');
var CodeBlockViewer = require('./CodeBlockViewer.jsx');
var React = require('react');
var timer;
var iii = require('iii');
//var modelCodeInitial="(    Coucou   ( Bob ), il est  ( (13) heures (27) minutes )  )";


var interactionInitial ={
  type:"InteractionSimple",
  operator:"",
  operand:[]
};
/*
var interactionToShow ={
  type:"InteractionSimple",
  operator:"",
  operand:[]
};*/

//var interactionToShow =iii.parser.parse(modelCodeInitial,{startRule:"interaction"});
/*
var interactionToShow ={
  type: 'InteractionSimple',
  operator: "Coucou $, il est $",
  operand: [{
    type: 'InteractionSimple',
    operator: "Bob",
    operand: []
  }, {
    type: 'InteractionSimple',
    operator: "$ heures $ minutes",
    operand: [{
        type: 'InteractionSimple',
        operator: "13",
        operand: []
      },
      {
        type: 'InteractionSimple',
        operator: "27",
        operand: []
      }
    ]
  }]
};*/
/*
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
};*/
/*
if(window.onload) {
        var curronload = window.onload;
        var newonload = function() {
            curronload();
            afterLoad();
        };
        window.onload = newonload;
} else {
        window.onload = afterLoad;
}

function maybeupdate() {
  updateDelayPassed=false;
  clearTimeout(timer);
  timer=setTimeout(update,500);
}

function update() {
  try{
    var interactionToShow = Utils.fromString(document.getElementById("main").value);
  }catch(error){

  }
}
function afterLoad(){

  document.getElementById('main').addEventListener('input',maybeupdate);

  update();

}


*/
class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state={interactionToShow:interactionInitial,};
  }

  onInteractionCodeChange(newInteractionCode) {
    this.evaluateCode(newInteractionCode);
    //interactionToShow=iii.parser.parse(newInteractionCode,{startRule:'interaction'});
  }

  evaluateCode(code){
    try {

      var newInteractionToShow = iii.parser.parse(code,{startRule:"interaction"});
      this.setState({interactionToShow:newInteractionToShow});
      console.log("Code =",JSON.stringify(code));
      console.log("newInteractionCode =",JSON.stringify(interactionToShow));
    } catch (errorMessage) {
      console.log(errorMessage);
    }
  }


  render() {
    console.log("dorra");
    return (<CodeBlockViewer interaction={this.state.interactionToShow} onInteractionCodeChange={this.onInteractionCodeChange.bind(this)}/>);
  }


}


React.render(<Main/>, document.getElementById("main"));
