import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllReceipePage } from './all-receipe.page';

describe('AllReceipePage', () => {
  let component: AllReceipePage;
  let fixture: ComponentFixture<AllReceipePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllReceipePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllReceipePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
