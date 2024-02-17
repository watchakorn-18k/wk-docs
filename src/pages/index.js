import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="bg-base-100 h-screen">
      <div className="container mx-auto py-24 ">
        <h1 className="text-4xl font-bold text-white text-center ">{siteConfig.title}</h1>
        <p className="text-xl py-6 text-white text-center ">{siteConfig.tagline}</p>

        <div className="flex flex-col gap-6 justify-center items-center">
          <div className="mockup-code w-96">
            <pre data-prefix="$" className="bg-base-300 rounded-sm"><code>python hello.py</code></pre>
            <pre data-prefix=">" className="text-success bg-base-300 rounded-sm"><code>Hi Bro!</code></pre>
            <pre data-prefix=">" className="bg-base-300 rounded-sm"><code>I'm watchakorn..|</code></pre>
          </div>
          <Link
            className="bg-base-300 rounded-md px-4 py-2 w-96 text-center hover:bg-base-200"
            to="/tutorials"
          >
            Get Started
          </Link>
        </div>

      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hi `}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />

    </Layout>
  );
}
