var socket = io.connect();

socket.on('connect', function(data){
  console.log("we connected to the server as" + socket.id)
})


  $('images').on('mouseover', function (event) {
    $('images').not(this).addClass('fade');
}).on('mouseout', function() {
    $('images').removeClass('fade');
});

  var dataToSend = {
    'top': event.clientY,
    'left': event.clientX
  }

  socket.emit('images', dataToSend); // send the data up to the server

});

socket.on('images', function(data){

  $('images').on('mouseover', function () {
    $('images').not(this).addClass('fade');
}).on('mouseout', function() {
    $('images').removeClass('fade');
});

})
