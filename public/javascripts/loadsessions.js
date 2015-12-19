$.ajax({
        method: "GET",
        url: "/sessions/loadsessions",
    })
    .done(function(sessions) {
        var htmlString="";

        for(var i = 0; i< sessions.length; i++){

            var ISO_start_date = sessions[i].start_time.split("-");
            var start_date = new Date(ISO_start_date[0], ISO_start_date[1] - 1, ISO_start_date[2].substr(0, 2),
                ISO_start_date[2].substr(3, 2), ISO_start_date[2].substr(6, 2), ISO_start_date[2].substr(9, 2));
            var ISO_end_date = sessions[i].end_time.split("-");
            var end_date = new Date(ISO_end_date[0], ISO_end_date[1] - 1, ISO_end_date[2].substr(0, 2),
                ISO_end_date[2].substr(3, 2), ISO_end_date[2].substr(6, 2), ISO_end_date[2].substr(9, 2));



            htmlString+='<tr><td>' + sessions[i].description + '</td>' + '<td>' +
                start_date + '</td>' + '<td>' +
                end_date + '</td>' + '<td>' +
                sessions[i].location + '</td>' + '<tr>';
        }
        $('#sessions').html(htmlString);
    });