import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from "./main/main.component";
import { IncludeTextComponent } from "./include-text/include-text.component";
import { TextDetailComponent } from "./text-detail/text-detail.component";

const routeConfig: Routes = [
    {
        path: '',
        component: MainComponent,
        pathMatch: 'full',
        title: 'Home',
    },
    {
        path: 'text-insert',
        component: IncludeTextComponent,
        title: 'inserir'
    },
    {
        path: 'text/:id',
        component: TextDetailComponent,
        title: 'texto'
    },
];


export default routeConfig;
