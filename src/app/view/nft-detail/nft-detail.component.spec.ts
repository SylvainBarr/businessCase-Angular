import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftDetailComponent } from './nft-detail.component';

describe('NftDetailComponent', () => {
  let component: NftDetailComponent;
  let fixture: ComponentFixture<NftDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NftDetailComponent]
    });
    fixture = TestBed.createComponent(NftDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
