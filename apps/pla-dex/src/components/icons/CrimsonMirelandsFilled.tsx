import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export default function CrimsonMirelandsFilled(
  props: Omit<SvgIconProps, 'viewBox' | 'children'>
) {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm5-10a5 5 0 1 1-9.834-1.283l1.97.872a2.893 2.893 0 1 0 .57-1.352l-1.96-.867A5 5 0 0 1 17 12Z"
      />
    </SvgIcon>
  );
}
