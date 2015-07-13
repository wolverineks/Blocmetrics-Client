function sendClick('event_type'){
  var event = { event: {name: event_type} };
  var request = new XMLHttpRequest(); 
  request.open("POST", "http://localhost:3000/api/events", true); 
  request.setRequestHeader('Content-Type', 'application/json'); 
  request.send(JSON.stringify(event));
}