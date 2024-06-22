import { Routes } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { IncludeTextComponent } from "./include-text/include-text.component";

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
        title: 'texto'
    }
];

export default routeConfig;
