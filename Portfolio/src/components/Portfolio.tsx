import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';

const tools = [
  { name: 'JavaScript', badge:
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
},
  { name: 'Java', badge: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg' },
  { name: 'Spring', badge: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg' },
  { name: 'Tailwind CSS', badge: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
  { name: 'React', badge: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'HTML', badge: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', badge: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'MySQL', badge: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg' },
  { name: 'TypeScript', badge: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
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
      tools[0], tools[1], tools[2], tools[3], tools[5], tools[6], tools[7]
    ],
  },
  {
    id: 2,
    title: 'Tesla Ad Lister',
    description: 'Ad Lister that allows users to post and view ads',
    image: './images/Tesla.png',
    category: ['all', 'full stack'],
    link: 'https://github.com/randychu7/java-adlister-project',
    tools: [
        tools[0], tools[1], tools[2], tools[3], tools[5], tools[6], tools[7]
    ],
  },
  {
    id: 3,
    title: 'Movie App',
    description: 'Movie App that allows users to search for movies and view details',
    image: 'https://picsum.photos/200/300',
    category: ['all', 'web'],
    link: 'https://github.com/randychu7/movie-app',
    tools: [
        tools[0], tools[3], tools[5], tools[6]

    ],
  },
  {
    id: 4,
    title: 'Weather App',
    description: 'Weather App that allows users to search for weather by city',
    image: 'https://picsum.photos/200/300',
    category: ['all', 'web'],
    link: 'https://github.com/randychu7/Weather-map-app',
    tools: [
        tools[0], tools[5], tools[6]
    ],
  },
  {
    id: 5,
    title: 'Coffee Shop',
    description: 'Coffee Shop App that allows users to order coffee',
    image: 'https://picsum.photos/200/300',
    category: ['all', 'web'],
    link: 'https://github.com/randychu7/Coffee-Project',
    tools: [
        tools[0], tools[5], tools[6]
    ],
  },
  {
    id: 6,
    title: 'React Food App',
    description: 'Food App that allows users to add to a cart',
    image: './images/budget.png',
    category: ['all', 'web'],
    link: 'https://github.com/randychu7/react-budget-tool',
    tools: [
        tools[0], tools[6], tools[4]
    ],
  },
];

export default function PortfolioCards({ activeTab }) {
    const filteredCards = activeTab === 'all' ? cards : cards.filter((card) => card.category.includes(activeTab));


  
    return (
      <div className="grid grid-cols-1 mt-10 md:grid-cols-2 xl:grid-cols-3 gap-7 p-4">
        {filteredCards.map((card) => (
          <div key={card.id} className="border-[1px] dark:border-gray-700 shadow-lg rounded-2xl">
            <div className="w-full h-[20em] flex justify-center pt-2 p-4 pb-2">
              <img className="w-full mt-4 h-full object-fit rounded-2xl" src={card.image} alt={card.title} />
            </div>


            <div className=" h-[140px] pt-7 mb-5 grid grid-cols-4 gap-1">
                {card.tools.map((tool) => (
                    <div key={tool.name} className="flex p-2 items-center justify-center">
                    <img
                        src={tool.badge}
                        className="w-[40px]"
                        alt={tool.name}
                    />
                    </div>
                ))}
               
            </div>

        
            <div className="p-4 pt-5">
              <h4 className="dark:text-white text-2xl font-bold">{card.title}</h4>
            </div>
  
            <div className="p-4 pt-0  dark:text-gray-300">
              <p>{card.description}</p>

              <div className="flex justify-between mb-4 mt-4">
                <div className="flex">
                  <a href={card.link} target='blank'>
                    <GitHubIcon
                      style={{ width: '40px', height: '40px' }}
                      className="m-4 dark:text-white dark:hover:text-gray-200 hover:cursor-pointer"
                    />
                  </a>
  
                  {card.live ? (
                    <a href={card.live} target='blank'>
                      <WebIcon
                        style={{ width: '40px', height: '40px' }}
                        className="m-4 dark:text-white dark:hover:text-gray-200 hover:cursor-pointer"
                      />
                    </a>
                  ) : null}
  
                </div>
              </div>
  
        
                
              
            </div>
          </div>
        ))}
      </div>
    );
  }
  