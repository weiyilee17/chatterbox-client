
// $.ajax({
//   // This is the url you should use to communicate with the parse API server.
//   url: 'http://parse.sfs.hackreactor.com/chatterbox/classes/messages',
//   type: 'POST',
//   data: JSON.stringify(message),
//   contentType: 'application/json',
//   success: function (data) {
//     console.log('chatterbox: Message sent');
//   },
//   error: function (data) {
//     // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
//     console.error('chatterbox: Failed to send message', data);
//   }
// });

// var message = {
//   username: 'shawndrost',
//   text: 'trololo',
//   roomname: '4chan'
// };

var app = {
  server: 'http://parse.sfs.hackreactor.com/chatterbox/classes/messages',
  init: function () {
    
  },
  send: function (message) {
    $.ajax({
      //This is the url you should use to communicate with the parse API server.
      url: this.server,
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: function (data) {
        console.log('chatterbox: Message sent');
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message', data);
      }
    });
  },
  fetch: function (url) {
    $.ajax({
      //This is the url you should use to communicate with the parse API server.
      url: this.server,
      type: 'GET',
      //data: JSON.stringify(message),
      //contentType: 'application/json',
      success: function (data) {
        console.log('chatterbox: Message received');
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to receive message', data);
      }
    });    
  },
  clearMessages: function () {
    $('#chats').empty();
  },
  renderMessage: function (message) {
    var element = document.createElement('<p>' + message.text + '</p>');
    //var element = ('<p>' + message.text + '</p>');
    element.setAttribute('username', message.username);
    element.setAttribute('roomname', message.roomname);
    $(username).text(message.text);
    
    
    $('#chats').prepend(element);
  },
  renderRoom: function (nameOfRoom) {
    var element = document.createElement('option');
    element.setAttribute( 'value', nameOfRoom );
    $('#roomSelect').prepend(element);
  },
  handleUserNameClick: function () {
    
  },
};