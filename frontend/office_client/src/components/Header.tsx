import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';

interface HeaderProps {
  onNav: (section: 'home' | 'booking' | 'profile' | 'settings') => void;
}

const Header: React.FC<HeaderProps> = ({ onNav }) => {
  const leftContents = (
    <>
      <Button
        label="Главная"
        icon="pi pi-home"
        className="p-button-text p-button-lg"
        onClick={() => onNav('home')}
      />
      <Button
        label="Бронирования"
        icon="pi pi-calendar"
        className="p-button-text p-button-lg"
        onClick={() => onNav('booking')}
      />
    </>
  );

  const rightContents = (
    <>
      <Button
        label="Профиль"
        icon="pi pi-user"
        className="p-button-text p-button-lg"
        onClick={() => onNav('profile')}
      />
      <Button
        label="Настройки"
        icon="pi pi-cog"
        className="p-button-text p-button-lg"
        onClick={() => onNav('settings')}
      />
    </>
  );

  return <Toolbar left={leftContents} right={rightContents} />;
};

export default Header;
