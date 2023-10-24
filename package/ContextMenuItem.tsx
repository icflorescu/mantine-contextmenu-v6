import { Box, Text, UnstyledButton, createStyles, px, type MantineColor, type MantineNumberSize } from '@mantine/core';
import { useRef, useState, type MouseEventHandler } from 'react';
import { ContextMenu } from './ContextMenu';
import type { ContextMenuContent, ContextMenuItemOptions } from './types';
import type { WithRequiredProperty } from './utils';

const useStyles = createStyles((theme, { color }: { color?: MantineColor }) => {
  const verticalPadding = px(theme.spacing.sm) / 2;
  return {
    button: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      paddingTop: verticalPadding,
      paddingBottom: verticalPadding,
      paddingLeft: theme.spacing.sm,
      paddingRight: theme.spacing.sm,
      color: color && theme.colors[color][6],
      transition: 'background .15s ease',
      '&[disabled]': {
        cursor: 'not-allowed',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
      },
      '&:hover:not([disabled])': {
        background: theme.fn.rgba(
          color ? theme.colors[color][6] : theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[4],
          color ? (theme.colorScheme === 'dark' ? 0.15 : 0.08) : 0.25
        ),
      },
      '&:active:not([disabled])': {
        background: theme.fn.rgba(
          color ? theme.colors[color][6] : theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[4],
          color ? (theme.colorScheme === 'dark' ? 0.3 : 0.2) : 0.5
        ),
      },
    },
    title: {
      whiteSpace: 'nowrap',
      flexGrow: 1,
    },
  };
});

export function ContextMenuItem({
  className,
  style,
  icon,
  title,
  color,
  disabled,
  onClick,
  onHide,
  borderRadius,
  items,
}: WithRequiredProperty<Omit<ContextMenuItemOptions, 'key'>, 'title'> & {
  borderRadius: MantineNumberSize | undefined;
  onHide: () => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const [submenuPosition, setSubmenuPosition] = useState<{ x: number; y: number } | null>(null);

  const handleClick: MouseEventHandler<HTMLButtonElement> | undefined = onClick
    ? (e) => {
        onHide();
        onClick!(e);
      }
    : undefined;

  const showSubmenu = () => {
    const { top: y, right: x } = ref.current!.getBoundingClientRect();
    setSubmenuPosition({ x, y });
  };

  const hideSubmenu = () => {
    setSubmenuPosition(null);
  };

  const hasItemsAndIsNotDisabled = items && !disabled;
  const { cx, classes } = useStyles({ color });

  return (
    <div
      onMouseOver={hasItemsAndIsNotDisabled ? showSubmenu : undefined}
      onMouseOut={hasItemsAndIsNotDisabled ? hideSubmenu : undefined}
    >
      <UnstyledButton
        ref={ref}
        className={cx(classes.button, className)}
        style={style}
        disabled={disabled}
        onClick={handleClick}
      >
        {icon && (
          <Box fz={0} mr="xs">
            {icon}
          </Box>
        )}
        <Text className={classes.title} size="sm">
          {title}
        </Text>
        {items && (
          <Box fz={10} mt={-2} ml="xs">
            ▶
          </Box>
        )}
      </UnstyledButton>
      {submenuPosition && (
        <ContextMenu
          content={items as ContextMenuContent}
          borderRadius={borderRadius}
          onHide={onHide}
          {...submenuPosition}
        />
      )}
    </div>
  );
}
