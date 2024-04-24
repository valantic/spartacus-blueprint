import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

// TODO adjust this component description
/**
 * Component to render a hello world message
 */
@Component({
  selector: 'c-<%= dasherize(name) %>',
  templateUrl: './<%= dasherize(name) %>.template.html',
  styleUrls: ['./<%= dasherize(name) %>.styles.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class <%= classify(name) %>Component {
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

  constructor() {}
}
