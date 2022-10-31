import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export default function ObsidianField(
  props: Omit<SvgIconProps, 'viewBox' | 'children'>
) {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4ZM4.613 3.935a1 1 0 0 0-1 1V8.42a1 1 0 0 0 1 1h5.42a1 1 0 0 0 1-1V4.935a1 1 0 0 0-1-1h-5.42Zm9.355 0a1 1 0 0 0-1 1V8.42a1 1 0 0 0 1 1h5.42a1 1 0 0 0 1-1V4.935a1 1 0 0 0-1-1h-5.42Zm-5.194 8.097a1 1 0 0 1 1-1h4.452a1 1 0 0 1 1 1v7.355a1 1 0 0 1-1 1H9.774a1 1 0 0 1-1-1v-7.355Zm-4.161-.355a1 1 0 0 0-1 1v6.71a1 1 0 0 0 1 1H6.16a1 1 0 0 0 1-1v-6.71a1 1 0 0 0-1-1H4.613Zm12.226 1a1 1 0 0 1 1-1h1.548a1 1 0 0 1 1 1v6.71a1 1 0 0 1-1 1H17.84a1 1 0 0 1-1-1v-6.71Z"
      />
    </SvgIcon>
  );
}
