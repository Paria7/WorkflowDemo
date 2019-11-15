import { BehaviorSubject } from 'rxjs';

export class UserDataService {
    public isAuthenticated$ = new BehaviorSubject<boolean>(false);
}
