import mice from './mice';
import keyboards from './keyboards';
import monitors from './monitors';
import microphones from './microphones';
import headphones from './headphones';
import phones from './phones';

export const category = [
    {
        text: "Монітори",
        link: "/category/monitors",
        data: monitors,
    },
    {
        text: "Миші",
        link: "/category/mice",
        data: mice,
    },
    {
        text: "Клавіатури",
        link: "/category/keyboards",
        data: keyboards,
    },
    {
        text: "Мікрофони",
        link: "/category/microphones",
        data: microphones,
    },
    {
        text: "Навушники",
        link: "/category/headphones",
        data: headphones,
    },
    {
        text: "Телефони",
        link: "/category/phones",
        data: phones,
    }
];
export { mice, keyboards, monitors, microphones, headphones, phones };
export default category;
export const popularDevices = [
    {
        img: "assets/monitor1.png",
        text: "Монітор 23.5' Samsung Curved LS24C366",
    },
    {
        img: "assets/monitor2.png",
        text: "Монітор 27' MSI Optix G27CQ4 QHD VA Curved",
    },    {
        img: "assets/monitor3.png",
        text: "Монітор 23.8' Asus VG249QL3A Full HD",
    },    {
        img: "assets/monitor4.png",
        text: "Монітор 27' Acer EK271EBI IPS FHD",
    },    {
        img: "assets/monitor5.png",
        text: "Монітор 27' Samsung Odyssey AG50 S27AG502NI",
    },
];
