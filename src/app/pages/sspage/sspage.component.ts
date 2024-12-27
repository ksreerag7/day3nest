import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-sspage',
  imports: [],
  templateUrl: './sspage.component.html',
  styleUrl: './sspage.component.css'
})
export class SspageComponent {
  constructor(private activated: ActivatedRoute, private api:ApiService) { }
  data: any;
  ngOnInit(){
    let id=this.activated.snapshot.paramMap.get('id');
    this.data=this.api.getStateByID(id);
  }

}
