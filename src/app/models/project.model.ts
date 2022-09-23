export class Project {
  id: string;
  lastUpdateTime: string;
  name: string;
  revision: number;
  state: string;
  url: string;
  visibility: string;
}

export class ProjectResponse {
  count: number;
  value: Project[];
}