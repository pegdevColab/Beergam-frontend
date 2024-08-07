document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        eventClick: function(info) {
            alert('Event: ' + info.event.title);
            alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
            alert('View: ' + info.view.type);

            info.el.style.borderColor = 'red';
        },
        selectable: true,
        select: function(info) {
            alert(`Seleção do dia ${info.startStr} até ${info.endStr}`)
        },
        dateClick: function(info) {
            alert(`Dia ${info.dateStr} selecionado`)
        },
    });
    calendar.render();
});