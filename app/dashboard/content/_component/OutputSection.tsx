"use client";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import { useEffect, useRef } from "react";
import Viewer from "@toast-ui/editor/dist/toastui-editor-viewer";

interface Props {
  aiOutput: string;
}

const OutputSection: React.FC<Props> = ({ aiOutput }) => {
  const viewerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (viewerRef.current && aiOutput) {
      new Viewer({
        el: viewerRef.current,
        initialValue: aiOutput,
      });
    }
  }, [aiOutput]);

  return (
    <div className="p-4 bg-muted rounded-lg shadow-sm min-h-[300px]">
      <h2 className="text-xl font-semibold mb-4">Generated Output</h2>
      {aiOutput ? (
        <div ref={viewerRef} />
      ) : (
        <p className="text-gray-500">Output will appear here...</p>
      )}
    </div>
  );
};

export default OutputSection;
