import Link from 'next/link';

export default function ChangelogModalPage() {
  return (
    <div>
      ChangelogModalPage
      <Link href='/profile' className='text-blue-500 w-full' replace>
        Profile
      </Link>
      <Link href='/setting' className='text-blue-500 w-full' replace>
        Setting
      </Link>
    </div>
  );
}
