import { useState } from 'react';
import DatePicker from './components/date-picker';
import { Button } from './components/ui/button';
import type { DateRange } from './components/date-picker/types';

function App() {
  const [isOpenWithoutDefault, setIsOpenWithoutDefault] = useState(false);
  const [isOpenWithDefault, setIsOpenWithDefault] = useState(false);

  // Ejemplo de defaultValue: rango de una semana a partir de hoy
  const defaultDateRange: DateRange = {
    from: new Date(), // Hoy
    to: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // Una semana después
  };

  const onSubmit = (range: DateRange) => {
    console.log({ range });
  };

  return (
    <div className='p-8'>
      <div className='space-y-4'>
        <div>
          <h2 className='text-lg font-semibold mb-2'>
            Date Range Picker sin valor por defecto
          </h2>
          <Button onClick={() => setIsOpenWithoutDefault(true)}>
            Open Date Range Picker
          </Button>
        </div>

        <div>
          <h2 className='text-lg font-semibold mb-2'>
            Date Range Picker con valor por defecto
          </h2>
          <Button onClick={() => setIsOpenWithDefault(true)}>
            Open with Default Range (
            {defaultDateRange.from?.toLocaleDateString()} -{' '}
            {defaultDateRange.to?.toLocaleDateString()})
          </Button>
        </div>
      </div>

      {/* DatePicker sin valor por defecto */}
      <DatePicker
        isOpen={isOpenWithoutDefault}
        onOpenChange={setIsOpenWithoutDefault}
        onSubmit={onSubmit}
      />

      {/* DatePicker con valor por defecto */}
      <DatePicker
        isOpen={isOpenWithDefault}
        onOpenChange={setIsOpenWithDefault}
        defaultValue={defaultDateRange}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default App;
