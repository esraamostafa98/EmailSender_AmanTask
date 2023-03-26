import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageStoreComponent } from './message-store.component';

describe('MessageStoreComponent', () => {
  let component: MessageStoreComponent;
  let fixture: ComponentFixture<MessageStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
