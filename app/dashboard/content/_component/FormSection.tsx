"use client";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Image from 'next/image';
import React, { useState } from 'react';
import { TEMPLATE } from '@/app/dashboard/_components/TemplateListSelection'; // adjust if needed
import { Loader2Icon } from 'lucide-react';

interface PROPS {
  selectedTemplate?: TEMPLATE;
  loading?: boolean;
  userFormInput?: any;
}

function FormSection({ selectedTemplate, userFormInput,loading }: PROPS) {
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    userFormInput(formData);
  };

  return (
    <div className='p-5 shadow-lg border rounded-lg'>
      {selectedTemplate && (
        <>
          <Image src={selectedTemplate.icon} width={70} height={70} alt="Icon" />
          <h2 className='font-bold text-2xl mb-2 text-primary'>{selectedTemplate.name}</h2>
          <p className='text-gray-500 text-sm'>{selectedTemplate.desc}</p>

          <form className='mt-6' onSubmit={onSubmit}>
            {selectedTemplate.form?.map((item, index) => (
              <div key={index} className='my-2 flex flex-col gap-2 mb-7'>
                <label className='font-bold'>{item.label}</label>
                {item.field === 'input' ? (
                  <Input
                    name={item.name}
                    required={item.required}
                    value={formData[item.name] || ''}
                    onChange={handleInputChange}
                  />
                ) : item.field === 'textarea' ? (
                  <Textarea
                    name={item.name}
                    required={item.required}
                    value={formData[item.name] || ''}
                    onChange={handleInputChange}
                  />
                ) : null}
              </div>
            ))}
            <Button type='submit' className='w-full py-6' disabled={loading}>{loading&&<Loader2Icon className='animate-spin'/>}Generate Content</Button>
          </form>
        </>
      )}
    </div>
  );
}

export default FormSection;
