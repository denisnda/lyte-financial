interface StageCardProps {
  stageNumber: number;
  title: string;
  description: string;
}

export default function StageCard({ stageNumber, title, description }: StageCardProps) {
  return (
    <div 
      className="bg-primary text-primary-foreground rounded-xl p-10 md:p-12 relative overflow-visible aspect-square flex flex-col justify-between min-h-[400px]"
      data-testid={`card-stage-${stageNumber}`}
    >
      <div className="absolute top-8 left-8 text-8xl md:text-9xl font-serif font-bold opacity-10 select-none pointer-events-none">
        {stageNumber}
      </div>
      
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          <div className="inline-block bg-primary-foreground/20 text-primary-foreground px-4 py-2 rounded-md text-sm font-medium mb-4">
            Stage {stageNumber}
          </div>
          <h3 
            className="font-serif text-2xl md:text-3xl font-semibold mb-6 leading-tight"
            data-testid={`text-stage-${stageNumber}-title`}
          >
            {title}
          </h3>
        </div>
        
        <p 
          className="text-primary-foreground/95 leading-relaxed text-base md:text-lg"
          data-testid={`text-stage-${stageNumber}-description`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
