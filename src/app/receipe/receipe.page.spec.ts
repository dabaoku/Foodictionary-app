import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReceipePage } from './receipe.page';

describe('ReceipePage', () => {
  let component: ReceipePage;
  let fixture: ComponentFixture<ReceipePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceipePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReceipePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
