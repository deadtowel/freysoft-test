import { SvgIcon, SvgIconProps } from '@mui/material';

function Calendar(props: SvgIconProps) {
  return (
    <SvgIcon
      xmlns='http://www.w3.org/2000/svg'
      width='25'
      height='25'
      fill='none'
      viewBox='0 0 25 25'
      {...props}
    >
      <path
        stroke={props.color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M19.391 4.5h-14a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-14a2 2 0 00-2-2zM3.391 10.5h18M16.391 2.5v4M8.391 2.5v4'
      ></path>
    </SvgIcon>
  );
}

export default Calendar;
