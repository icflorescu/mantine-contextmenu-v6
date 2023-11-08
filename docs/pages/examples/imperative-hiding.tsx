import { Code, Container } from '@mantine/core';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import CodeBlock from '~/components/CodeBlock';
import PageNavigation from '~/components/PageNavigation';
import PageTitle from '~/components/PageTitle';
import PageText from '~/components/PageText';
import readCodeExample from '~/lib/readCodeExample';
import ImperativeHidingExample from '~/examples/ImperativeHidingExample';

const PATH = 'examples/imperative-hiding';

export const getStaticProps: GetStaticProps<{ code: string }> = async () => ({
  props: { code: (await readCodeExample('examples/ImperativeHidingExample.tsx')) as string },
});

export default function Page({ code }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container>
      <PageTitle of={PATH} />
      <PageText>
        A visible context menu hides automatically when the user clicks anywhere on the page, hits the{' '}
        <Code>Escape</Code> key, scrolls the or resizes the browser window.
      </PageText>
      <PageText>
        However, you can also hide the context menu <em>imperatively</em> by calling the <Code>hideContextMenu</Code>{' '}
        function returned by the <Code>useContextMenu</Code> hook.
      </PageText>
      <PageText>
        The <Code>useContextMenu</Code> hook also returns an <Code>isContextMenuVisible</Code> boolean that you can use
        to determine whether the context menu is currently visible.
      </PageText>
      <PageText>
        In the example below, we’ll hide the context menu automatically when the user presses the <Code>H</Code> key,
        his mouse cursor leaves the page, or after five seconds have elapsed:
      </PageText>
      <CodeBlock language="typescript" content={code} />
      <PageText>Right-click on the image below to show the context menu:</PageText>
      <ImperativeHidingExample />
      <PageNavigation of={PATH} />
    </Container>
  );
}
