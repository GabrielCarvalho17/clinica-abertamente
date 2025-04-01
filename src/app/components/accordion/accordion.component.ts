import { Component, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [NgFor],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss',
  animations: [
    trigger('collapse', [
      state('open', style({ height: '*', overflow: 'hidden' })),
      state('closed', style({ height: '0', overflow: 'hidden' })),
      transition('open <=> closed', animate('300ms ease')),
    ]),
  ],
})
export class AccordionComponent {
  @Input() title = '';
  @Input() items: string[] = [];

  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
