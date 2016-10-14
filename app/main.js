requirejs([ "./components/eventClock", 
            "./api/eventApi"], 
    function(EventClock, EventApi) {

        console.log("hola");

        EventClock.init();
    
});