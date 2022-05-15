/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'components/link';


export default function Logo({ isWhite, ...props }) {
  return (
    <Link path="/" sx={styles.logo} {...props}>
    <div style={{ display: 'flex', alignItems: 'center', width:300}}>
      <img src={'/logocronistas.png'} style={{
        maxHeight: 80
      }} />
    </div>
  </Link>
  );
}
const styles = {
  logo: {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'inline-flex',
    svg: {
      height: 'auto',
      width: [128, null, '100%'],
    },
  },
};
