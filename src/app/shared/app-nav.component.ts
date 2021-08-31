import {
  Component
} from '@angular/core';


@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.scss']
})
export class AppNavComponent {
  public nav = [
    {
      titleKey: 'Home',
      path: '/'
    }
    
  ];
}
