import {Component} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showLineif = true;
 public abc = 'blue';
 colors: string[] = ['red', 'blue', 'yellow'];
}
