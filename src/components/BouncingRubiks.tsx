import { useEffect, useState } from 'react';

interface RubikItem {
  id: number;
  x: number;
  y: number;
  velocityX: number;
  velocityY: number;
  rotation: number;
  rotationSpeed: number;
  size: number;
}

const BouncingRubiks = () => {
  const [rubikItems, setRubikItems] = useState<RubikItem[]>([]);

  useEffect(() => {
    // Generate Rubik's cube items with random properties
    const generateRubikItems = () => {
      const items: RubikItem[] = [];
      const rubikCount = 12; // Number of Rubik's cubes

      for (let i = 0; i < rubikCount; i++) {
        items.push({
          id: i,
          x: Math.random() * 100, // Random horizontal position (0-100%)
          y: Math.random() * 100, // Random vertical position (0-100%)
          velocityX: (Math.random() - 0.5) * 6, // Random horizontal velocity (-3 to 3)
          velocityY: (Math.random() - 0.5) * 6, // Random vertical velocity (-3 to 3)
          rotation: Math.random() * 360, // Random initial rotation (0-360 degrees)
          rotationSpeed: (Math.random() - 0.5) * 15, // Random rotation speed (-7.5 to 7.5)
          size: 50 + Math.random() * 40, // Random size (50-90px)
        });
      }
      setRubikItems(items);
    };

    generateRubikItems();

    // Animation loop
    const animate = () => {
      setRubikItems(prevItems => 
        prevItems.map(rubik => {
          let newX = rubik.x + rubik.velocityX;
          let newY = rubik.y + rubik.velocityY;
          let newVelocityX = rubik.velocityX;
          let newVelocityY = rubik.velocityY;

          // Bounce off horizontal walls
          if (newX <= 0 || newX >= 100) {
            newVelocityX = -newVelocityX;
            newX = Math.max(0, Math.min(100, newX));
          }

          // Bounce off vertical walls
          if (newY <= 0 || newY >= 100) {
            newVelocityY = -newVelocityY;
            newY = Math.max(0, Math.min(100, newY));
          }

          // Add some randomness to prevent perfect bouncing
          if (Math.random() < 0.008) {
            newVelocityX += (Math.random() - 0.5) * 1.5;
            newVelocityY += (Math.random() - 0.5) * 1.5;
          }

          // Limit velocity to prevent cubes from moving too fast
          newVelocityX = Math.max(-5, Math.min(5, newVelocityX));
          newVelocityY = Math.max(-5, Math.min(5, newVelocityY));

          return {
            ...rubik,
            x: newX,
            y: newY,
            velocityX: newVelocityX,
            velocityY: newVelocityY,
            rotation: rubik.rotation + rubik.rotationSpeed,
          };
        })
      );
    };

    const interval = setInterval(animate, 50); // 20 FPS for smooth animation

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {rubikItems.map((rubik) => (
        <div
          key={rubik.id}
          className="absolute"
          style={{
            left: `${rubik.x}%`,
            top: `${rubik.y}%`,
            transform: `rotate(${rubik.rotation}deg)`,
            width: `${rubik.size}px`,
            height: `${rubik.size}px`,
          }}
        >
          <img
            src="/rubik.png"
            alt="Bouncing Rubik's cube"
            className="w-full h-full object-contain"
            style={{
              filter: 'drop-shadow(0 6px 12px rgba(0, 0, 0, 0.4))',
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default BouncingRubiks;
