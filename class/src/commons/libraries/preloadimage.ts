const PRELOADED_IMAGES: HTMLImageElement[] = [];

export const preladImage = (images: string[]) => {
  images.forEach((el) => {
    const img = new Image();
    img.src = el;
    img.onload = () => PRELOADED_IMAGES.push(img);
  });
};
