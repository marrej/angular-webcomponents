import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebComponentRootComponent } from './web-component-root.component';

describe('WebComponentRootComponent', () => {
  let component: WebComponentRootComponent;
  let fixture: ComponentFixture<WebComponentRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebComponentRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebComponentRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
