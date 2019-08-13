$(document).ready(function(){
  //Кнопка добавления дел//
  $('#deal-add-button').on("click",function(){
    var name = $('#name-text').val();
    var desc = $('#description-text').val();
    //Проверка заполнения полей//
    if (!name){
      alert('Заполните поле "Название"!');
      return false;
    }
    if (!desc){
      alert('Заполните поле "Описание"!');
      return false;
    }
    //Создание и помещение информации в html документ//
    var s = '';
    s += '<div class = "deal-column">';
    s += '<div class = "deal-name">' + name + '<button class = "close-button"><img src = "img/close.png"></button>' + '<button class = "arrow"><img src = "img/arrow.png"></button>' + '</div>';
    s += '<div class = "deal-desc">' + desc + '</div>';
    s += '</div>';
    if ($('#deals').length){
      $('#deals').remove();
    }
    $('.left-column').append(s);
    $('#name-text').val('');
    $('#description-text').val(''); 
  });
});
//Кнопка свертывания и развертывания блока
$(document).ready(function(){
  $('.left-column').on("click", ".arrow", function(){
    $(this).closest('.deal-column').find('.deal-desc').slideToggle();
    $(this).toggleClass('rotation');
  });
});
//Кнопка удаления дел
$(document).ready(function(){
	$('.left-column').on("click",".close-button",function(){
		 $(this).closest('.deal-column').remove();
		 //Возвращение блока при пустом списке 
      if (!$('#deals').length && !$('.deal-column').length){
        var p = '';
        p += '<div id = "deals">Список пуст...</div>';
        $('.left-column').append(p);
      };
	})
})
