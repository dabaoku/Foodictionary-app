import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManualInputPage } from './manual-input.page';

describe('ManualInputPage', () => {
  let component: ManualInputPage;
  let fixture: ComponentFixture<ManualInputPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualInputPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManualInputPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
