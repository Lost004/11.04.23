$(function () {


  let newArray = Array.from($('#img1'));

  newArray.forEach((element, index) => {
    if (index % 2 == 0) {
      element.style.float = "right";
    } else {
      element.style.float = "left";
    }
  });


  $('#img1').attr("title", "Shoes");


  $('#bg').css({
     position  : 'fixed',
     top : 0,
     display : "none",
     'cursor' : 'zoom-out'
     
  })


  $('#img1').click(function(){
  let imgPath = $(this).attr('src');
  $('#bg').css({
    'background-image' : `url('${imgPath}')`,
    'display' : 'block'
  })
  });
});

$(document).ready( function() {
    $('#img1').hover(
        function() {
            $(this).animate({ 'zoom': 1.2 }, 400);
        },
        function() {
            $(this).animate({ 'zoom': 1 }, 400);
        });
    });
    $("#ZoomIn").click(ZoomIn());

$("#ZoomOut").click(ZoomOut());

function ZoomIn (event) {

    $('#img1').width(
        $('#img1').width() * 1.2
    );

    $('#img1').height(
        $('#img1').height() * 1.2
    );
}

function  ZoomOut (event) {

    $('#img1').width(
        $("#imgDtls").width() * 0.5
    );

    $('#img1').height(
        $("#div img").height() * 0.5
    );
}