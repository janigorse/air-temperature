import { Component, OnInit, Input } from '@angular/core';

import {MessagesService} from '../messages.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor(private messagesService: MessagesService) { }

  @Input() locations: Array<string>;

  ngOnInit() {
  }

  onSelect(location: string) {
    this.messagesService.changeLocation(location);
  }

}
