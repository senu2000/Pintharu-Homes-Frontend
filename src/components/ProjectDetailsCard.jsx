import React, {useState} from "react";
import {Card, Button, Modal, Carousel} from "flowbite-react";
import "../css/ProjectDetailsCard.css";

export default function ProjectDetailsCard(props) {
    const subDescription = props.item.description.split(' ').slice(0, 15).join(' ');

    const img1 = props.item.imageData1 ? `data:image/jpeg;base64,${props.item.imageData1}` : null;
    const img2 = props.item.imageData2 ? `data:image/jpeg;base64,${props.item.imageData2}` : null;
    const img3 = props.item.imageData3 ? `data:image/jpeg;base64,${props.item.imageData3}` : null;
    const img4 = props.item.imageData4 ? `data:image/jpeg;base64,${props.item.imageData4}` : null;

    const [openModal, setOpenModal] = useState(false);

    return (
        <Card className="projectcard lg:h-[300px]" imgSrc={img1} horizontal>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {props.item.name}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                {subDescription}...
            </p>
            <Button gradientDuoTone="purpleToBlue" className="w-44" onClick={() => setOpenModal(true)}>See more...</Button>
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header >
                    <div className="w-full flex justify-center items-center text-center font-bold">
                        {props.item.name}
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <div className="">
                            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                                <Carousel slide={true} className="bg-gray-300">
                                    <img src={img1} alt=""/>
                                    <img src={img2} alt=""/>
                                    <img src={img3} alt=""/>
                                    <img src={img4} alt=""/>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center text-center mt-8">
                        {props.item.description}
                    </div>
                </Modal.Body>
                <Modal.Footer className="justify-center">
                    <Button gradientDuoTone="purpleToBlue" className="w-44" onClick={() => setOpenModal(false)}>
                        Back
                    </Button>
                </Modal.Footer>
            </Modal>
        </Card>
    );
}
