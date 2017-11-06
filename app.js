var express = require('express'); //make express available
var app = express(); //invoke express
var server = require('http').Server( app ) // start the express server instance
var io = require('socket.io')(server) // use socket.io for real time connections aka. wesockets

//serve out any static files in our public HTML folder
app.use(express.static('public'))

const opacityScale = 0.01; //how much to scale the opacity by?
var selectorOpacity;

var spaceshipStorage = 0; //spaceships opacity
//....

//do something when someone connects to our page.
io.on('connection', function(socket){
  console.log(socket.id); // log out the unique ID of each person who connects

// this section is a bit of an information 'relay' it takes the incoming data, replicates it and sends it out to everyone who is connected.
  socket.on('changeOpacity', function(currentImage){

    if(currentImage == ".drawing"){ //if we got the currentImage from the frontend of .spaceship, keep going
      if(spaceshipStorage >= 1){ // if ssStorage is greater or = to 1 then...
        spaceshipStorage = 0; //reset the storage back to 0 (this cycles the opacity)
      }else{ //if we are not greter than or equal to one in the spaceShipStorage, then....
        spaceshipStorage = spaceshipStorage + opacityScale //add the opacity scale to the current status of the storage, slowly increaing the opaciy.
      }
      //pack up the current selected image and the current status of its opacity storage to get redy to send to ALL clients


      selectorOpacity = {
        selector: currentImage,
        opacity: spaceshipStorage
      }
      io.emit('opacityChanged', selectorOpacity)  //send the stored data back down to the client
    } // close the if ".spaceship" check







    if(currentImage == ".spaceship"){ //if we got the currentImage from the frontend of .spaceship, keep going
      if(spaceshipStorage >= 1){ // if ssStorage is greater or = to 1 then...
        spaceshipStorage = 0; //reset the storage back to 0 (this cycles the opacity)
      }else{ //if we are not greter than or equal to one in the spaceShipStorage, then....
        spaceshipStorage = spaceshipStorage + opacityScale //add the opacity scale to the current status of the storage, slowly increaing the opaciy.
      }
      //pack up the current selected image and the current status of its opacity storage to get redy to send to ALL clients


      selectorOpacity = {
        selector: currentImage,
        opacity: spaceshipStorage
      }
      io.emit('opacityChanged', selectorOpacity)  //send the stored data back down to the client
    } // close the if ".spaceship" check





    if(currentImage == ".alien"){ //if we got the currentImage from the frontend of .spaceship, keep going
      if(spaceshipStorage >= 1){ // if ssStorage is greater or = to 1 then...
        spaceshipStorage = 0; //reset the storage back to 0 (this cycles the opacity)
      }else{ //if we are not greter than or equal to one in the spaceShipStorage, then....
        spaceshipStorage = spaceshipStorage + opacityScale //add the opacity scale to the current status of the storage, slowly increaing the opaciy.
      }
      //pack up the current selected image and the current status of its opacity storage to get redy to send to ALL clients


      selectorOpacity = {
        selector: currentImage,
        opacity: spaceshipStorage
      }
      io.emit('opacityChanged', selectorOpacity)  //send the stored data back down to the client
    } // close the if ".spaceship" check







    if(currentImage == ".crop2"){ //if we got the currentImage from the frontend of .spaceship, keep going
      if(spaceshipStorage >= 1){ // if ssStorage is greater or = to 1 then...
        spaceshipStorage = 0; //reset the storage back to 0 (this cycles the opacity)
      }else{ //if we are not greter than or equal to one in the spaceShipStorage, then....
        spaceshipStorage = spaceshipStorage + opacityScale //add the opacity scale to the current status of the storage, slowly increaing the opaciy.
      }
      //pack up the current selected image and the current status of its opacity storage to get redy to send to ALL clients


      selectorOpacity = {
        selector: currentImage,
        opacity: spaceshipStorage
      }
      io.emit('opacityChanged', selectorOpacity)  //send the stored data back down to the client
    } // close the if ".spaceship" check






    if(currentImage == ".crop1"){ //if we got the currentImage from the frontend of .spaceship, keep going
      if(spaceshipStorage >= 1){ // if ssStorage is greater or = to 1 then...
        spaceshipStorage = 0; //reset the storage back to 0 (this cycles the opacity)
      }else{ //if we are not greter than or equal to one in the spaceShipStorage, then....
        spaceshipStorage = spaceshipStorage + opacityScale //add the opacity scale to the current status of the storage, slowly increaing the opaciy.
      }
      //pack up the current selected image and the current status of its opacity storage to get redy to send to ALL clients


      selectorOpacity = {
        selector: currentImage,
        opacity: spaceshipStorage
      }
      io.emit('opacityChanged', selectorOpacity)  //send the stored data back down to the client
    } // close the if ".spaceship" check





    if(currentImage == ".extra"){ //if we got the currentImage from the frontend of .spaceship, keep going
      if(spaceshipStorage >= 1){ // if ssStorage is greater or = to 1 then...
        spaceshipStorage = 0; //reset the storage back to 0 (this cycles the opacity)
      }else{ //if we are not greter than or equal to one in the spaceShipStorage, then....
        spaceshipStorage = spaceshipStorage + opacityScale //add the opacity scale to the current status of the storage, slowly increaing the opaciy.
      }
      //pack up the current selected image and the current status of its opacity storage to get redy to send to ALL clients


      selectorOpacity = {
        selector: currentImage,
        opacity: spaceshipStorage
      }
      io.emit('opacityChanged', selectorOpacity)  //send the stored data back down to the client
    } // close the if ".spaceship" check






    if(currentImage == ".aliengif"){ //if we got the currentImage from the frontend of .spaceship, keep going
      if(spaceshipStorage >= 1){ // if ssStorage is greater or = to 1 then...
        spaceshipStorage = 0; //reset the storage back to 0 (this cycles the opacity)
      }else{ //if we are not greter than or equal to one in the spaceShipStorage, then....
        spaceshipStorage = spaceshipStorage + opacityScale //add the opacity scale to the current status of the storage, slowly increaing the opaciy.
      }
      //pack up the current selected image and the current status of its opacity storage to get redy to send to ALL clients


      selectorOpacity = {
        selector: currentImage,
        opacity: spaceshipStorage
      }
      io.emit('opacityChanged', selectorOpacity)  //send the stored data back down to the client
    } // close the if ".spaceship" check






    if(currentImage == ".gif1"){ //if we got the currentImage from the frontend of .spaceship, keep going
      if(spaceshipStorage >= 1){ // if ssStorage is greater or = to 1 then...
        spaceshipStorage = 0; //reset the storage back to 0 (this cycles the opacity)
      }else{ //if we are not greter than or equal to one in the spaceShipStorage, then....
        spaceshipStorage = spaceshipStorage + opacityScale //add the opacity scale to the current status of the storage, slowly increaing the opaciy.
      }
      //pack up the current selected image and the current status of its opacity storage to get redy to send to ALL clients


      selectorOpacity = {
        selector: currentImage,
        opacity: spaceshipStorage
      }
      io.emit('opacityChanged', selectorOpacity)  //send the stored data back down to the client
    } // close the if ".spaceship" check





    if(currentImage == ".gif2"){ //if we got the currentImage from the frontend of .spaceship, keep going
      if(spaceshipStorage >= 1){ // if ssStorage is greater or = to 1 then...
        spaceshipStorage = 0; //reset the storage back to 0 (this cycles the opacity)
      }else{ //if we are not greter than or equal to one in the spaceShipStorage, then....
        spaceshipStorage = spaceshipStorage + opacityScale //add the opacity scale to the current status of the storage, slowly increaing the opaciy.
      }
      //pack up the current selected image and the current status of its opacity storage to get redy to send to ALL clients


      selectorOpacity = {
        selector: currentImage,
        opacity: spaceshipStorage
      }
      io.emit('opacityChanged', selectorOpacity)  //send the stored data back down to the client
    } // close the if ".spaceship" check






    if(currentImage == ".KneeMarkings"){ //if we got the currentImage from the frontend of .spaceship, keep going
      if(spaceshipStorage >= 1){ // if ssStorage is greater or = to 1 then...
        spaceshipStorage = 0; //reset the storage back to 0 (this cycles the opacity)
      }else{ //if we are not greter than or equal to one in the spaceShipStorage, then....
        spaceshipStorage = spaceshipStorage + opacityScale //add the opacity scale to the current status of the storage, slowly increaing the opaciy.
      }
      //pack up the current selected image and the current status of its opacity storage to get redy to send to ALL clients


      selectorOpacity = {
        selector: currentImage,
        opacity: spaceshipStorage
      }
      io.emit('opacityChanged', selectorOpacity)  //send the stored data back down to the client
    } // close the if ".spaceship" check







    if(currentImage == ".original"){ //if we got the currentImage from the frontend of .spaceship, keep going
      if(spaceshipStorage >= 1){ // if ssStorage is greater or = to 1 then...
        spaceshipStorage = 0; //reset the storage back to 0 (this cycles the opacity)
      }else{ //if we are not greter than or equal to one in the spaceShipStorage, then....
        spaceshipStorage = spaceshipStorage + opacityScale //add the opacity scale to the current status of the storage, slowly increaing the opaciy.
      }
      //pack up the current selected image and the current status of its opacity storage to get redy to send to ALL clients


      selectorOpacity = {
        selector: currentImage,
        opacity: spaceshipStorage
      }
      io.emit('opacityChanged', selectorOpacity)  //send the stored data back down to the client
    } // close the if ".spaceship" check






    if(currentImage == ".face"){ //if we got the currentImage from the frontend of .spaceship, keep going
      if(spaceshipStorage >= 1){ // if ssStorage is greater or = to 1 then...
        spaceshipStorage = 0; //reset the storage back to 0 (this cycles the opacity)
      }else{ //if we are not greter than or equal to one in the spaceShipStorage, then....
        spaceshipStorage = spaceshipStorage + opacityScale //add the opacity scale to the current status of the storage, slowly increaing the opaciy.
      }
      //pack up the current selected image and the current status of its opacity storage to get redy to send to ALL clients


      selectorOpacity = {
        selector: currentImage,
        opacity: spaceshipStorage
      }
      io.emit('opacityChanged', selectorOpacity)  //send the stored data back down to the client
    } // close the if ".spaceship" check






    if(currentImage == ".labattle"){ //if we got the currentImage from the frontend of .spaceship, keep going
      if(spaceshipStorage >= 1){ // if ssStorage is greater or = to 1 then...
        spaceshipStorage = 0; //reset the storage back to 0 (this cycles the opacity)
      }else{ //if we are not greter than or equal to one in the spaceShipStorage, then....
        spaceshipStorage = spaceshipStorage + opacityScale //add the opacity scale to the current status of the storage, slowly increaing the opaciy.
      }
      //pack up the current selected image and the current status of its opacity storage to get redy to send to ALL clients


      selectorOpacity = {
        selector: currentImage,
        opacity: spaceshipStorage
      }
      io.emit('opacityChanged', selectorOpacity)  //send the stored data back down to the client
    } // close the if ".spaceship" check




    if(currentImage == ".roswell"){ //if we got the currentImage from the frontend of .spaceship, keep going
      if(spaceshipStorage >= 1){ // if ssStorage is greater or = to 1 then...
        spaceshipStorage = 0; //reset the storage back to 0 (this cycles the opacity)
      }else{ //if we are not greter than or equal to one in the spaceShipStorage, then....
        spaceshipStorage = spaceshipStorage + opacityScale //add the opacity scale to the current status of the storage, slowly increaing the opaciy.
      }
      //pack up the current selected image and the current status of its opacity storage to get redy to send to ALL clients


      selectorOpacity = {
        selector: currentImage,
        opacity: spaceshipStorage
      }
      io.emit('opacityChanged', selectorOpacity)  //send the stored data back down to the client
    } // close the if ".spaceship" check




    if(currentImage == ".purportedUFO2"){ //if we got the currentImage from the frontend of .spaceship, keep going
      if(spaceshipStorage >= 1){ // if ssStorage is greater or = to 1 then...
        spaceshipStorage = 0; //reset the storage back to 0 (this cycles the opacity)
      }else{ //if we are not greter than or equal to one in the spaceShipStorage, then....
        spaceshipStorage = spaceshipStorage + opacityScale //add the opacity scale to the current status of the storage, slowly increaing the opaciy.
      }
      //pack up the current selected image and the current status of its opacity storage to get redy to send to ALL clients


      selectorOpacity = {
        selector: currentImage,
        opacity: spaceshipStorage
      }
      io.emit('opacityChanged', selectorOpacity)  //send the stored data back down to the client
    } // close the if ".spaceship" check





    if(currentImage == ".ufo"){ //if we got the currentImage from the frontend of .spaceship, keep going
      if(spaceshipStorage >= 1){ // if ssStorage is greater or = to 1 then...
        spaceshipStorage = 0; //reset the storage back to 0 (this cycles the opacity)
      }else{ //if we are not greter than or equal to one in the spaceShipStorage, then....
        spaceshipStorage = spaceshipStorage + opacityScale //add the opacity scale to the current status of the storage, slowly increaing the opaciy.
      }
      //pack up the current selected image and the current status of its opacity storage to get redy to send to ALL clients


      selectorOpacity = {
        selector: currentImage,
        opacity: spaceshipStorage
      }
      io.emit('opacityChanged', selectorOpacity)  //send the stored data back down to the client
    } // close the if ".spaceship" check






  }) //send the images message out to all of the connected clients.
})


//makes the app listen for requests on port 3000
server.listen(3000, function(){
  console.log("app listening on port 3000!")
})
