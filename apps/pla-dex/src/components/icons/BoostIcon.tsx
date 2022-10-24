import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export default function BoostIcon(
  props: Omit<SvgIconProps, 'viewBox' | 'children'>
) {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path d="M3 2a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3Zm15.216 6.726v2.598l-6.318-4.158-6.25 4.158V8.726l6.318-4.158 6.25 4.158Zm0 6.756v2.6l-6.318-4.159-6.25 4.158v-2.599l6.318-4.158 6.25 4.158Z" />
    </SvgIcon>
  );
}
