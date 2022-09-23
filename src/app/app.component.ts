import { WorkItemLink } from './models/work-item-link.model';
import { AzureDevopsService } from './services/azure-devops.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'azure-devops-browser';
  projectId: string;
  workItemHierarchy: WorkItemLink[];

  constructor(private devopsService: AzureDevopsService) { }

  ngOnInit(): void {
    this.devopsService.getProjects().subscribe((result) => {
      this.projectId = result.value[0].id;
      this.getWorkItems();
    });
  }

  getWorkItems(): void {
    this.devopsService.getWorkItemHierachy(this.projectId).subscribe((result) => {
      this.workItemHierarchy = result.workItemRelations;
    });
  }
}
