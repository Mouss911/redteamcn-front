interface EmptyStateProps {
  message: string;
  description?: string;
}

export function EmptyState({ message, description }: EmptyStateProps) {
  return (
    <div className="text-center py-12">
      <p className="text-muted-foreground text-lg">{message}</p>
      {description && (
        <p className="text-muted-foreground text-sm mt-2">{description}</p>
      )}
    </div>
  );
}
