import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit {
  slideIndex!: number;

  constructor() { }

  ngOnInit(): void {
    this.slideIndex = 1;
    this.showDivs(this.slideIndex);
    this.startDivShow();
  }

  startDivShow() {
    let index = 1;
    setInterval(() => {
      this.currentDiv(index);
      index = (index > 3) ? 1 : index + 1;
    }, 3500);
  }

  showDivs(n: number): void {
    let i: number;
    const x: HTMLCollectionOf<Element> = document.getElementsByClassName("mySlides");
    const dots: HTMLCollectionOf<Element> = document.getElementsByClassName("demodots");
    if (n > x.length) this.slideIndex = 1;
    if (n < 1) this.slideIndex = x.length;
    for (i = 0; i < x.length; i++) {
      (x[i] as HTMLElement).style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" w3-white", "");
    }
    (x[this.slideIndex - 1] as HTMLElement).style.display = "block";
    dots[this.slideIndex - 1].className += " w3-white";
  }

  plusDivs(n: number): void {
    this.slideIndex += n;
    this.showDivs(this.slideIndex);
  }

  currentDiv(n: number): void {
    this.slideIndex = n;
    this.showDivs(this.slideIndex);
  }

}
