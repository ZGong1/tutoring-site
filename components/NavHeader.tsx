import React from 'react';
import { Button } from '@/components/ui/button';

const NavHeader = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-200 px-4 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <Button variant="ghost">Home</Button>
          <Button variant="ghost">Schedule</Button>
          <Button variant="ghost">My Appointments</Button>
        </div>
        
        <div>
          <Button>Login</Button>
        </div>
      </div>
    </nav>
  );
};

export default NavHeader;