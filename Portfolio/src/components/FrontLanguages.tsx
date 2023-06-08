import Progress from './progress';

export default function FrontLanguages() {
  return (
    <div className='p-2 w-full flex font-bold flex-col'>
      <h2 className='pb-1 pt-2'>JavaScript</h2>
      <Progress value={90} />
      <h2 className='pb-1 pt-2'>TypeScript</h2>
      <Progress value={40} />
      <h2 className='pb-1 pt-2'>React</h2>
      <Progress value={55} />
      <h2 className='pb-1 pt-2'>HTML</h2>
      <Progress value={96} />
      <h2 className='pb-1 pt-2'>CSS</h2>
      <Progress value={90} />
      <h2 className='pb-1 pt-2'>Tailwind</h2>
      <Progress value={100} />
    </div>
  );
}