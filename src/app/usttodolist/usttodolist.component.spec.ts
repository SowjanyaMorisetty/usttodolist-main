import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsttodolistComponent } from './usttodolist.component';

describe('UsttodolistComponent', () => {
  let component: UsttodolistComponent;
  let fixture: ComponentFixture<UsttodolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsttodolistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsttodolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
