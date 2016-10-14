define([], 

    function() {

        var mockedData = [
            {
                name: "arribada de l'apocalipsis",
                //en minuts
                time: 1,
                location: {
                    name : "peixeteria",
                    x: "34839843",
                    y: "9875493875935"
                }
            },
            {
                name: "arribada de l'apocalipsis",
                //en minuts
                time: 2,
                location: {
                    name : "peixeteria",
                    x: "34839843",
                    y: "9875493875935"
                }
            },
            {
                name: "arribada de l'apocalipsis",
                //en minuts
                time: 3,
                location: {
                    name : "peixeteria",
                    x: "34839843",
                    y: "9875493875935"
                }
            }
        ]

        return {
            getAll: function(){
                return mockedData;
            }
        }
});