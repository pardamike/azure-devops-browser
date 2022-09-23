import { WorkItem } from './../models/work-item.model';
import { ProjectResponse } from './../models/project.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { WorkItemLinkResponse } from '../models/work-item-link.model';

@Injectable({
  providedIn: 'root'
})
export class AzureDevopsService {

constructor(private http: HttpClient) { }

getProjects(): Observable<ProjectResponse> {
  return this.http.get<ProjectResponse>(`${environment.apiBaseUrl}/_apis/projects?${environment.apiVersion}`)
    .pipe(
      catchError(err => {
        return throwError(() => err);
      })
    );
}

getWorkItemHierachy(projectId: string): Observable<WorkItemLinkResponse> {
  return this.http.post<WorkItemLinkResponse>(`${environment.apiBaseUrl}/${projectId}/_apis/wit/wiql?${environment.apiVersion}`,
    { "query": "Select * From workItemLinks Where [System.Links.LinkType] = 'System.LinkTypes.Hierarchy-Forward'" })
    .pipe(
      catchError(err => {
        return throwError(() => err);
      })
    );
}

getWorkItem(workItemId: number): Observable<WorkItem> {
  return this.http.get<WorkItem>(`${environment.apiBaseUrl}/_apis/wit/workitems/${workItemId}/?${environment.apiVersion}`)
    .pipe(
      catchError(err => {
        return throwError(() => err);
      })
    );
}

}
