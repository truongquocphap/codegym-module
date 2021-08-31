import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RapChieuListComponent } from './rap-chieu-list.component';

describe('RapChieuListComponent', () => {
  let component: RapChieuListComponent;
  let fixture: ComponentFixture<RapChieuListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RapChieuListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RapChieuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
