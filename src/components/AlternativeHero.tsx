import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 24 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
            380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
            152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
            684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        color: `rgba(15,23,42,${0.1 + i * 0.03})`,
        width: 0.5 + i * 0.03,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full text-primary/20"
                viewBox="0 0 696 316"
                fill="none"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.1 + path.id * 0.02}
                        initial={{ pathLength: 0.3, opacity: 0.4 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.2, 0.4, 0.2],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 25 + Math.random() * 15,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

const AlternativeHero = () => {
    const title = "Instituto Abaixo";
    const words = title.split(" ");

    const scrollToAbout = () => {
        const element = document.querySelector("#about");
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-background to-accent/30">
            {/* Animated Background */}
            <div className="absolute inset-0">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="max-w-5xl mx-auto"
                >
                    {/* Animated Title */}
                    <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-heading font-bold mb-8 tracking-tighter">
                        {words.map((word, wordIndex) => (
                            <span
                                key={wordIndex}
                                className="inline-block mr-6 last:mr-0"
                            >
                                {word.split("").map((letter, letterIndex) => (
                                    <motion.span
                                        key={`${wordIndex}-${letterIndex}`}
                                        initial={{ y: 100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{
                                            delay: wordIndex * 0.1 + letterIndex * 0.03,
                                            type: "spring",
                                            stiffness: 150,
                                            damping: 25,
                                        }}
                                        className="inline-block text-transparent bg-clip-text 
                                        bg-gradient-to-r from-primary via-secondary to-primary-dark
                                        hover:from-secondary hover:via-primary hover:to-secondary-hover
                                        transition-all duration-500"
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                            </span>
                        ))}
                    </h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, duration: 0.8 }}
                        className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto"
                    >
                        Transformando vidas com o amor incondicional de Deus através da 
                        educação, cuidado espiritual e empoderamento.
                    </motion.p>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2, duration: 0.8 }}
                        className="inline-block group relative bg-gradient-to-b from-primary/10 to-secondary/10 
                        p-px rounded-2xl backdrop-blur-lg overflow-hidden shadow-soft hover:shadow-medium 
                        transition-all duration-300"
                    >
                        <Button
                            onClick={scrollToAbout}
                            className="rounded-[1.15rem] px-12 py-6 text-lg font-semibold backdrop-blur-md 
                            bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-secondary-hover
                            text-white transition-all duration-300 group-hover:-translate-y-1 border-0
                            hover:shadow-glow"
                        >
                            <span className="opacity-95 group-hover:opacity-100 transition-opacity">
                                Descubra Nossa Missão
                            </span>
                            <span
                                className="ml-3 opacity-80 group-hover:opacity-100 group-hover:translate-x-2 
                                transition-all duration-300 text-xl"
                            >
                                →
                            </span>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 1 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <div className="flex flex-col items-center text-muted-foreground">
                    <span className="text-sm mb-2 font-medium">Role para descobrir</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center"
                    >
                        <motion.div 
                            animate={{ y: [2, 12, 2] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="w-1 h-3 bg-primary/70 rounded-full mt-2" 
                        />
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default AlternativeHero;