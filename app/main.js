requirejs([ "./components/eventClock", 
            "./models/clockObject",
            "./api/eventApi",
            "./utils/domManipulation"], 
    function(EventClock, ClockObject, EventApi, DomManipulation) {
            

        var rellotge = new ClockObject("principal", new Date(0).getTime());

        var domClock = document.getElementById("clock");
        var domConsole = document.getElementById("console");

        this.checkTime = function(){
                domClock.textContent = new Date(rellotge.time).toTimeString();



                var event = EventApi.getEvent(rellotge.time);
                if (event!=null){
                      
                      domConsole.appendChild(DomManipulation.createDiv("event", event.name, "black"));
                }

                setTimeout("this.checkTime()" ,1000);
        }
        checkTime();

        this.start = function(){
                rellotge.start();
        }
        this.pause = function(){
                rellotge.pause(); 
        }
        this.changeInitialTime = function(){
                var timeInput = document.getElementById("initialTime").value;
                var timeInit = new Date((timeInput-1)*60*60*1000).getTime();
                rellotge = new ClockObject("principal", timeInit);
                EventApi.init(timeInit);
        }
});