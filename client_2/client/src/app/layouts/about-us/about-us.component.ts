// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-about-us',
//   templateUrl: './about-us.component.html',
//   styleUrls: ['./about-us.component.css']
// })
// export class AboutUsComponent {

// }



import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  ngOnInit() {
    new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 20,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      autoplay: {
        delay: 1000, // Autoplay delay in milliseconds (adjust as needed)
        disableOnInteraction: false // Continue autoplay even when user interacts with slides
      }
    });
  }
}
