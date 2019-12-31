import { Component, OnInit } from '@angular/core';
import { GoogleLoginProvider, AuthService } from "angularx-social-login";
import { Socialusers } from '../models/social-users';
import { SocialloginService } from "../services/sociallogin.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  response;
  socialusers = new Socialusers();
  constructor(
    public OAuth: AuthService,
    private SocialloginService: SocialloginService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public socialSignIn(socialProvider: string) {
    let socialPlatformProvider;
    if (socialProvider === 'google') {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    this.OAuth.signIn(socialPlatformProvider).then(socialusers => {
      console.log(socialProvider, socialusers);
      console.log(socialusers);
      this.Savesresponse(this.socialusers);
    });
  }
  Savesresponse(socialusers: Socialusers) {
    this.SocialloginService.Savesresponse(socialusers).subscribe((res: any) => {
     alert('hiii')
      console.log(res);
      this.socialusers = res;
      this.response = res.userDetail;
      localStorage.setItem('socialusers', JSON.stringify(this.socialusers));
      console.log(localStorage.setItem('socialusers', JSON.stringify(this.socialusers)));
      this.router.navigate([`/dashboard`]);
    })
  }
}



