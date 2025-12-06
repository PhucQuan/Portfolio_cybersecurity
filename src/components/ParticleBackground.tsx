// Simple particle background using CSS animations
export const ParticleBackground = () => {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden">
            {/* Floating particles */}
            {[...Array(20)].map((_, i) => (
                <div
                    key={i}
                    className="absolute w-1 h-1 bg-cyber-neon/30 rounded-full"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
                        animationDelay: `${Math.random() * 5}s`,
                    }}
                />
            ))}
            {[...Array(15)].map((_, i) => (
                <div
                    key={`purple-${i}`}
                    className="absolute w-1 h-1 bg-cyber-purple/30 rounded-full"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animation: `float ${7 + Math.random() * 8}s ease-in-out infinite`,
                        animationDelay: `${Math.random() * 3}s`,
                    }}
                />
            ))}
        </div>
    );
};
