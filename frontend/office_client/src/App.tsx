import { useState } from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import RoomBookingPage from './pages/RoomBookingPage';

const App = () => {
  const [section, setSection] = useState<'home' | 'booking' | 'profile' | 'settings'>('home');
  const [selectedRoom, setSelectedRoom] = useState<number | null>(null);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header onNav={setSection} />
      <main style={{ flex: 1, overflowY: 'auto' }}>
        {section === 'home' && <HomePage onSelectRoom={(id) => { setSelectedRoom(id); setSection('booking'); }} />}
        {section === 'booking' && selectedRoom && <RoomBookingPage roomId={selectedRoom} />}
        {section === 'profile' && <div className="p-m-3">Профиль пользователя</div>}
        {section === 'settings' && <div className="p-m-3">Настройки администратора</div>}
      </main>
    </div>
  );
};

export default App;
