let flag = 0;

function slideShow(num) {
    let slides = document.getElementsByClassName('slide');
    // console.log(slides);


      if (num == slides.length) {
          flag = 0;
          num = 0;
      }
      if (num < 0) {
          flag = slides.length-1;
          num = slides.length-1;
      }

    for (let y of slides) {
        y.style.display = 'none';
    }
    console.log(num);
    slides[num].style.display = 'block';
}
slideShow(flag);


function controller(x) {
     flag = flag + x;
     slideShow(flag)
}




























