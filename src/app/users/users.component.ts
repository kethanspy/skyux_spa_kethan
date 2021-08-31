import {
  Component, OnInit
} from '@angular/core';

import { User } from '../User';

import { UserService } from "../services/user.service";






@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
     this.userService.getUsers().subscribe((users) => this.users = users);

  }

  addUser(user: User){
    console.log(user);
     this.userService.addUser(user).subscribe((user) => (this.users.push(user)));
    
  }
}