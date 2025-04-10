"use client";
import React from "react";
import { Viewer } from "@toast-ui/react-editor";

interface Props {
  aiOutput: string;
}

const OutputSection: React.FC<Props> = ({ aiOutput }) => {
  return (
    <div className="p-4 bg-muted rounded-lg shadow-sm min-h-[300px]">
      <h2 className="text-xl font-semibold mb-4">Generated Output</h2>
      {aiOutput ? (
        <Viewer initialValue={aiOutput} />
      ) : (
        <p className="text-gray-500">Output will appear here...</p>
      )}
    </div>
  );
};

export default OutputSection;
