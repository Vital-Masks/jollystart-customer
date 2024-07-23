import { getContactUs } from '@/services';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaFacebookSquare, FaInstagram, FaYoutube } from 'react-icons/fa';

const SocialMediaLinks = () => {
  const [social, setSocial] = useState({
    facebook_link: 'https://facebook.com/jollystars.sc',
    instagram_link: 'https://instagram.com/jollystarssc',
    // youtube_link: '',
  });

  const fetchSocialLinks = async () => {
    try {
      const res = await getContactUs();
      setSocial(res.data.attributes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSocialLinks();
  }, []);

  return (
    <div className="flex items-center gap-4">
      <Link href={social?.facebook_link || ''} target="_blank">
        <FaFacebookSquare className="text-xl text-gray-300 transition-colors" />
      </Link>
      <Link href={social?.instagram_link || ''} target="_blank">
        <FaInstagram className="text-xl text-gray-300 transition-colors" />
      </Link>
      {/* <Link href={social?.youtube_link || ''} target="_blank">
        <FaYoutube className="text-xl text-gray-300 transition-colors" />
      </Link> */}
    </div>
  );
};

export default SocialMediaLinks;
