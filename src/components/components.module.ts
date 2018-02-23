import { NgModule } from '@angular/core';
import { HomeColComponent } from './home-col/home-col';
import { IonicModule } from 'ionic-angular';

@NgModule({
	declarations: [HomeColComponent],
	imports: [
		IonicModule,
	],
	exports: [HomeColComponent]
})
export class ComponentsModule {}
