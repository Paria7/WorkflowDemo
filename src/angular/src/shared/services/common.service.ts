import {Injectable} from '@angular/core';
import {SWDOptions28, SWDOptions29, SWDOptions30, SWDOptions31} from '../constants';
import {IConfig} from '../../app/interface/config';

const SWDOption_Dictionary = {
  28: SWDOptions28,
  29: SWDOptions29,
  30: SWDOptions30,
  31: SWDOptions31
};

@Injectable()
export class CommonService {
  config: IConfig;
  constructor() {
  }

  saveBlob(blob, fileName: string) {
    if (navigator.msSaveBlob) {
      navigator.msSaveBlob(blob, fileName);
    } else {
      const element = document.createElement('a');
      element.setAttribute('download', fileName);
      element.setAttribute('href', URL.createObjectURL(blob));
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }
  }

  getSWDOptionsByDaysInOneMonth(year, month) {
    month = parseInt(month, 10);
    const days = new Date(year, month, 0).getDate();
    return SWDOption_Dictionary[days];
  }

  trim(text) {
    return text ? text.trim() : text;
  }

  getApiConfig(): IConfig {
    return this.config ? this.config : JSON.parse(localStorage.getItem('apiConfig'));
  }

  b64toBlob(b64Data: string, contentType: string, sliceSize: number): Blob {
    contentType = contentType || '';
    sliceSize = sliceSize || 512;
    var byteCharacters = atob(b64Data);
    var byteArrays = [];
    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      var slice = byteCharacters.slice(offset, offset + sliceSize);
      var byteNumbers = new Array(slice.length);
      for (var i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      var byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    var blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }
}
