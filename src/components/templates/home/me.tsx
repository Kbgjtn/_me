import Image from "next/image";
import mainBackground from "../../../assets/images/home-bg-me.png";
import Mac from "../../../assets/images/Mac";
import MyMac from "../../../assets/images/MacBook.svg";
import Man from "../../../assets/images/Man";
import meAsMan from "../../../assets/images/Western-Man-me.png";
import NavBar from "../../modules/navbar/navbar";

const Me = () => {
	return (
		<div className="w-screen h-screen relative bg-black flex flex-shrink-0">
			<Image
				className="inline-flex absolute z-0 w-full h-screen bg-no-repeat bg-cover"
				src={mainBackground}
				alt=""
				draggable={"false"}
				referrerPolicy={"strict-origin-when-cross-origin"}
				width={1920}
				height={1080}
				quality={100}
				onContextMenu={(e) => e.preventDefault()}
			/>
			<NavBar />
			<div className="flex absolute self-center items-center justify-center flex-col w-full h-auto max-h-full overflow-y-hidden">
				<div className="w-auto h-auto inline-flex flex-col">
					<Image
						className="inline-flex noselect"
						src={meAsMan}
						alt=""
						style={{ width: "auto", height: "auto" }}
						draggable={"false"}
						referrerPolicy={"strict-origin-when-cross-origin"}
						quality={100}
						onContextMenu={(e) => e.preventDefault()}
					/>
					<div
						className="inline-flex self-center scale-110"
						onContextMenu={(e) => e.preventDefault()}>
						<MyMac alt="" />
					</div>
				</div>
				<div className="inline-flex self-center items-center justify-center flex-col py-12">
					<h1 className="text-bigXL font-extrabold">Daffa.r</h1>
					<div
						className="text-white min-w-full h-0 rounded-full bg-black"
						style={{
							boxShadow: "0px -40px 70px 32px #1c1c1c",
						}}></div>
				</div>
			</div>
		</div>
	);
};
export default Me;
