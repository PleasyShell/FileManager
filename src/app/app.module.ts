import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FileService } from './file.service';
import { CatalogeTreeComponent } from './component/cataloge-tree/cataloge-tree.component';

@NgModule({
    declarations: [
        AppComponent,
        CatalogeTreeComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [FileService],
    bootstrap: [AppComponent]
})

export class AppModule { }
