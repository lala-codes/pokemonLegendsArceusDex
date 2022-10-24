import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export default function AlabasterIcelandsFilled(
  props: Omit<SvgIconProps, 'viewBox' | 'children'>
) {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3 16.857 12 22l9-5.143V6.714L12 2 3 6.714v10.143Zm5.789-2.733s4.791 1.97 8.711 0c-5.662 0-7.2-.283-6.97-2.759.437-.394 2.464-1.25 6.534-1.183l-.026-.01c-1.579-.635-2.472-.995-4.765-1.172-1.742.197-2.704.454-4.355 1.577-1.307 2.365.87 3.547.87 3.547Z"
      />
    </SvgIcon>
  );
}
