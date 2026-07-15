import type {ReactNode} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import CodeBlock from '@theme/CodeBlock';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

function CtaButtons() {
  return (
    <div className={styles.heroButtons}>
      <Link className={clsx('button button--lg', styles.ctaPrimary)} to="/docs/">
        Get Started
      </Link>
      <Link
        className={clsx('button button--lg', styles.ctaSecondary)}
        href="https://github.com/NutshellEngineering/markdown-query">
        View on GitHub
      </Link>
    </div>
  );
}

function TerminalIcon() {
  return (
    <svg
      className={styles.titleIcon}
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M12 19h8" />
      <path d="m4 17 6-6-6-6" />
    </svg>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroTitleRow}>
          <TerminalIcon />
          <h1 className={styles.heroTitle}>mq</h1>
        </div>
        <p className={styles.heroTagline}>{siteConfig.tagline}</p>
        <CtaButtons />
      </div>
    </header>
  );
}

function MarkdownEverywhereSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col col--8">
            <p className={styles.eyebrow}>Why mq</p>
            <h2 className={styles.sectionTitle}>Markdown is everywhere now</h2>
            <p className={styles.sectionLead}>
              LLMs read and write markdown constantly: chat replies,
              generated docs, README files, agent output, tool results. It's
              become the default format for anything a model touches, and
              markdown isn't just a string. It's a tree, with headings,
              lists, links, and code spans nested inside each other.
              Traditional tools can't cut it. Grep breaks the moment a match spans two lines. Parsing
              it by hand gets old fast. mq gives markdown the same kind of
              query tool that JSON has had for years.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

type Example = {
  heading: string;
  blurb: string;
  command: string;
  output: string;
  moreLink?: string;
};

const examples: Example[] = [
  {
    heading: 'Just a list of links',
    blurb:
      "Every link in the document, reduced to its bare URL. Combine the `link` selector with the `.destination` attribute and skip the surrounding prose entirely.",
    command: "mq --raw 'link.destination' doc.md",
    output:
      'https://example.com/compost-bin\n/guides/tap\n/guides/paint\n/guides/compost-bin\n/guides/fence\n/guides/weekend-projects',
  },
  {
    heading: 'Show the top-level headings',
    blurb:
      "`heading1` only matches level-one headings, so you can pull the top of a document's outline without wading through every subsection underneath it.",
    command: "mq 'heading1' doc.md",
    output: '# Weekend Projects',
  },
  {
    heading: 'See the whole document as a tree',
    blurb:
      "Sometimes you just want to see how a document is put together before writing any query at all. `tree` prints the full structure, node by node, down to the attributes and text on each one.",
    command: 'mq tree doc.md',
    output:
      'document\n├── heading1\n│   ├── @level: "1"\n│   └── text: "Weekend Projects"\n├── paragraph\n│   ├── text: "A short list of "\n│   ├── strong\n│   │   └── text: "home improvement"\n│   └── text: " tasks, roughly in order."',
    moreLink: '/docs/examples',
  },
];

function ExamplesSection() {
  return (
    <section className={clsx(styles.section, styles.sectionAlt)}>
      <div className="container">
        <div className="row">
          <div className="col col--8">
            <p className={styles.eyebrow}>See it in action</p>
            <h2 className={styles.sectionTitle}>Examples</h2>
            <p className={styles.sectionLead}>
              Three real commands against one sample document, for the kind
              of questions that come up once you've got markdown docs piling
              up.
            </p>
          </div>
        </div>
        <div className={styles.exampleGrid}>
          {examples.map((example) => (
            <div className={styles.exampleCard} key={example.command}>
              <h3 className={styles.exampleHeading}>{example.heading}</h3>
              <p className={styles.exampleBlurb}>{example.blurb}</p>
              <CodeBlock language="bash">{example.command}</CodeBlock>
              <CodeBlock language="text">{example.output}</CodeBlock>
              {example.moreLink && (
                <Link to={example.moreLink}>See the full example →</Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function JqHeritageSection() {
  return (
    <section className={clsx(styles.section, styles.heritageSection)}>
      <div className="container">
        <div className="row">
          <div className="col col--8">
            <p className={styles.eyebrowInverse}>Lineage</p>
            <h2 className={styles.sectionTitleInverse}>
              Built in jq's image
            </h2>
            <p className={styles.sectionLeadInverse}>
              mq is like jq for markdown. jq proved that a small, composable,
              path-based query language is the right way to work with
              structured plain text from the command line: chainable
              selectors, predictable output, easy to pipe into whatever's
              next. mq does the same thing for markdown's document tree
              instead of JSON's.
            </p>
            <CtaButtons />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <MarkdownEverywhereSection />
        <ExamplesSection />
        <JqHeritageSection />
      </main>
    </Layout>
  );
}
