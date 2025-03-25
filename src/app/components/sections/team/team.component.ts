import {Component, ElementRef, ViewChild} from '@angular/core';
import { NgForOf } from '@angular/common';
import { MemberComponent } from '../../cards/member/member.component';

@Component({
  selector: 'app-team',
  imports: [MemberComponent, NgForOf],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss',
})
export class TeamComponent {
  title: string = 'Nosso time';
  leftAlt: string = 'Anterior';
  rightAlt: string = 'Próximo';
  leftIcon: string = 'images/widgets/arrow-left.svg';
  rightIcon: string = 'images/widgets/arrow-right.svg';
  subtitle: string = 'Um time dedicado ao seu bem-estar';
  description: string = 'Profissionais qualificados e apaixonados. Cada membro traz experiência, empatia e um compromisso genuíno com o seu crescimento pessoal. Conte com a gente para caminhar ao seu lado nessa jornada.';
  buttonText: string = 'Vamos conversar';

  @ViewChild('teamCarousel', { static: true }) teamCarousel!: ElementRef;

  scrollLeft() {
    this.teamCarousel.nativeElement.scrollBy({ left: -310, behavior: 'smooth' });
  }

  scrollRight() {
    this.teamCarousel.nativeElement.scrollBy({ left: 310, behavior: 'smooth' });
  }


  team = [
    {
      title: 'Kawana',
      description:
        'Especialista em Terapia Cognitivo-Comportamental, auxilia no manejo da ansiedade e na mudança de padrões emocionais.',
      image: {
        src: 'images/members/member1.webp',
        alt: 'Foto do Membro 1',
      },
    },
    {
      title: 'Luana',
      description: 'Psicóloga infantil e do adolescente, ajuda no desenvolvimento emocional e nas relações familiares.',
      image: {
        src: 'images/members/member2.webp',
        alt: 'Foto do Membro 2',
      },
    },

    {
      title: 'Mariana',
      description: 'Atua no apoio psicológico para desafios emocionais, promovendo equilíbrio e qualidade de vida.',
      image: {
        src: 'images/members/member3.webp',
        alt: 'Foto do Membro 3',
      },
    },
    {
      title: 'Maria Leticia',
      description:
        'Foca no autoconhecimento, na regulação emocional para fortalecimento da autoestima e desenvolvimento pessoal.',
      image: {
        src: 'images/members/member4.webp',
        alt: 'Foto do Membro 4',
      },
    },
    {
      title: 'Layana',
      description:
        'Especialista em Terapia Sistêmica, fortalecicmento das relações familiares e conjugais, e construção de vinculos saudáveis.',
      image: {
        src: 'images/members/member5.webp',
        alt: 'Foto do Membro 5',
      },
    },
  ];
}
