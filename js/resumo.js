$(document).ready(function() {
    var allValue = parseFloat($('.memoryLeft').attr('all'));
    var usedValue = parseFloat($('#using').text());

    var percentageUsed = (usedValue / allValue) * 100;

    $('#progressBar').css('--progress-width', percentageUsed + '%');
});
