import { Separator } from '@/components/ui/separator'
import TreatmentPriceCard from './TreatmentPriceCard'
import TreatmentBenefit from './TreatmentBenefit'
import OverviewListParagraph from '../OverviewListParagraph'
import { Input } from '@/components/ui/input'

type Props = {}

export default function Treatment({ }: Props) {
    return (
        <div className='flex flex-col w-full col-span-1 gap-4 p-4 bg-white lg:px-8 rounded-xl'>
            <p className='text-lg'>Treatment Cost Estimates</p>
            <Separator />
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                <div className='flex flex-col col-span-2 gap-4 p-2 lg:p-4'>
                    <p className='text-sm lg:text-lg'>Select a Treatment</p>
                    <div className='flex flex-col gap-4 lg:flex-row'>
                        <Input placeholder='Select a treatment' className='py-6 rounded-xl' />
                        <Input placeholder='Select a studio' className='py-6 rounded-xl' />
                    </div>
                    <p className='text-xl lg:text-3xl'>PRP Injections</p>
                    <p className='text-lg text-foreground/50'>It is a long established fact that a reader will be distracted by the readable content. It is a long established fact that a reader will be distracted by the readable content. It is a long established fact.</p>
                    <div className='grid gap-4 lg:grid-cols-2'>
                        <div className='col-span-2 lg:col-span-1'>
                            <OverviewListParagraph
                                title='Treatment Areas'
                                listItems={[
                                    "It is a long established fact.",
                                    "Reader will be distracted by the readable content."
                                ]}
                                text='It is a long established fact that a reader will be distracted by the readable content.'
                            />
                        </div>
                        <div className='col-span-2 lg:col-span-1'>
                            <OverviewListParagraph
                                title='Duration'
                                listItems={[
                                    "It is a long established fact.",
                                    "Reader will be distracted by the readable content."
                                ]}
                                text=''
                            />
                        </div>
                        <div className='col-span-2'>
                            <OverviewListParagraph
                                title='Treatment Process'
                                listItems={[
                                    "It is a long established fact.",
                                    "Reader will be distracted by the readable content.",
                                    "It is a long established fact that a reader will be distracted."
                                ]}
                                text='It is a long established fact that a reader will be distracted by the readable content. It is a long established fact that a reader will be distracted by the readable content. It is a long established fact.'
                            />
                        </div>
                        <div className='col-span-2 lg:col-span-1'>
                            <OverviewListParagraph
                                title='Risks & Complications'
                                listItems={[
                                    "It is a long established fact.",
                                    "Reader will be distracted by the readable content.",
                                    "It is a long established fact that a reader will be distracted."
                                ]}
                                text='It is a long established fact that a reader will be distracted by the readable content.'
                            />
                        </div>
                        <div className='col-span-2 lg:col-span-1'>
                            <OverviewListParagraph
                                title='Recovery & Downtime'
                                listItems={[
                                    "It is a long established fact.",
                                    "Reader will be distracted by the readable content."
                                ]}
                                text='It is a long established fact that a reader will be distracted by the readable content.'
                            />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-y-4'>
                    <TreatmentPriceCard />
                    <TreatmentBenefit />
                </div>
            </div>
        </div>
    )
}