$(document).ready(function(){
  var input = parseInt(prompt("enter number"));
  function pingPongConverter(userInput) {
    for (var i = 0; i <=userInput; i++) {
      if ((i%3==0) && (i%5===0)) {
        console.log("PingPong");
      }else if (i%3===0) {
        console.log("ping");
      }
    }else if (i%5===0) {
        console.log("pong");
      }
  }
  pingPongConverter(input);
});
