import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CAboutComponent } from './c-about.component';

describe('AboutComponent', () => {
  let component: CAboutComponent;
  let fixture: ComponentFixture<CAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
