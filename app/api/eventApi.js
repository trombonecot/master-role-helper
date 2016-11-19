define([ "./../models/eventObject",
         "./../models/locationObject",
         "./mocked-data"], 

    function(EventObject, LocationObject, MockedData) {   

        var timeIndex = {
            hola: 1
        };
        

        return {

            init: function(initialTime){
                var mockedData = MockedData.getAll();
                for (var i in mockedData){
                    timeIndex[initialTime+(mockedData[i].time*60*1000)] = mockedData[i];
                }
            },
            getEvent: function (time) {
                var serverData = timeIndex[time];
                if (serverData != null){
                    console.log(serverData);
                    var location = new LocationObject(serverData.location.name, serverData.location.x, serverData.location.y );
                    return new EventObject(serverData.name, location, serverData.time);
                }else{
                    return null;
                }
            }
        }
});