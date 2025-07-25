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
import { AccommodationPrototype } from '@/types/AirbnbData';

interface AccommodationDetailsProps {
  accommodation: AccommodationPrototype;
}

const AccommodationDetails = (props: AccommodationDetailsProps) => {
  const accommodation = props.accommodation;

  return (
    <article className="w-full py-4">
      <h2 className="text-xl font-semibold">
        {accommodation.location.description}
      </h2>
      <ul className="flex flex-row gap-2">
        <li>6 hóspedes</li>
        <li>&middot;</li>
        <li>3 quartos</li>
        <li>&middot;</li>
        <li>6 camas</li>
        <li>&middot;</li>
        <li>3 banheiros</li>
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
