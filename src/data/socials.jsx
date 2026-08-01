import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa6";

// Shared by Contact (white tiles) and Footer (bare icons) so the URLs live in
// one place. Lucide has no TikTok mark and Simple Icons no longer ships
// LinkedIn, so the brand glyphs come from fa6 — one set keeps them consistent.
// GitHub is the fa6 mark here rather than assets/github.svg (still used by
// Skills): as a font icon it inherits currentColor, which the footer's bare
// icons need to stay visible in dark mode and to hover purple.
export const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/Nokiieee/",
    Icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/enoch-mendoza-1150a6374/",
    Icon: FaLinkedinIn,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/denenoch.mendoza",
    Icon: FaFacebookF,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/noki_mendoza/",
    Icon: FaInstagram,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCs56NgHc9TsFiD0GA8eISMg",
    Icon: FaYoutube,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@nokiieee_",
    Icon: FaTiktok,
  },
];
