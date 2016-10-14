define(function(){
    
    function ClockObject(name, initialTime){
        this.name = name || 'Default name';
        this.initialTime = initialTime || 0;
        this.time = this.initialTime;

        this.running = false;
    }

    ClockObject.prototype.start = function(){
        this.running = true;
        this.run();
    }

    ClockObject.prototype.pause = function(){
        this.running = false;
    }

    ClockObject.prototype.run = function(){
        var that = this;
        if (this.running){
            this.time = this.time + 1000;
            var callRun = function(){
                that.run();
            }
            setTimeout( callRun, 1000);
        }
    }

    return ClockObject;
});