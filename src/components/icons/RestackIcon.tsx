interface RestackIconProps {
  // Alterei para ser opcional e usar um nome mais comum
  className?: string
}

export default function RestackIcon({ className }: RestackIconProps) {
  return (
    <svg 
      className={`restack-icon-svg ${className}`}
      role="img" 
      width="18" 
      height="18" 
      viewBox="0 0 20 20" 
      fill="none" 
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round" 
      strokeLinejoin="round" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2.53001 7.81595C3.49179 4.73911 6.43281 2.5 9.91173 2.5C13.1684 2.5 15.9537 4.46214 17.0852 7.23684L17.6179 8.67647M17.6179 8.67647L18.5002 4.26471M17.6179 8.67647L13.6473 6.91176M17.4995 12.1841C16.5378 15.2609 13.5967 17.5 10.1178 17.5C6.86118 17.5 4.07589 15.5379 2.94432 12.7632L2.41165 11.3235M2.41165 11.3235L1.5293 15.7353M2.41165 11.3235L6.38224 13.0882"></path>
    </svg>
  );
}