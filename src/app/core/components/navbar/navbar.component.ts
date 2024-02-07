import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navbarToggle: boolean = false;
  @ViewChild('navbarSupportedContent')
  navbarContent!: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }


  toggleSidebar(): void {
    this.navbarToggle = !this.navbarToggle;
    this.navbarContent.nativeElement.classList.toggle('show', this.navbarToggle);
  }
}
