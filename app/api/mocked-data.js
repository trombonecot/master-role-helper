define([], 

    function() {

        var mockedData = [
            {
                name: "arribada de l'apocalipsis",
                time: 2,
                location: {
                    name : "peixeteria",
                    x: "34839843",
                    y: "9875493875935"
                }
            }
        ]

        var timeIndex = {};
        
        return {
            init: function(){
                for (var i in mockedData){
                    timeIndex[mockedData[i].time] = mockedData;
                }
            },
            get: function (time) {
                if (timeIndex[time]!=undefined){
                    return timeIndex[time];
                }else{
                    return  null;
                }
            }
        }
});