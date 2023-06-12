import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';
import BuildIcon from '@mui/icons-material/Build';
import {useState} from 'react';

const tools = [
  { name: 'JavaScript', badge: 'https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E' },
  { name: 'Java', badge: 'https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white' },
  { name: 'Spring', badge: 'https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white' },
  { name: 'ThymeLeaf', badge: 'https://img.shields.io/badge/Thymeleaf-%23005C0F.svg?style=for-the-badge&logo=Thymeleaf&logoColor=white' },
  { name: 'Tailwind CSS', badge: 'https://img.shields.io/badge/Tailwind_CSS-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white' },
  { name: 'React', badge: 'https://img.shields.io/badge/React-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB' },
  { name: 'HTML', badge: 'https://img.shields.io/badge/HTML-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white' },
  { name: 'CSS', badge: 'https://img.shields.io/badge/CSS-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white' },
  { name: 'MySQL', badge: 'https://img.shields.io/badge/MySQL-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white' },
  { name: 'TypeScript', badge: 'https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white' },
];

const cards = [
  {
    id: 1,
    title: 'Furever',
    description: 'Social Media App for Pet Owners',
    image: './images/Furever.jpg',
    category: ['all', 'full stack'],
    link: 'https://github.com/so-ss-rc-lc-capstone/Furever',
    live: 'https://furever.space',
    tools: [
      tools[0], tools[1], tools[2], tools[3], tools[4], tools[6], tools[7], tools[8]
    ],
  },
  {
    id: 2,
    title: 'Tesla Ad Lister',
    description: 'Ad Lister that allows users to post and view ads',
    image: 'https://picsum.photos/200/300',
    category: ['all', 'full stack'],
    link: 'https://picsum.photos/200/300',
    tools: [
      tools[1].name, tools[2].name, tools[8].name, tools[3].name, tools[6].name, tools[7].name, tools[4].name, tools[0].name, tools[5].name
    ],
  },
  {
    id: 3,
    title: 'Movie App',
    description: 'Movie App that allows users to search for movies and view details',
    image: 'https://picsum.photos/200/300',
    category: ['all', 'web'],
    link: 'https://picsum.photos/200/300',
    tools: [
      tools[0].name, tools[6].name, tools[7].name, tools[4].name
    ],
  },
  {
    id: 4,
    title: 'Weather App',
    description: 'Weather App that allows users to search for weather by city',
    image: 'https://picsum.photos/200/300',
    category: ['all', 'web'],
    link: 'https://picsum.photos/200/300',
    tools: [
      tools[0].name, tools[6].name, tools[7].name, tools[4].name
    ],
  },
  {
    id: 5,
    title: 'Coffee Shop',
    description: 'Coffee Shop App that allows users to order coffee',
    image: 'https://picsum.photos/200/300',
    category: ['all', 'web'],
    link: 'https://picsum.photos/200/300',
    tools: [
      tools[0].name, tools[6].name, tools[7].name
    ],
  },
  {
    id: 6,
    title: 'React Food App',
    description: 'Food App that allows users to add to a cart',
    image: 'https://picsum.photos/200/300',
    category: ['all', 'web'],
    link: 'https://picsum.photos/200/300',
    tools: [
      tools[5].name, tools[0].name, tools[6].name, tools[7].name
    ],
  },
];

export default function PortfolioCards({ activeTab }) {
    const filteredCards = activeTab === 'all' ? cards : cards.filter((card) => card.category.includes(activeTab));
    const [activeCard, setActiveCard] = useState(null);
  
    const toggleTools = (cardId) => {
      setActiveCard(activeCard === cardId ? null : cardId); // Toggle the active card
    };
  
    return (
      <div className="grid grid-cols-1 mt-10 md:grid-cols-2 gap-7 p-4">
        {filteredCards.map((card) => (
          <div key={card.id} className="border-[1px] border-gray-700 shadow-lg rounded-2xl">
            <div className="w-full h-[20em] flex justify-center pt-2 p-4 pb-2">
              <img className="w-full mt-4 h-full object-cover rounded-2xl" src={card.image} alt={card.title} />
            </div>
            <div className="p-4 pt-5">
              <h4 className="dark:text-white text-2xl font-bold">{card.title}</h4>
            </div>
  
            <div className="p-4 pt-0 dark:text-gray-300">
              <p>{card.description}</p>
              <div className="flex justify-between">
                <div className="flex">
                  <a href={card.link}>
                    <GitHubIcon
                      style={{ width: '40px', height: '40px' }}
                      className="m-4 dark:text-white dark:hover:text-gray-200 hover:cursor-pointer"
                    />
                  </a>
  
                  {card.live ? (
                    <a href={card.live}>
                      <WebIcon
                        style={{ width: '40px', height: '40px' }}
                        className="m-4 dark:text-white dark:hover:text-gray-200 hover:cursor-pointer"
                      />
                    </a>
                  ) : null}
  
                  <div onClick={() => toggleTools(card.id)}>
                    <BuildIcon
                      style={{ width: '40px', height: '40px' }}
                      className="m-4 dark:text-white dark:hover:text-gray-200 hover:cursor-pointer"
                    />
                  </div>
                </div>
              </div>
  
              {activeCard === card.id && ( // Show the tools if the card is active
                <div className="w-full h-[140px] grid grid-cols-4">
                  {card.tools.map((tool) => (
                    <div key={tool.name} className="flex p-2 items-center justify-center">
                      <img
                        src={tool.badge}
                        className="w-[140px] h-7 m-1 object-cover"
                        alt={tool.name}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }
  