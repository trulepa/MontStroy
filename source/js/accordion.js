function init(event) {

  var $item = document.getElementsByClassName('services-list__item');

  for (var i = 0; i < $item.length; i++) {
    $item[i].addEventListener("click", accordion);
  }
}


function accordion(event) {

  if (event.target.classList.contains("services-list__title")) {

    var $item = document.getElementsByClassName('services-list__item');
    for (var i = 0; i < $item.length; i++) {

      if ($item[i].classList.contains("show")) {
        $item[i].classList.toggle("show");

        if ($item[i] != this) {
          this.classList.toggle("show");
        }
        return;
      }
    }
    this.classList.toggle("show");

  }
}

window.addEventListener("load", init);
