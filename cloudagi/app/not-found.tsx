import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Button } from '@/components/button';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-dark-bg flex flex-col items-center justify-center relative overflow-hidden px-6">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
            </div>

            <div className="relative z-10 text-center max-w-2xl">
                <div className="flex justify-center mb-12">
                    <Logo className="scale-150" />
                </div>

                <h1 className="text-8xl md:text-9xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">
                    404
                </h1>

                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
                    System Deflection Detected
                </h2>

                <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                    The autonomous agent you were looking for has migrated to a different workflow.
                    Let&apos;s get you back to the main command center.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href="/">
                        <Button className="px-8 py-6 text-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-xl shadow-blue-500/20 rounded-xl transition-all duration-300 hover:scale-105">
                            Back to Home
                        </Button>
                    </Link>
                    <Link href="/services">
                        <Button variant="outline" className="px-8 py-6 text-lg border-white/10 text-white hover:bg-white/5 rounded-xl transition-all duration-300">
                            Explore Services
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Footer-like subtle text */}
            <div className="absolute bottom-10 left-0 w-full text-center text-gray-600 text-sm">
                © {new Date().getFullYear()} CloudAGI. All systems operational.
            </div>
        </div>
    );
}
