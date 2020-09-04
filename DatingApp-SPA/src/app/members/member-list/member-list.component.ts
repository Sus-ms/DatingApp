import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user';
import { UserService } from '../../_services/user.service';
import { AlertifyService } from '../../_services/alertify.service';
import { subscribeOn } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService,
              private alertify: AlertifyService,
              private route: ActivatedRoute) { }

  // Al iniciar se cargan los métodos que haya aqui dentro(?)
  ngOnInit() {
    this.route.data.subscribe(data => {
      this.users = data['users']
    });
  }

//  loadUsers() {
//    this.userService.getUsers().subscribe((users: User[]) => {
//      this.users = users;
//    }, error => {
//      this.alertify.error(error);
//    });
//  }

}
