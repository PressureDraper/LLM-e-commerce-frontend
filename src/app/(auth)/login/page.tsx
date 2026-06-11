import Image from 'next/image'

export default function LoginPage() {
    return (
        <main className="flex-1 bg-neutral-50 flex">
            <div className="bg-neutral-50 w-full lg:w-4/9 p-5 text-center">
                <h1 className="font-normal text-7xl font-display">Valtierrè</h1>
            </div>
            <div className="w-5/9 relative hidden lg:block">
                <Image
                    src="https://pub-2340d562e49941639edaa262ef4996bc.r2.dev/login/login.webp"
                    loading='eager'
                    fill
                    className='object-cover'
                    sizes='55vw'
                    alt="Login Image"
                />
            </div>
        </main>
    )
}
