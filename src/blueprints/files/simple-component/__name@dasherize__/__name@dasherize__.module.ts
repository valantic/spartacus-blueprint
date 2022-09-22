import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { <%= classify(name) %>Component } from './<%= dasherize(name) %>.component';

@NgModule({
  declarations: [<%= classify(name) %>Component],
  exports: [<%= classify(name) %>Component],
  imports: [CommonModule],
})
export class <%= classify(name) %>Module {}
