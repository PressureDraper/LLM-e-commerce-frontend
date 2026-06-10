import Image from 'next/image'

export default function LoginPage() {
    return (
        <main className="flex-1 bg-neutral-50 flex">
            <div className="bg-neutral-100 w-4/9 p-5 text-center">
                <h1 className="font-normal text-7xl font-display">Valtierrè</h1>
            </div>
            <div className="w-5/9 relative">
                <Image
                    src="https://pub-2340d562e49941639edaa262ef4996bc.r2.dev/login/login.webp"
                    fill
                    className='object-cover'
                    alt="Login Image"
                />
            </div>
        </main>
    )
}
