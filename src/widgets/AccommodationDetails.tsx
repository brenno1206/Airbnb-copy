import {
  IconPhoto,
  IconToolsKitchen2,
  IconDesk,
  IconPool,
  IconBrandCarbon,
  IconSailboat,
  IconWifi,
  IconParking,
  IconAlarmSmoke,
  IconDog,
} from '@/assets/icons';
const AccommodationDetails = () => {
  return (
    <article className="w-full py-4">
      <h2 className="text-xl font-semibold">Bla bla bla bla bla</h2>
      <ul className="flex flex-row gap-2">
        <li> hóspedes</li>
        <li>&middot;</li>
        <li> quartos</li>
        <li>&middot;</li>
        <li> camas</li>
        <li>&middot;</li>
        <li> banheiros</li>
      </ul>
      <h2 className="pt-4 text-xl font-semibold">O que esse lugar oferece?</h2>
      <ul className="py-6 grid grid-cols-2 items-center gap-y-6">
        <li className="flex gap-1.5">
          <IconPhoto />
          <span>Vista para as montanhas</span>
        </li>
        <li className="flex gap-1.5">
          <IconToolsKitchen2 />
          <span>Cozinhas</span>
        </li>
        <li className="flex gap-1.5">
          <IconDesk />
          <span>Espaço de trabalho exclusivo</span>
        </li>
        <li className="flex gap-1.5">
          <IconPool />
          <span>Piscina privativa</span>
        </li>
        <li className="flex gap-1.5">
          <IconBrandCarbon />
          <span>Alarme de seguranaça p/gás</span>
        </li>
        <li className="flex gap-1.5">
          <IconSailboat />
          <span>Vista para as águas</span>
        </li>
        <li className="flex gap-1.5">
          <IconWifi />
          <span>Wi-fi rápido(83 Mbs)</span>
        </li>
        <li className="flex gap-1.5">
          <IconParking />
          <span>Estacionamento incluído</span>
        </li>
        <li className="flex gap-1.5">
          <IconAlarmSmoke />
          <span>Detectior de fumaça</span>
        </li>
        <li className="flex gap-1.5">
          <IconDog />
          <span>Permitido animais</span>
        </li>
      </ul>
    </article>
  );
};

export default AccommodationDetails;
