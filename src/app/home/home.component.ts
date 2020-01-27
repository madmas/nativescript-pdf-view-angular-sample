import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    public pdfUrls = [
        'https://www.princexml.com/samples/flyer/flyer.pdf',
        'https://www.princexml.com/howcome/2016/samples/magic8/index.pdf',
        'https://www.princexml.com/samples/invoice/invoicesample.pdf',
      ];

      private current = 0;
      public pdfUrl;

    constructor() {
       // this.changePDF();
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    public changePDF() {
        this.current++;
        this.pdfUrl = this.pdfUrls[(this.current + 1) % this.pdfUrls.length];
      }
}
