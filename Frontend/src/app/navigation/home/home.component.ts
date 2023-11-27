import { Component } from '@angular/core';
import { benefitsItems } from './components/home.benefits';
import { galleryItems } from './components/home.gallery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  // BENEFIT ITEMS:
  benefitItems = benefitsItems;
  // GALLERY ITEMS:
  galleryItems = galleryItems;
}