import { Button } from '../ui/button'

type Props = {
    tabs: string[];
    profileContent: string;
    setProfileContent: React.Dispatch<React.SetStateAction<string>>;
}

export default function FaqTab({ tabs, profileContent, setProfileContent }: Props) {
    return (
        <>
            {
                tabs.map((tab, index) => (
                    <Button onClick={() => setProfileContent(tab)} key={index} variant="outline" className={`justify-start w-full px-6 py-8 rounded-xl ${tab != profileContent ? "bg-transparent border rounded-xl" : "border-none"}`}>
                        {index + 1}. {tab}
                    </Button>
                ))
            }
        </>
    )
}