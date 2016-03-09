$(document).ready(function() {
  var currentMonth = moment().format('YYYY-MM');
  var nextMonth    = moment().add(1, 'month').format('YYYY-MM');
  var events = [
    { date: currentMonth + '-' + '10', title: 'Persian Kitten Auction', location: 'Center for Beautiful Cats' },
    { date: currentMonth + '-' + '19', title: 'Cat Frisbee', location: 'Jefferson Park' },
    { date: currentMonth + '-' + '23', title: 'Kitten Demonstration', location: 'Center for Beautiful Cats' },
    { date: nextMonth + '-' + '07',    title: 'Small Cat Photo Session', location: 'Center for Cat Photography' }
  ];

  $('#calendar').clndr({
    template: $('#calendar-template').html(),
    events: events,
    clickEvents: {
      click: function(target) {
        if(target.events.length) {
          var daysContainer = $('#calendar').find('.days-container');
          daysContainer.toggleClass('show-events', true);
          console.log("HEREEEEE!!!");
          $('#calendar').find('.x-button').click( function() {
            daysContainer.toggleClass('show-events', false);
          });
        }
      }
    },
    adjacentDaysChangeMonth: true
  });
});
