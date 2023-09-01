import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNftListComponent } from './user-nft-list.component';

describe('UserNftListComponent', () => {
  let component: UserNftListComponent;
  let fixture: ComponentFixture<UserNftListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserNftListComponent]
    });
    fixture = TestBed.createComponent(UserNftListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
