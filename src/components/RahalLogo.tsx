import React from 'react';

interface RahalLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  isDark?: boolean;
}

export const RahalLogo: React.FC<RahalLogoProps> = ({
  className = '',
  size = 'md',
  isDark = false,
}) => {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl sm:text-3xl',
    lg: 'text-3xl sm:text-4xl',
    xl: 'text-4xl sm:text-5xl',
    hero: 'text-5xl sm:text-7xl lg:text-8xl',
  };

  const textColor = isDark ? 'text-white' : 'text-[#0F432A]';

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span
        className={`font-rahal-logo ${sizeClasses[size]} ${textColor} font-bold leading-none select-none tracking-normal inline-block`}
        style={{
          fontFamily: "'Amiri', serif",
        }}
      >
        رَحَّــال
      </span>
    </span>
  );
};
