import { useEffect, useState } from 'react';

interface TrashItem {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  rotation: number;
}

const TrashRain = () => {
  const [trashItems, setTrashItems] = useState<TrashItem[]>([]);

  useEffect(() => {
    // Generate trash items with random properties
    const generateTrashItems = () => {
      const items: TrashItem[] = [];
      const itemCount = 20; // Number of trash items

      for (let i = 0; i < itemCount; i++) {
        items.push({
          id: i,
          x: Math.random() * 100, // Random horizontal position (0-100%)
          delay: Math.random() * 5, // Random delay (0-5 seconds)
          duration: 3 + Math.random() * 4, // Random duration (3-7 seconds)
          size: 35 + Math.random() * 40, // Random size (35-75px)
          rotation: Math.random() * 360, // Random rotation (0-360 degrees)
        });
      }
      setTrashItems(items);
    };

    generateTrashItems();
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {trashItems.map((item) => (
        <div
          key={item.id}
          className="absolute trash-fall"
          style={{
            left: `${item.x}%`,
            animationDelay: `${item.delay}s`,
            animationDuration: `${item.duration}s`,
            transform: `rotate(${item.rotation}deg)`,
          }}
        >
          <img
            src="/chip.png"
            alt="Falling poker chip"
            className="w-auto h-auto"
            style={{
              width: `${item.size}px`,
              height: `${item.size}px`,
              opacity: 0.9,
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default TrashRain;
