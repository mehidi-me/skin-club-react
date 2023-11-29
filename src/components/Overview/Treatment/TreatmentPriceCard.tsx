import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import TreatmentListItem from './TreatmentListItem'
import { Button } from '@/components/ui/button'

type Props = {}

export default function TreatmentPriceCard({ }: Props) {
  return (
    <Card className='p-4 bg-gray-100/50 rounded-xl text-foreground'>
      <div className='flex justify-between w-full p-4 bg-[#E1D0C1] rounded-xl'>
        <div className='flex flex-col w-2/4 gap-y-2'>
          <p className='text-base lg:text-2xl'>PRP Injections</p>
          <p className='text-xs lg:text-lg text-foreground/50'>It is a long established fact.</p>
        </div>
        <div className='flex justify-between w-2/5'>
          <Separator className='bg-gray-500/50' orientation='vertical' />
          <div className='flex flex-col'>
            <p className='text-base lg:text-2xl'>$350.00</p>
            <p className='text-xs lg:text-md text-foreground/50'>Per Session / 12</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col p-2 py-6 lg:p-6 gap-y-6'>
        <TreatmentListItem text='It is a long established fact.' />
        <TreatmentListItem text='Reader will be distracted by the readable content.' />
        <TreatmentListItem text='It is a long established fact that a reader will be distracted.' />
        <TreatmentListItem text='Reader will be distracted by the readable content.' />
      </div>
      <Select>
        <SelectTrigger className="w-full my-4 rounded-xl">
          <SelectValue placeholder="Master Card (***6578)" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>

      <Button className='w-full py-6 rounded-2xl'>Book Now</Button>
    </Card>
  )
}