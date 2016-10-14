define([ "./../models/eventObject",
         "./../models/locationObject",
         "./mocked-data"], 

    function(EventObject, LocationObject, MockedData) {        
        return {
            getEvent: function (time) {
                var serverData = MockedData.get(time);
                if (serverData != null){
                    var location = new LocationObject(serverData.location.name, serverData.location.x, serverData.location.y );
                    return new EventObject(serverData.name, location, serverData.time);
                }else{
                    return null;
                }
            }
        }
});