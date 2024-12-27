import { Component } from '@angular/core';
import { CardComponent } from "../../ui/card/card.component";
import { ApiService } from '../../api.service';
@Component({
  selector: 'app-states',
  imports: [CardComponent],
  templateUrl: './states.component.html',
  styleUrl: './states.component.css'
})
export class StatesComponent {
  title = 'Sreerag';
  constructor(public api:ApiService){}
}

