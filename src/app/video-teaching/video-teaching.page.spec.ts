import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VideoTeachingPage } from './video-teaching.page';

describe('VideoTeachingPage', () => {
  let component: VideoTeachingPage;
  let fixture: ComponentFixture<VideoTeachingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoTeachingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VideoTeachingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
