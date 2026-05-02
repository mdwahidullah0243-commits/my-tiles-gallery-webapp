import Image from "next/image";

const RightSideShape = () => {
    return (
        <div className="hidden lg:flex flex-col items-center">
            <Image
                src="https://i.ibb.co.com/672V03NQ/login-shape-3.png"
                alt="login-shape-3"
                width={50}
                height={50}
            />

            <Image
                src="https://i.ibb.co.com/KpdHbFRT/login-shape-4.png"
                alt="login-shape-4"
                width={250}
                height={250}
            />
        </div>
    );
};

export default RightSideShape;