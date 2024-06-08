import React, {useState} from "react";
import {Card, Button, Modal, Carousel} from "flowbite-react";
import "../css/ProjectDetailsCard.css";
import crsl1 from "../../public/Images/Carousel1.jpg";

export default function ProjectDetailsCard(props) {
    const subDescription = props.item.description.split(' ').slice(0, 15).join(' ');

    const img = props.item.imageData1 ? `data:image/jpeg;base64,${props.item.imageData1}` : null;

    const [openModal, setOpenModal] = useState(false);

    return (
        <Card className="projectcard lg:h-[300px]" imgSrc={img} horizontal>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {props.item.name}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                {subDescription}...
            </p>
            <Button gradientDuoTone="purpleToBlue" className="w-44" onClick={() => setOpenModal(true)}>See more...</Button>
            {/*<Modal show={openModal} onClose={() => setOpenModal(false)}>*/}
            {/*    <Modal.Header className="flex justify-center text-center font-bold">*/}
            {/*        {props.item.name}*/}
            {/*    </Modal.Header>*/}
            {/*    <Modal.Body>*/}
            {/*        <div className="space-y-6">*/}
            {/*            <div className="">*/}
            {/*                <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">*/}
            {/*                    <Carousel>*/}
            {/*                        <div*/}
            {/*                            className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">*/}
            {/*                            /!*Slide 1*!/*/}
            {/*                            <img src={crsl1} alt=""/>*/}
            {/*                        </div>*/}
            {/*                        <div*/}
            {/*                            className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">*/}
            {/*                            Slide 2*/}
            {/*                        </div>*/}
            {/*                        <div*/}
            {/*                            className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">*/}
            {/*                            Slide 3*/}
            {/*                        </div>*/}
            {/*                        <div*/}
            {/*                            className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">*/}
            {/*                            Slide 4*/}
            {/*                        </div>*/}
            {/*                    </Carousel>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </Modal.Body>*/}
            {/*    <Modal.Footer className="justify-center">*/}
            {/*        <Button color="gray" onClick={() => setOpenModal(false)}>*/}
            {/*            Back*/}
            {/*        </Button>*/}
            {/*    </Modal.Footer>*/}
            {/*</Modal>*/}
        </Card>
    );
}
