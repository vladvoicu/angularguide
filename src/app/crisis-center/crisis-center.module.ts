import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {CrisisListComponent} from './crisis-list.component';
import {CrisisDetailComponent} from './crisis-detail.component';
import {CrisisService} from './crisis.service';
import {CrisisCenterComponent} from './crisis-center.component';
import {CrisisCenterRoutingModule} from './crisis-center-routing.module';
import { CrisisCenterHomeComponent } from "app/crisis-center/crisis-center-home.component";

@NgModule({
    imports:[CommonModule,FormsModule,CrisisCenterRoutingModule],
    declarations:[CrisisListComponent,CrisisDetailComponent,CrisisCenterComponent,CrisisCenterHomeComponent],
    providers:[CrisisService]
})
export class CrisisCenterModule{}