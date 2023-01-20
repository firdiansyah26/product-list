export default function About() {
  return (
    <div className="top-12 relative flex flex-col p-3 gap-3">
      <span className="text-2xl font-bold text-center">About This Project</span>
      <div className="flex flex-col gap-3">
        <div className="grid grid-cols-[150px_12px_1fr]">
          <span>Node Version</span>
          <span>:</span>
          <span className="font-semibold">16.13.1</span>
        </div>
        <div className="grid grid-cols-[150px_12px_1fr]">
          <span>NPM Version</span>
          <span>:</span>
          <span className="font-semibold">8.1.2</span>
        </div>
        <div className="grid grid-cols-[150px_12px_1fr]">
          <span>Yarn Version</span>
          <span>:</span>
          <span className="font-semibold">1.22.19</span>
        </div>
        <div className="grid grid-cols-[150px_12px_1fr]">
          <span>Typescript Version</span>
          <span>:</span>
          <span className="font-semibold">4.9.4</span>
        </div>
        <div className="grid grid-cols-[150px_12px_1fr]">
          <span>NextJs Version</span>
          <span>:</span>
          <span className="font-semibold">13.1.2</span>
        </div>
        <div className="grid grid-cols-[150px_12px_1fr]">
          <span>React Version</span>
          <span>:</span>
          <span className="font-semibold">18.2.0</span>
        </div>
        <div className="grid grid-cols-[150px_12px_1fr]">
          <span>LinkediIn</span>
          <span>:</span>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/muhammad-fiqih-firdiansyah/"
          >
            LinkedIn
          </a>
        </div>
        <div className="grid grid-cols-[150px_12px_1fr]">
          <span>GitHub</span>
          <span>:</span>
          <a
            target="_blank"
            href="https://github.com/firdiansyah26/product-list"
          >
            GitHub
          </a>
        </div>
        <div className="grid grid-cols-[150px_12px_1fr]">
          <span>Author</span>
          <span>:</span>
          <span className="font-semibold">Muhammad Fiqih Firdiansyah</span>
        </div>
      </div>
    </div>
  );
}
