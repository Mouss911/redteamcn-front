import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useComponents } from "../contexts/ComponentContext";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Textarea } from "../components/ui/textarea";
import { FiCheckCircle, FiXCircle, FiClock, FiTrendingUp } from "react-icons/fi";
import type { Component } from "../types/auth";

export function CoachDashboard() {
  const { user } = useAuth();
  const { components, submissions, reviewComponent, getPendingSubmissions } = useComponents();

  const [selectedComponent, setSelectedComponent] = useState<Component | null>(null);
  const [reviewComments, setReviewComments] = useState("");
  const [isReviewing, setIsReviewing] = useState(false);

  if (!user) return null;

  const pendingSubmissions = getPendingSubmissions();
  const submittedComponents = components.filter(c => c.status === "submitted");
  const approvedComponents = components.filter(c => c.status === "approved");
  const rejectedComponents = components.filter(c => c.status === "rejected");

  // Calcul des KPIs
  const totalSubmissions = submissions.length;
  const approvalRate = totalSubmissions > 0 ? (approvedComponents.length / totalSubmissions) * 100 : 0;
  const avgReviewTime = calculateAverageReviewTime();

  const handleReview = async (componentId: string, status: "approved" | "rejected") => {
    if (!reviewComments.trim()) {
      alert("Veuillez ajouter un commentaire pour expliquer votre décision.");
      return;
    }

    setIsReviewing(true);

    try {
      reviewComponent(componentId, status, reviewComments);
      setSelectedComponent(null);
      setReviewComments("");
    } catch (error) {
      console.error("Erreur lors de la validation:", error);
    } finally {
      setIsReviewing(false);
    }
  };

  function calculateAverageReviewTime(): number {
    const reviewedComponents = components.filter(c =>
      c.status === "approved" || c.status === "rejected"
    );

    if (reviewedComponents.length === 0) return 0;

    const totalTime = reviewedComponents.reduce((acc, comp) => {
      if (comp.submittedAt && (comp.approvedAt || comp.rejectedAt)) {
        const reviewTime = (comp.approvedAt || comp.rejectedAt)!.getTime() - comp.submittedAt.getTime();
        return acc + reviewTime;
      }
      return acc;
    }, 0);

    return Math.round(totalTime / reviewedComponents.length / (1000 * 60 * 60 * 24)); // jours
  }

  const getStatusBadge = (status: Component["status"]) => {
    switch (status) {
      case "draft":
        return <Badge variant="secondary"><FiClock className="w-3 h-3 mr-1" />Brouillon</Badge>;
      case "submitted":
        return <Badge variant="outline"><FiClock className="w-3 h-3 mr-1" />En attente</Badge>;
      case "approved":
        return <Badge variant="default"><FiCheckCircle className="w-3 h-3 mr-1" />Approuvé</Badge>;
      case "rejected":
        return <Badge variant="destructive"><FiXCircle className="w-3 h-3 mr-1" />Rejeté</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Tableau de bord Coach</h1>
        <p className="text-muted-foreground mt-2">
          Gérez les validations de composants et suivez les performances de l'équipe.
        </p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Composants en attente</CardTitle>
            <FiClock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingSubmissions.length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Taux d'approbation</CardTitle>
            <FiTrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{approvalRate.toFixed(1)}%</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Temps moyen (jours)</CardTitle>
            <FiTrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{avgReviewTime}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total validés</CardTitle>
            <FiCheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{approvedComponents.length}</div>
          </CardContent>
        </Card>
      </div>

      {/* Composants en attente */}
      {pendingSubmissions.length > 0 && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Composants en attente de validation</CardTitle>
            <CardDescription>
              Composants soumis par les développeurs nécessitant votre approbation.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {submittedComponents
                .filter(comp => comp.status === "submitted")
                .map((component) => (
                  <div
                    key={component.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 cursor-pointer"
                    onClick={() => setSelectedComponent(component)}
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold">{component.title}</h3>
                        <Badge variant="outline">Par {component.authorName}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        {component.description}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Soumis le {component.submittedAt ? new Date(component.submittedAt).toLocaleDateString() : "Date inconnue"}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Historique des validations */}
      <Card>
        <CardHeader>
          <CardTitle>Historique des validations</CardTitle>
          <CardDescription>
            Composants que vous avez déjà validés ou rejetés.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {components.filter(c => c.status === "approved" || c.status === "rejected").length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <p>Vous n'avez pas encore validé de composants.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {components
                .filter(c => c.status === "approved" || c.status === "rejected")
                .map((component) => (
                  <div
                    key={component.id}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold">{component.title}</h3>
                        <Badge variant="outline">Par {component.authorName}</Badge>
                        {getStatusBadge(component.status)}
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        {component.description}
                      </p>
                      {component.coachComments && (
                        <p className="text-xs text-muted-foreground bg-muted p-2 rounded">
                          "{component.coachComments}"
                        </p>
                      )}
                    </div>
                    <div className="text-right text-sm text-muted-foreground">
                      <p>
                        {component.status === "approved"
                          ? `Approuvé le ${component.approvedAt ? new Date(component.approvedAt).toLocaleDateString() : ""}`
                          : `Rejeté le ${component.rejectedAt ? new Date(component.rejectedAt).toLocaleDateString() : ""}`
                        }
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Modal de validation */}
      {selectedComponent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Validation: {selectedComponent.title}</CardTitle>
                  <CardDescription>
                    Par {selectedComponent.authorName} • Soumis le{" "}
                    {selectedComponent.submittedAt ? new Date(selectedComponent.submittedAt).toLocaleDateString() : "Date inconnue"}
                  </CardDescription>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setSelectedComponent(null);
                    setReviewComments("");
                  }}
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
                <h4 className="font-semibold mb-2">Code du composant</h4>
                <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto max-h-64 overflow-y-auto">
                  <code>{selectedComponent.code}</code>
                </pre>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Votre commentaire *</h4>
                <Textarea
                  value={reviewComments}
                  onChange={(e) => setReviewComments(e.target.value)}
                  placeholder="Expliquez votre décision de validation ou de rejet..."
                  rows={4}
                  required
                />
              </div>

              <div className="flex gap-4">
                <Button
                  onClick={() => handleReview(selectedComponent.id, "approved")}
                  disabled={isReviewing || !reviewComments.trim()}
                  className="flex-1"
                >
                  <FiCheckCircle className="mr-2 h-4 w-4" />
                  Approuver
                </Button>
                <Button
                  variant="destructive"
                  onClick={() => handleReview(selectedComponent.id, "rejected")}
                  disabled={isReviewing || !reviewComments.trim()}
                  className="flex-1"
                >
                  <FiXCircle className="mr-2 h-4 w-4" />
                  Rejeter
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
