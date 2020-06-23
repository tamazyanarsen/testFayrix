import { Component, OnInit } from '@angular/core';
import { RequestService } from './services/request.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor(private requestService: RequestService) {
    }

    columns: any[];
    data: any[];

    getData(): void {
        this.requestService.getData().then((_: any) => {
            const data = _.result;
            const res = new Set();
            data.forEach(e => Object.keys(e).forEach(k => res.add(k)));
            this.columns = Array(...res.values()).filter(e => !String(e).toLowerCase().includes('id'));
            this.data = data;
            console.log(this.columns);
            console.log(data);
        }).catch(console.warn);
    }

    changeModel(event) {
        console.log(event);
        console.log(this.data);
        // this.data данные обновленые, можем их сохранить
    }

    ngOnInit(): void {
        this.getData();
    }

    trackByFn(index, item) {
        return index;
    }
}
