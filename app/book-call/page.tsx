"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { format, addDays, setHours, setMinutes } from 'date-fns';

const BookCall = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [time, setTime] = useState<string | undefined>();

  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 10; hour < 17; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const time = setMinutes(setHours(new Date(), hour), minute);
        slots.push(format(time, 'h:mm a'));
      }
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  const handleBooking = () => {
    if (date && time) {
      console.log(`Booking confirmed for ${format(date, 'MMMM d, yyyy')} at ${time}`);
      // Here you would typically send this data to your backend
      alert(`Booking confirmed for ${format(date, 'MMMM d, yyyy')} at ${time}`);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Book Your Free Consultation</h1>
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Select a Date and Time</CardTitle>
          <CardDescription>Choose a convenient slot for your 30-minute consultation.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            disabled={(date) => date < new Date() || date > addDays(new Date(), 30)}
            className="rounded-md border"
          />
          <Select onValueChange={setTime}>
            <SelectTrigger>
              <SelectValue placeholder="Select a time" />
            </SelectTrigger>
            <SelectContent>
              {timeSlots.map((slot) => (
                <SelectItem key={slot} value={slot}>
                  {slot}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardContent>
        <CardFooter>
          <Button onClick={handleBooking} disabled={!date || !time} className="w-full">
            Book Consultation
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BookCall;