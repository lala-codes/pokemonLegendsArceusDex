import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export default function Pokeball(
  props: Omit<SvgIconProps, 'viewBox' | 'children'>
) {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path d="M21.968 12.8c.021-.264.032-.53.032-.8v.8h-.032Zm-19.936 0h5.64a4.401 4.401 0 0 0 8.655 0h5.641C21.561 17.949 17.255 22 12 22s-9.56-4.051-9.968-9.2Zm0 0H2V12c0 .27.01.536.032.8Zm0-1.6c-.021.264-.032.53-.032.8v-.8h.032Zm0 0C2.439 6.051 6.746 2 12 2s9.56 4.051 9.968 9.2h-5.64a4.401 4.401 0 0 0-8.655 0H2.032Zm19.936 0H22v.8c0-.27-.01-.536-.032-.8Z" />
    </SvgIcon>
  );
}
