import { CloudinaryImage } from '~/components/Ui/Content/Image/CloudinaryImage';
import { fit } from '@cloudinary/url-gen/actions/resize';

type ImageProps = {
  imageId: string;
};

export default function SupporterImage({ imageId }: ImageProps) {
  return (
    <CloudinaryImage
      id={imageId}
      width={200}
      height={60}
      alterImage={(image) => image.resize(fit().width(60).height(60))}
      objectFit="contain"
      alt="image preview"
      className="mx-auto md:mx-0"
    />
  );
}
