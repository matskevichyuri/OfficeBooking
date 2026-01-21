import { useState } from 'react';
import { Button } from 'primereact/button';
import WeekSelector from '../components/WeekSelector';
import { Panel } from 'primereact/panel';

// Типы столов и кабинета
interface Table {
  id: number;
  row: number;
  col: number;
  status: 'free' | 'booked';
  bookedBy?: string;
}

interface Room {
  id: number;
  name: string;
  tables: Table[];
  door_positions: string[];    // Пример: 'left_top', 'right_bottom'
  window_positions: string[];  // Пример: 'top_center', 'bottom_left'
}

interface RoomBookingPageProps {
  roomId: number;
}

const RoomBookingPage: React.FC<RoomBookingPageProps> = ({ roomId }) => {
  // Заглушка комнаты
  const room: Room = {
    id: roomId,
    name: `Кабинет ${roomId === 1 ? '101' : '102'}`,
    tables: [
      { id: 1, row: 0, col: 1, status: 'free' },
      { id: 2, row: 0, col: 3, status: 'booked', bookedBy: 'Иванов' },
      { id: 3, row: 2, col: 0, status: 'free' },
      { id: 4, row: 2, col: 2, status: 'booked', bookedBy: 'Петров' },
    ],
    door_positions: ['left_top', 'right_bottom'],
    window_positions: ['top_center', 'bottom_left'],
  };

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [tables, setTables] = useState<Table[]>(room.tables);

  const toggleTable = (tableId: number) => {
    if (selectedDate < new Date(new Date().setHours(0, 0, 0, 0))) return; // нельзя менять прошлые дни
    setTables(prev =>
      prev.map(t =>
        t.id === tableId ? { ...t, status: t.status === 'free' ? 'booked' : 'free' } : t
      )
    );
  };

  const rows = Math.max(...tables.map(t => t.row)) + 1;
  const cols = Math.max(...tables.map(t => t.col)) + 1;

  return (
    <div className="p-m-3">
      <Panel header={`${room.name} — ${selectedDate.toLocaleDateString()}`}>
        {/* Выбор дня недели */}
        <WeekSelector selectedDate={selectedDate} onSelectDate={setSelectedDate} />

        {/* Кабинет */}
        <div
          className="room-container"
          style={{ width: `${cols * 60}px`, height: `${rows * 60}px` }}
        >
          {/* Двери */}
          {room.door_positions.map((pos, idx) => (
            <div key={idx} className={`room-door door-${pos}`} />
          ))}

          {/* Окна */}
          {room.window_positions.map((pos, idx) => (
            <div key={idx} className={`room-window window-${pos}`} />
          ))}

          {/* Столы */}
          {tables.map(t => (
            <Button
              key={t.id}
              label={`Стол ${t.id}${t.bookedBy ? ` (${t.bookedBy})` : ''}`}
              className={`room-table ${t.status}`}
              style={{
                top: `${t.row * 60}px`,
                left: `${t.col * 60}px`,
              }}
              onClick={() => toggleTable(t.id)}
            />
          ))}
        </div>
      </Panel>
    </div>
  );
};

export default RoomBookingPage;
