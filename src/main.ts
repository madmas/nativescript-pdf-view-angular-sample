// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app/app.module";
import { PDFView } from 'nativescript-pdf-view';
import { registerElement } from 'nativescript-angular';

registerElement('PDFView', () => PDFView);

platformNativeScriptDynamic().bootstrapModule(AppModule);
