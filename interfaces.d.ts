// Data Types
interface Workspace {
  id: number,
  name: string,
  description: string,
  clients?: Client[],
}

interface User {
  id: number,
  roles: Role[],
  name: string,
}

interface Client {
  clientId: number,
  name: string,
  projects?: Project[]
}

interface Project {
  projectId: number,
  name: string,
  tasks?: Task[]
}

interface Task {
  id: number
  title: string,
  description: string,
  status: Status,
  timeAllocated?: number,
  timeSpent?: number,
  dueDate?: Date
}

// Props
interface SideNavProps { 
  workspaces: Workspace[], 
  setActiveWorkspace: (newValue: number) => void 
}