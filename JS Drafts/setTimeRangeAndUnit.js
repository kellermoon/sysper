
    var generateCpuUsage = function(i) {
        var dataset = [];
        var yIntercept = 20;
        var timeIncrement = new Date(startTime);

        var timeUnit = (i !== "hour" && i !== "week") ? "week" : i;
        var now = new Date();
        var startTime = new Date(now);
        var tUnit;


        function setTimeRangeAndUnit(tU, sT, N, tUn) {
            if(tU === "week") {
                sT.setDate(N.getDate() - 7);
                tUn = Math.abs(N - sT) / 36e5;
            } else if (tU === "hour") {
                sT.setHours(N.getHours() - 1);
                tUn = Math.abs(N - sT) / (60*1000);
            }
            return [tU, sT, N, tUn];
        }

        setTimeRangeAndUnit(timeUnit, startTime, now, tUn);


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