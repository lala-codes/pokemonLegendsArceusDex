import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export default function CrimsonMirelands(
  props: Omit<SvgIconProps, 'viewBox' | 'children'>
) {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm-.145-2.029c4.482 0 8.116-3.569 8.116-7.971s-3.634-7.971-8.116-7.971C7.373 4.029 3.74 7.598 3.74 12s3.634 7.971 8.116 7.971Zm0-1.768c-3.488 0-6.316-2.777-6.316-6.203 0-.579.08-1.139.232-1.67l2.643 1.15a3.623 3.623 0 1 0 .618-1.558L6.445 8.797a6.336 6.336 0 0 1 5.41-3c3.488 0 6.316 2.777 6.316 6.203s-2.828 6.203-6.316 6.203Z"
      />
    </SvgIcon>
  );
}
