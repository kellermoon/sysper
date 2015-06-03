var accordionPanelWidth = $("#collapseOne").width();
var cpuUsageData = dataGen.genCpuUsage("week");
var diskCapacityData = dataGen.genCpuUsage("week");
var memoryUsageData = dataGen.genCpuUsage("week");
var networkTrafficData = dataGen.genCpuUsage("week");


drawGraphs();

$(window).resize(function() {
  accordionPanelWidth = $("#collapseOne").width();
  drawGraphs();
});


function drawGraphs() {

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

}