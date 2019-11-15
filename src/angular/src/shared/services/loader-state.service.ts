import { BehaviorSubject } from 'rxjs';

export class LoaderSateService {
  private currentRequest$ = new BehaviorSubject<number>(0);

  public addReqCount(increment: number) {
    const count = this.currentRequest$.value;
    this.currentRequest$.next(count + increment);
  }
}
