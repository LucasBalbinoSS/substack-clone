export default function SaveIcon({ size, fill, stroke }: { size: number, fill: string, stroke: string }) {
  return (
    <svg 
      className="save-icon-svg"
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill={fill} 
      stroke={stroke} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
    </svg>
  )
}