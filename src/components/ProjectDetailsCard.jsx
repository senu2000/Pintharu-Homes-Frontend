import React from "react";
import { Card, Button } from "flowbite-react";
import "../css/ProjectDetailsCard.css";

export default function ProjectDetailsCard(props) {
    const subDescription = props.item.description.split(' ').slice(0, 15).join(' ');

    const img = props.item.imageData1 ? `data:image/jpeg;base64,${props.item.imageData1}` : null;

    return (
        <Card className="projectcard lg:h-[300px]" imgSrc={img} horizontal>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {props.item.name}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                {subDescription}
            </p>
            <Button gradientDuoTone="purpleToBlue" className="w-44">See more...</Button>
        </Card>
    );
}
