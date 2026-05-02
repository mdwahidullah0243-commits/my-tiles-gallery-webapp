import Image from "next/image";

const LeftSideShape = () => {
    return (
        <div className="hidden lg:flex flex-col items-center gap-50">
            <Image
                src='https://i.ibb.co.com/2YsgSBJB/login-shape-1.png'
                alt="login-shape-1"
                width={200}
                height={200}
            />

            <Image
                src='https://i.ibb.co.com/6R0y67QY/login-shape-2.png'
                alt='login-shape-2'
                width={20}
                height={20} />
        </div>
    );
};

export default LeftSideShape;