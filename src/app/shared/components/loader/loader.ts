import {
  Component,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';

import { LoadingService } from '../../../core/services/loading';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [],
  templateUrl: './loader.html',
  styleUrl: './loader.scss'
})
export class Loader implements OnInit {

  loading = false;

  constructor(
    private loadingService: LoadingService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    setTimeout(() => {

      this.loading = this.loadingService.shouldShowLoader();

      this.cdr.detectChanges();

      if (this.loading) {

        setTimeout(() => {

          this.loading = false;
          this.cdr.detectChanges();

        }, 1800);

      }

    });

  }

}