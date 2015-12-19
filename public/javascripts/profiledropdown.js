/**
 * Created by guarino on 12/17/15.
 */
$.ajax({
        method: "GET",
        url: "/playerprofiles/loadprofiles",
    })
    .done(function(profiles) {
        var htmlString="<option></option>";

        for(var i = 0; i < profiles.length; i++){
            htmlString+='<option value="/playerprofiles/edit?instrument='+profiles[i].instrument+ "&years_playing="+
                profiles[i].years_playing + "&equipment_level=" + profiles[i].equipment_level +
                "&favorite_genres=" + profiles[i].favorite_genres+'">'+ profiles[i].instrument+ " "+
                profiles[i].years_playing + " " + profiles[i].equipment_level + " " + profiles[i].favorite_genres+'</option>';
        }
        htmlString+='<option value="/playerprofiles/createnew">Create new</option>';
        $('#edit_list').html(htmlString);
    });

$('#edit_list').on('change',(function() {
    var url = $(this).val();
    if (url) {
        window.location = url;
    }
    return false;
}));