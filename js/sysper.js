var accordionPanelWidth = $("#collapseOne").width();
var cpuUsageData = dataGen.genCpuUsage("week");
var diskCapacityData = dataGen.genDiskCapacity("week");
var memoryUsageData = dataGen.genMemoryUsage("week");
var networkTrafficData = dataGen.genNetworkTraffic("week");

$(window).resize(function() {
  accordionPanelWidth = $("#collapseOne").width();
  drawGraphs.all();
});


var drawGraphs = (function() {

	var cpuUsage = function() {
		MG.data_graphic({
		    description: "CPU Usage",
		    data: cpuUsageData,
		    width: accordionPanelWidth,
		    height: 200,
		    right: 40,
		    target: document.getElementById('cpu-usage'),
		    transition_on_update: false,
		    x_accessor: 'date',
		    y_accessor: 'value'
		});
	};

	var diskCapacity = function() {
		MG.data_graphic({
		    description: "Disk Capacity",
		    data: diskCapacityData,
		    width: accordionPanelWidth,
		    height: 200,
		    right: 40,
		    target: document.getElementById('disk-capacity'),
		    transition_on_update: false,
			x_accessor: 'date',
		    y_accessor: 'value'
		});
	};

	var memoryUsage = function() {
		MG.data_graphic({
		    description: "Memory Usage",
		    data: memoryUsageData,
		    width: accordionPanelWidth,
		    height: 200,
		    right: 40,
		    target: document.getElementById('memory-usage'),
		    transition_on_update: false,
		    x_accessor: 'date',
		    y_accessor: 'value'
		});
	};

	var networkTraffic = function() {
		MG.data_graphic({
			description: "Network Traffic",
		    data: networkTrafficData,
		    width: accordionPanelWidth,
			height: 200,
			right: 40,
			target: document.getElementById('network-traffic'),
			transition_on_update: false,
			x_accessor: 'date',
			y_accessor: 'value'
		});
	};

	var all = function() {
		cpuUsage();
		diskCapacity();
		memoryUsage();
		networkTraffic();
	}

	return {
		cpuUsage: cpuUsage,
		diskCapacity: diskCapacity,
		memoryUsage: memoryUsage,
		networkTraffic: networkTraffic,
		all: all
	}

})();





function refreshGraph(graph, period) {
	switch (graph) {
		case "cpu-period":
			cpuUsageData = dataGen.genCpuUsage(period);
			drawGraphs.cpuUsage();
			break;
		case "disk-period":
			diskCapacityData = dataGen.genDiskCapacity(period);
			drawGraphs.diskCapacity();
			break;
		case "mem-period":
			memoryUsageData = dataGen.genMemoryUsage(period);
			drawGraphs.memoryUsage();
			break;
		case "net-period":
			networkTrafficData = dataGen.genNetworkTraffic(period);
			drawGraphs.networkTraffic();
			break;
	}
}


$("input[value]").change(
	function() {
		var graph = $(this).attr("name");
		var period = $(this).attr("value");
		refreshGraph(graph, period);
	}
);


drawGraphs.all();