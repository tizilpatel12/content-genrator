interface Props {
    aiOutput: string;
  }
  
  const OutputSection: React.FC<Props> = ({ aiOutput }) => {
    return (
      <div className="p-4 bg-muted rounded-lg shadow-sm min-h-[300px]">
        <pre className="whitespace-pre-wrap">{aiOutput}</pre>
      </div>
    );
  };
  
  export default OutputSection;
  