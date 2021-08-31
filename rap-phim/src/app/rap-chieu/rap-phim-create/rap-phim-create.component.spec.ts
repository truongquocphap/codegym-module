import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RapPhimCreateComponent } from './rap-phim-create.component';

describe('RapPhimCreateComponent', () => {
  let component: RapPhimCreateComponent;
  let fixture: ComponentFixture<RapPhimCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RapPhimCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RapPhimCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
