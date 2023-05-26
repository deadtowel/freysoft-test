import { SvgIcon, SvgIconProps } from '@mui/material';

function Expenses(props: SvgIconProps) {
  return (
    <SvgIcon
      xmlns='http://www.w3.org/2000/svg'
      width='29'
      height='23'
      fill='none'
      viewBox='0 0 29 23'
      {...props}
    >
      <path
        fill={props.color}
        d='M27.391.5h-26c-.553 0-1 .447-1 1v5h28v-5c0-.553-.446-1-1-1zm-27 21c0 .553.447 1 1 1h26c.554 0 1-.447 1-1V9.25h-28V21.5zm18.094-5.75a.25.25 0 01.25-.25h5.156a.25.25 0 01.25.25V18a.25.25 0 01-.25.25h-5.156a.25.25 0 01-.25-.25v-2.25z'
      ></path>
    </SvgIcon>
  );
}

export default Expenses;
