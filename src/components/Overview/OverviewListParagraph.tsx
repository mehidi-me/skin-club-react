import React from 'react'

type Props = {
    title: string;
    listItems: string[];
    text: string
}

export default function OverviewListParagraph({ title, listItems, text }: Props) {
    return (
        <div className='flex flex-col py-4 gap-y-6'>
            <p className='text-lg'>{title}</p>
            <ol className='ml-8 text-lg list-decimal text-foreground/50'>
                {
                    listItems.map(item => (
                        <li className='text-base lg:text-lg' key={item}>{item}</li>
                    ))
                }
            </ol>
            {
                text != "" && (
                    <p className='text-base lg:text-lg text-foreground/50'>
                        {text}
                    </p>
                )
            }
        </div>
    )
}