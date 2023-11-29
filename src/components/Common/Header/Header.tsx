
import logoImg from "@/assets/logo.png"
import Link from '@/lib/Link'
import { Bell, CrossIcon, MenuIcon, XIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

type Props = {
    openedMenu: boolean,
    setOpenedMenu: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Header({ openedMenu, setOpenedMenu }: Props) {
    return (
        <div className='flex items-center justify-between w-full h-20 px-6 bg-white main-nav'>
            <Button variant={'secondary'} size={'icon'} className='lg:hidden' onClick={() => setOpenedMenu((prev) => !prev)}>
                {
                    openedMenu ? (<XIcon />) : (<MenuIcon />)
                }
            </Button>
            <Link href="/">
                <img src={logoImg} alt="Logo" width={136} height={24} />
            </Link>
            <div className='flex items-center gap-x-14'>
                <p className='hidden text-sm lg:inline'>Sunday, 20 August</p>
                <p className='hidden text-sm lg:inline'>1:50 PM</p>
                <Button variant={'secondary'} size={'icon'}>
                    <Bell />
                </Button>
            </div>
        </div >
    )
}
