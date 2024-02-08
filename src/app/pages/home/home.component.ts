import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private meta: Meta, private title: Title) {
    this.meta.addTags([
      { name: 'description', content: 'Home page of SEO friendly app' },
      { name: 'author', content: 'imalzy' },
      { name: 'keywords', content: 'Angular, firebase' }
    ]);

    this.setTitle('Home Page');
  }
  public setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }

  ngOnInit(): void {
  }

}
