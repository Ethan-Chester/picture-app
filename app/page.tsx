import Gallery from './Gallery';

const imageArray = [
  'pictures/food1.jpeg',
  'pictures/food2.jpeg',
  'pictures/food3.jpeg',
];

export default function Home() {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-center text-7xl font-bold m-8'>Food Gallery</h1>
      <Gallery images={imageArray} />
    </div>
  );
}
