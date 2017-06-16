(function () {

  var arLeft = document.getElementById('arrow_prev'),
  arRight = document.getElementById('arrow_next'),
  sliderWrapper = arRight.nextElementSibling,
  width = 300,
  pos = 0,
  slider = sliderWrapper.firstElementChild,
  item = slider.querySelectorAll('.slider__item'),
  count = item.length,
  maxLength = (count-1)*width;

//switch to the right

  arRight.addEventListener('click', function(e) {
    e.preventDefault();
    pos = pos - width;
    if (pos < -maxLength) {
      pos = 0;
    };
    slider.style.marginLeft = pos +'px';
   });


//switch to the left

  arLeft.addEventListener('click', function(e) {
    e.preventDefault();
    pos = pos + width;
    if (pos > 0) {
      pos = -maxLength;
    }
    slider.style.marginLeft = pos + "px";
  })
 }());