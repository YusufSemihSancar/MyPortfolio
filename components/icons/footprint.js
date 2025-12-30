const FootprintIcon = props => {
  return (
    <svg
      width={20}
      height={20}
      className="w-5 inline-block transition-transform group-hover:rotate-180 group-hover:scale-110"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <line x1="12" y1="2" x2="12" y2="22" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1 4-10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}

export default FootprintIcon
