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
 cone = true;
 ctwo = true;
  style = 'italic';
  size = '30px';
  toggle() {
    this.cone = !this.cone;
    this.ctwo = !this.ctwo;
  }

}
