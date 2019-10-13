import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sqaure',
  templateUrl: './sqaure.component.html',
  styleUrls: ['./sqaure.component.css']
})
export class SqaureComponent {
  @Input() value: 'X' | 'O';
}
