/*
We want to try mixing native DOM events, jQuery events, events from a framework,
and other events from other code.

When creating event handlers for these things, we notice that sometimes the handler
fires twice (or more) for the events.

The core feature set of an observable - the ability to register and unregister
an event handler, among other things - is more an API design,
implemented by you
*/

/*
This is like a wrapper
that listens for changes that happens.
*/

// Suppose we have these two event listeners
// where we have it wrapped

var resize = new Observable((o) => {
    window.addEventListener("resize", () => {
        var height = window.innerHeight;
        var width = window.innerWidth;
        o.next({height, width});
    });
});

var change = new Observable((o) => {
    myModel.on("change", (key, value) => {
        o.next({ key, value });
    });
});

var observer = {
    next: (value) => {
        console.log(`VALUE: ${value}`);
    }
};

// listen for data from the observables
resize.observe(observer);
change.observe(observer);

