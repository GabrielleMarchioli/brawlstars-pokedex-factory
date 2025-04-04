
import { CSSProperties } from "react";

interface LoadingSpinnerProps {
  size?: number;
  color?: string;
  style?: CSSProperties;
  message?: string;
}

const LoadingSpinner = ({ 
  size = 40, 
  color = "#8B5CF6", 
  style,
  message
}: LoadingSpinnerProps) => {
  return (
    <div 
      className="flex flex-col items-center justify-center"
      style={style}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 38 38"
        xmlns="http://www.w3.org/2000/svg"
        stroke={color}
      >
        <g fill="none" fillRule="evenodd">
          <g transform="translate(1 1)" strokeWidth="2">
            <circle strokeOpacity=".3" cx="18" cy="18" r="18" />
            <path d="M36 18c0-9.94-8.06-18-18-18">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 18 18"
                to="360 18 18"
                dur="1s"
                repeatCount="indefinite"
              />
            </path>
          </g>
        </g>
      </svg>
      {message && (
        <p className="mt-4 text-sm text-brawl-text-secondary">{message}</p>
      )}
    </div>
  );
};

export default LoadingSpinner;
