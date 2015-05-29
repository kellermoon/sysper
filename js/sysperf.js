d3.json('data/fake_users1.json', function(data) {
    data = MG.convert.date(data, 'date');
    MG.data_graphic({
        title: "CPU Usage",
        description: "This is a simple line chart. You can remove the area portion by adding area: false to the arguments list.",
        data: data,
        full_width: true,
        height: 200,
        right: 40,
        target: document.getElementById('fake_users1'),
        x_accessor: 'date',
        y_accessor: 'value'
    });
});