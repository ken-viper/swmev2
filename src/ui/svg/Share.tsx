const ShareIcon = ({
  color = '#000',
  width = 24,
  height = 24,
}: {
  color?: string;
  width?: number;
  height?: number;
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>shopping cart</title>
    <path
      d="M21.7525 7.98259L16.5132 3.18421C16.0549 2.76502 15.3327 3.1057 15.3327 3.75848V6.33336C10.3746 6.38995 6.44423 7.37845 6.44423 12.0484C6.44423 13.9337 7.6664 15.8017 9.01633 16.7773C9.43784 17.0822 10.0378 16.6996 9.88226 16.2058C8.48233 11.7567 10.8885 10.7776 15.3327 10.7463V13.3226C15.3327 13.976 16.0563 14.3153 16.5139 13.8958L21.7532 9.09746C22.0824 8.8263 22.0824 8.28466 21.7525 7.98259ZM16.4438 16.3329C15.8302 16.3329 15.3327 16.8304 15.3327 17.4439V18.5237L4.22212 18.5237V7.44442H5.33317C5.94669 7.44442 6.44423 6.94722 6.44423 6.33336C6.44423 5.7195 5.94773 5.2223 5.33317 5.2223H4.22212C2.99474 5.2223 2 6.21705 2 7.44442V18.5237C2 19.7508 2.99474 20.7459 4.22212 20.7459L15.3327 20.7458C16.5601 20.7458 17.5548 19.7507 17.5548 18.5237V17.4439C17.5548 16.8294 17.0583 16.3329 16.4438 16.3329Z"
      fill={color}
    />
  </svg>
);

export default ShareIcon;