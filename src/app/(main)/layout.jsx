import Link from 'next/link';

export default function MainLayout({ children, modal }) {
  return (
    <div>
      <div>
        <h1>Main</h1>
      </div>
      <Link href='/profile' className='text-blue-500 w-full'>
        Profile
      </Link>
      <Link href='/setting' className='text-blue-500 w-full'>
        Setting
      </Link>
      <Link href='/chat' className='text-blue-500 w-full'>
        Chat
      </Link>
      <Link href='/discover' className='text-blue-500 w-full'>
        Discover
      </Link>
      <Link href='/changelog' className='text-blue-500 w-full'>
        Changelog
      </Link>
      {children}
      {/* {modal} */}
      {/* <div id='modal-root'></div> */}
    </div>
  );
}
