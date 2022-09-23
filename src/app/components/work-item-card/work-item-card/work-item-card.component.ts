import { WorkItem } from './../../../models/work-item.model';
import { AzureDevopsService } from './../../../services/azure-devops.service';
import { WorkItemLink } from './../../../models/work-item-link.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-item-card',
  templateUrl: './work-item-card.component.html',
  styleUrls: ['./work-item-card.component.scss']
})
export class WorkItemCardComponent implements OnInit {

  @Input() item: WorkItemLink;
  id: number;
  name: string;
  type: string;
  child: boolean;

  constructor(private devopsService: AzureDevopsService) { }

  ngOnInit(): void {
    this.devopsService.getWorkItem(this.item.target.id).subscribe(result => {
      this.id = result.id;
      this.name = result.fields['System.Title'];
      this.type = result.fields['System.WorkItemType'];
      this.child = !!this.item.source;
    })
  }
}
