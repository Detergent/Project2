$.ajax({
    method: "GET",
    url: "/playerprofiles/loadprofiles",
})
    .done(function(profiles) {
        var htmlString="";

        for(var i = 0; i< profiles.length; i++){
            htmlString+='<tr><td>' + profiles[i].instrument + '</td>' + '<td>' +
                profiles[i].years_playing + '</td>' + '<td>' +
                profiles[i].equipment_level +'</td>' + '<td>' +
                profiles[i].favorite_genres + '</td>' + '<tr>';
        }
        $('#profiles').html(htmlString);
});