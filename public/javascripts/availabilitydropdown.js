/**
 * Created by Justin on 12/17/2015.
 */
$.ajax({
        method: "GET",
        url: "/availability/loadavailability",
    })
    .done(function(availability) {
        var htmlString="<option></option>";

        for(var i = 0; i < availability.length; i++){
            htmlString+='<option value="/availability/edit?start_time='+availability[i].start_time+ "&end_time="+
                availability[i].end_time + "&equipment_level=" + '">'+ availability[i].start_time+ " "+
                availability[i].end_time +'</option>';
        }
        htmlString+='<option value="/availability/createnew">Create new</option>';
        $('#edit_list').html(htmlString);
    });

$('#edit_list').on('change',(function() {
    var url = $(this).val();
    if (url) {
        window.location = url;
    }
    return false;
}));