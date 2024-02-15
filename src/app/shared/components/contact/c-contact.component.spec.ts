import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CContactComponent } from './c-contact.component';


describe('ContactComponent', () => {
  let component: CContactComponent;
  let fixture: ComponentFixture<CContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
