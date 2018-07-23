import { NgModule } from '@angular/core';
import { EventComponent } from './event/event';
import { UserComponent } from './user/user';
@NgModule({
	declarations: [EventComponent,
    UserComponent],
	imports: [],
	exports: [EventComponent,
    UserComponent]
})
export class ComponentsModule {}
