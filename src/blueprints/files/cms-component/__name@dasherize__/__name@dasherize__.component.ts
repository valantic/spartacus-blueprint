import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, Renderer2 } from '@angular/core';
import { CmsComponentData } from '@spartacus/storefront';
import { OttosCmsComponent } from '../cms';
import { OttosCmsComponentData } from '@models/cms';

// TODO adjust this component description
/**
 * Hello world component to render a hello world message
 */
@Component({
  selector: 'c-<%= dasherize(name) %>',
  templateUrl: './<%= dasherize(name) %>.template.html',
  styleUrls: ['./<%= dasherize(name) %>.styles.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
// TODO remove OttosCmsComponent extension, if your component does not need grid / background color functionality
export class <%= classify(name) %>Component extends OttosCmsComponent<OttosCmsComponentData> {
  readonly componentClasses = 'c-<%= dasherize(name) %>';

  // TODO if you need multiple (dynamic) classes, use these two lines and a getComponentClasses() method
  // readonly componentClass = 'c-<%= dasherize(name) %>';
  // componentClasses = this.componentClass;

  // TODO adjust or remove
  @Input()
  myInputValue: string = '';

  // TODO adjust or remove
  @Output()
  handleXyzClick = new EventEmitter();

  constructor(
    protected renderer: Renderer2,
    protected component: CmsComponentData<OttosCmsComponentData>,
    protected elementRef: ElementRef
  ) {
    super(renderer, component, elementRef);
  }
}
