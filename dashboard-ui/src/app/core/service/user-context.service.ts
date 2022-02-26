import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { SessionService } from 'src/app/core/service/session.service';

const defaultUser = null;
const currentUser = "user";
const localUser = "localUser";

@Injectable({
    providedIn: 'root',
})
export class UserContextService {
    public user$ = new BehaviorSubject(defaultUser);

    constructor(private sessionService: SessionService) {
        var data = this.sessionService.getItem(currentUser);
        if (data != null) {
            this.user$.next(data);
        }
    }

    public setUser(user: any) {
        this.sessionService.setItem(currentUser, user);
        this.user$.next(user);
        localStorage.setItem(localUser, JSON.stringify(user));
    }

    public logout() {
        this.sessionService.removeItem(currentUser);
        this.user$.next(defaultUser);
        localStorage.removeItem(localUser);
    }

}