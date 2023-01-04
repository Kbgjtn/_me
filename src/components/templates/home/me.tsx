import Image from "next/image";
import mainBackground from "../../../assets/images/home-bg-me.png";
import Mac from "../../../assets/images/Mac";
import MyMac from "../../../assets/images/MacBook.svg";
import Man from "../../../assets/images/Man";
import meAsMan from "../../../assets/images/Western-Man-me.png";
import NavBar from "../../modules/navbar/navbar";

const Me = () => {
	return (
		<div className="w-full h-full flex flex-shrink-1 flex-col overflow-hidden">
			<Image
				className="inline-flex object-cover z-0 min-h-full min-w-full h-screen w-screen"
				src={mainBackground}
				alt=""
				draggable={"false"}
				referrerPolicy={"strict-origin-when-cross-origin"}
				quality={100}
				onContextMenu={(e) => e.preventDefault()}
			/>
			<NavBar />
			<div
				className="inline-flex absolute justify-center items-center flex-col w-full h-full m-0-auto"
				// className="flex absolute self-center items-center justify-center flex-col w-full h-full max-h-full"
			>
				<div className="flex w-full max-h-auto h-auto self-center relative flex-col justify-center items-center">
					<Image
						className="inline-flex noselect w-48 h-auto sm:w-64 md:w-64 lg:w-72 xl:w-80 2xl:w-auto"
						src={meAsMan}
						alt="me as men"
						draggable={false}
						referrerPolicy={"strict-origin-when-cross-origin"}
						quality={100}
						onContextMenu={(e) => e.preventDefault()}
					/>

					<div
						className="inline-flex items-center justify-center overflow-hidden w-48 h-auto sm:w-64 md:w-auto lg:w-auto xl:w-auto scale-110 2xl:w-auto scale-120"
						onContextMenu={(e) => e.preventDefault()}>
						<Mac />
					</div>
				</div>
				<div
					className="inline-flex flex-col w-full h-auto relative self-end justify-self-end m-0-auto justify-start items-center overflow-hidden"
					// className="inline-flex self-center items-center justify-center flex-col py-12"
				>
					<h1 className="inline-flex font-extrabold m-0-auto text-7xl sm:text-8xl md:text-10xl lg:text-12xl xl:text-14xl 2xl:text-16xl">
						Daffa.r
					</h1>
					<div
						className="inline-flex noselect self-center w-full h-0 rounded-full text-center bg-black justify-self-center"
						draggable={false}
						style={{
							boxShadow:
								"0px -80px 70px 20px rgb(28, 28, 28, 0.7)",
							// tablet min-w-768px 0px -26px 70px 28px #1c1c1c
						}}></div>
				</div>
			</div>
		</div>
	);
};
export default Me;
