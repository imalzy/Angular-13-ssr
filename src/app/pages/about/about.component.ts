import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-page',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private meta: Meta, private title: Title) {
    this.meta.addTags([
      { name: 'description', content: 'About page of SEO friendly app' },
      { name: 'author', content: 'imalzy' },
      { name: 'keywords', content: 'Angular, firebase' }
    ]);

    this.setTitle('About Page');
  }
  public setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }

  ngOnInit(): void {
  }

}
