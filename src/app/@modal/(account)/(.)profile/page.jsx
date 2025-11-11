import Link from 'next/link';

export default function ProfileModalPage() {
  return (
    <div>
      ProfileModalPage
      <Link href='/setting' className='text-blue-500 w-full' replace>
        Setting
      </Link>
      <Link href='/changelog' className='text-blue-500 w-full' replace>
        Changelog
      </Link>
    </div>
  );
}
