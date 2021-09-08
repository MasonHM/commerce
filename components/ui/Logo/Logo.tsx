import Image from 'next/image'
import logo from '../../../public/pursuitLogoNoWords.png'

const Logo: React.FC = () => {
  return <Image src={logo} layout="fixed" height="40" width="40" />
}

export default Logo
