$.ajax({
        method: "GET",
        url: "/practicespaces/loadpracticespaces",
    })
    .done(function(practiceSpaces) {
        var htmlString="";

        for(var i = 0; i< practiceSpaces.length; i++){
            htmlString+='<tr><td>' + practiceSpaces[i].address + '</td>' + '<td>' +
                practiceSpaces[i].num_occupants + '</td>' + '<td>' +
                practiceSpaces[i].description + '</td>' + '<tr>';
        }
        $('#practiceSpaces').html(htmlString);
    });