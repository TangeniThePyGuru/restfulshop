import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersTemplateComponent } from './users-template.component';

describe('UsersTemplateComponent', () => {
  let component: UsersTemplateComponent;
  let fixture: ComponentFixture<UsersTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
