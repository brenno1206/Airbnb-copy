import BottonUser from '@/components/BottonUserIcon';
import Logo from '@/components/logo';
import { IconUserCircle } from '@/assets/icons';
import Link from 'next/link';
const Header = () => {
  return (
    <div className="container py-6 mx-auto flex justify-between items-center">
      <Logo />

      <div className="flex gap-6">
        <Link href="/" className="font-semibold">
          Acomodacões
        </Link>
        <Link href="/" className="opacity-60">
          Experiências
        </Link>
      </div>
      <BottonUser
        icon={<IconUserCircle aria-label="Ícone de Usuário" size={32} />}
      >
        Entrar
      </BottonUser>
    </div>
  );
};

export default Header;
