var accordionPanelWidth = $("#collapseOne").width();

drawGraphs();

$(window).resize(function() {
  accordionPanelWidth = $("#collapseOne").width();
  drawGraphs();
});


function drawGraphs() {

	MG.data_graphic({
	    description: "CPU Usage",
	    data: dataGen.genCpuUsage("week"),
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
	    data: dataGen.genDiskCapacity("week"),
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
	    data: dataGen.genMemoryUsage("week"),
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
	    data: dataGen.genNetworkTraffic("week"),
	    width: accordionPanelWidth,
		height: 200,
		right: 40,
		target: document.getElementById('network-traffic'),
		transition_on_update: false,
		x_accessor: 'date',
		y_accessor: 'value'
	});

}