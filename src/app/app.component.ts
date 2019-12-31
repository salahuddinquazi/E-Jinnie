import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'E-Jinnie';
  isLogin = false;
constructor(private router: Router) {
  this.showHeader()
}
showHeader() {
  this.router.events.subscribe((url: any) => {
    
    if (url.url === '/login' || url.url === '') {
      this.isLogin = true;
    }
    else { this.isLogin = false; }
  });
}

}
