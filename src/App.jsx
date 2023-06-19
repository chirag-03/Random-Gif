import Random from './components/Random';
import Tag from './components/Tag';


export default function App() {
  return (
    <div className="background w-full h-screen flex flex-col relative items-center overflow-x-hidden">
      <h1 className='bg-white rounded-lg text-center w-11/12 mt-[40px] px-10 py-2 text-4xl font-bold'>RANDOM GIFS</h1>
      <div className='flex flex-col w-full mt-[40px] items-center gap-y-10'>
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}
