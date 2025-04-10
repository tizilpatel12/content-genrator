"use client"
import React from 'react'
import FormSection from '../_component/FormSection'
import OutputSection from '../_component/OutputSection'
import Templates from '@/app/(data)/Templates'
import { TEMPLATE } from '../../_components/TemplateListSelection'
import { use } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

interface PROPS {
    params: Promise<{
        'template-slug': string
    }>
}

function CreateNewContent(props: PROPS) {
    const actualParams = use(props.params)
    const selectedTemplate: TEMPLATE | undefined = Templates?.find(
        (item) => item.slug === actualParams['template-slug']
    )

    const CreateAIContent = (formData: any) => {

    }

    return (
        <div className='p-10'>
            <Link href={"/dashboard"}></Link>
            <Button><ArrowLeft/> Back</Button>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
                <FormSection
                    selectedTemplate={selectedTemplate}
                    userFormInput={(v: any) => CreateAIContent(v)}
                />
                <div className='col-span-2'>
                    <OutputSection />
                </div>
            </div>
        </div>
    )
}

export default CreateNewContent
