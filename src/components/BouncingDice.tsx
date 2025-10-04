import { useEffect, useState } from 'react';

interface DiceItem {
  id: number;
  x: number;
  y: number;
  velocityX: number;
  velocityY: number;
  rotation: number;
  rotationSpeed: number;
  size: number;
}

const BouncingDice = () => {
  const [diceItems, setDiceItems] = useState<DiceItem[]>([]);

  useEffect(() => {
    // Generate dice items with random properties
    const generateDiceItems = () => {
      const items: DiceItem[] = [];
      const diceCount = 8; // Number of dice

      for (let i = 0; i < diceCount; i++) {
        items.push({
          id: i,
          x: Math.random() * 100, // Random horizontal position (0-100%)
          y: Math.random() * 100, // Random vertical position (0-100%)
          velocityX: (Math.random() - 0.5) * 8, // Random horizontal velocity (-4 to 4)
          velocityY: (Math.random() - 0.5) * 8, // Random vertical velocity (-4 to 4)
          rotation: Math.random() * 360, // Random initial rotation (0-360 degrees)
          rotationSpeed: (Math.random() - 0.5) * 20, // Random rotation speed (-10 to 10)
          size: 40 + Math.random() * 30, // Random size (40-70px)
        });
      }
      setDiceItems(items);
    };

    generateDiceItems();

    // Animation loop
    const animate = () => {
      setDiceItems(prevItems => 
        prevItems.map(dice => {
          let newX = dice.x + dice.velocityX;
          let newY = dice.y + dice.velocityY;
          let newVelocityX = dice.velocityX;
          let newVelocityY = dice.velocityY;

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
          if (Math.random() < 0.01) {
            newVelocityX += (Math.random() - 0.5) * 2;
            newVelocityY += (Math.random() - 0.5) * 2;
          }

          // Limit velocity to prevent dice from moving too fast
          newVelocityX = Math.max(-6, Math.min(6, newVelocityX));
          newVelocityY = Math.max(-6, Math.min(6, newVelocityY));

          return {
            ...dice,
            x: newX,
            y: newY,
            velocityX: newVelocityX,
            velocityY: newVelocityY,
            rotation: dice.rotation + dice.rotationSpeed,
          };
        })
      );
    };

    const interval = setInterval(animate, 50); // 20 FPS for smooth animation

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {diceItems.map((dice) => (
        <div
          key={dice.id}
          className="absolute"
          style={{
            left: `${dice.x}%`,
            top: `${dice.y}%`,
            transform: `rotate(${dice.rotation}deg)`,
            width: `${dice.size}px`,
            height: `${dice.size}px`,
          }}
        >
          <img
            src="/dice.png"
            alt="Bouncing dice"
            className="w-full h-full object-contain"
            style={{
              filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))',
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default BouncingDice;
