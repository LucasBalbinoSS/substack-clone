interface HeartIconProps {
  fill?: string
  stroke?: string
}

export default function HeartIcon({
  fill = "none", 
  stroke = "currentColor",
}: HeartIconProps) {
  return (
    <svg
      className="heart-icon-svg"
      viewBox="0 0 20 20"
      width='18'
      height='18'
      fill={fill}
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5.00002 2.54822C8.00003 2.09722 9.58337 4.93428 10 5.87387C10.4167 4.93428 12 2.09722 15 2.54822C18 2.99923 18.75 5.66154 18.75 7.05826C18.75 9.28572 18.1249 10.9821 16.2499 13.244C14.3749 15.506 10 18.3333 10 18.3333C10 18.3333 5.62498 15.506 3.74999 13.244C1.875 10.9821 1.25 9.28572 1.25 7.05826C1.25 5.66154 2 2.99923 5.00002 2.54822Z" />
    </svg>
  )
}