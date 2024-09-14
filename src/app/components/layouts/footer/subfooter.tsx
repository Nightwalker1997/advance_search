import Image from "next/image";

const SubFooter = () => {
    return (
        <div className="w-full flex lg:flex-row flex-col justify-center content-center font-normal text-sm text-white bg-black gap-2">
            <div className="flex content-center justify-center border-r border-white pr-2">
                &copy; 2024 Motor Squad.
            </div>
            <div className="flex content-center justify-center gap-2">
                <div className="border-r border-white pr-2">
                    Privacy & Policy
                </div>
                <div className="flex flex-row gap-2">
                    Powered by
                    <Image
                        src={"/icons/hillz_big_logo.png"}
                        alt=""
                        height={23}
                        width={23}
                        className="h-[23px] w-[23px] object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default SubFooter;
