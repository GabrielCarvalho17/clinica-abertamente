import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-accordion',
  imports: [NgFor],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss',
})
export class AccordionComponent {
  @Input() title = '';
  @Input() items: string[] = [];
  isOpen = false;

  toggleAccordion() {
    this.isOpen = !this.isOpen;
  }
}
