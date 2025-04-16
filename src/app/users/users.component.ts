import { Component, OnInit } from '@angular/core';
import { UserData } from '../users.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  userList: any[] = [];
  allUsers: any[] = [];
  index!: number
  searchValue!: string
  selectedField: string = '';
  selectedValue: string = '';

  onFieldChange() {
    this.selectedValue = '';
  }
  constructor(private userData: UserData) { }

  ngOnInit(): void {
    this.getUsers()
  }
  async getUsers() {
    this.allUsers = await this.userData.getData();
    this.userList = [...this.allUsers];
  }

  applyFilters() {
    this.userList = this.userData.filterData(this.selectedField, this.selectedValue, this.allUsers);
  }

  onSearch() {
    this.userList = this.userData.searchData(this.searchValue, this.allUsers)
  }
  onReset() {
    this.selectedField = ''
    this.searchValue = ''
    this.selectedValue = ''
    this.userList = [...this.allUsers];
  }
}
