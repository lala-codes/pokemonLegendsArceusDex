import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export default function ObsidianFieldFilled(
  props: Omit<SvgIconProps, 'viewBox' | 'children'>
) {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4Zm13.077 4H6.923C6.413 6 6 6.224 6 6.5v1c0 .276.413.5.923.5h10.154c.51 0 .923-.224.923-.5v-1c0-.276-.413-.5-.923-.5Zm0 7H6.923c-.51 0-.923.32-.923.714v3.572c0 .394.413.714.923.714h10.154c.51 0 .923-.32.923-.714v-3.572c0-.394-.413-.714-.923-.714Z"
      />
    </SvgIcon>
  );
}
