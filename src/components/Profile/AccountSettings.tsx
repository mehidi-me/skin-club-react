import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'
import { Checkbox } from '../ui/checkbox'

type Props = {}

export default function AccountSettings({ }: Props) {
    return (
        <div className='flex flex-col gap-6 p-4 bg-white rounded-xl'>
            <div className='flex flex-col gap-2 ml-2'>
                <p className='text-3xl'>Account Settings</p>
                <p className='text-sm'>Update your Account settings</p>
            </div>
            <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
                <div className='col-span-2 ml-3'>
                    <p className='text-sm'>Change Email Address</p>
                </div>
                <div className='flex flex-col w-full col-span-2 lg:col-span-1'>
                    <Label className='ml-3 font-normal' htmlFor="email">Email Address</Label>
                    <Input className='border-0 border-b placeholder:text-foreground/50 focus-visible:ring-0 focus-visible:rounded-none' type="email" id="email" placeholder="Jane@gmail.com" />
                </div>
                <div className='col-span-2 ml-3 lg:col-span-1'>
                    <p className='underline'>Change Email</p>
                </div>
                <div className='col-span-2 ml-3'>
                    <Separator />
                </div>
                <div className='col-span-2 ml-3'>
                    <p className='text-sm'>Change Password</p>
                </div>
                <div className='flex flex-col justify-between col-span-2 lg:flex-row'>
                    <div>
                        <Label className='ml-3 font-normal' htmlFor="current-pass">Current Password</Label>
                        <Input className='border-0 border-b placeholder:text-foreground/50 focus-visible:ring-0 focus-visible:rounded-none' type="password" id="current-pass" placeholder="********" />
                    </div>
                    <div>
                        <Label className='ml-3 font-normal' htmlFor="new-pass">New Password</Label>
                        <Input className='border-0 border-b placeholder:text-foreground/50 focus-visible:ring-0 focus-visible:rounded-none' type="password" id="new-pass" placeholder="********" />
                    </div>
                    <div>
                        <Label className='ml-3 font-normal' htmlFor="update-pass">Update Password</Label>
                        <Input className='border-0 border-b placeholder:text-foreground/50 focus-visible:ring-0 focus-visible:rounded-none' type="password" id="update-pass" placeholder="********" />
                    </div>
                </div>
                <div className='col-span-2 ml-3'>
                    <Separator />
                </div>
                <div className='flex flex-col ml-3 lg:col-span-2 gap-y-2'>
                    <p>Newsletter</p>
                    <p className='text-sm text-foreground/50'>Get lates news and updates directly into your inbox</p>
                    <div className='flex items-center mt-3 gap-x-2'>
                        <Checkbox id="terms" />
                        <label
                            htmlFor="terms"
                            className="text-sm peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-foreground/70"
                        >
                            Subscribe to our monthly newsletter
                        </label>
                    </div>
                </div>

                <div className='ml-3 lg:col-span-2'>
                    <Separator />
                </div>

                <div className='flex flex-col ml-3 lg:col-span-2 gap-y-2'>
                    <p>Delete Account</p>
                    <p className='text-sm text-foreground/50'>We do best to give you a great experience, we’ll be sad to see you leave us. <span className='underline'>Delete your Account</span></p>
                </div>

            </div>
            <div className='flex items-center justify-between mt-8'>
                <Button size="lg" className='rounded-full' variant="outline">Cancel</Button>
                <Button size="lg" className='rounded-full'>Save Changes</Button>

            </div>
        </div>
    )
}