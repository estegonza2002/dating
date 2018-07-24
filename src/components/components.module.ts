import { NgModule } from '@angular/core';
import { EventComponent } from './event/event';
import { UserComponent } from './user/user';
import { ProfilePopoverComponent } from './profile-popover/profile-popover';
@NgModule({
	declarations: [EventComponent,
    UserComponent,
    ProfilePopoverComponent],
	imports: [],
	exports: [EventComponent,
    UserComponent,
    ProfilePopoverComponent]
})
export class ComponentsModule {}
