import { Component, OnInit } from '@angular/core';
import { AuthService } from 'angularx-social-login';
import { Socialusers } from '../models/social-users'
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  socialusers = new Socialusers();
  constructor(public OAuth: AuthService, private router: Router) { }
  ngOnInit() {
    this.socialusers = JSON.parse(localStorage.getItem('socialusers'));
     
  }
  logout() {
    alert(1);
    this.OAuth.signOut().then(data => {
      debugger;
      this.router.navigate([`/Login`]);
    });
  }
}