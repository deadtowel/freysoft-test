import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

function Home(props: SvgIconProps) {
  return (
    <SvgIcon
      xmlns='http://www.w3.org/2000/svg'
      width='21'
      height='26'
      fill='none'
      viewBox='0 0 21 26'
      {...props}
    >
      <path
        fill={props.color}
        stroke={props.color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M1 9.26l9.196-7.51 9.195 7.51v11.8c0 .57-.215 1.116-.598 1.518a1.995 1.995 0 01-1.445.628H3.043a1.995 1.995 0 01-1.444-.628A2.201 2.201 0 011 21.061V9.26z'
      ></path>
      <path
        fill={props.color}
        d='M7.62 22.696a2.576 2.576 0 015.152 0v1.554H7.62v-1.554z'
      ></path>
      <path
        stroke='#fff'
        strokeWidth='2'
        d='M7.62 22.696a2.576 2.576 0 015.152 0v1.554H7.62v-1.554z'
      ></path>
    </SvgIcon>
  );
}

export default Home;
