import { NgModule } from '@angular/core';
import { <%= classify(name) %>Module } from './components';

@NgModule({
  imports: [<%= classify(name) %>Module],
})
export class <%= classify(name) %>FeatureModule {}
