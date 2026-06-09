import { Navbar } from "@/components/UI/Navbar";
import { Footer } from "@/components/UI/Footer";

export default function StoreLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
        </>
    );
}