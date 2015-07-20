
replaceAll = function(string,search, replace)
{
  var s = "My String";
s = s.replace(/String$/, "New String");
console.log(s)// alerts "My New String"
console.log("search ", search);
console.log("string ", string);
console.log("replace ", replace);
  return string.replace(new RegExp('[' + search + ']', 'g'), replace);
}
module.exports.replaceAll = replaceAll;








var colors=  ['#FEBEBD','#EFBBDD','#E1BFFF','#C4C6FF','#B2D8FF','#B3EEFB','#BCF9B2','#E4F9B2','#F9FBB2','#FFF2B2','#FEE2B5','#FED0B6'];
function color(interaction) {
  return colors[mod(12,checkSum(interaction.operator))];
}
module.exports.color=color;
