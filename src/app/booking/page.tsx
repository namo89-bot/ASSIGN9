import { TextField, Select, MenuItem, Button, FormControl, InputLabel } from '@mui/material';
import DateReserve from '@/components/DateReserve';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import getUserProfile from '@/libs/getUserProfile';

export default async function BookingPage() {
  
  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) return (<main className="p-10 text-center">Please Log-in</main>);
  const profile = await getUserProfile(session.user.token);
  const createdAt = new Date(profile.data.createdAt).toLocaleDateString();

  return (
    <main className="w-full flex flex-col items-center p-10 bg-gray-50 min-h-screen">
      <div className="w-full max-w-[600px] bg-white p-8 rounded-lg shadow-md border border-cyan-100 mb-8">
        <h2 className="text-2xl font-bold text-cyan-800 mb-4">User Profile</h2>
        <div className="grid grid-cols-2 gap-y-2 text-gray-700">
          <div className="font-semibold">Name:</div><div>{profile.data.name}</div>
          <div className="font-semibold">Email:</div><div>{profile.data.email}</div>
          <div className="font-semibold">Tel.:</div><div>{profile.data.tel}</div>
          <div className="font-semibold">Member Since:</div><div>{createdAt}</div>
        </div>
      </div>
      <h1 className="text-2xl font-bold text-gray-800 mb-8">Venue Booking</h1>
      <div className="w-full max-w-[400px] space-y-6 bg-white p-8 rounded-lg shadow-md border border-gray-100">
        
        <TextField variant="standard" name="Name-Lastname" label="Name-Lastname" fullWidth />
        <TextField variant="standard" name="Contact-Number" label="Contact-Number" fullWidth />

        <FormControl variant="standard" fullWidth>
          <InputLabel id="venue-label">Select Venue</InputLabel>
          <Select labelId="venue-label" id="venue" name="venue" defaultValue="">
            <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
            <MenuItem value="Spark">Spark Space</MenuItem>
            <MenuItem value="GrandTable">The Grand Table</MenuItem>
          </Select>
        </FormControl>

        <DateReserve />

        <Button variant="contained" className="bg-blue-600 hover:bg-blue-700 w-full mt-4 py-2">
          Book Venue
        </Button>
      </div>
    </main>
  );
}