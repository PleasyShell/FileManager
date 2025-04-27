import { Component, Input } from '@angular/core';
import { FileService } from 'src/app/file.service';
import { TCataloge } from 'src/app/type';

@Component({
    selector: 'app-cataloge-tree',
    templateUrl: './cataloge-tree.component.html',
    styleUrls: ['./cataloge-tree.component.scss']
})

export class CatalogeTreeComponent {


    @Input() cataloge!: TCataloge;
    @Input() path: string = '';


    constructor(
        private fileService: FileService
    ) { }


    protected expand(): void {

        this.cataloge.isExpanded = !this.cataloge.isExpanded;

        if (this.cataloge.isExpanded && (!this.cataloge.Cataloge || this.cataloge.Cataloge.length === 0)) {
            this.fileService.loadCataloge(this.cataloge, this.path + '/' + this.cataloge.Name);
        };
    };
};
