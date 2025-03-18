
import { useEffect, useState } from 'react';

interface StatsBarProps {
  label: string;
  value: number;
  maxValue: number;
  color: string;
  icon?: React.ReactNode;
  delay?: number;
  showValueText?: boolean;
}

const StatsBar = ({ 
  label, 
  value, 
  maxValue, 
  color, 
  icon, 
  delay = 0,
  showValueText = true
}: StatsBarProps) => {
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth((value / maxValue) * 100);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [value, maxValue, delay]);

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          {icon && <span className="text-gray-500">{icon}</span>}
          <span className="text-sm font-medium text-brawl-text-secondary">{label}</span>
        </div>
        {showValueText && (
          <span className="text-sm font-medium">{value.toLocaleString()}</span>
        )}
      </div>
      <div className="stats-bar">
        <div 
          className="stats-bar-fill transition-all duration-1000 ease-out"
          style={{ 
            width: `${width}%`,
            backgroundColor: color
          }}
        ></div>
      </div>
    </div>
  );
};

export default StatsBar;
