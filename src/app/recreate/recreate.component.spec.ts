import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecreateComponent } from './recreate.component';

describe('RecreateComponent', () => {
  let component: RecreateComponent;
  let fixture: ComponentFixture<RecreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecreateComponent]
    });
    fixture = TestBed.createComponent(RecreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
