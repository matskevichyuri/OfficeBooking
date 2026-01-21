import { Card } from 'primereact/card';
import { Divider } from 'primereact/divider';

interface HomePageProps {
  onSelectRoom: (roomId: number) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onSelectRoom }) => {
  const rooms = [
    { id: 1, name: 'Кабинет 101' },
    { id: 2, name: 'Кабинет 102' },
  ];

  return (
    <div className="p-grid p-m-2">
      {rooms.map(r => (
        <div key={r.id} className="p-col-12 p-md-6">
          <Card title={r.name} className="p-mb-3" onClick={() => onSelectRoom(r.id)}>
            <p>Нажмите для перехода к бронированию</p>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
