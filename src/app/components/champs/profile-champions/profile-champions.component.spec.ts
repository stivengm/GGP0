import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileChampionsComponent } from './profile-champions.component';

describe('ProfileChampionsComponent', () => {
  let component: ProfileChampionsComponent;
  let fixture: ComponentFixture<ProfileChampionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileChampionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileChampionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
