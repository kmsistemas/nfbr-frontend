import {Component, Input, OnInit} from '@angular/core';
import {CoreService} from '../core/core.service';


@Component({
  selector: 'km-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // @Input() contribuinte: string;

  constructor(private coreService: CoreService) {}

  ngOnInit() {}

  contribuinte(): string {
    return this.coreService.contribuinte;
  }

}
