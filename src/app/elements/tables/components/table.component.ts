import { Component, Input } from '@angular/core';

@Component({
  selector: 'o2o-table',
  templateUrl: './table.component.html',
  styleUrls: [ './table.component.scss', ],
})

export class TableComponent {
  @Input() public data: any;
}
