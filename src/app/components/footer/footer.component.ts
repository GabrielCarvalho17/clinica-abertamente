import { Component, HostListener } from '@angular/core';
import { AccordionComponent } from '../accordion/accordion.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [AccordionComponent, NgIf],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  isMobile = window.innerWidth <= 1199;
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isMobile = (event.target as Window).innerWidth <= 1199;
  }
}
