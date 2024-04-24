import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, Renderer2 } from '@angular/core';
import { CmsComponentData } from '@spartacus/storefront';
import { <%= classify(projectName) %>CmsComponent } from '../../../cms/components';
import { <%= classify(projectName) %>CmsComponentData } from '@models/cms';

// TODO adjust this component description
/**
 * Component to render a hello world message
 */
@Component({
  selector: 'f-<%= dasherize(name) %>',
  templateUrl: './<%= dasherize(name) %>.template.html',
  styleUrls: ['./<%= dasherize(name) %>.styles.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
// TODO remove <%= classify(projectName) %>CmsComponent extension, if your component does not need grid / background color functionality
export class <%= classify(name) %>Component extends <%= classify(projectName) %>CmsComponent<<%= classify(projectName) %>CmsComponentData> {
  readonly componentClasses = 'f-<%= dasherize(name) %>';

  // TODO if you need multiple (dynamic) classes, use these two lines and a getComponentClasses() method
  // readonly componentClass = 'f-<%= dasherize(name) %>';
  // componentClasses = this.componentClass;

  // TODO adjust or remove
  @Input()
  myInputValue: string = '';

  // TODO adjust or remove
  @Output()
  handleXyzClick = new EventEmitter();

  constructor(
    protected renderer: Renderer2,
    protected component: CmsComponentData<<%= classify(projectName) %>CmsComponentData>,
    protected elementRef: ElementRef
  ) {
    super(renderer, component, elementRef);
  }
}
