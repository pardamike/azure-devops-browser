export class WorkItemLink {
  rel: string;
  source: { id: number, url: string };
  target: { id: number, url: string };
}

export class WorkItemLinkResponse {
  workItemRelations: WorkItemLink[];
}