import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useComponents } from "../contexts/ComponentContext";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { FiPlus, FiSend, FiCheckCircle, FiX, FiClock } from "react-icons/fi";
import type { Component } from "../types/auth";

export function DeveloperDashboard() {
  const { user } = useAuth();
  const { getUserComponents, getComponentStats, submitComponent } = useComponents();
  const navigate = useNavigate();

  const [selectedComponent, setSelectedComponent] = useState<Component | null>(null);

  if (!user) return null;

  const userComponents = getUserComponents(user.id);
  const stats = getComponentStats(user.id);

  const handleCreateComponent = () => {
    navigate("/create-component");
  };

  const handleSubmitComponent = (componentId: string) => {
    submitComponent(componentId);
    // Fermer le modal si ouvert
    setSelectedComponent(null);
  };

  const getStatusBadge = (status: Component["status"]) => {
    switch (status) {
      case "draft":
        return <Badge variant="secondary"><FiClock className="w-3 h-3 mr-1" />Brouillon</Badge>;
      case "submitted":
        return <Badge variant="outline"><FiSend className="w-3 h-3 mr-1" />Soumis</Badge>;
      case "approved":
        return <Badge variant="default"><FiCheckCircle className="w-3 h-3 mr-1" />Approuvé</Badge>;
      case "rejected":
        return <Badge variant="destructive"><FiX className="w-3 h-3 mr-1" />Rejeté</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Tableau de bord Développeur</h1>
        <p className="text-muted-foreground mt-2">
          Gérez vos composants et suivez vos statistiques de développement.
        </p>
      </div>

      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total composants</CardTitle>
            <FiCheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.total}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Soumis</CardTitle>
            <FiSend className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.submitted}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Approuvés</CardTitle>
            <FiCheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{stats.approved}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Rejetés</CardTitle>
            <FiX className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{stats.rejected}</div>
          </CardContent>
        </Card>
      </div>

      {/* Actions */}
      <div className="mb-6">
        <Button onClick={handleCreateComponent} className="gap-2">
          <FiPlus className="h-4 w-4" />
          Créer un composant
        </Button>
      </div>

      {/* Liste des composants */}
      <Card>
        <CardHeader>
          <CardTitle>Mes composants</CardTitle>
          <CardDescription>
            Liste de tous vos composants créés.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {userComponents.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <p>Vous n'avez pas encore créé de composants.</p>
              <Button onClick={handleCreateComponent} variant="outline" className="mt-4">
                Créer votre premier composant
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {userComponents.map((component) => (
                <div
                  key={component.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 cursor-pointer"
                  onClick={() => setSelectedComponent(component)}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold">{component.title}</h3>
                      {getStatusBadge(component.status)}
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      {component.description}
                    </p>
                    {component.tags.length > 0 && (
                      <div className="flex gap-1">
                        {component.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="text-right text-sm text-muted-foreground">
                    <p>{new Date(component.createdAt).toLocaleDateString()}</p>
                    {component.status === "draft" && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="mt-2"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSubmitComponent(component.id);
                        }}
                      >
                        Soumettre
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Modal de détails du composant */}
      {selectedComponent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>{selectedComponent.title}</CardTitle>
                  <CardDescription>
                    Créé le {new Date(selectedComponent.createdAt).toLocaleDateString()}
                  </CardDescription>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedComponent(null)}
                >
                  ✕
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Description</h4>
                <p className="text-sm text-muted-foreground">{selectedComponent.description}</p>
              </div>

              {selectedComponent.tags.length > 0 && (
                <div>
                  <h4 className="font-semibold mb-2">Tags</h4>
                  <div className="flex gap-1">
                    {selectedComponent.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h4 className="font-semibold mb-2">Code</h4>
                <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto">
                  <code>{selectedComponent.code}</code>
                </pre>
              </div>

              {selectedComponent.coachComments && (
                <div>
                  <h4 className="font-semibold mb-2">Commentaires du coach</h4>
                  <p className="text-sm text-muted-foreground bg-muted p-3 rounded-md">
                    {selectedComponent.coachComments}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
