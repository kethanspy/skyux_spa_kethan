import {
  Component,OnInit,Input
} from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit{
@Input() user: User;



constructor(){}

ngOnInit(): void{}
}
