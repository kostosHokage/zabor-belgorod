import Link from 'next/link';

const Breadcrumbs = ({ pathSegments = [] }) => {
  return (
    <nav style={{ marginBottom: 28 }} aria-label="breadcrumbs">
      <ol
        style={{
          display: 'flex',
          alignItems: 'center',
          color: '#686868',
        }}
      >
        <li>
          <Link href="/">Главная</Link>
        </li>
        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments
            .slice(0, index + 1)
            .map((s) => s.toLowerCase().replace(/ /g, '-'))
            .join('/')}`;
          const isLast = index === pathSegments.length - 1;
          return (
            <li key={href} style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ margin: '0 12px' }}>→</span>
              {isLast ? (
                <span style={{ color: '#0C4C01' }}>{segment}</span>
              ) : (
                <Link href={href}>{segment}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
