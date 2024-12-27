import { Component } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import { NavbarComponent } from "./ui/navbar/navbar.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { HomeComponent } from "./pages/home/home.component";
import { routes } from './app.routes'; 
import { StatesComponent } from "./pages/states/states.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet, ContactComponent, HomeComponent, StatesComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sreerag';

  hello() {
    alert("Hello clicked");
  }

    
  }
