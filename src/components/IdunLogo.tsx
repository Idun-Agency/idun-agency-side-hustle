interface IdunLogoProps {
  width?: number;
  height?: number;
  className?: string;
  variant?: "nav" | "hero";
}

const IdunLogo = ({ width, height, className, variant = "nav" }: IdunLogoProps) => {
  if (variant === "hero") {
    return (
      <svg width={width ?? 280} height={height ?? 100} viewBox="0 0 280 100" className={className}>
        <rect x="0" y="0" width="7" height="100" rx="3.5" fill="#2A7A5A" />
        <text x="24" y="68" fontFamily="'Space Grotesk', sans-serif" fontWeight="700" fontSize="62" letterSpacing="2" fill="#E8445A">IDUN</text>
        <text x="26" y="92" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="16" letterSpacing="14.5" fill="#7AB89A">AGENCY</text>
      </svg>
    );
  }

  return (
    <svg width={width ?? 110} height={height ?? 30} viewBox="0 0 110 30" className={className}>
      <rect x="0" y="0" width="5" height="30" rx="2.5" fill="#2A7A5A" />
      <text x="14" y="20" fontFamily="'Space Grotesk', sans-serif" fontWeight="700" fontSize="17" letterSpacing="1" fill="#E8445A">IDUN</text>
      <text x="15" y="29" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="8" letterSpacing="5" fill="#7AB89A">AGENCY</text>
    </svg>
  );
};

export default IdunLogo;
