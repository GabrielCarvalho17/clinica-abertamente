import { Component } from '@angular/core';
import {GalleryComponent} from '../../gallery/gallery.component';


@Component({
  selector: 'app-place',
  imports: [GalleryComponent],
  templateUrl: './place.component.html',
  styleUrl: './place.component.scss',
})
export class PlaceComponent {
  images = [
    { src: 'images/places/photo01.jpg', alt: 'Photo 1' },
    { src: 'images/places/photo02.jpg', alt: 'Photo 2' },
    { src: 'images/places/photo03.jpg', alt: 'Photo 3' },
    { src: 'images/places/photo04.jpg', alt: 'Photo 4' },
    { src: 'images/places/photo05.jpg', alt: 'Photo 5' },
    { src: 'images/places/photo06.jpeg', alt: 'Photo 6' }
  ];
}
