import { Container } from '@mantine/core';
import ExternalLink from '~/components/ExternalLink';
import PageNavigation from '~/components/PageNavigation';
import PageText from '~/components/PageText';
import PageTitle from '~/components/PageTitle';

const PATH = 'mantine-v7-support';

export default function Page() {
  return (
    <Container>
      <PageTitle of={PATH} />
      <PageText>
        Mantine ContextMenu V6 supports <ExternalLink to="https://v6.mantine.dev/">Mantine V6</ExternalLink>.
      </PageText>
      <PageText info>
        If you are using <ExternalLink to="https://mantine.dev/">Mantine V7</ExternalLink>, please use{' '}
        <ExternalLink to="https://icflorescu.github.io/mantine-contextmenu/">Mantine ContextMenu V7</ExternalLink>.
      </PageText>
      <PageNavigation of={PATH} />
    </Container>
  );
}
