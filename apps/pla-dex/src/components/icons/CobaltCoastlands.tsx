import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export default function CobaltCoastlands(
  props: Omit<SvgIconProps, 'viewBox' | 'children'>
) {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19.107 4.915c1.88 1.867 2.895 4.398 2.895 7.038L11.979 22.216 1.998 11.953a9.918 9.918 0 0 1 2.935-7.038A10.058 10.058 0 0 1 12.02 2c2.658 0 5.207 1.049 7.087 2.915ZM12 6l-2-2s1-.5 2-.5 2 .511 2 .511L12 6Zm-3.376 4.398S9.611 8 12 8s3.376 2.398 3.376 2.398L12 13.5l-3.376-3.102ZM10 6.5 8.5 5S4.916 7.21 4 11l8 8 8-8c-.981-3.79-4.5-6-4.5-6L14 6.5s3 2 3.5 4.29L12 16l-5.58-5.21C7 8 10 6.5 10 6.5Z"
      />
    </SvgIcon>
  );
}
