import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnknownurlPageComponent } from './unknownurl-page.component';

describe('UnknownurlPageComponent', () => {
  let component: UnknownurlPageComponent;
  let fixture: ComponentFixture<UnknownurlPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnknownurlPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnknownurlPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
