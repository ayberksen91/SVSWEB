export default function App() {
  return (
    <main className="app-shell">
      <section className="status-panel" aria-label="Platform status">
        <p className="eyebrow">Phase 1</p>
        <h1>Architecture foundation in progress</h1>
        <p>
          This frontend shell is intentionally minimal. The public website will be built after the
          platform foundation, CMS, authentication, media system, and deployment model are in place.
        </p>
        <ul>
          <li>Cloudflare Pages frontend hosting</li>
          <li>Pages Functions and Workers backend boundary</li>
          <li>D1 relational database</li>
          <li>R2 media storage and metadata model</li>
          <li>Protected admin dashboard and role model</li>
        </ul>
      </section>
    </main>
  );
}
