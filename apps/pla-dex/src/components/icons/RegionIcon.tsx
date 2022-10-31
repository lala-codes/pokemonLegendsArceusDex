import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export default function PokeballCaught(
  props: Omit<SvgIconProps, 'viewBox' | 'children'>
) {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2L22 12L12 22L2 12L12 2ZM13.4286 6.28571L12 4.85714L4.85714 12L9.14286 16.2857L10.5714 14.8571L7.71429 12L13.4286 6.28571ZM19.1429 12L14.8571 7.71429L13.4286 9.14286L16.2857 12L10.5714 17.7143L12 19.1429L19.1429 12ZM13.4286 12L12 10.5714L10.5714 12L12 13.4286L13.4286 12Z"
      />
    </SvgIcon>
  );
}
