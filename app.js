function EventObserver(){//Observer Pattern

  this.observer = [];



}

EventObserver.prototype = {
  subscribe: function(fn){
    this.observer.push(fn);
    console.log(`YOU ARE NOW SUBSCRIBED TO ${fn.name}`);
  },
  unsubscribe : function(fn){

    this.observer = this.observer.filter(function(item){
      if(item !== fn){
        return item;
      }
    });
    console.log(`You are now unsubscribed from  ${fn.name}`);
  },
  fire: function(){
    this.observer.forEach(function(item){
        item.call();
    })

  }
}

const click = new EventObserver();

///Event listeners
document.querySelector('.sub-ms').addEventListener('click',function(){

  click.subscribe(getCurrentMilliseconds);

});
document.querySelector('.unsub-ms').addEventListener('click',function(){

  click.unsubscribe(getCurrentMilliseconds);

});
document.querySelector('.fire').addEventListener('click',function(){

  click.fire();

});
//CLick handler

const getCurrentMilliseconds = function(){
        console.log(`Current milliseconds ${new Date().getMinutes()}`);
}
