import {Component} from '@angular/core';

import {HomePage} from '../home/home';
import {AccountPage} from '../account/account.component';

@Component({
    templateUrl: 'tabs.html'
})

export class TabsPage{
    homeRoot = HomePage;
    accountRoot = AccountPage;

    constructor(){

    }
}