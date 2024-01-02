import NextImage, { ImageProps } from 'next/image'

const Image = ({ src, ...rest }: ImageProps) => (
  // 개발 환경에서는 아래 주석 처리된 코드를 사용하세요.
  <NextImage src={src} {...rest} />
  // <NextImage src={`/coffee-meet.github.io${src}`} {...rest} />
)

export default Image
