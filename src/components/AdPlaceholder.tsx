interface AdPlaceholderProps {
  slot: string;
}

const AdPlaceholder = ({ slot }: AdPlaceholderProps) => {
  return (
    <div className="w-full rounded-lg border border-dashed border-border bg-muted/50 flex flex-col items-center justify-center py-8 px-4">
      <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">Advertisement</span>
      <span className="text-sm text-muted-foreground mt-1">{slot}</span>
    </div>
  );
};

export default AdPlaceholder;
