import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatTabChangeEvent } from '@angular/material';

/**
 * @title Table with pagination
 */
@Component({
  selector: 'table-pagination-example',
  styleUrls: ['table-pagination-example.css'],
  templateUrl: 'table-pagination-example.html',
})
export class TablePaginationExample implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  allUsersColumns: string[] = ['checked', 'firstName', 'lastName', 'email', 'actions'];
  
  allUsersDataSource = new MatTableDataSource<any>();
  pendingUsersDataSource = new MatTableDataSource<any>();
  grantedUsersDataSource = new MatTableDataSource<any>();
  rejectedUsersDataSource = new MatTableDataSource<any>();
  erasedUsersDataSource = new MatTableDataSource<any>();
  checkedAllRecords: boolean;
  activeTab: string;
  checkedAllUsers: boolean;
  checkedAllPendingUsers: boolean;
  checkedAllgrantedUsers: boolean;
  checkedAllRejectedUsers: boolean;
  checkedAllErasedUsers: boolean;
  pageLength: number = 0;
  pageIndex: number = 0;

  allUsers: any[] = [
    { checked: false, firstName: 'Debi', lastName: 'Austin', email: 'd@gmail.com' },
    { checked: false, firstName: 'Jimmy', lastName: 'Williams', email: 'w@yahoo.in' },
    { checked: false, firstName: 'Randy', lastName: 'Waif', email: 'randy@gmail.com' },
    { checked: true, firstName: 'Chad', lastName: 'Spongla', email: 'c@redif.com' },
    { checked: false, firstName: 'Debi', lastName: 'Austin', email: 'd@gmail.com' },
    { checked: false, firstName: 'Jimmy', lastName: 'Williams', email: 'w@yahoo.in' },
    { checked: false, firstName: 'Randy', lastName: 'Waif', email: 'randy@gmail.com' },
    { checked: false, firstName: 'Chad', lastName: 'Spongla', email: 'c@redif.com' },
    { checked: false, firstName: 'Debi', lastName: 'Austin', email: 'd@gmail.com' },
    { checked: true, firstName: 'Jimmy', lastName: 'Williams', email: 'w@yahoo.in' },
    { checked: false, firstName: 'Chad', lastName: 'Spongla', email: 'c@redif.com' },
    { checked: false, firstName: 'Debi', lastName: 'Austin', email: 'd@gmail.com' },
    { checked: true, firstName: 'Jimmy', lastName: 'Williams', email: 'w@yahoo.in' }
  ];

  constructor() {
  }

  ngOnInit() {
    this.activeTab = 'All Users';
    this.getAllUsers();
  }


  getAllUsers() {
    this.allUsersDataSource = new MatTableDataSource(this.allUsers);
    this.allUsersDataSource.paginator = this.paginator;
    this.pageIndex = 0;
    this.pageLength = this.allUsers.length;
  }

 

  view(i: number, id: number, title: string, state: string, url: string, created_at: string, updated_at: string) {

  }
  startEdit(i: number, id: number, title: string, state: string, url: string, created_at: string, updated_at: string) {
  }

  deleteItem(i: number, id: number, title: string, state: string, url: string) {
  }
}