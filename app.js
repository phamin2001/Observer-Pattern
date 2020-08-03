function EventObserver() {
  this.observers = [];
}

EventObserver.prototype = {
  subscribe: function (fn) {
    this.observers.push(fn);
    console.log(`You are now subscribed to ${fn.name}`);
  },
  unsubscribe: function (fn) {
    this.observers = this.observers.filter(function (item) {
      if (item !== fn) {
        return item;
      }
    });
    console.log(`You are now unsubscribed from ${fn.name}`);
  },
  fire: function () {
    this.observers.forEach(function (item) {
      item.call();
    });
  }
};

const click = new EventObserver();

// Event Listener
document.querySelector('.sub-ms').addEventListener('click', function () {
  click.subscribe(getCurrentMilliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click', function () {
  click.unsubscribe(getCurrentMilliseconds);
});

document.querySelector('.sub-s').addEventListener('click', function () {
  click.subscribe(getCurrentSeconds);
});

document.querySelector('.unsub-s').addEventListener('click', function () {
  click.unsubscribe(getCurrentSeconds);
});

document.querySelector('.fire').addEventListener('click', function () {
  click.fire();
});

// Click Handler
const getCurrentMilliseconds = function () {
  console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
};

const getCurrentSeconds = function () {
  console.log(`Current Seconds: ${new Date().getSeconds()}`);
};
