import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export default function CobaltCoastlandsFilled(
  props: Omit<SvgIconProps, 'viewBox' | 'children'>
) {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.107 4.915c1.88 1.867 2.895 4.398 2.895 7.038L11.979 22.216 1.998 11.953a9.918 9.918 0 0 1 2.935-7.038A10.058 10.058 0 0 1 12.02 2c2.658 0 5.207 1.049 7.087 2.915ZM7 10.923S8.462 7 12 7c3.538 0 5 3.923 5 3.923L12 16l-5-5.077Z"
      />
    </SvgIcon>
  );
}
