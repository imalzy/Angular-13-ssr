import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { ActivatedRoute, Event, NavigationEnd, NavigationExtras, NavigationStart, Router, RouterEvent } from '@angular/router';
import { audit, filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  isLogin = false;
  constructor(
    private router: Router
  ) {
  
  }
  ngOnInit(): void {
      this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: any) => {
      const currentUrl = event?.url as string;
      if (currentUrl.includes('/auth/')) {
        this.isLogin = true;
      }else{
        this.isLogin = false;
      }
    })
  }

}