import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { Application } from "@nativescript/core";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    pdfUrls = [
        'https://www.princexml.com/samples/flyer/flyer.pdf',
        'https://www.princexml.com/howcome/2016/samples/magic8/index.pdf',
        'https://www.princexml.com/samples/invoice/invoicesample.pdf'
      ];

    pdfUrl = 'https://www.mynethome.de/content/Markus-Schlichting-Lebendige-Dokumentation-mit-AsciiDoctor.pdf';

    private current = 0;

    constructor() {
        // this.changePDF();
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>Application.getRootView();
        sideDrawer.showDrawer();
    }

    onLoad(): void {
        console.log("PDF Loaded");
    }
    
    changePDF() {
        this.current++;
        this.pdfUrl = this.pdfUrls[(this.current + 1) % this.pdfUrls.length];
      }
}
