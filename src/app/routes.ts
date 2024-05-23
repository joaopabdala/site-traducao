import { Routes } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { ArchiveComponent } from "./archive/archive.component";
import { TextComponent } from "./text/text.component";
import { IncludeTextComponent } from "./include-text/include-text.component";

const routeConfig: Routes = [
    {
        path: '',
        component: MainComponent,
        pathMatch: 'full',
        title: 'Home',
    },
    {
        path: 'archive',
        component: ArchiveComponent,
        title: 'Arquivo'
    },
    {
        path: 'text',
        component: TextComponent,
        title: 'texto'
    },
    {
        path: 'text-insert',
        component: IncludeTextComponent,
        title: 'texto'
    }
];

export default routeConfig;
