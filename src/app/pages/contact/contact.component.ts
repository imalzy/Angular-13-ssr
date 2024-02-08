import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private meta: Meta, private title: Title) {
    this.meta.addTags([
      { name: 'description', content: 'Contact page of SEO friendly app' },
      { name: 'author', content: 'imalzy' },
      { name: 'keywords', content: 'Angular, firebase' }
    ]);

    this.setTitle('Contact Page');
  }
  public setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }

  ngOnInit(): void {
  }

}
