import css from './style.module.css'
import clsx from 'clsx';

function Logo({
  size = 'big',
  centerInner = false
}: {
  size?: 'small' | 'big',
  centerInner?: boolean
}) {

  const cls = clsx(css.logo, {
    [css.logoBig]: size === 'big',
    [css.logoSmall]: size === 'small',
    [css.logoCenter]: centerInner,
  })

  return (
    <h2 className={cls}>VK Films</h2>
  );
}

export default Logo;