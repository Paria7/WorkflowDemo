import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class DataChangeService {
  private subject = new Subject<any>();

  /*sendMessage(message: string) {
    this.subject.next({text: message});
  }*/

  setDataChange(value: boolean) {
    this.subject.next({change: value});
  }

  clearDataChange() {
    this.subject.next();
  }

  /*clearMessage() {
    this.subject.next();
  }*/

  /*getMessage(): Observable<any> {
    return this.subject.asObservable();
  }*/
  getDataChange(): Observable<any> {
    return this.subject.asObservable();
  }
}
