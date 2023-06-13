import '../CSS/index.css'

export default function Tabs({ activeTab, onChangeTab }) {
    
  const handleTabChange = (tab) => {
    onChangeTab(tab);
  };

  return (
    <div className="w-full grid grid-cols-3 fade-in-left">
      <div
        className="w-full flex h-[50px] items-center hover:cursor-pointer justify-center"
        onClick={() => handleTabChange('all')}
      >
        <div
          className={`flex w-[50%] h-full rounded-lg justify-center items-center dark:text-white ${
            activeTab === 'all' ? 'dark:bg-yellow-500 bg-violet-500 text-white' : ''
          }`}
        >
          <h3>All</h3>
        </div>
      </div>

      <div
        className="w-full flex h-[50px]  items-center hover:cursor-pointer justify-center"
        onClick={() => {
          handleTabChange('web');
        }}
      >
        <div
          className={`flex w-[50%] h-full rounded-lg justify-center items-center dark:text-white ${
            activeTab === 'web' ? 'dark:bg-yellow-500 bg-violet-500 text-white' : ''
          }`}
        >
          <h3>Web</h3>
        </div>
      </div>

      <div
        className="w-full flex h-[50px]  items-center hover:cursor-pointer justify-center"
        onClick={() => {
          handleTabChange('full stack');
        }}
      >
        <div
          className={`flex w-[50%] h-full rounded-lg justify-center items-center dark:text-white ${
            activeTab === 'full stack' ? 'dark:bg-yellow-500 bg-violet-500 text-white' : ''
          }`}
        >
          <h3>Full Stack</h3>
        </div>
      </div>
    </div>
  );
}
