define(function(){
    
    function LocationObject(name, x, y){
        this.name = name || 'Default name';
        this.x = x || '';
        this.y = y || '';
    }

    return LocationObject;
});