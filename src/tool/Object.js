import Section2Icon1 from "../assets/Section2Icon1";
import Section2Icon2 from "../assets/Section2Icon2";
import Section2Icon3 from "../assets/Section2Icon3";
import Section2Rectangle1 from "../assets/Section2Rectangle1";
import Section2Rectangle2 from "../assets/Section2Rectangle2";
import Section2Rectangle3 from "../assets/Section2Rectangle3";
import Section3Picture1 from "../img/Section3Picture1.png";
import Section3Picture2 from "../img/Section3Picture2.png";
import Section3Picture3 from "../img/Section3Picture3.png";
import Section4Vector1 from "../assets/Section4Vector1";
import Section4Img from "../img/Section4Img.png";
import Section5Icon1 from "../assets/Section5Icon1";
import Section5Icon2 from "../assets/Section5Icon2";
import Section5Icon3 from "../assets/Section5Icon3";
import Section5Icon4 from "../assets/Section5Icon4";
import Section5Icon5 from "../assets/Section5Icon5";
import Section5Img1 from "../img/RalphEdwardsPP.png";
import Section5Img2 from "../img/HellenJummyPP.png";
import Section5Img3 from "../img/HellenaJohnPP.png";
import Section5Img4 from "../img/DavidOshodiPP.png";
import Section5Img5 from "../img/CharoletteHanlinPP.png";
import Section6Img from "../img/Section6Img.png";
import Section7Img from "../img/Section7Img.png";
import SearchIcon from "./../assets/Search";
import ShieldIcon from "./../assets/ShieldCheck";
import RocketIcon from "./../assets/Rocket";
import ScreenIcon from "./../assets/Screen";
import PodcastIcon from "./../assets/Podcast";
import SettingsIcon from "./../assets/Settings";
import GooglePlay from "./../assets/GooglePlay";
import AppStore from "./../assets/AppStore";
import Youtube from "./../assets/Youtube";
import Facebook from "./../assets/Facebook";
import Twitter from "./../assets/Twitter";
import Instagram from "./../assets/Instagram";
import Linkedin from "./../assets/Linkedin";
import World from "../assets/World";

const Object = {
  Navbar: ["Products", "Solutions", "Pricing", "Resources", "Log In"],
  Section1: {
    title: "Collectible Sneakers",
    content:
      "Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.",
  },
  Section2: [
    {
      title: "Nibh viverra",
      content:
        "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.",
      icon: <Section2Icon1 />,
      rectangle: <Section2Rectangle1 />,
    },

    {
      title: "Cursus amet",
      content:
        "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.",
      icon: <Section2Icon2 />,
      rectangle: <Section2Rectangle2 />,
    },
    {
      title: "Ipsum fermentum",
      content:
        "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.",
      icon: <Section2Icon3 />,
      rectangle: <Section2Rectangle3 />,
    },
  ],
  Section3: {
    title: "The best of the best",
    boxes: [
      {
        title: "Title",
        img: Section3Picture1,
        content:
          "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
        buttonText: "Buy Now",
      },
      {
        title: "Title",
        img: Section3Picture2,
        content:
          "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
        buttonText: "Buy Now",
      },
      {
        title: "Title",
        img: Section3Picture3,
        content:
          "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
        buttonText: "Buy Now",
      },
    ],
  },
  Section4: {
    title: "Why join us",
    line: [
      "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
      "Tellus arcu sed consequat ac velit ut eu blandit.",
      "Ullamcorper ornare in et egestas dolor orci.",
    ],
    vector: <Section4Vector1 />,
    img: Section4Img,
  },
  Section5: {
    title: "Because they love us",
    boxes: [
      {
        icon: <Section5Icon1 />,
        title: "kontrastr",
        content:
          "Amet morbi enim sodales quis dui, in habitant pharetra. Risus id fringilla sed adipiscing volutpat sit varius turpis. Sed pretium se.",
        img: Section5Img1,
        name: "Ralph Edwards",
        job: "Product Designer",
      },
      {
        icon: <Section5Icon2 />,
        title: "Zoomerr",
        content:
          "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
        img: Section5Img2,
        name: "Hellen Jummy",
        job: "Team Lead",
      },
      {
        icon: <Section5Icon3 />,
        title: "SHELLS",
        content:
          "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.",
        img: Section5Img3,
        name: "Hellena John",
        job: "Co-founder",
      },
      {
        icon: <Section5Icon4 />,
        title: "ArtVenue",
        content:
          "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.",
        img: Section5Img4,
        name: "David Oshodi",
        job: "Manager",
      },
      {
        icon: <Section5Icon5 />,
        title: "WAVES",
        content:
          "Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque.",
        img: Section5Img5,
        name: "Charolette Hanlin",
        job: "CEO",
      },
    ],
    settings: {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,

      responsive: [
        {
          breakpoint: 920,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 519,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
      ],
    },
  },
  Section6: {
    title: "Grow your collection",
    content:
      "Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames sit rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat proin neque placerat at bibendum quam tellus.",
    sidebar: [
      {
        icon: <SearchIcon />,
        title: "Bibendum tellus",
      },
      {
        icon: <ShieldIcon />,
        title: "Cras eget",
      },
      {
        icon: <RocketIcon />,
        title: "Dolor pharetra",
      },
      {
        icon: <ScreenIcon />,
        title: "Amet, fringilla",
      },
      {
        icon: <PodcastIcon />,
        title: "Amet nibh",
      },
      {
        icon: <SettingsIcon />,
        title: "Sed velit",
      },
    ],
    img: Section6Img,
  },
  Section7: {
    title: "11,658,467",
    content: "Shoes Collected",
    img: Section7Img,
  },
  Footer: {
    sections: [
      {
        title: "Product",
        list: ["Pricing", "Overview", "Browse", "Accessibility", "Five"],
      },
      {
        title: "Solutions",
        list: [
          "Brainstorming",
          "Ideation",
          "Wireframing",
          "Research",
          "Design",
        ],
      },
      {
        title: "Support",
        list: [
          "Contact Us",
          "Developers",
          "Documentation",
          "Integrations",
          "Reports",
        ],
      },
    ],
    buttons: {
      AppStore: <AppStore />,
      GooglePlay: <GooglePlay />,
    },
    Icons: [
      <Youtube />,
      <Facebook />,
      <Twitter />,
      <Instagram />,
      <Linkedin />,
    ],
    Info: [
      { title: "Terms" },
      { title: "Privacy" },
      { title: "Contact" },
      { title: "EN", icon: <World /> },
    ],
  },
};
export default Object;
