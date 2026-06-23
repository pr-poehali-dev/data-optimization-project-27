export function VkBanner() {
  return (
    <section className="py-12 border-b border-border">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center gap-4">
        <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase">Мы в ВКонтакте</p>
        <p className="text-foreground/70 text-sm text-center max-w-sm">
          Следите за нашими проектами, фото работ и новостями в ВКонтакте
        </p>
        <a
          href="https://vk.ru/anton.shev"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-[#0077FF] text-white font-medium text-sm hover:bg-[#0065db] transition-colors duration-200"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.523-2.049-1.712-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.558c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4 8.408 4 7.932c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.204.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.15-3.574 2.15-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.049.17.49-.085.745-.576.745z"/>
          </svg>
          Открыть страницу ВКонтакте
        </a>
      </div>
    </section>
  )
}
