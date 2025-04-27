import { Component } from '@angular/core';
import { FileService } from './file.service';
import { TCataloge, TDisk } from './type';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {


    constructor(
        private fileService: FileService
    ) {
        fileService.initDisks();
    };


    protected getInitedDisks(): TDisk[] {

        return this.fileService.getDisks();
    };

    protected expandDisk(disk: TDisk): void {

        disk.isExpanded = !disk.isExpanded;

        if (disk.isExpanded && (!disk.Cataloge || disk.Cataloge.length === 0)) {
            this.fileService.loadCataloge(disk as TCataloge, disk.Name);
        };
    };
};
