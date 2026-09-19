import { Cloud, Code2, Smartphone } from "lucide-react";
import { FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services", hasMenu: true },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export const services = [
  { slug: "web-development", title: "Web Development", blurb: "Responsive, high-performance websites tailored to your unique brand needs.", icon: Code2 },
  { slug: "mobile-development", title: "Mobile Development", blurb: "iOS and Android apps people enjoy using.", icon: Smartphone },
  { slug: "digital-marketing", title: "Digital Marketing", blurb: "Strategic online marketing to boost your brand visibility.", icon: Cloud },
  { slug: "cloud-hosting", title: "Cloud Hosting", blurb: "Scalable and reliable cloud infrastructure for your business.", icon: Cloud },
];

export const companyLinks = [
  { to: "/about", label: "About us" },
  { to: "/about#why-us", label: "Why Optimum Sync" },
  { to: "/about#case-studies", label: "Case studies" },
  { to: "/blog", label: "Blog" },
  { to: "/contact#faq", label: "FAQ" },
];

export const contact = {
  email: "office@optimumsync.com",
  phone: "+91 99803 36484",
  address: "#01, 2nd floor, NIE StartUp and Incubation Center, NIE College South Campus, Mananthavadi Road, Mysuru 570008",
  mapQuery: "NIE StartUp and Incubation Center, Mananthavadi Road, Mysuru 570008",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("NIE StartUp and Incubation Center, Mananthavadi Road, Mysuru 570008"),
};

export const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/optimum-sync/posts/", icon: FaLinkedinIn },
  { label: "X (Twitter)", href: "https://x.com/OptimumSync", icon: FaXTwitter },
  { label: "Instagram", href: "https://www.instagram.com/optimum_sync", icon: FaInstagram },
];
