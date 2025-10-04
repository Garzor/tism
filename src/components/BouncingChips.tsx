import { useEffect, useState } from 'react';

interface ChipItem {
  id: number;
  x: number;
  y: number;
  velocityX: number;
  velocityY: number;
  rotation: number;
  rotationSpeed: number;
  size: number;
  delay: number;
}

const BouncingChips = () => {
  const [chipItems, setChipItems] = useState<ChipItem[]>([]);

  useEffect(() => {
    // Generate chip items with random properties
    const generateChipItems = () => {
      const items: ChipItem[] = [];
      const chipCount = 6; // Number of chips

      for (let i = 0; i < chipCount; i++) {
        items.push({
          id: i,
          x: Math.random() * 100, // Random horizontal position (0-100%)
          y: Math.random() * 100, // Random vertical position (0-100%)
          velocityX: (Math.random() - 0.5) * 4, // Random horizontal velocity (-2 to 2)
          velocityY: (Math.random() - 0.5) * 4, // Random vertical velocity (-2 to 2)
          rotation: Math.random() * 360, // Random initial rotation (0-360 degrees)
          rotationSpeed: (Math.random() - 0.5) * 8, // Random rotation speed (-4 to 4)
          size: 40 + Math.random() * 30, // Random size (40-70px)
          delay: Math.random() * 3, // Random delay (0-3 seconds)
        });
      }
      setChipItems(items);
    };

    generateChipItems();

    // Animation loop
    const animate = () => {
      setChipItems(prevItems => 
        prevItems.map(chip => {
          let newX = chip.x + chip.velocityX;
          let newY = chip.y + chip.velocityY;
          let newVelocityX = chip.velocityX;
          let newVelocityY = chip.velocityY;

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
          if (Math.random() < 0.02) {
            newVelocityX += (Math.random() - 0.5) * 1;
            newVelocityY += (Math.random() - 0.5) * 1;
          }

          // Limit velocity to prevent chips from moving too fast
          newVelocityX = Math.max(-3, Math.min(3, newVelocityX));
          newVelocityY = Math.max(-3, Math.min(3, newVelocityY));

          return {
            ...chip,
            x: newX,
            y: newY,
            velocityX: newVelocityX,
            velocityY: newVelocityY,
            rotation: chip.rotation + chip.rotationSpeed,
          };
        })
      );
    };

    const interval = setInterval(animate, 50); // 20 FPS for smooth animation

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {chipItems.map((chip) => (
        <div
          key={chip.id}
          className="absolute"
          style={{
            left: `${chip.x}%`,
            top: `${chip.y}%`,
            transform: `rotate(${chip.rotation}deg)`,
            animationDelay: `${chip.delay}s`,
          }}
        >
          <img
            src="/chip.png"
            alt="Bouncing poker chip"
            className="w-auto h-auto"
            style={{
              width: `${chip.size}px`,
              height: `${chip.size}px`,
              opacity: 0.8,
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default BouncingChips;
