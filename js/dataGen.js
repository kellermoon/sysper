var dataGen = (function() {

    var generateCpuUsage = function(i) {
        var timeUnit = (i !== "hour" && i !== "week") ? "week" : i;
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

        for (var i = 0; i < tUnit; i++) {
            timeIncrement.setHours(timeIncrement.getHours() + 1);
            var newNumber = (Math.random() * 40) + yIntercept;
            var element = {
                date: new Date(timeIncrement),
                value: newNumber
            };
            dataset.push(element);
        }
        return dataset;
    };

    var generateDiskCapacity = function(numPoints) {
        var dataset = [];
        var numPoints = numPoints || 100;
        var yIntercept = 40;
        for (var i = 0; i < numPoints; i++) {
            yIntercept += .25;
            var newNumber = (Math.random() * 2) + yIntercept;
            dataset.push(newNumber);
        }
        return dataset;
    };
    var generateMemoryUsage = function(numPoints) {
        var dataset = [];
        var numPoints = numPoints || 100;
        var yIntercept = 0.1;
        for (var i = 0; i < numPoints; i++) {
            yIntercept += i / (i + 5);
            var newNumber = (Math.random() * 20) + yIntercept;
            dataset.push(newNumber);
        }
        return dataset;
    };
    var generateNetworkTraffic = function(numPoints) {
        var dataset = [];
        var numPoints = numPoints || 100;
        var yIntercept = (Math.random() * 40);
        for (var i = 0; i < numPoints; i++) {
            var newNumber = (Math.random() * 15) + 15;
            if(newNumber > 25) newNumber += yIntercept;
            dataset.push(newNumber);
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