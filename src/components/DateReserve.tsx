'use client'
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export default function DateReserve() {
  return (
    <div className="w-full">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker 
          label="Select Date"
          slotProps={{
            textField: {
              variant: 'standard',
              fullWidth: true
            }
          }}
        />
      </LocalizationProvider>
    </div>
  );
}