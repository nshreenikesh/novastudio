import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';
import { BackToTop } from '../../components/back-to-top/back-to-top';
import { Loader } from '../../components/loader/loader';
@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    Navbar,
    Footer,
    BackToTop,
    Loader
  ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout { }