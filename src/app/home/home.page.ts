import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private iab: InAppBrowser) {

    // const browser = this.iab.create('https://dev.user.legal/', '_blank', 'location=no, zoom=no, toolbar=no, fullscreen=yes, hideurlbar=yes, hidenavigationbuttons=yes');
    const browser = this.iab.create('https://dev.user.legal/', '_blank', { location:"no", zoom:"no" });
    browser.show();
    
    browser.on('exit').subscribe(() => {
      browser.show()
    })

  }
}