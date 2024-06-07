import { Breadcrumb } from "flowbite-react";
import { FaPaintRoller } from "react-icons/fa"; // Import the Font Awesome paint roller icon (hypothetical example)

export default function Filteredpath() {
    return (
        <Breadcrumb aria-label="Default breadcrumb example">
            <Breadcrumb.Item href="#" icon={FaPaintRoller}>
                Duluxe
            </Breadcrumb.Item>
            <Breadcrumb.Item href="#">Wall Paints</Breadcrumb.Item>
            <Breadcrumb.Item>Interior</Breadcrumb.Item>
        </Breadcrumb>
    );
}
