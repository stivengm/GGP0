import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryChampsComponent } from './history-champs.component';

describe('HistoryChampsComponent', () => {
  let component: HistoryChampsComponent;
  let fixture: ComponentFixture<HistoryChampsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryChampsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryChampsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
