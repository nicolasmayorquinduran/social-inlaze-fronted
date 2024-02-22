import { MediaMatcher } from '@angular/cdk/layout';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

interface sideMenuOption {
  name: string;
  url: string;
}

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.sass'],
})
export class LayoutComponent implements OnInit {
  userName: string = 'Nicolas';
  menuOptions: sideMenuOption[] = [
    {
      name: 'Publicaciones',
      url: 'mis-publicaciones',
    },
  ];
  // private _mobileQueryListener: () => void;
  // mobileQuery: MediaQueryList;
  // private media!: MediaMatcher;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
    // this.mobileQuery = this.media.matchMedia('(max-width: 1000px)');
    // this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    // this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    // this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  signOut() {}
}
