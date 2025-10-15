export type UserRole = "visitor" | "developer" | "coach";

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
}

export interface Component {
  id: string;
  title: string;
  description: string;
  code: string;
  tags: string[];
  authorId: string;
  authorName: string;
  status: "draft" | "submitted" | "approved" | "rejected";
  createdAt: Date;
  updatedAt: Date;
  submittedAt?: Date;
  approvedAt?: Date;
  rejectedAt?: Date;
  coachId?: string;
  coachName?: string;
  coachComments?: string;
  kpis?: ComponentKPIs;
}

export interface ComponentKPIs {
  linesOfCode: number;
  complexity: number;
  maintainability: number;
  performance: number;
  security: number;
}

export interface ComponentSubmission {
  componentId: string;
  submittedBy: string;
  submittedAt: Date;
  status: "pending" | "approved" | "rejected";
  coachComments?: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  hasRole: (role: UserRole) => boolean;
}
