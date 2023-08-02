'use client';

import { ToggleSwitch } from 'flowbite-react';

export default function ToggleSwitchElement() {
  return (
    <div
      className="flex max-w-md flex-col gap-4"
      id="toggle"
    >

      <ToggleSwitch
        label="Toggle me"
        onChange={() => { }} checked={false} />
    </div>
  )
}


