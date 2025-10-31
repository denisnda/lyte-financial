interface StageCardProps {
  stageNumber: number;
  title: string;
  description: string;
}

export default function StageCard({ stageNumber, title, description }: StageCardProps) {
  return (
    <div 
      className="bg-primary text-primary-foreground rounded-xl p-5 md:p-6 relative overflow-visible aspect-square flex flex-col"
      data-testid={`card-stage-${stageNumber}`}
    >
      <div className="absolute top-3 left-4 text-5xl font-serif font-bold opacity-10 select-none pointer-events-none">
        {stageNumber}
      </div>
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-2">
          <div className="inline-block bg-primary-foreground/20 text-primary-foreground px-2 py-0.5 rounded text-xs font-medium mb-2">
            Stage {stageNumber}
          </div>
          <h3 
            className="font-serif text-lg md:text-xl font-semibold mb-2 leading-tight"
            data-testid={`text-stage-${stageNumber}-title`}
          >
            {title}
          </h3>
        </div>
        
        <p 
          className="text-primary-foreground/95 leading-snug flex-1 text-xs md:text-sm"
          data-testid={`text-stage-${stageNumber}-description`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
