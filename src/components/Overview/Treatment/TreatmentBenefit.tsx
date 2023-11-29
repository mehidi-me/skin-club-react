import React from 'react'
import treatmentBenefitImg from "@/assets/overview/treatment-benefit.png"
import OverviewListParagraph from '../OverviewListParagraph'

type Props = {}

export default function TreatmentBenefit({ }: Props) {
    return (
        <>
            <OverviewListParagraph
                title='Treatment Benefits'
                listItems={[
                    "It is a long established fact.",
                    "Reader will be distracted by the readable content."
                ]}
                text='It is a long established fact that a reader will be distracted by the readable content.'
            />
            <img src={treatmentBenefitImg} alt="Treatment Benefit" />
        </>
    )
}