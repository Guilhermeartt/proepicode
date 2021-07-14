// Auxiliary moodle script

// Change Questionary navigation
$(document).ready(function() {
    var container = $('.activity-navigation');

    var courseA = $('.breadcrumb-item a');
    var courseLink = courseA[1].getAttribute('href');
    var courseID = courseLink.split('=')[1];

    var continuebutton = '<div class="continuebutton"></div>';
    var form = '<form method="get" action="https://ead.proepi.org.br/ead/course/view.php"></form>';
    var input = '<input type="hidden" name="id" value="' + courseID + '"></input>';
    var submit = '<button type="submit" class="btn btn-secondary">Voltar ao curso</button>';

    container.html(continuebutton);

    var newContainer = container.find('div');
    newContainer.append(form);

    var newForm = newContainer.find('form');
    newForm.append(input);
    newForm.append(submit);
})
