"use client";
import React, { useState } from 'react';
import FormSection from '../_component/FormSection';
import OutputSection from '../_component/OutputSection';
import Templates from '@/app/(data)/Templates';
import { TEMPLATE } from '../../_components/TemplateListSelection';
import { use } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface PROPS {
  params: Promise<{
    'template-slug': string;
  }>;
}

function CreateNewContent(props: PROPS) {
  const actualParams = use(props.params);
  const selectedTemplate: TEMPLATE | undefined = Templates?.find(
    (item) => item.slug === actualParams['template-slug']
  );

  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string>("");

  const GenerateAIContent = async (formData: any) => {
    setLoading(true);
  
    const selectPrompt = selectedTemplate?.aiPrompt;
    const FinalAIPrompt = JSON.stringify(formData) + ", " + selectPrompt;
  
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ prompt: FinalAIPrompt })
      });
  
      const data = await res.json();
  
      if (res.ok) {
        console.log("✅ AI Output:", data.output);
        setAiOutput(data.output); // ✅ Set the response here
      } else {
        console.error("❌ Error from server:", data.error);
        setAiOutput("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("❌ Fetch error:", err);
      setAiOutput("Failed to fetch response from server.");
    }
  
    setLoading(false);
  };
  
  

  return (
    <div className="p-10">
      <Link href={'/dashboard'}>
        <Button className="mb-4">
          <ArrowLeft className="mr-2" /> Back
        </Button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={(v: any) => GenerateAIContent(v)}
          loading={loading}
        />
        <div className="col-span-2">
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  );
}

export default CreateNewContent;
