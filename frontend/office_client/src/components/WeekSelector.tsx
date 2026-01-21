import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { useState } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';

dayjs.locale('ru');

interface WeekSelectorProps {
    selectedDate: Date;
    onSelectDate: (date: Date) => void;
}

const WeekSelector: React.FC<WeekSelectorProps> = ({ selectedDate, onSelectDate }) => {
    const [showCalendar, setShowCalendar] = useState(false);

    // Текущая дата
    const today = dayjs();

    // Начало недели (понедельник)
    const startOfWeek = today.startOf('week').add(1, 'day'); // dayjs: week starts on Sunday, +1 → Monday

    // Рабочие дни недели (Пн-Пт)
    const weekDays = Array.from({ length: 5 }, (_, i) => startOfWeek.add(i, 'day'));

    return (
        <div className="p-d-flex p-ai-center p-mb-3">
            {weekDays.map((d, idx) => {
                const isPast = d.isBefore(today, 'day');
                const isToday = d.isSame(today, 'day');

                return (
                    <Button
                        key={idx}
                        label={`${d.format('DD MMMM')}\n${d.format('dddd')}`}
                        className={`p-mr-2 p-button-sm ${
                            isPast ? 'p-button-secondary' : isToday ? 'p-button-info' : 'p-button-outlined'
                        }`}
                        onClick={() => onSelectDate(d.toDate())}
                    />
                );
            })}

            {/* Календарь */}
            <div className="p-ml-auto">
                <Button
                    icon="pi pi-calendar"
                    label="Выбрать день"
                    className="p-button-sm p-button-outlined"
                    onClick={() => setShowCalendar(!showCalendar)}
                />
                {showCalendar && (
                    <Calendar
                        value={selectedDate}
                        onChange={e => {
                            onSelectDate(e.value as Date);
                            setShowCalendar(false);
                        }}
                        inline
                    />
                )}
            </div>
        </div>
    );
};

export default WeekSelector;
