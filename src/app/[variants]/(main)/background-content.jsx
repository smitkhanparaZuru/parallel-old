'use client';

export function BackgroundContent({ path }) {
  if (path === '/dark/discover') {
    return (
      <div className='border-2 border-purple-500 p-4 rounded-lg w-full h-full'>
        <div className='mb-4'>
          <h1 className='text-2xl font-bold'>Discover</h1>
        </div>
        <div className='text-white'>Discover Page</div>
      </div>
    );
  }

  return (
    <div className='border-2 border-purple-500 p-4 rounded-lg w-full h-full'>
      <div className='mb-4'>
        <h1 className='text-2xl font-bold'>Chat</h1>
      </div>
      <div className='text-white'>Chat Page</div>
    </div>
  );
}
