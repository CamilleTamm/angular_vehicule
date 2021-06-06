import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListConducteurComponent } from './list-conducteur.component';

describe('ListConducteurComponent', () => {
  let component: ListConducteurComponent;
  let fixture: ComponentFixture<ListConducteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListConducteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListConducteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
