import { Card, Button } from "flowbite-react";
import "../css/ProjectDetailsCard.css";

export default function ProjectDetailsCard() {
  return (
    <Card className="projectcard" imgSrc="../../public/Images/Background.jpg" horizontal>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
      <Button gradientDuoTone="purpleToBlue">See more...</Button>
    </Card>
  );
}