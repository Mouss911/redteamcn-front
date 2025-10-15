import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useComponents } from "../contexts/ComponentContext";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { FiArrowLeft, FiPlus, FiX } from "react-icons/fi";

export function CreateComponentPage() {
  const { user } = useAuth();
  const { createComponent } = useComponents();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    code: "",
    tags: [] as string[],
  });
  const [currentTag, setCurrentTag] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user || !formData.title.trim() || !formData.description.trim() || !formData.code.trim()) {
      return;
    }

    setIsSubmitting(true);

    try {
      createComponent({
        title: formData.title.trim(),
        description: formData.description.trim(),
        code: formData.code.trim(),
        tags: formData.tags,
        authorId: user.id,
        authorName: user.name,
      });

      // Réinitialiser le formulaire et rediriger
      setFormData({ title: "", description: "", code: "", tags: [] });
      navigate("/developer-dashboard");
    } catch (error) {
      console.error("Erreur lors de la création du composant:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const addTag = () => {
    if (currentTag.trim() && !formData.tags.includes(currentTag.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, currentTag.trim()]
      }));
      setCurrentTag("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTag();
    }
  };

  return (
    <div className="container mx-auto py-8">
      <div className="mb-6">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-4"
        >
          <FiArrowLeft className="mr-2 h-4 w-4" />
          Retour
        </Button>

        <div>
          <h1 className="text-3xl font-bold tracking-tight">Créer un composant</h1>
          <p className="text-muted-foreground mt-2">
            Créez un nouveau composant React que vous pourrez soumettre pour validation.
          </p>
        </div>
      </div>

      <Card className="max-w-4xl">
        <CardHeader>
          <CardTitle>Nouveau composant</CardTitle>
          <CardDescription>
            Remplissez les informations de votre composant ci-dessous.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="title" className="text-sm font-medium">
                  Titre du composant
                </label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                  placeholder="Ex: Button personnalisé"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="tags" className="text-sm font-medium">
                  Tags
                </label>
                <div className="flex gap-2">
                  <Input
                    value={currentTag}
                    onChange={(e) => setCurrentTag(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ajouter un tag"
                    className="flex-1"
                  />
                  <Button type="button" onClick={addTag} size="sm">
                    <FiPlus className="h-4 w-4" />
                  </Button>
                </div>
                {formData.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {formData.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                        {tag}
                        <button
                          type="button"
                          onClick={() => removeTag(tag)}
                          className="ml-1 hover:text-destructive"
                        >
                          <FiX className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="description" className="text-sm font-medium">
                Description
              </label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Décrivez l'objectif et l'utilisation de votre composant..."
                rows={4}
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="code" className="text-sm font-medium">
                Code du composant
              </label>
              <Textarea
                id="code"
                value={formData.code}
                onChange={(e) => setFormData(prev => ({ ...prev, code: e.target.value }))}
                placeholder="Collez votre code React/TypeScript ici..."
                rows={12}
                className="font-mono text-sm"
                required
              />
            </div>

            <div className="flex gap-4">
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Création..." : "Créer le composant"}
              </Button>
              <Button type="button" variant="outline" onClick={() => navigate(-1)}>
                Annuler
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
