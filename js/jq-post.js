$('#register').on('submit', function(e) {
    alert('check')
    e.preventDefault();
    var details = $('#register').serialize();
    console.log(details)
    $.get('../register.php', details, function(data) {
        console.log(data);
        $('#register').html(data);
    });
});