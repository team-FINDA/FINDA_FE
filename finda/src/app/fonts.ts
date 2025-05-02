import localFont from 'next/font/local';

export const pretendard = localFont({
  src: [
    { path: '../../public/fonts/woff2/Pretendard-Black.woff2', weight: '900' },
    { path: '../../public/fonts/woff2/Pretendard-ExtraBold.woff2', weight: '800' },
    { path: '../../public/fonts/woff2/Pretendard-Bold.woff2', weight: '700' },
    { path: '../../public/fonts/woff2/Pretendard-SemiBold.woff2', weight: '600' },
    { path: '../../public/fonts/woff2/Pretendard-Medium.woff2', weight: '500' },
    { path: '../../public/fonts/woff2/Pretendard-Regular.woff2', weight: '400' },
    { path: '../../public/fonts/woff2/Pretendard-Light.woff2', weight: '300' },
    { path: '../../public/fonts/woff2/Pretendard-ExtraLight.woff2', weight: '200' },
    { path: '../../public/fonts/woff2/Pretendard-Thin.woff2', weight: '100' },
  ],
  display: 'swap',
  variable: '--font-pretendard',
});
