var script_url = "https://script.google.com/macros/s/AKfycbyHmnoQKJkXtD6Zo12Zt1R8NaViNIwHC-P8YgrbvX-RnMTqmG8acpWmJ4ESMt28w_nD/exec";
$(document).ready(function ($) {
    $("#google-sheet").submit(function (event) {
        $('#date, #time, #name, #phone').prop("disabled", false);
        var date = $("#date").val();
        var time = $("#time").val();
        var name = $("#name").val();
        var phone = $("#phone").val();
        var url = script_url + "?callback=ctrlq&date=" + date + "&time=" + time + "&name=" + name + "&phone=" + phone + "&action=create";
        var request = $.ajax({
            url: url,
            type: "POST"
        });
        request.done(function (response, textStatus, jqXHR) {
            window.location.reload();
        });
        request.always(function () {
            $('#date, #time, #name, #phone').prop("disabled", true);
        });
        event.preventDefault();
    })
})