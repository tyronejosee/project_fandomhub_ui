import Link from "next/link";

const footerItems = [
  {
    path: '/about',
    title: 'About',
  },
  {
    path: '/support',
    title: 'Support',
  },
  {
    path: '/advertising',
    title: 'Advertising',
  },
  {
    path: '/faq',
    title: 'FAQ',
  },
  {
    path: '/terms',
    title: 'Terms',
  },
  {
    path: '/privacy',
    title: 'Privacy',
  },
  {
    path: '/cookie',
    title: 'Cookie',
  },
  {
    path: '/sitemap',
    title: 'Sitemap',
  },
]

export const Footer = () => {
  return (
    <footer className="mt-auto">
      <div className="w-full mx-auto border-t border-neutral-200 dark:border-neutral-800">
        <div className="sm:flex sm:items-center sm:justify-center border-b border-neutral-100 dark:border-neutral-800 py-4">
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            {
              footerItems.map(item => (
                <li key={item.path}>
                  <Link href={item.path} className="hover:underline me-4 md:me-6">
                    {item.title}
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="py-4">
          <span className="block text-xs text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a
              className="hover:underline"
              href="https://github.com/tyronejosee/project_fandomhub_ui"
              target="_blank"
              rel="noopener noreferrer"
            >
              FandomHub
            </a>{" "}
            - This code is open source.
          </span>
          <span className="block text-xs text-gray-500 sm:text-center dark:text-gray-400">
            Made with ❤️ by{" "}
            <a
              className="hover:underline"
              href="https://github.com/tyronejosee"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tyrone Jose
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}

