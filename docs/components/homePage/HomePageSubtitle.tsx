import { Text, createStyles } from '@mantine/core';
import { IconDiscountCheck, IconExclamationCircle, IconExternalLink } from '@tabler/icons-react';
import ExternalLink from '~/components/ExternalLink';
import { MANTINE_DATATABLE_LINK } from '~/config';

const useStyles = createStyles((theme) => ({
  root: {
    marginBottom: '2em',
  },
  paragraph: {
    marginLeft: '1.5em',
    textIndent: '-1.5em',
  },
  startIcon: {
    verticalAlign: -4,
  },
  checkIcon: {
    color: theme.colors.blue[6],
  },
  exclamationIcon: {
    color: theme.colors.red[6],
  },
  link: {
    '&:hover': {
      textDecoration: 'none',
      borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.blue[7] : theme.colors.blue[5]}`,
    },
  },
  linkIcon: {
    verticalAlign: -2,
  },
}));

export function HomePageSubtitle() {
  const { cx, classes } = useStyles();
  return (
    <div className={classes.root}>
      <Text className={classes.paragraph} color="dimmed" size="sm">
        <IconDiscountCheck className={cx(classes.startIcon, classes.checkIcon)} size={18} /> built by the author of{' '}
        <ExternalLink className={classes.link} to={MANTINE_DATATABLE_LINK}>
          Mantine DataTable <IconExternalLink className={classes.linkIcon} size={14} />
        </ExternalLink>
        <br />
      </Text>
      <Text className={classes.paragraph} color="dimmed" size="sm">
        <IconExclamationCircle className={cx(classes.startIcon, classes.exclamationIcon)} size={18} /> this version
        supports Mantine V6; the new version supporting Mantine V7{' '}
        <ExternalLink to="https://icflorescu.github.io/mantine-contextmenu/">
          is available here <IconExternalLink className={classes.linkIcon} size={14} />
        </ExternalLink>
        .
      </Text>
    </div>
  );
}
