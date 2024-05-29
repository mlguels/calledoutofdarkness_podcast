import { Lora } from "next/font/google";

export const guests = [
  {
    id: 1,
    name: "Miguel Rodriguez",
    desc: "Man of God",
    date: 1,
    subject: "Fear of the Lord",
    img: "/images/placeholder-headshot.png",
  },
  {
    id: 2,
    name: "Mandie Mass",
    desc: "Brave Girls Gather Host",
    date: 2,
    subject: "Seeking God",
    img: "/images/placeholder-headshot.png",
  },
  {
    id: 1,
    name: "Jasmine",
    desc: "Women of God",
    date: 1,
    subject: "Called out of Darkness",
    img: "/images/placeholder-headshot.png",
  },
  {
    id: 1,
    name: "Isi",
    desc: "Women of God",
    date: 4,
    subject: "Wisdom",
    img: "/images/placeholder-headshot.png",
  },
];

export const socialLinks = [
  {
    link: "https://www.instagram.com/calledoutofdarknesspodcast/?igsh=MTJ1ZTQ0ajVsenVyaQ%3D%3D&utm_source=qr",
    icon: "/images/instagram.png",
  },
  {
    link: "https://www.youtube.com/@COODpodcast",
    icon: "/images/youtube.png",
  },
  {
    link: "https://podcasts.apple.com/us/podcast/called-out-of-darkness/id1748901451",
    icon: "/images/podcast.png",
  },
  {
    link: "https://podcasters.spotify.com/pod/show/calledoutofdarkness",
    icon: "/images/spotify.png",
  },
];

export const lora = Lora({ subsets: ["latin"] });

export const navItems = [
  { name: "Home", link: "#home" },
  { name: "Latest Episode", link: "#episode1" },
  { name: "About Me", link: "#aboutme" },
  { name: "Prayer Request", link: "#request" },
];
