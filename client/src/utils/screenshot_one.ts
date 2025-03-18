const SCREENSHOT_API = "https://api.screenshotone.com/take";
const ACCESS_KEY = process.env.NEXT_PUBLIC_SCREENSHOT_ONE_ACCESS_KEY;

export const getScreenshotLink = (link: string): string => {
  return `${SCREENSHOT_API}?url=${link}&access_key=${ACCESS_KEY}&format=png`;
};
