import { Code, Container } from '@mantine/core';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import CodeBlock from '~/components/CodeBlock';
import PageNavigation from '~/components/PageNavigation';
import PageText from '~/components/PageText';
import PageTitle from '~/components/PageTitle';
import ImperativeHidingExample from '~/examples/ImperativeHidingExample';
import readCodeExample from '~/lib/readCodeExample';

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
        However, you can also hide the context menu <em>imperatively</em> by destructuring the result returned by the{' '}
        <Code>useContextMenu</Code> hook into:
      </PageText>
      <ul>
        <li>
          <Code>showContextMenu</Code> → a function that can be used to show the context menu;
        </li>
        <li>
          <Code>hideContextMenu</Code> → a function that can be used to hide the context menu;
        </li>
        <li>
          <Code>isContextMenuVisible</Code> → a <Code>boolean</Code> representing whether the context menu is currently
          visible or not.
        </li>
      </ul>
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
