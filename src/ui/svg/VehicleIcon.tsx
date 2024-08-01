const VehicleIcon = ({ color = '#000' }: { color?: string }) => (
  <svg width="16" height="16" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#a)">
      <path
        d="m2.07 5.652.801-2.29a2.187 2.187 0 0 1 2.065-1.466h4.129c.93 0 1.756.588 2.064 1.465l.802 2.29c.529.22.902.741.902 1.35v4.375c0 .403-.325.729-.729.729h-.729a.728.728 0 0 1-.73-.73v-1.093h-7.29v1.094c0 .403-.327.729-.73.729h-.73a.729.729 0 0 1-.728-.73V7.002c0-.609.373-1.13.902-1.35Zm1.583-.11h6.694l-.594-1.7a.73.73 0 0 0-.688-.487h-4.13a.73.73 0 0 0-.688.487l-.594 1.7Zm-.299 1.459a.729.729 0 1 0 0 1.457.729.729 0 0 0 0-1.457Zm7.292 1.458a.728.728 0 1 0 .001-1.457.728.728 0 0 0-.001 1.457Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" transform="translate(1.167 1.167)" d="M0 0h11.667v11.667H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default VehicleIcon;
