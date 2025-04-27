import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { TDisk, TCataloge } from './type';

@Injectable()

export class FileService {


    private baseURL: string = 'http://localhost:3000/';
    private disksData: TDisk[] = [];


    constructor(
        private http: HttpClient
    ) { }


    public initDisks(): Subscription {

        return this.http.get<string[]>(this.baseURL).subscribe((disks: string[]) => {
            this.disksData = disks.map((diskName: string) => ({
                Name: diskName,
                Cataloge: [],
                isExpanded: false
            }));
        });
    };

    public loadCataloge(cataloge: TCataloge, path: string): Subscription {

        return this.http.get<string[]>(`${this.baseURL + '?path=' + path}`).subscribe((catalogeNames: string[]) => {
            cataloge.Cataloge = catalogeNames.map((fileName: string) => ({
                Name: fileName,
                Cataloge: [],
                isExpanded: false
            }));
        });
    };

    public getDisks(): TDisk[] {

        return this.disksData;
    };
};
