import { Component, OnInit } from '@angular/core';
import { CustomDropdown } from 'src/app/core/model/custom-dropdown.model';
import { User } from 'src/app/core/model/user.model';
import { CaptionProperties } from 'src/app/shared/properties/caption.properties';
import { UserManagerService } from './user-manager.service';
import { UserRole } from './user-role.enum';

@Component({
  selector: 'user-manager',
  templateUrl: 'user-manager.component.html',
  styleUrls: ['user-manager.component.css']
})
export class UserManagerComponent implements OnInit {
  updateUserRoleCaption: string = CaptionProperties.updateUserRoleTitle;
  usersCaption: string = CaptionProperties.users;
  userCaption: string = CaptionProperties.user;
  roleCaption: string = CaptionProperties.role;
  actionCaption: string = CaptionProperties.action;
  cancelBtn: string = CaptionProperties.cancelBtn;
  updateBtn: string = CaptionProperties.updateBtn

  users: User[] = [];
  roleDropdown: CustomDropdown[] = [];
  columns: any[];
  constructor(private userManagerService: UserManagerService) { }

  ngOnInit() {
    this.getUserList();
    this.getRoles();
  }

  getUserList() {
    this.userManagerService.getUserList().subscribe((users: User[]) => {
      this.users = users;
      }, error => {
  
      });
  }

  cancelChanges() {

  }

  getRoles() {
    this.roleDropdown.push(new CustomDropdown(UserRole.ADMIN, UserRole.ADMIN));
    this.roleDropdown.push(new CustomDropdown(UserRole.MODERATOR, UserRole.MODERATOR));
    this.roleDropdown.push(new CustomDropdown(UserRole.QA, UserRole.QA));
    console.log(this.roleDropdown)
  }
}
