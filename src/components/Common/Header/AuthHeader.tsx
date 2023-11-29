
import logoImg from "@/assets/logo.png"
import Link from '@/lib/Link'

export default function AuthHeader() {
    return (
        <div className='flex items-center justify-center w-full h-20 bg-white main-nav'>
            <Link href="/">
                <img src={logoImg} alt="Logo" width={280} height={37} />
            </Link>
        </div>
    )
}
