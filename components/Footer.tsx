import Link from "next/link";

const socialData = [
  {
    name: "Github",
    url: "https://github.com/thuee-mong-marma"
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/thuee-mong-sing-520127220/"
  },
  {
    name: "Repository",
    url: "https://github.com/thuee-mong-marma/pokedex-next"
  }
]

const Footer = () => {
  return (
    <footer className="w-full py-4 border-t border-neutral-500 bg-white text-black">
      <div className="max-w-6xl mx-auto flex flex-col gap-4 md:gap-0 md:flex-row items-center justify-between">
        <p className="text-xl font-medium">Made with &#10084; by Mong</p>
        <ul className="flex items-center gap-4">
          {socialData.map((social) => (
            <li key={social.name} className="font-medium hover:underline">
              <Link href={social.url} target="_blank" rel="noopener noreferrer">
                {social.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
