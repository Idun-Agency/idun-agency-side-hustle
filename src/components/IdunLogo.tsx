interface IdunLogoProps {
  width?: number;
  height?: number;
  className?: string;
}

const IdunLogo = ({ width = 110, height = 30, className }: IdunLogoProps) => (
  <svg width={width} height={height} viewBox="0 0 110 30" className={className}>
    <rect x="0" y="0" width="5" height="30" rx="2.5" fill="#2A7A5A" />
    <text x="14" y="20" fontFamily="'Space Grotesk', sans-serif" fontWeight="700" fontSize="17" letterSpacing="1" fill="#E8445A">IDUN</text>
    <text x="15" y="29" fontFamily="'Space Grotesk', sans-serif" fontWeight="300" fontSize="8" letterSpacing="5" fill="#7AB89A">AGENCY</text>
  </svg>
);

export default IdunLogo;
