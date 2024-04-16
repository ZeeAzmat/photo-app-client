import { Component } from '@angular/core';
import { PicturesModule } from '../pictures/pictures.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PicturesModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
}
