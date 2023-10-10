document.addEventListener('DOMContentLoaded', ()=>{
  let start = 0
  let slider_images = document.querySelectorAll('.slider_images');
  let dots = document.querySelectorAll('.dot');
  function Showslides() {
      if (start < slider_images.length - 1) {
        start++;
      } else {
        start = 0;
      }
      slider_images.forEach(img => {
          if(!img.classList.contains('hidden')){
            img.classList.add('hidden');
          }
          dots.forEach(dot => {
              dot.classList.remove('active_dot');
          })
      })
      slider_images[start].classList.add('fades');
      slider_images[start].classList.remove('hidden');
      slider_images[start].classList.add('shown');
      if(start == 0){
        slider_images[3].classList.remove('shown');
      }else{
        slider_images[start-1].classList.remove('shown');
      }
      dots[start].classList.add('active_dot');
  }
  setInterval(Showslides, 5000);

  let tabs = document.querySelector('.tabs').querySelectorAll('div');
  let hiws = document.querySelectorAll('.hiw');

  tabs.forEach((tab, i)=>{
    tab.onclick = ()=>{
      tabs.forEach(tab => {
        tab.classList.remove('active_tab');
      })
      tab.classList.add('active_tab');
      hiws.forEach(hiw => {
        if(!hiw.classList.contains('d-none')){
          hiw.classList.add('d-none')
        }
        hiw.classList.remove('active_content')
      })
      hiws[i].classList.remove('d-none');
      hiws[i].classList.add('active_content');
    }
  })

  let testimonials = document.querySelectorAll('.testimonials');
  let prev = document.querySelector('.prev');
  let next = document.querySelector('.next');

  let i = 0
  next.onclick = ()=>{
    i ++;
    if(i > (testimonials.length - 1)){
      i = 0
    }
    testimonials.forEach(testimonial => {
      if(!testimonial.classList.contains('d-none')){
        testimonial.classList.add('d-none');
      }
      testimonial.classList.remove('active_testimonial');
    })
    testimonials[i].classList.remove('d-none');
    testimonials[i].classList.add('active_testimonial');
  }
  prev.onclick = ()=>{
    if(i !== 0){
      i --;
    }
    if(i > (testimonials.length - 1)){
      i = 0
    }
    testimonials.forEach(testimonial => {
      if(!testimonial.classList.contains('d-none')){
        testimonial.classList.add('d-none');
      }
      testimonial.classList.remove('active_testimonial');
    })
    testimonials[i].classList.remove('d-none');
    testimonials[i].classList.add('active_testimonial');
  }

  let bapt = document.querySelector('#bapt');
  let body = document.querySelector('body');
  let pop_up = document.querySelector('.pop_up');
  let backdrop = document.querySelector('#backdrop');
  let close = document.querySelector('.close');

  bapt.onclick = ()=>{
    body.classList.add('no_scroll');
    backdrop.style.display = 'block';
    pop_up.style.display = 'block';
  }
  close.onclick = ()=>{
    body.classList.remove('no_scroll');
    backdrop.style.display = 'none';
    pop_up.style.display = 'none';
  }

})