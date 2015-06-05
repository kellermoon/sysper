var dataGen = (function() {

    var generateCpuUsage = function(p) {
        var timeUnit = (p !== "hour" && p !== "week") ? "week" : p;
        var dataset = [];
        var yIntercept = 20;
        var now = new Date();
        var startTime = new Date(now);
        var timeIncrement = new Date(startTime);
        var tUnit;

        if(timeUnit === "week") {
            startTime.setDate(now.getDate() - 7);
            tUnit = Math.abs(now - startTime) / 36e5;
        } else if (timeUnit === "hour") {
            startTime.setHours(now.getHours() - 1);
            tUnit = Math.abs(now - startTime) / (60*1000);
        }

        timeIncrement = new Date(startTime);

        for (var i = 0; i < tUnit; i++) {
            if(timeUnit === "week") {
                timeIncrement.setHours(timeIncrement.getHours() + 1);
            } else if(timeUnit === "hour") {
                timeIncrement.setMinutes(timeIncrement.getMinutes() + 1);
            }
            var newNumber = (Math.random() * 40) + yIntercept;
            var element = {
                date: new Date(timeIncrement),
                value: newNumber
            };
            dataset.push(element);
        }

        return dataset;
    };

    var generateDiskCapacity = function(p) {
        var timeUnit = (p !== "hour" && p !== "week") ? "week" : p;
        var dataset = [];
        var yIntercept = 40;
        var now = new Date();
        var startTime = new Date(now);
        var timeIncrement = new Date(startTime);
        var tUnit;

        if(timeUnit === "week") {
            startTime.setDate(now.getDate() - 7);
            tUnit = Math.abs(now - startTime) / 36e5;
        } else if (timeUnit === "hour") {
            startTime.setHours(now.getHours() - 1);
            tUnit = Math.abs(now - startTime) / (60*1000);
        }

        timeIncrement = new Date(startTime);

        for (var i = 0; i < tUnit; i++) {
            if(timeUnit === "week") {
                timeIncrement.setHours(timeIncrement.getHours() + 1);
            } else if(timeUnit === "hour") {
                timeIncrement.setMinutes(timeIncrement.getMinutes() + 1);
            }
            yIntercept -= .025;
            var newNumber = (Math.random() * 1.25) + yIntercept;
            var element = {
                date: new Date(timeIncrement),
                value: newNumber
            };
            dataset.push(element);
        }

        return dataset;
    };

    var generateMemoryUsage = function(p) {
        var timeUnit = (p !== "hour" && p !== "week") ? "week" : p;
        var dataset = [];
        var yIntercept = 0.1;
        var now = new Date();
        var startTime = new Date(now);
        var timeIncrement = new Date(startTime);
        var tUnit;

        if(timeUnit === "week") {
            startTime.setDate(now.getDate() - 7);
            tUnit = Math.abs(now - startTime) / 36e5;
        } else if (timeUnit === "hour") {
            startTime.setHours(now.getHours() - 1);
            tUnit = Math.abs(now - startTime) / (60*1000);
        }

        timeIncrement = new Date(startTime);

        for (var i = 0; i < tUnit; i++) {
            if(timeUnit === "week") {
                timeIncrement.setHours(timeIncrement.getHours() + 1);
            } else if(timeUnit === "hour") {
                timeIncrement.setMinutes(timeIncrement.getMinutes() + 1);
            }
            yIntercept += i / (i + 5);
            var newNumber = (Math.random() * 20) + yIntercept;
            var element = {
                date: new Date(timeIncrement),
                value: newNumber
            };
            dataset.push(element);
        }

        return dataset;
    };

    var generateNetworkTraffic = function(p) {
        var timeUnit = (p !== "hour" && p !== "week") ? "week" : p;
        var dataset = [];
        var yIntercept = (Math.random() * 40);
        var now = new Date();
        var startTime = new Date(now);
        var timeIncrement = new Date(startTime);
        var tUnit;

        if(timeUnit === "week") {
            startTime.setDate(now.getDate() - 7);
            tUnit = Math.abs(now - startTime) / 36e5;
        } else if (timeUnit === "hour") {
            startTime.setHours(now.getHours() - 1);
            tUnit = Math.abs(now - startTime) / (60*1000);
        }

        timeIncrement = new Date(startTime);

        for (var i = 0; i < tUnit; i++) {
            if(timeUnit === "week") {
                timeIncrement.setHours(timeIncrement.getHours() + 1);
            } else if(timeUnit === "hour") {
                timeIncrement.setMinutes(timeIncrement.getMinutes() + 1);
            }
            var newNumber = (Math.random() * 15) + 15;
            if(newNumber > 28) {
                newNumber += yIntercept;
            }
            var element = {
                date: new Date(timeIncrement),
                value: newNumber
            };
            dataset.push(element);
        }

        return dataset;
    };

    return {
        genCpuUsage: generateCpuUsage,
        genDiskCapacity: generateDiskCapacity,
        genMemoryUsage: generateMemoryUsage,
        genNetworkTraffic: generateNetworkTraffic
    }

})();