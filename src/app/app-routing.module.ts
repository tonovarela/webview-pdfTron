import { RouterModule, CanActivate, CanLoad, CanActivateChild } from '@angular/router';
import { NgModule } from '@angular/core';



const routes = [
    { path: '', loadChildren: () => import(/* webpackChunkName: "authModule" */'./modules/main/main.module').then(m => m.MainModule), },    


    { path: '**', redirectTo: '' },
];


@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true, scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
