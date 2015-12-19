$.ajax({
        method: "GET",
        url: "/availability/loadavailability",
    })
    .done(function(availability) {
        var htmlString="";


        for(var i = 0; i< availability.length; i++){

            var ISO_start_date = availability[i].start_time.split("-");
            var start_date = new Date(ISO_start_date[0], ISO_start_date[1] - 1, ISO_start_date[2].substr(0, 2),
                ISO_start_date[2].substr(3, 2), ISO_start_date[2].substr(6, 2), ISO_start_date[2].substr(9, 2));
            var ISO_end_date = availability[i].end_time.split("-");
            var end_date = new Date(ISO_end_date[0], ISO_end_date[1] - 1, ISO_end_date[2].substr(0, 2),
                ISO_end_date[2].substr(3, 2), ISO_end_date[2].substr(6, 2), ISO_end_date[2].substr(9, 2));


            htmlString+='<tr><td>' + start_date + '</td>' + '<td>' +
                end_date + '</td>' + '<tr>';
        }
        $('#availability').html(htmlString);
    });