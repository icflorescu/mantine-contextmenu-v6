import { Box, Code, Container } from '@mantine/core';
import { useWindowEvent } from '@mantine/hooks';
import { useEffect, useState } from 'react';
import ExternalLink from '~/components/ExternalLink';
import InternalLink from '~/components/InternalLink';
import PageNavigation from '~/components/PageNavigation';
import PageSubtitle from '~/components/PageSubtitle';
import PageText from '~/components/PageText';
import PageTitle from '~/components/PageTitle';
import { AUTHOR_LINK, MANTINE_DATATABLE_LINK, REPO_LINK } from '~/config';

const PATH = 'contribute-and-support';

const TWITTER_TEXT = encodeURIComponent('Check out the missing context-menu for Mantine UI applications!');
const TWITTER_URL = encodeURIComponent(REPO_LINK);
const TWITTER_HASHTAGS = encodeURIComponent('react,mantine,ui,contextmenu,frontend,opensource');

export default function Page() {
  const [contributorCols, setContributorCols] = useState(12);

  const adjustContributorCols = () => {
    setContributorCols(window.innerWidth < 400 ? 4 : window.innerWidth < 800 ? 8 : 12);
  };

  useWindowEvent('resize', adjustContributorCols);
  useEffect(adjustContributorCols, []);

  return (
    <Container>
      <PageTitle of={PATH} />
      <PageText>
        I’ve dedicated a sizeable amount of my own free time to build this project and{' '}
        <ExternalLink to={MANTINE_DATATABLE_LINK}>Mantine DataTable</ExternalLink> because:
        <ul>
          <li>
            I think <ExternalLink to="https://mantine.dev/">Mantine</ExternalLink> is currently the best React UI
            Framework; however people were{' '}
            <ExternalLink to="https://github.com/mantinedev/mantine/discussions/1049">asking</ExternalLink> in the
            community for a ContextMenu component;
          </li>
          <li>
            I’m a keen advocate of open-source and{' '}
            <ExternalLink to="https://medium.com/@icflorescu/open-source-capitalism-and-democracy-c71f025b6eba">
              I believe in its power to make our world a better place.
            </ExternalLink>
          </li>
        </ul>
      </PageText>
      <PageSubtitle value="Raising issues and asking for features" />
      <PageText>
        If you find a bug please don’t hesitate to{' '}
        <ExternalLink to={`${REPO_LINK}/issues`}>raise an issue</ExternalLink>.
        <br />
        If you have an idea about a new or missing feature, let’s discuss it{' '}
        <ExternalLink to={`${REPO_LINK}/discussions`}>here</ExternalLink>.
      </PageText>
      <PageText info>
        Be considerate when asking for a new feature!
        <br />
        Is it really something that would be useful for other poeple, or just an edge case?
      </PageText>
      <PageSubtitle value="Contributing" />
      <PageText>
        Better yet, if you’re willing to put your effort into it, coming up with a pull-request would be fantastic.
        <br />
        So many people <em>take open-source for granted</em>, but far fewer understand its true essence and are generous
        enough to contribute their own time and skills to a project they find useful.
      </PageText>
      <PageText info>
        New features are developed in the <Code>next</Code> branch.
        <br />
        If you want to implement a new feature or improve an existing one, make sure to also add an example page and/or
        alter the one(s) already referring to it. It’s not a feature if other people don’t know about it or don’t
        understand how to use it.
      </PageText>
      <PageSubtitle value="List of code contributors" />
      <Box my="xl">
        <ExternalLink to={`${REPO_LINK}/graphs/contributors-v6`}>
          <img
            src={`https://contrib.rocks/image?repo=icflorescu/mantine-contextmenu-v6&columns=${contributorCols}`}
            alt="Mantine ContextMenu contributors"
          />
        </ExternalLink>
      </Box>
      <PageSubtitle value="Sponsoring" />
      <PageText>
        As mentioned above, I’ve dedicated my own free time to build this project,{' '}
        <ExternalLink to={MANTINE_DATATABLE_LINK}>Mantine DataTable</ExternalLink> and other{' '}
        <ExternalLink to={AUTHOR_LINK}>open-source projects</ExternalLink>. I did it out of passion, but their
        maintenance requires a constant effort and passion alone doesn’t pay the bills. So, if you find{' '}
        <Code>Mantine ContextMenu</Code> useful and you want to support its development, you can do so by{' '}
        <ExternalLink to="https://github.com/sponsors/icflorescu">sponsoring my work</ExternalLink>.
      </PageText>
      <PageSubtitle value="Other means of support" />
      <PageText>
        If you find this project useful, it would help a lot if you could:
        <br />
        🙏{' '}
        <strong>
          <ExternalLink to={REPO_LINK}>star the repository</ExternalLink>
        </strong>
        <br />
        💕{' '}
        <ExternalLink
          to={`https://twitter.com/share?text=${TWITTER_TEXT}&url=${TWITTER_URL}&hashtags=${TWITTER_HASHTAGS}&via=icflorescu`}
        >
          spread the word
        </ExternalLink>
        <br />
        👍 <ExternalLink to="https://www.linkedin.com/in/icflorescu">endorse me on LinkedIn</ExternalLink>
        <br />
        or, better yet, <InternalLink to="/hire-the-author">hire my services</InternalLink>.
      </PageText>
      <PageSubtitle value="Why do repository stars matter" />
      <PageText>
        The more stars this repository gets, the more visibility it gains among the Mantine users community. The more
        users it gets, the more chances that some of those users will become active code contributors willing to put
        their effort into bringing new features to life and/or fixing bugs.
        <br />
        As the repository gain awareness, my chances of getting hired to work on Mantine-based projects will increase,
        which in turn will help maintain my vested interest in keeping the project alive.
      </PageText>
      <PageText>
        Thank you for your support,
        <br />
        <ExternalLink to={AUTHOR_LINK}>Ionut-Cristian Florescu</ExternalLink>
      </PageText>
      <PageNavigation of={PATH} />
    </Container>
  );
}
