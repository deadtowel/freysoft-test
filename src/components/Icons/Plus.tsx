import { SvgIcon, SvgIconProps } from "@mui/material";

function Plus(props: SvgIconProps) {
  return (
    <SvgIcon
      xmlns='http://www.w3.org/2000/svg'
      width='19'
      height='18'
      fill='none'
      viewBox='0 0 19 18'
      {...props}
    >
      <path stroke='#fff' strokeWidth='2' d='M9.391 0v18M.391 9h18'></path>
    </SvgIcon>
  );
}

export default Plus;
