import { Code, Container } from '@mantine/core';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import CodeBlock from '~/components/CodeBlock';
import PageNavigation from '~/components/PageNavigation';
import PageText from '~/components/PageText';
import PageTitle from '~/components/PageTitle';
import CustomContentExample from '~/examples/CustomContentExample';
import readCodeExample from '~/lib/readCodeExample';

const PATH = 'examples/custom-content';

export const getStaticProps: GetStaticProps<{ code: string }> = async () => ({
  props: { code: (await readCodeExample('examples/CustomContentExample.tsx')) as string },
});

export default function Page({ code }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container>
      <PageTitle of={PATH} />
      <PageText>
        An item without an <Code>onClick</Code> handler will be rendered as a divider, like so:
      </PageText>
      <CodeBlock language="typescript" content={code} />
      <PageText>Right-click on the image to trigger the context menu:</PageText>
      <CustomContentExample />
      <PageNavigation of={PATH} />
    </Container>
  );
}
