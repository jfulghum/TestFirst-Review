function MyEventEmitter(){
  this.events = {}
}

MyEventEmitter.prototype.addListener = function(event, callback){
  if (this.events[event] === undefined){
    this.events[event] = [callback]
  } else {
    this.events[event].push(callback)
  }
}

MyEventEmitter.prototype.emit = function(event, name){
  var args = [].slice.call(arguments, 1);
  this.events[event].map(function(event){
      event.apply(this, args)
    })
}

