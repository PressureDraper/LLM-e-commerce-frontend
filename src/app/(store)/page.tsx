'use client'

export default function HomePage() {

    return (
        <div className="flex justify-around">
            
            <video
                className="inset-0 h-full w-full object-cover z-0"
                autoPlay
                loop
                muted
                playsInline
                preload='none'
            >
                <source src="https://pub-2340d562e49941639edaa262ef4996bc.r2.dev/home/loop_bg_2.webm" type="video/webm" />
            </video>
        </div>
    )
}