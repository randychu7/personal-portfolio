
import Progress from './progress';

export default function BackLanguages() {
  return (
    <div className='p-2 w-full flex font-bold flex-col'>
      <h2 className='pb-1 pt-2'>Java</h2>
      <Progress value={80} />
      <h2 className='pb-1 pt-2'>Spring Boot</h2>
      <Progress value={70} />
      <h2 className='pb-1 pt-2'>Node</h2>
      <Progress value={40} />
      <h2 className='pb-1 pt-2'>MySQL</h2>
      <Progress value={80} />
      <h2 className='pb-1 pt-2'>ThymeLeaf</h2>
      <Progress value={70} />
    </div>
  );
}