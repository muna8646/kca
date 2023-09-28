import { Typography } from "@material-tailwind/react";

const SITEMAP = [
  {
    title: "Company",
    links: ["About Us", "Careers", "Our Team", "Projects"],
  },
  {
    title: "Help Center",
    links: ["Discord", "Twitter", "GitHub", "Contact Us"],
  },
  {
    title: "Resources",
    links: ["Blog", "Newsletter", "Free Products", "Affiliate Program"],
  },
  {
    title: "Products",
    links: ["Templates", "UI Kits", "Icons", "Mockups"],
  },
];

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
      <footer className="relative w-full">
        <div className="mx-auto w-full max-w-7xl px-8">
          <div className="mx-auto grid w-full grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
            {SITEMAP.map(({ title, links }, key) => (
                <div key={key} className="w-full">
                  <Typography
                      tag="p"
                      color="blue-gray"
                      className="mb-4 font-bold uppercase opacity-50"
                  >
                    {title}
                  </Typography>
                  <ul className="space-y-1">
                    {links.map((link, key) => (
                        <Typography key={key} tag="li" color="blue-gray" className="font-normal">
                          <a
                              href="#"
                              className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                          >
                            {link}
                          </a>
                        </Typography>
                    ))}
                  </ul>
                </div>
            ))}
          </div>
          <div className="flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
            <Typography
                tag="p"
                className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
            >
              &copy; {currentYear} <a href="https://material-tailwind.com/">Esipil tech hub</a>. All
              Rights Reserved.
            </Typography>
            <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
              <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  {/* ... SVG path ... */}
                </svg>
              </Typography>
              {/* Repeat for other social icons */}
            </div>
          </div>
        </div>
      </footer>
  );
}
