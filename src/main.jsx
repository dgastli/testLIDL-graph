// var CodeBlock = require('./CodeBlock.jsx');
var CodeBlockViewer = require('./CodeBlockViewer.jsx');
var React = require('react');
var timer;

/*
var interactionToShow ={
  type:"InteractionSimple",
  operator:[],
  operand:[]
};*/

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



class Main extends React.Component {

  constructor(props) {
    super(props);
  }



  render() {
    return (<CodeBlockViewer interaction={interactionToShow}/>);
  }
}


React.render(<Main/>, document.getElementById("main"));
