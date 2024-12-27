import { Component, NgModule } from '@angular/core';
import { CarouselComponent } from "../../ui/carousel/carousel.component";
import { CarouselModule } from 'ngx-owl-carousel-o';
@NgModule({
  imports: [ CarouselModule,CarouselComponent ],
})
export class SomeModule { }
@Component({
  selector: 'app-home',
  imports: [CarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
cimages=[
  {id: 1,
    alt:'image',
    image:'https://static.vecteezy.com/system/resources/thumbnails/033/611/193/small_2x/the-beautiful-city-of-udaipur-in-india-ai-generated-photo.jpg'
  },
  {
    id: 2,
    alt:'image',
    image:'https://static.vecteezy.com/system/resources/thumbnails/030/831/776/small_2x/a-beautiful-archway-in-the-middle-of-a-garden-ai-generated-photo.jpg'
  },
  {
  id:3,alt:'image',
  image:'https://t4.ftcdn.net/jpg/09/18/28/91/360_F_918289176_okSMBuj2V5qYCHGpd5sTkC1Rk7xShnle.jpg'
  },
]
}
