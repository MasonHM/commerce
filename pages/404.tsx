import type { GetStaticPropsContext } from 'next'
import commerce from '@lib/api/commerce'
import { Layout } from '@components/common'
import { Text } from '@components/ui'
import Image from 'next/image'
import background from '../public/pursuitBackground.jpg'
import logo from '../public/pursuitLogoBlackLetter.png'

// export async function getStaticProps({
//   preview,
//   locale,
//   locales,
// }: GetStaticPropsContext) {
//   const config = { locale, locales }
//   const { pages } = await commerce.getAllPages({ config, preview })
//   const { categories, brands } = await commerce.getSiteInfo({ config, preview })
//   return {
//     props: {
//       pages,
//       categories,
//       brands,
//     },
//     revalidate: 200,
//   }
// }

export default function NotFound() {
  return (
    <>
      {/* <Image src={logo} layout="responsive" />
      <Image src={background} layout="responsive" /> */}
      <div className=" flex flex-col relative">
        <Image src={background} layout="responsive" />

        <div className="absolute py-40 left-1/2 transform -translate-x-1/2 text-center">
          <Image src={logo} layout="responsive" />
          <Text variant="heading">Not Found</Text>
          <Text className="">
            The requested page doesn't exist or you don't have access to it.
          </Text>
        </div>
      </div>
    </>
  )
}

NotFound.Layout = Layout
