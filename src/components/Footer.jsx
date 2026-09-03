export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="section-container flex flex-wrap justify-between gap-3 text-sm text-ink-900/40">
        <span>© {new Date().getFullYear()} Danica Rose Salve. Built &amp; deployed with care.</span>
        <a href="#top" className="hover:text-ink-900">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
