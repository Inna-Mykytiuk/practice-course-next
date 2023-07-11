'use client';
// require('dotenv').config();

import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';

const GoogleButton = () => {
  const searchParams = useSearchParams();
  // const { NEXT_BASE_URL } = process.env;

  const callbackUrl =
    searchParams.get('callbackUrl') ||
    `https://practice-course-next.vercel.app/profile/profile`;

  return (
    <button
      className="sign-btn"
      onClick={() =>
        signIn('google', {
          callbackUrl,
        })
      }
    >
      Sign in with Google
    </button>
  );
};

export { GoogleButton };

// 'https://practice-course-next.vercel.app/profile'
