import { createContext, useContext, useState, ReactNode } from "react";
import type { Component, ComponentSubmission } from "../types/auth";

interface ComponentContextType {
  components: Component[];
  submissions: ComponentSubmission[];
  createComponent: (component: Omit<Component, "id" | "createdAt" | "updatedAt" | "status">) => void;
  submitComponent: (componentId: string) => void;
  reviewComponent: (componentId: string, status: "approved" | "rejected", comments?: string) => void;
  getUserComponents: (userId: string) => Component[];
  getPendingSubmissions: () => ComponentSubmission[];
  getComponentStats: (userId: string) => {
    total: number;
    submitted: number;
    approved: number;
    rejected: number;
  };
}

const ComponentContext = createContext<ComponentContextType | undefined>(undefined);

export function ComponentProvider({ children }: { children: ReactNode }) {
  const [components, setComponents] = useState<Component[]>([]);
  const [submissions, setSubmissions] = useState<ComponentSubmission[]>([]);

  const createComponent = (componentData: Omit<Component, "id" | "createdAt" | "updatedAt" | "status">) => {
    const newComponent: Component = {
      ...componentData,
      id: Date.now().toString(),
      createdAt: new Date(),
      updatedAt: new Date(),
      status: "draft",
    };
    setComponents(prev => [...prev, newComponent]);
  };

  const submitComponent = (componentId: string) => {
    setComponents(prev =>
      prev.map(comp =>
        comp.id === componentId
          ? { ...comp, status: "submitted" as const, submittedAt: new Date(), updatedAt: new Date() }
          : comp
      )
    );

    const component = components.find(c => c.id === componentId);
    if (component) {
      const submission: ComponentSubmission = {
        componentId,
        submittedBy: component.authorId,
        submittedAt: new Date(),
        status: "pending",
      };
      setSubmissions(prev => [...prev, submission]);
    }
  };

  const reviewComponent = (componentId: string, status: "approved" | "rejected", comments?: string) => {
    setComponents(prev =>
      prev.map(comp =>
        comp.id === componentId
          ? {
              ...comp,
              status: status,
              [status === "approved" ? "approvedAt" : "rejectedAt"]: new Date(),
              updatedAt: new Date(),
              coachComments: comments,
            }
          : comp
      )
    );

    setSubmissions(prev =>
      prev.map(sub =>
        sub.componentId === componentId
          ? { ...sub, status, coachComments: comments }
          : sub
      )
    );
  };

  const getUserComponents = (userId: string): Component[] => {
    return components.filter(comp => comp.authorId === userId);
  };

  const getPendingSubmissions = (): ComponentSubmission[] => {
    return submissions.filter(sub => sub.status === "pending");
  };

  const getComponentStats = (userId: string) => {
    const userComponents = getUserComponents(userId);
    return {
      total: userComponents.length,
      submitted: userComponents.filter(c => c.status === "submitted").length,
      approved: userComponents.filter(c => c.status === "approved").length,
      rejected: userComponents.filter(c => c.status === "rejected").length,
    };
  };

  const value: ComponentContextType = {
    components,
    submissions,
    createComponent,
    submitComponent,
    reviewComponent,
    getUserComponents,
    getPendingSubmissions,
    getComponentStats,
  };

  return (
    <ComponentContext.Provider value={value}>
      {children}
    </ComponentContext.Provider>
  );
}

export function useComponents() {
  const context = useContext(ComponentContext);
  if (context === undefined) {
    throw new Error("useComponents must be used within a ComponentProvider");
  }
  return context;
}
