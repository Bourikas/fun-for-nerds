import { Routes } from '@angular/router';
import { WordInputComponent } from './components/word-input/word-input.component';
import { WelcomeComponentComponent } from './components/welcome-component/welcome-component.component';

export const routes: Routes = [
    {
        path: 'word-input',
        component: WordInputComponent
    },
    { path: '', component: WelcomeComponentComponent },
];
