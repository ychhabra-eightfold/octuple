import React, { FC } from 'react';
import { MenuItemButtonProps } from '../MenuItem.types';
import { MenuSize, MenuVariant } from '../../Menu.types';
import { mergeClasses } from '../../../../shared/utilities';
import { Icon } from '../../../Icon';

import styles from '../menuItem.module.scss';

export const MenuItemButton: FC<MenuItemButtonProps> = ({
  iconProps,
  text,
  subText,
  variant = MenuVariant.neutral,
  size = MenuSize.medium,
  classNames,
  onClick,
  tabIndex = 0,
  value,
  active,
  counter,
  type,
  ...rest
}) => {
  const menuItemClasses: string = mergeClasses([
    styles.menuItem,
    {
      [styles.small]: size === MenuSize.small,
      [styles.medium]: size === MenuSize.medium,
      [styles.large]: size === MenuSize.large,
      [styles.neutral]: variant === MenuVariant.neutral,
      [styles.primary]: variant === MenuVariant.primary,
      [styles.disruptive]: variant === MenuVariant.disruptive,
      [styles.active]: active,
    },
    classNames,
  ]);

  const itemSubTextClasses: string = mergeClasses([
    styles.itemSubText,
    {
      [styles.small]: size === MenuSize.small,
      [styles.medium]: size === MenuSize.medium,
      [styles.large]: size === MenuSize.large,
    },
  ]);

  return (
    <button
      onClick={() => onClick?.(value)}
      tabIndex={tabIndex}
      role="menuitem"
      className={menuItemClasses}
      {...rest}
    >
      {iconProps && <Icon {...iconProps} />}
      <span className={styles.menuItemWrapper}>
        <span className={styles.itemText}>
          <span className={styles.label}>{text}</span>
          {counter && <span>{counter}</span>}
        </span>
        {subText && <span className={itemSubTextClasses}>{subText}</span>}
      </span>
    </button>
  );
};
