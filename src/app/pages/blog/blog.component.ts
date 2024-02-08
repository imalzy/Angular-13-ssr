import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor(private meta: Meta, private title: Title) {
    this.meta.addTags([
      { name: 'description', content: 'Blog page of SEO friendly app' },
      { name: 'author', content: 'imalzy' },
      { name: 'keywords', content: 'Angular, firebase' }
    ]);

    this.setTitle('Blog Page');
  }
  public setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }

  ngOnInit(): void {
  }

}
