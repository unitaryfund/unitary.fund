import { Image, ImageProps } from '@unpic/react';
import { cld } from '~/util/cloudinary';
import type { SetOptional } from 'type-fest';
import type { CloudinaryImage as CloudinaryImageType } from '@cloudinary/url-gen';

type CloudinaryImageProps = SetOptional<ImageProps, 'src'> & {
  id: string;
  alterImage?: (image: CloudinaryImageType) => CloudinaryImageType;
};

export function CloudinaryImage({
  id,
  alterImage,
  ...props
}: CloudinaryImageProps) {
  let image = cld.image(id);

  if (alterImage) {
    image = alterImage(image);
  }

  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image src={image.toURL()} {...props} />
  );
}
