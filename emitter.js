function Emitter() {
    this.events = {};
}

Emitter.prototype.on = function(type, listener) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
};

Emitter.prototype.emit = function(type) {
    if (this.events[type]) {
        this.events[type].forEach(function (listener) {
            listener();
        });
    }
};

var emtr = new Emitter();

emtr.on('fileSave', function() {
    console.log('File saved');
});

emtr.on('fileSave', function() {
    console.log('File saved again');
});


emtr.emit('fileSave');


// ---------------------------------------
// Same with Object.create

var emitter2 = {
    this.events = {};

    th
}

var emtr2 = Object.create(emitter2)
