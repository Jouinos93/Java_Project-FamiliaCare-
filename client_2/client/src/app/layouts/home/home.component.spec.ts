// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { HomeComponent } from './home.component';

// describe('HomeComponent', () => {
//   let component: HomeComponent;
//   let fixture: ComponentFixture<HomeComponent>;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [HomeComponent]
//     });
//     fixture = TestBed.createComponent(HomeComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });








// const btn = document.querySelector(".fa-bars") as HTMLElement;
// const menu = document.querySelector(".menu") as HTMLElement;
// const menuLink = document.querySelectorAll(".menu a");

// btn.onclick = () => {
//   btn.classList.toggle("fa-times");
//   menu.classList.toggle("active");
// };



// window.onscroll = () => {
//   btn.classList.remove("fa-times");
//   menu.classList.remove("active");
// };

// window.addEventListener("scroll", function () {
//   const navbar = document.querySelector(".navbar") as HTMLElement;
//   if (window.scrollY > 0) {
//     navbar.classList.add("transparent");
//   } else {
//     navbar.classList.remove("transparent");
//   }
// });

// const slides = document.querySelectorAll('.check');
// let currentSlide = 0;

// function showSlide(index: number) {
//   (slides[currentSlide] as HTMLElement).classList.remove('active');
//   (slides[index] as HTMLElement).classList.add('active');
//   currentSlide = index;
// }

// function nextSlide() {
//   const nextIndex = (currentSlide + 1) % slides.length;
//   showSlide(nextIndex);
// }

// setInterval(nextSlide, 5000); // Change slide every 5 seconds

// showSlide(currentSlide); // Show initial slide
