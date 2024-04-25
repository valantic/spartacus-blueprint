import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { <%= classify(name) %>Component } from './<%= dasherize(name) %>.component';

describe('<%= classify(name) %>Component', () => {
  let component: <%= classify(name) %>Component;
  let fixture: ComponentFixture<<%= classify(name) %>Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [<%= classify(name) %>Component],
      providers: [<%= classify(name) %>Component],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      /*imports: [
        HttpClientTestingModule, // needed for http request testing
        RouterTestingModule, // needed for routing testing
        ReactiveFormsModule, // needed for form testing
        // add other 3rd party modules here if they are used in the component
      ], */
    }).compileComponents();
  });

  beforeEach(() => {
    // TODO add spyOns for component properties or logic running in the constructor here

    fixture = TestBed.createComponent(<%= classify(name) %>Component);
    component = fixture.componentInstance;

    // TODO add spyOns for logic running in ngOnInit here

    fixture.detectChanges();
  });

  it('should create', () => {
    // TODO add spyOns for manually called component methods here

    expect(component).toBeTruthy();
  });
});
