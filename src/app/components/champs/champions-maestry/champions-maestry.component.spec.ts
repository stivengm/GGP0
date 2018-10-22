import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionsMaestryComponent } from './champions-maestry.component';

describe('ChampionsMaestryComponent', () => {
  let component: ChampionsMaestryComponent;
  let fixture: ComponentFixture<ChampionsMaestryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChampionsMaestryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionsMaestryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
