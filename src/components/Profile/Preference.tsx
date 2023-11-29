import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'
import { Checkbox } from '../ui/checkbox'
import { Switch } from '../ui/switch'
import PreferenceSingle from './PreferenceSingle'

type Props = {}

export default function Preference({ }: Props) {
    return (
        <div className='flex flex-col gap-6 p-4 bg-white rounded-xl'>
            <div className='flex flex-col gap-2 ml-2'>
                <p className='text-3xl'>Preference</p>
                <p className='text-sm'>Update your App preferences</p>
            </div>
            <div className='flex flex-col gap-8'>
                <PreferenceSingle title='Email Notifications' text='Send me notifications and updates through email' />
                <PreferenceSingle title='Message Notifications' text='Send me message notification through email' />
                <PreferenceSingle title='Upcoming Appointments Notifications' text='Send me upcoming appointment notification through email' />
                <PreferenceSingle title='Web App Notifications' text='Send me message notification through a website or your device' />
            </div>
            <div className='flex items-center justify-between mt-8'>
                <Button size="lg" className='rounded-full' variant="outline">Cancel</Button>
                <Button size="lg" className='rounded-full'>Save Changes</Button>

            </div>
        </div>
    )
}