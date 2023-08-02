'use client';

import { Timeline } from 'flowbite-react';
import { HiCalendar } from 'react-icons/hi';


export default function StepperTimeline() {
  return (
    <>
      <Timeline horizontal>
        <Timeline.Item>
          <Timeline.Point icon={HiCalendar} />
          <Timeline.Content>
            <Timeline.Title>
              All-night Vigil
            </Timeline.Title>
            <Timeline.Time>
              Sat, August 5, 6:00pm – 8:30pm
            </Timeline.Time>
            <Timeline.Body>
              714 13th St, Sacramento, CA 95814, USA
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={HiCalendar} />
          <Timeline.Content>
            <Timeline.Title>
              Dormition (Theotokos) Fast
            </Timeline.Title>
            <Timeline.Time>
              Monday, Aug 14 – 28, 2023
            </Timeline.Time>
            <Timeline.Body>
              Holy Ascension Church Schedule of Divine Services & Activities
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={HiCalendar} />
          <Timeline.Content>
            <Timeline.Title>
              Flowbite Library v1.3.0
            </Timeline.Title>
            <Timeline.Time>
              Released on January 5, 2022
            </Timeline.Time>
            <Timeline.Body>
              Get started with dozens of web components and interactive elements.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    </>
  )
}


