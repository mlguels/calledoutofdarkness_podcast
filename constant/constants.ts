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

export const bibleVerses = [
  {
    quote:
      '"For ye were sometimes darkness, but now are ye light in the Lord: walk as children of light"',
    name: "Ephisians 5:8",
  },
  {
    quote:
      '"Do not conform to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God’s will is—his good, pleasing and perfect will."',
    name: "Romans 12:2",
  },
  {
    quote:
      "“Come to me, all you who are weary and burdened, and I will give you rest. Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls. For my yoke is easy and my burden is light.”",
    name: "Mathew 11:28-30",
  },
];

("Matthew 21:22, 7:7, 7:24-27, ps.31:3,John 1:1-5, 1:14, 8:12,8:44, 3:5-7, 3:19-21,Ephesians 5:3-5, 5:14, Romans 12:2, 13:12-13, Colossians 3:8-10, Galatians 5:19-21, Philippians 2:15-16, Isaiah 58:6");
