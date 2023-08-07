import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-catch-data',
  templateUrl: './catch-data.component.html',
  styleUrls: ['./catch-data.component.css'],
})
export class CatchDataComponent implements OnInit {
  data: any = '';
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.data = this.route.snapshot.params['id'];
    console.log('Recived parameter', this.data);
  }
}
