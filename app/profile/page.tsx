import { authConfig } from '@/configs/auth';
import { getServerSession } from 'next-auth/next';

import Image from 'next/image';

export default async function Profile() {
  const session = await getServerSession(authConfig);

  return (
    <div className="profile-block">
      <h1>{session?.user?.name}</h1>
      {session?.user?.image && (
        <Image
          src={session.user.image}
          alt="avatar"
          width={100}
          height={100}
          className="img"
        />
      )}
    </div>
  );
}
