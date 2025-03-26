import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  title = {
    initial: 'Redescubra a si mesmo com',
    emphasis: ' cuidado',
    final: ' especializado',
  };
  description: string =
    'Estamos aqui para ouvir você, oferecer apoio e ajudar a construir o equilíbrio emocional que transforma vidas.';
  buttonPrimary: string = 'Vamos conversar';
  buttonSecondary: string = 'Nossa metodologia';
  imageSrc: string = 'images/components/sections/hero/hero.webp';
  imageAlt: string = 'Imagem ilustrativa';
}
