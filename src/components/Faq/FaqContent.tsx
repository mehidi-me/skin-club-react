import React from 'react'
import FaqAccordion from './FaqContent/FaqAccordion'

type Props = {}

export default function FaqContent({ }: Props) {
    const data = [
        {
            title: "What is question 1 ?",
            content: "What is question 1 ?"
        },
        {
            title: "What is question 2 ?",
            content: "What is question 1 ?"
        },
        {
            title: "What is question 3 ?",
            content: "What is question 1 ?"
        },
        {
            title: "What is question 4 ?",
            content: "Everyone in your agency knows exactly what’s going on with every project from start to close. You’ll stop running in circles with your team and clients, and finally feel like you’ve got it together. Everyone in your agency knows exactly what’s going on with every project from start to close. You’ll stop running in circles with your team and clients, and finally feel like you’ve got it together. Everyone in your agency knows exactly what’s going on with every project from start to close. You’ll stop running in circles with your team and clients, and finally feel like you’ve got it together. Everyone in your agency knows exactly what’s going on with every project from start to close. You’ll stop running in circles with your team and clients, and finally feel like you’ve got it together."
        },
        {
            title: "What is question 5 ?",
            content: "What is question 1 ?"
        },
        {
            title: "What is question 6 ?",
            content: "What is question 1 ?"
        },
    ]

    return (
        <div className="flex flex-col w-full p-4 px-8 bg-white rounded-xl gap-y-8">
            <div className="flex flex-col gap-y-2">
                <h2 className="text-2xl">General Inquiries</h2>
                <p className="text-sm text-foreground/40">New around here? start with the basics.</p>
            </div>
            <div className="flex flex-col gap-y-4">
                {
                    data.map((item, index) => (
                        <FaqAccordion key={index} title={item.title} content={item.content} />
                    ))
                }
            </div>
        </div>
    )
}