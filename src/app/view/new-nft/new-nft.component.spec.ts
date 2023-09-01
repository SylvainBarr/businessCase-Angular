import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewNftComponent } from './new-nft.component';

describe('NewNftComponent', () => {
  let component: NewNftComponent;
  let fixture: ComponentFixture<NewNftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewNftComponent]
    });
    fixture = TestBed.createComponent(NewNftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
