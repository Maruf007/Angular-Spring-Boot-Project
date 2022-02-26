import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CustomMenuItem } from '../model/menu-item.model';
import { SessionService } from './session.service';

@Injectable({
    providedIn: 'root',
})
/**
 * menu data service
 */
export class MenuDataService {


    public toggleMenuBar: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    constructor(private sessionService: SessionService) { }
    getMenuList(): CustomMenuItem[] {
        let roles = this.sessionService.getItem('user').roles;
        let customerMenuItems: Array<CustomMenuItem> = [];
        return customerMenuItems;
    }

    getCustomMenuList(): Array<string> {
        let menuList: Array<string> = [];

        return menuList;
    }
}
