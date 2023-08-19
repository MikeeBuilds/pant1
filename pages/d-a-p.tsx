import type { NextPage } from "next";
import { Button } from "@mui/material";

const DAP: NextPage = () => {
  return (
    <div className="relative w-full h-[1117px] overflow-hidden bg-[url('/dap@3x.png')] bg-cover bg-no-repeat bg-[top] hidden text-center text-16xl text-white font-commodus">
      <div className="absolute bottom-[145px] left-[1728px] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.8))] w-[1728px] h-[486px] [transform:_rotate(-180deg)] [transform-origin:0_0] opacity-[0.5]" />
      <div className="absolute top-[calc(50%_-_504.5px)] left-[calc(50%_-_834px)] rounded-t-xl rounded-b-none [background:linear-gradient(106.86deg,_rgba(0,_0,_0,_0.1),_rgba(29,_29,_29,_0.1)_18.75%,_rgba(128,_128,_128,_0.1)_81.25%,_rgba(255,_255,_255,_0.1))] shadow-[0px_0px_55px_rgba(0,_0,_0,_0.5)] [backdrop-filter:blur(10px)] w-[329px] h-[1063px]" />
      <div className="absolute top-[calc(50%_-_504.5px)] left-[calc(50%_-_453px)] rounded-xl [background:linear-gradient(106.86deg,_rgba(0,_0,_0,_0.1),_rgba(29,_29,_29,_0.1)_18.75%,_rgba(128,_128,_128,_0.1)_81.25%,_rgba(255,_255,_255,_0.1))] shadow-[0px_0px_55px_rgba(0,_0,_0,_0.5)] [backdrop-filter:blur(10px)] w-[1309px] h-[990px]" />
      <div className="absolute top-[calc(50%_-_171.5px)] left-[calc(50%_-_423px)] rounded-xl [background:linear-gradient(106.86deg,_rgba(0,_0,_0,_0.1),_rgba(29,_29,_29,_0.1)_18.75%,_rgba(128,_128,_128,_0.1)_81.25%,_rgba(255,_255,_255,_0.1))] shadow-[0px_0px_55px_rgba(0,_0,_0,_0.5)] [backdrop-filter:blur(10px)] w-[1205px] h-[631px]" />
      <div className="absolute top-[calc(50%_-_401.5px)] left-[calc(50%_-_423px)] rounded-xl [background:linear-gradient(106.86deg,_rgba(0,_0,_0,_0.1),_rgba(29,_29,_29,_0.1)_18.75%,_rgba(128,_128,_128,_0.1)_81.25%,_rgba(255,_255,_255,_0.1))] shadow-[0px_0px_55px_rgba(0,_0,_0,_0.5)] [backdrop-filter:blur(10px)] w-[282px] h-[205px]" />
      <div className="absolute top-[calc(50%_-_401.5px)] left-[calc(50%_-_116px)] rounded-xl [background:linear-gradient(106.86deg,_rgba(0,_0,_0,_0.1),_rgba(29,_29,_29,_0.1)_18.75%,_rgba(128,_128,_128,_0.1)_81.25%,_rgba(255,_255,_255,_0.1))] shadow-[0px_0px_55px_rgba(0,_0,_0,_0.5)] [backdrop-filter:blur(10px)] w-[283px] h-[205px]" />
      <div className="absolute top-[calc(50%_-_401.5px)] left-[calc(50%_+_193px)] rounded-xl [background:linear-gradient(106.86deg,_rgba(0,_0,_0,_0.1),_rgba(29,_29,_29,_0.1)_18.75%,_rgba(128,_128,_128,_0.1)_81.25%,_rgba(255,_255,_255,_0.1))] shadow-[0px_0px_55px_rgba(0,_0,_0,_0.5)] [backdrop-filter:blur(10px)] w-[282px] h-[205px]" />
      <div className="absolute top-[calc(50%_-_401.5px)] left-[calc(50%_+_500px)] rounded-xl [background:linear-gradient(106.86deg,_rgba(0,_0,_0,_0.1),_rgba(29,_29,_29,_0.1)_18.75%,_rgba(128,_128,_128,_0.1)_81.25%,_rgba(255,_255,_255,_0.1))] shadow-[0px_0px_55px_rgba(0,_0,_0,_0.5)] [backdrop-filter:blur(10px)] w-[282px] h-[205px]" />
      <img
        className="absolute top-[306px] left-[-56px] w-[501px] h-[811px] object-cover"
        alt=""
        src="/colonna@2x.png"
      />
      <div className="absolute bottom-[0px] left-[0px] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.8))] w-[1728px] h-[365px]" />
      <div className="absolute top-[1072px] left-[389px] w-[1309px] h-[30px] opacity-[0.6] text-left text-lgi">
        <div className="absolute top-[5px] left-[calc(50%_-_100.5px)] text-lg font-arial">
          <span>©</span>
          <span className="font-medium font-metropolis">
            {" "}
            Pantheon Ecosystem
          </span>
        </div>
        <div className="absolute top-[4px] left-[0px]">docs</div>
        <div className="absolute top-[4px] left-[87px]">media kit</div>
        <div className="absolute top-[0px] left-[1163px] w-[146px] h-[30px] flex flex-row items-center justify-start gap-[28px]">
          <img
            className="relative w-[30px] h-[30px] object-cover"
            alt=""
            src="/twitter@2x.png"
          />
          <img
            className="relative w-[30px] h-[30px] object-cover"
            alt=""
            src="/discord@2x.png"
          />
          <img
            className="relative w-[30px] h-[30px] object-cover"
            alt=""
            src="/medium@2x.png"
          />
        </div>
      </div>
      <Button
        className="absolute top-[133px] left-[100px]"
        sx={{ width: 179 }}
        variant="contained"
        color="primary"
      >
        connect
      </Button>
      <div className="absolute top-[212px] left-[100px] w-[200px] h-[101px] text-left text-[28.26px] text-black">
        <div className="absolute top-[35px] left-[8px] inline-block w-48 h-[25px] opacity-[0.5]">
          SWAP
        </div>
        <div className="absolute top-[76px] left-[8px] inline-block w-48 h-[25px] opacity-[0.5]">
          STAKE
        </div>
        <div className="absolute top-[0px] left-[0px] bg-black w-px h-[95px] opacity-[0.5]" />
      </div>
      <div className="absolute top-[200px] left-[calc(50%_-_395px)] [background:linear-gradient(89.35deg,_#c5a059,_#deb750_28.65%,_#e6d48a_51.56%,_#f6dd75_76.56%,_#c1a05d)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center w-[226px] h-[73px] [text-shadow:0px_0px_15px_rgba(0,_0,_0,_0.5)] mix-blend-normal">
        <span className="[line-break:anywhere] w-full">
          <p className="m-0 leading-[98.9%]">$pantheon</p>
          <p className="m-0 text-3xl leading-[105%]">owned:</p>
        </span>
      </div>
      <div className="absolute top-[200px] left-[calc(50%_+_221px)] [background:linear-gradient(89.35deg,_#c5a059,_#deb750_28.65%,_#e6d48a_51.56%,_#f6dd75_76.56%,_#c1a05d)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center w-[226px] h-[73px] [text-shadow:0px_0px_25px_rgba(0,_0,_0,_0.5)] mix-blend-normal">
        <span className="[line-break:anywhere] w-full">
          <p className="m-0 leading-[98.9%]">$eth</p>
          <p className="m-0 text-3xl leading-[105%]">BAcking amount:</p>
        </span>
      </div>
      <div className="absolute top-[200px] left-[calc(50%_-_87px)] [background:linear-gradient(89.35deg,_#c5a059,_#deb750_28.65%,_#e6d48a_51.56%,_#f6dd75_76.56%,_#c1a05d)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center w-[226px] h-[73px] [text-shadow:0px_0px_25px_rgba(0,_0,_0,_0.5)] mix-blend-normal">
        <span className="[line-break:anywhere] w-full">
          <p className="m-0 leading-[98.9%]">LP APR:</p>
          <p className="m-0 text-3xl leading-[105%]">(STACKING)</p>
        </span>
      </div>
      <div className="absolute top-[200px] left-[calc(50%_+_528px)] [background:linear-gradient(89.35deg,_#c5a059,_#deb750_28.65%,_#e6d48a_51.56%,_#f6dd75_76.56%,_#c1a05d)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center w-[226px] h-[73px] [text-shadow:0px_0px_25px_rgba(0,_0,_0,_0.5)] mix-blend-normal">
        <span className="[line-break:anywhere] w-full">
          <p className="m-0 leading-[98.9%]">TOTAL LP</p>
          <p className="m-0 text-3xl leading-[105%]">Rewards:</p>
        </span>
      </div>
      <div className="absolute top-[206px] left-[108px] text-[28.26px] text-black text-left inline-block w-48 h-[25px]">
        Dashboard
      </div>
      <div className="absolute top-[282px] left-[827px] text-14xl inline-block w-[125px] h-8 [text-shadow:0px_3.3534255027770996px_3.35px_rgba(0,_0,_0,_0.25)]">
        246.14%
      </div>
      <div className="absolute top-[282px] left-[1146px] text-14xl inline-block w-[143px] h-8 [text-shadow:0px_0px_10px_rgba(0,_0,_0,_0.4)]">
        112,233.88
      </div>
      <div className="absolute top-[281px] left-[477px] w-[209px] h-[38px] text-left text-14xl">
        <div className="absolute top-[1px] left-[44px] inline-block w-[165px] h-8 [text-shadow:0px_0px_10px_rgba(0,_0,_0,_0.4)]">
          12,340.332..
        </div>
        <img
          className="absolute top-[0px] left-[0px] w-9 h-[38px] object-cover"
          alt=""
          src="/logo-bw-png-1@2x.png"
        />
      </div>
      <div className="absolute top-[281px] left-[1400px] w-[209px] h-[38px] text-left text-14xl">
        <div className="absolute top-[1px] left-[44px] inline-block w-[165px] h-8 [text-shadow:0px_0px_10px_rgba(0,_0,_0,_0.4)]">
          12,340.332..
        </div>
        <img
          className="absolute top-[0px] left-[0px] w-9 h-[38px] object-cover"
          alt=""
          src="/logo-bw-png-1@2x.png"
        />
      </div>
      <img
        className="absolute top-[283px] left-[1118px] w-5 h-[34px] object-cover"
        alt=""
        src="/ethdiamondwhite-1@2x.png"
      />
    </div>
  );
};

export default DAP;
