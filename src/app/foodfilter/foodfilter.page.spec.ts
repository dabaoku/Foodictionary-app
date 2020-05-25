import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FoodfilterPage } from './foodfilter.page';

describe('FoodfilterPage', () => {
  let component: FoodfilterPage;
  let fixture: ComponentFixture<FoodfilterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodfilterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FoodfilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
