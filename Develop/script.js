$(function () {
  var today = dayjs();
  var saveBtnEl = $('.saveBtn');

  $('#currentDay').text(today.format('dddd, MMMM D'));

  // past, present and future indication code below:
  for(var i=9; i<18; i++){
    var divName = "hour-" + i;
    var divEl = $('#'+ divName);
    var now = today.format('H');
    var text = localStorage.getItem(divName);
    console.log(text);

    if(i < now){
      divEl.attr('class', 'row time-block past');
    } else if(i === now) {
      divEl.attr('class', 'row time-block present');
    } else {
      divEl.attr('class', 'row time-block future');
    }

    if(text) {
      divEl.children('.description').val(text);
    }
  }

  saveBtnEl.on('click', function() {
    var parentId = $(this).parent().attr('id');
    console.log(parentId);
    var text = $(this).parent().children('.description').val();
    console.log(text);
    localStorage.setItem(parentId, text);
  });  

});

