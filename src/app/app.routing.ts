import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DesignComponent } from './design/design.component';
import { EmpComponent } from './emp/emp.component';
import { ContactComponent } from './contact/contact.component';
import { LogoutComponent } from './logout/logout.component';
import { WatchComponent } from './watch/watch.component';


const arr : Routes = [

{path: '', component: HomeComponent},
{path: 'design', component: DesignComponent},
{path: 'emp', component: EmpComponent},
{path: 'con', component: ContactComponent},
{path:'home',component:LogoutComponent},
{path:'pro',component:WatchComponent}

];

export const routing = RouterModule.forRoot(arr);
