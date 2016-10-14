define(function(){
    
    function EventObject(name, location, time){
        this.name = name || 'Default name';
        this.location = location || {};
        //minutes elapsed
        this.time = time || 0;
    }

    return EventObject;
});