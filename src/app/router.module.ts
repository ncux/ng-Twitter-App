
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HashtagsComponent } from './hashtags/hashtags.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
    { path: '', redirectTo: '/hashtags', pathMatch: 'full'},
    { path: 'hashtags', component: HashtagsComponent },
    { path: 'users', component: UsersComponent },
];


@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule,
    ],
})

export class RoutingModule {

}
