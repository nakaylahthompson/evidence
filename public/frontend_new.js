var socket = io.connect();

socket.on('connect', function(data){
  console.log("we connected to the server as" + socket.id)
})

$(function(){

  $('img').on('mouseover', function(event){

    currentImage = "." + $(this).attr('class') //get the current class and store it as a class
    socket.emit('changeOpacity', currentImage)


  })

  socket.on('opacityChanged',function(dataFromServer){
    // console.log(dataFromServer);

    $(dataFromServer.selector).css("opacity",dataFromServer.opacity)


  })




})


//PROTOTYPE FOR A MOUSMOVE
// // $(this).css('opacity',0.5)
// var opa = $(this).css('opacity') //get the current opacity of the image that we moused over
// // console.log("opa", opa);
// opa = parseFloat(opa) + 0.01 //take the current opacity, convert it to a float and then add a little bit.
// // console.log("opa2",opa);
// $(this).css('opacity',opa) //reset the opacity of th the current moused over image to the new value calcd above.
// console.log($(this).attr('class'));
