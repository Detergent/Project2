$.ajax({
        method: "GET",
        url: "/sessions/loadsessionmembers",
    })
    .done(function(sessions) {
        var htmlString="";

        for(var i = 0; i< sessions.length; i++){


            htmlString+='<tr><td>' + sessions[i].Email + '</td>' + '<td>' +
                sessions[i].FirstName + '</td>' + '<td>' +
                sessions[i].LastName + '</td>' + '<td>' +
                sessions[i].Address + '</td>' + '<td>' +
                sessions[i].From + '</td>' + '<td>' +
                sessions[i].To + '</td>' + '<td>' +
                sessions[i].Description + '</td></tr>';
        }

        $('#sessionsDetailed').html(htmlString);
    });
