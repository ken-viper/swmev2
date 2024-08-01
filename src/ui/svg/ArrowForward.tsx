const ArrowForward = ({ color = '#000', size = 24 }: { color?: string; size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox={'0 0 24 24'}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>arrow forward</title>
    <path
      d="M3.00019 12.5C3.00019 11.8086 3.52363 11.25 4.21504 11.25L16.1955 11.25L12.0783 7.13281C11.59 6.64453 11.59 5.85352 12.0783 5.36523C12.3244 5.12109 12.6447 5 12.965 5C13.2854 5 13.6049 5.12207 13.8486 5.36621L20.0986 11.6162C20.5869 12.1045 20.5869 12.8955 20.0986 13.3838L13.8486 19.6338C13.3604 20.1221 12.5693 20.1221 12.0811 19.6338C11.5928 19.1455 11.5928 18.3545 12.0811 17.8662L16.1955 13.75L4.21504 13.75C3.52363 13.75 3.00019 13.1914 3.00019 12.5Z"
      fill="black"
    />
  </svg>
);

export default ArrowForward;