import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private firstLoad = true;

  shouldShowLoader(): boolean {

    if (this.firstLoad) {
      this.firstLoad = false;
      return true;
    }

    return false;
  }

}