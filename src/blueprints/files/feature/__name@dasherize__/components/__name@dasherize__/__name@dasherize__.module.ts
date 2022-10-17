import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CmsConfig, provideConfig } from '@spartacus/core';
import { <%= classify(name) %>Component } from './<%= dasherize(name) %>.component';

@NgModule({
  declarations: [<%= classify(name) %>Component],
  exports: [<%= classify(name) %>Component],
  imports: [CommonModule],
  providers: [
    provideConfig(<CmsConfig>{
      // TODO adjust component name from Backend or remove, if it's not a cms component
      cmsComponents: {
        <%= classify(projectName) %><%= classify(name) %>Component: { component: <%= classify(name) %>Component },
      },
    }),
  ],
})
export class <%= classify(name) %>Module {}
