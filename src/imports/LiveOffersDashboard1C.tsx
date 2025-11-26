import svgPaths from "./svg-ki2qvj3iwp";
import imgLiveIcon from "figma:asset/d04f0bbbcc17f5a1ec764756a55c340fe65cc030.png";

function Text() {
  return (
    <div className="[grid-area:1_/_1] bg-[#b2b2b2] h-[20px] ml-[23px] mt-[46px] relative rounded-[4px] w-[71px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[calc(50%-26.5px)] not-italic text-[12px] text-nowrap text-white top-[2.71px] whitespace-pre">rideshare</p>
    </div>
  );
}

function Payout() {
  return (
    <div className="font-['Inter:Regular',sans-serif] font-normal grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] not-italic place-items-start relative shrink-0 tracking-[0.3955px]" data-name="Payout">
      <p className="[grid-area:1_/_1] leading-[36px] ml-0 mt-0 relative text-[30px] text-black w-[167px]">$XX.XX</p>
      <div className="[grid-area:1_/_1] flex flex-col h-[15px] justify-center ml-[19px] mt-[41.5px] relative text-[#6a7282] text-[12px] translate-y-[-50%] w-[98px]">
        <p className="leading-[36px]">Total payout</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[15.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1793)" id="Icon">
          <path d={svgPaths.p3e4ac300} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33251" />
          <path d={svgPaths.p1c7fd6c0} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33251" />
        </g>
        <defs>
          <clipPath id="clip0_1_1793">
            <rect fill="white" height="15.9901" width="15.9901" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Time() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Time">
      <Icon />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#4a5565] text-[18px] text-right tracking-[-0.4395px] w-[55px]">15 min</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[15.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p26ed7c00} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33251" />
        </g>
      </svg>
    </div>
  );
}

function Distance() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Distance">
      <Icon1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#4a5565] text-[18px] text-right tracking-[-0.4395px] w-[55px]">9.5 km</p>
    </div>
  );
}

function Stats() {
  return (
    <div className="content-stretch flex flex-col gap-px items-end relative shrink-0 w-[79.255px]" data-name="Stats">
      <Time />
      <Distance />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[52px] items-start relative shrink-0">
      <Payout />
      <Stats />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[19.999px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_1785)" id="Icon">
          <path d={svgPaths.p299e9e20} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66657" />
          <path d={svgPaths.p2bc21180} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66657" />
        </g>
        <defs>
          <clipPath id="clip0_1_1785">
            <rect fill="white" height="19.9988" width="19.9988" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[16.001px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] text-nowrap top-[0.72px] tracking-[0.3px] uppercase whitespace-pre">Pickup</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[27.983px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[18px] text-neutral-950 text-nowrap top-[0.58px] tracking-[-0.4395px] whitespace-pre">{`location `}</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="basis-0 grow h-[45.977px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[1.993px] h-[45.977px] items-start relative w-full">
        <Container />
        <Container1 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[45.977px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex gap-[11.993px] h-[45.977px] items-start relative w-full">
          <Icon2 />
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[19.999px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_1785)" id="Icon">
          <path d={svgPaths.p299e9e20} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66657" />
          <path d={svgPaths.p2bc21180} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66657" />
        </g>
        <defs>
          <clipPath id="clip0_1_1785">
            <rect fill="white" height="19.9988" width="19.9988" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[16.001px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] text-nowrap top-[0.72px] tracking-[0.3px] uppercase whitespace-pre">Dropoff</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[27.983px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[18px] text-neutral-950 text-nowrap top-[0.58px] tracking-[-0.4395px] whitespace-pre">location</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="basis-0 grow h-[45.977px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[1.993px] h-[45.977px] items-start relative w-full">
        <Container4 />
        <Container5 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[45.977px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex gap-[11.993px] h-[45.977px] items-start relative w-full">
          <Icon3 />
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Locations() {
  return (
    <div className="content-stretch flex flex-col gap-[11.993px] h-[103.947px] items-start relative shrink-0 w-full" data-name="Locations">
      <Container3 />
      <Container7 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[29.48px] size-[19.999px] top-[15.42px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1113dac0} id="Vector" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66657" />
          <path d={svgPaths.p10ac4500} id="Vector_2" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66657" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white h-[50.848px] relative rounded-[14px] shrink-0 w-[140.954px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.433px] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Icon4 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[84.98px] not-italic text-[#101828] text-[16px] text-center text-nowrap top-[12.58px] tracking-[-0.3125px] translate-x-[-50%] whitespace-pre">Decline</p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute inset-[-2.09%_-10.46%_2.09%_10.46%]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p2e3b8940} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66657" />
          <path d="M1 10L6 15" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66657" />
        </g>
      </svg>
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[30.96px] overflow-clip size-[19.999px] top-[15.42px]" data-name="Icon">
      <Icon5 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-black h-[50.848px] relative rounded-[14px] shrink-0 w-[140.966px]" data-name="Button">
      <Icon6 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[84.95px] not-italic text-[16px] text-center text-nowrap text-white top-[12.58px] tracking-[-0.3125px] translate-x-[-50%] whitespace-pre">Accept</p>
    </div>
  );
}

function YesNoButtons() {
  return (
    <div className="content-stretch flex gap-[15px] items-center relative shrink-0" data-name="Yes/No Buttons">
      <Button />
      <Button1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[17px] items-start ml-[21px] mt-[96px] relative w-[325.893px]">
      <Frame />
      <Locations />
      <YesNoButtons />
    </div>
  );
}

function Card() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Card 1">
      <div className="[grid-area:1_/_1] bg-black h-[82px] ml-0 mt-0 rounded-tl-[15px] rounded-tr-[15px] w-[342px]" data-name="Top Bar" />
      <div className="[grid-area:1_/_1] border border-black border-solid h-[359px] ml-0 mt-0 rounded-[15px] w-[342px]" data-name="Card Frame" />
      <p className="[grid-area:1_/_1] font-['Inter:Medium',sans-serif] font-medium leading-[normal] ml-[22px] mt-[16px] not-italic relative text-[20px] text-nowrap text-white whitespace-pre">Uber</p>
      <p className="[grid-area:1_/_1] font-['Inter:Medium',sans-serif] font-medium leading-[normal] ml-[319px] mt-[16px] not-italic relative text-[30px] text-nowrap text-right text-white translate-x-[-100%] whitespace-pre">XXs</p>
      <p className="[grid-area:1_/_1] font-['Inter:Medium',sans-serif] font-medium leading-[normal] ml-[316px] mt-[48px] not-italic relative text-[12px] text-nowrap text-right text-white translate-x-[-100%] whitespace-pre">remaining to accept</p>
      <Text />
      <Frame1 />
    </div>
  );
}

function Text1() {
  return (
    <div className="[grid-area:1_/_1] bg-[#b2b2b2] h-[20px] ml-[23px] mt-[46px] relative rounded-[4px] w-[71px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[calc(50%-22.5px)] not-italic text-[12px] text-nowrap text-white top-[2.71px] whitespace-pre">delivery</p>
    </div>
  );
}

function Payout1() {
  return (
    <div className="font-['Inter:Regular',sans-serif] font-normal grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] not-italic place-items-start relative shrink-0 tracking-[0.3955px]" data-name="Payout">
      <p className="[grid-area:1_/_1] leading-[36px] ml-0 mt-0 relative text-[30px] text-black w-[167px]">$XX.XX</p>
      <div className="[grid-area:1_/_1] flex flex-col h-[15px] justify-center ml-[19px] mt-[41.5px] relative text-[#6a7282] text-[12px] translate-y-[-50%] w-[98px]">
        <p className="leading-[36px]">Total payout</p>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[15.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1793)" id="Icon">
          <path d={svgPaths.p3e4ac300} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33251" />
          <path d={svgPaths.p1c7fd6c0} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33251" />
        </g>
        <defs>
          <clipPath id="clip0_1_1793">
            <rect fill="white" height="15.9901" width="15.9901" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Time1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Time">
      <Icon7 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#4a5565] text-[18px] text-right tracking-[-0.4395px] w-[55px]">15 min</p>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[15.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p26ed7c00} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33251" />
        </g>
      </svg>
    </div>
  );
}

function Distance1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Distance">
      <Icon8 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#4a5565] text-[18px] text-right tracking-[-0.4395px] w-[55px]">9.5 km</p>
    </div>
  );
}

function Stats1() {
  return (
    <div className="content-stretch flex flex-col gap-px items-end relative shrink-0 w-[79.255px]" data-name="Stats">
      <Time1 />
      <Distance1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[52px] items-start relative shrink-0">
      <Payout1 />
      <Stats1 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[19.999px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_1785)" id="Icon">
          <path d={svgPaths.p299e9e20} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66657" />
          <path d={svgPaths.p2bc21180} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66657" />
        </g>
        <defs>
          <clipPath id="clip0_1_1785">
            <rect fill="white" height="19.9988" width="19.9988" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[16.001px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] text-nowrap top-[0.72px] tracking-[0.3px] uppercase whitespace-pre">Pickup</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[27.983px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[18px] text-neutral-950 text-nowrap top-[0.58px] tracking-[-0.4395px] whitespace-pre">{`location `}</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="basis-0 grow h-[45.977px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[1.993px] h-[45.977px] items-start relative w-full">
        <Container8 />
        <Container9 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[45.977px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex gap-[11.993px] h-[45.977px] items-start relative w-full">
          <Icon9 />
          <Container10 />
        </div>
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[19.999px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_1785)" id="Icon">
          <path d={svgPaths.p299e9e20} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66657" />
          <path d={svgPaths.p2bc21180} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66657" />
        </g>
        <defs>
          <clipPath id="clip0_1_1785">
            <rect fill="white" height="19.9988" width="19.9988" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[16.001px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] text-nowrap top-[0.72px] tracking-[0.3px] uppercase whitespace-pre">Dropoff</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[27.983px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[18px] text-neutral-950 text-nowrap top-[0.58px] tracking-[-0.4395px] whitespace-pre">location</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="basis-0 grow h-[45.977px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[1.993px] h-[45.977px] items-start relative w-full">
        <Container12 />
        <Container13 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[45.977px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex gap-[11.993px] h-[45.977px] items-start relative w-full">
          <Icon10 />
          <Container14 />
        </div>
      </div>
    </div>
  );
}

function Locations1() {
  return (
    <div className="content-stretch flex flex-col gap-[11.993px] h-[103.947px] items-start relative shrink-0 w-full" data-name="Locations">
      <Container11 />
      <Container15 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="absolute left-[29.48px] size-[19.999px] top-[15.42px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1113dac0} id="Vector" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66657" />
          <path d={svgPaths.p10ac4500} id="Vector_2" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66657" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white h-[50.848px] relative rounded-[14px] shrink-0 w-[140.954px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.433px] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Icon11 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[84.98px] not-italic text-[#101828] text-[16px] text-center text-nowrap top-[12.58px] tracking-[-0.3125px] translate-x-[-50%] whitespace-pre">Decline</p>
    </div>
  );
}

function Icon12() {
  return (
    <div className="absolute inset-[-2.09%_-10.46%_2.09%_10.46%]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p2e3b8940} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66657" />
          <path d="M1 10L6 15" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66657" />
        </g>
      </svg>
    </div>
  );
}

function Icon13() {
  return (
    <div className="absolute left-[30.96px] overflow-clip size-[19.999px] top-[15.42px]" data-name="Icon">
      <Icon12 />
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-black h-[50.848px] relative rounded-[14px] shrink-0 w-[140.966px]" data-name="Button">
      <Icon13 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[84.95px] not-italic text-[16px] text-center text-nowrap text-white top-[12.58px] tracking-[-0.3125px] translate-x-[-50%] whitespace-pre">Accept</p>
    </div>
  );
}

function YesNoButtons1() {
  return (
    <div className="content-stretch flex gap-[15px] items-center relative shrink-0" data-name="Yes/No Buttons">
      <Button2 />
      <Button3 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[17px] items-start ml-[21px] mt-[96px] relative w-[325.893px]">
      <Frame3 />
      <Locations1 />
      <YesNoButtons1 />
    </div>
  );
}

function Card1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Card 2">
      <div className="[grid-area:1_/_1] bg-black h-[82px] ml-0 mt-0 rounded-tl-[15px] rounded-tr-[15px] w-[342px]" data-name="Top Bar" />
      <div className="[grid-area:1_/_1] border border-black border-solid h-[359px] ml-0 mt-0 rounded-[15px] w-[342px]" data-name="Card Frame" />
      <p className="[grid-area:1_/_1] font-['Inter:Medium',sans-serif] font-medium leading-[normal] ml-[22px] mt-[16px] not-italic relative text-[20px] text-nowrap text-white whitespace-pre">DoorDash</p>
      <p className="[grid-area:1_/_1] font-['Inter:Medium',sans-serif] font-medium leading-[normal] ml-[319px] mt-[16px] not-italic relative text-[30px] text-nowrap text-right text-white translate-x-[-100%] whitespace-pre">XXs</p>
      <p className="[grid-area:1_/_1] font-['Inter:Medium',sans-serif] font-medium leading-[normal] ml-[316px] mt-[48px] not-italic relative text-[12px] text-nowrap text-right text-white translate-x-[-100%] whitespace-pre">remaining to accept</p>
      <Text1 />
      <Frame4 />
    </div>
  );
}

function Text2() {
  return (
    <div className="[grid-area:1_/_1] bg-[#b2b2b2] h-[20px] ml-[23px] mt-[46px] relative rounded-[4px] w-[71px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[calc(50%-22.5px)] not-italic text-[12px] text-nowrap text-white top-[2.71px] whitespace-pre">delivery</p>
    </div>
  );
}

function Payout2() {
  return (
    <div className="font-['Inter:Regular',sans-serif] font-normal grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] not-italic place-items-start relative shrink-0 tracking-[0.3955px]" data-name="Payout">
      <p className="[grid-area:1_/_1] leading-[36px] ml-0 mt-0 relative text-[30px] text-black w-[167px]">$XX.XX</p>
      <div className="[grid-area:1_/_1] flex flex-col h-[15px] justify-center ml-[19px] mt-[41.5px] relative text-[#6a7282] text-[12px] translate-y-[-50%] w-[98px]">
        <p className="leading-[36px]">Total payout</p>
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[15.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1793)" id="Icon">
          <path d={svgPaths.p3e4ac300} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33251" />
          <path d={svgPaths.p1c7fd6c0} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33251" />
        </g>
        <defs>
          <clipPath id="clip0_1_1793">
            <rect fill="white" height="15.9901" width="15.9901" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Time2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Time">
      <Icon14 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#4a5565] text-[18px] text-right tracking-[-0.4395px] w-[55px]">15 min</p>
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[15.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p26ed7c00} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33251" />
        </g>
      </svg>
    </div>
  );
}

function Distance2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Distance">
      <Icon15 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#4a5565] text-[18px] text-right tracking-[-0.4395px] w-[55px]">9.5 km</p>
    </div>
  );
}

function Stats2() {
  return (
    <div className="content-stretch flex flex-col gap-px items-end relative shrink-0 w-[79.255px]" data-name="Stats">
      <Time2 />
      <Distance2 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[52px] items-start relative shrink-0">
      <Payout2 />
      <Stats2 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[19.999px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_1785)" id="Icon">
          <path d={svgPaths.p299e9e20} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66657" />
          <path d={svgPaths.p2bc21180} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66657" />
        </g>
        <defs>
          <clipPath id="clip0_1_1785">
            <rect fill="white" height="19.9988" width="19.9988" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[16.001px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] text-nowrap top-[0.72px] tracking-[0.3px] uppercase whitespace-pre">Pickup</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[27.983px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[18px] text-neutral-950 text-nowrap top-[0.58px] tracking-[-0.4395px] whitespace-pre">{`location `}</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="basis-0 grow h-[45.977px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[1.993px] h-[45.977px] items-start relative w-full">
        <Container16 />
        <Container17 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[45.977px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex gap-[11.993px] h-[45.977px] items-start relative w-full">
          <Icon16 />
          <Container18 />
        </div>
      </div>
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[19.999px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_1785)" id="Icon">
          <path d={svgPaths.p299e9e20} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66657" />
          <path d={svgPaths.p2bc21180} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66657" />
        </g>
        <defs>
          <clipPath id="clip0_1_1785">
            <rect fill="white" height="19.9988" width="19.9988" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[16.001px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] text-nowrap top-[0.72px] tracking-[0.3px] uppercase whitespace-pre">Dropoff</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[27.983px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[18px] text-neutral-950 text-nowrap top-[0.58px] tracking-[-0.4395px] whitespace-pre">location</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="basis-0 grow h-[45.977px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[1.993px] h-[45.977px] items-start relative w-full">
        <Container20 />
        <Container21 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[45.977px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex gap-[11.993px] h-[45.977px] items-start relative w-full">
          <Icon17 />
          <Container22 />
        </div>
      </div>
    </div>
  );
}

function Locations2() {
  return (
    <div className="content-stretch flex flex-col gap-[11.993px] h-[103.947px] items-start relative shrink-0 w-full" data-name="Locations">
      <Container19 />
      <Container23 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="absolute left-[29.48px] size-[19.999px] top-[15.42px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1113dac0} id="Vector" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66657" />
          <path d={svgPaths.p10ac4500} id="Vector_2" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66657" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-white h-[50.848px] relative rounded-[14px] shrink-0 w-[140.954px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.433px] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Icon18 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[84.98px] not-italic text-[#101828] text-[16px] text-center text-nowrap top-[12.58px] tracking-[-0.3125px] translate-x-[-50%] whitespace-pre">Decline</p>
    </div>
  );
}

function Icon19() {
  return (
    <div className="absolute inset-[-2.09%_-10.46%_2.09%_10.46%]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p2e3b8940} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66657" />
          <path d="M1 10L6 15" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66657" />
        </g>
      </svg>
    </div>
  );
}

function Icon20() {
  return (
    <div className="absolute left-[30.96px] overflow-clip size-[19.999px] top-[15.42px]" data-name="Icon">
      <Icon19 />
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-black h-[50.848px] relative rounded-[14px] shrink-0 w-[140.966px]" data-name="Button">
      <Icon20 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[84.95px] not-italic text-[16px] text-center text-nowrap text-white top-[12.58px] tracking-[-0.3125px] translate-x-[-50%] whitespace-pre">Accept</p>
    </div>
  );
}

function YesNoButtons2() {
  return (
    <div className="content-stretch flex gap-[15px] items-center relative shrink-0" data-name="Yes/No Buttons">
      <Button4 />
      <Button5 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[17px] items-start ml-[21px] mt-[96px] relative w-[325.893px]">
      <Frame5 />
      <Locations2 />
      <YesNoButtons2 />
    </div>
  );
}

function Card2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Card 3">
      <div className="[grid-area:1_/_1] bg-black h-[82px] ml-0 mt-0 rounded-tl-[15px] rounded-tr-[15px] w-[342px]" data-name="Top Bar" />
      <div className="[grid-area:1_/_1] border border-black border-solid h-[359px] ml-0 mt-0 rounded-[15px] w-[342px]" data-name="Card Frame" />
      <p className="[grid-area:1_/_1] font-['Inter:Medium',sans-serif] font-medium leading-[normal] ml-[22px] mt-[16px] not-italic relative text-[20px] text-nowrap text-white whitespace-pre">SkipTheDishes</p>
      <p className="[grid-area:1_/_1] font-['Inter:Medium',sans-serif] font-medium leading-[normal] ml-[319px] mt-[16px] not-italic relative text-[30px] text-nowrap text-right text-white translate-x-[-100%] whitespace-pre">XXs</p>
      <p className="[grid-area:1_/_1] font-['Inter:Medium',sans-serif] font-medium leading-[normal] ml-[316px] mt-[48px] not-italic relative text-[12px] text-nowrap text-right text-white translate-x-[-100%] whitespace-pre">remaining to accept</p>
      <Text2 />
      <Frame6 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[18px] h-[1200px] items-start leading-[0] left-[26px] top-[175px] w-[344px]">
      <Card />
      <Card1 />
      <Card2 />
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[23.996px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p18ee0230} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99969" />
          <path d={svgPaths.p244dca00} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99969" />
        </g>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[16.001px] relative shrink-0 w-[33.29px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.001px] relative w-[33.29px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[17px] not-italic text-[#99a1af] text-[12px] text-center text-nowrap top-[0.72px] translate-x-[-50%] whitespace-pre">Home</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.998px] h-[63.994px] items-center justify-center left-0 top-[-0.72px] w-[78.539px]" data-name="Button">
      <Icon21 />
      <Text3 />
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[23.996px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p2e359100} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99969" />
        </g>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[16.001px] relative shrink-0 w-[35.261px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.001px] relative w-[35.261px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[18px] not-italic text-[12px] text-black text-center text-nowrap top-[0.72px] translate-x-[-50%] whitespace-pre">Offers</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.998px] h-[63.994px] items-center justify-center left-[78.54px] top-[-0.72px] w-[78.539px]" data-name="Button">
      <Icon22 />
      <Text4 />
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[23.996px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p14320740} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99969" />
          <path d="M17.9972 16.9974V8.99861" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99969" />
          <path d="M12.998 16.9974V4.99923" id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99969" />
          <path d="M7.99877 16.9978V13.9978" id="Vector_4" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99969" />
        </g>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[16.001px] relative shrink-0 w-[29.147px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.001px] relative w-[29.147px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[15px] not-italic text-[#99a1af] text-[12px] text-center text-nowrap top-[0.72px] translate-x-[-50%] whitespace-pre">Stats</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.998px] h-[63.994px] items-center justify-center left-[235.62px] top-[-0.72px] w-[78.539px]" data-name="Button">
      <Icon23 />
      <Text5 />
    </div>
  );
}

function Icon24() {
  return (
    <div className="relative shrink-0 size-[23.996px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p2e885e80} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99969" />
          <path d={svgPaths.p3817e340} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99969" />
        </g>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[16.001px] relative shrink-0 w-[28.822px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.001px] relative w-[28.822px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[14px] not-italic text-[#99a1af] text-[12px] text-center text-nowrap top-[0.72px] translate-x-[-50%] whitespace-pre">More</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.998px] h-[63.994px] items-center justify-center left-[314.16px] top-[-0.72px] w-[78.539px]" data-name="Button">
      <Icon24 />
      <Text6 />
    </div>
  );
}

function Icon25() {
  return (
    <div className="relative shrink-0 size-[23.996px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p38c24ff0} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99969" />
          <path d="M14.9977 5.76309V20.7608" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99969" />
          <path d="M8.99861 3.23552V18.2332" id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99969" />
        </g>
      </svg>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[16.001px] relative shrink-0 w-[24.433px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.001px] relative w-[24.433px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[12.5px] not-italic text-[#99a1af] text-[12px] text-center text-nowrap top-[0.72px] translate-x-[-50%] whitespace-pre">Map</p>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.998px] h-[63.994px] items-center justify-center left-[157.08px] top-[-0.72px] w-[78.539px]" data-name="Button">
      <Icon25 />
      <Text7 />
    </div>
  );
}

function BottomNavBar() {
  return (
    <div className="absolute bg-white border-[0.717px_0px_0px] border-black border-solid bottom-[0.01px] h-[63.994px] left-px w-[392.72px]" data-name="Bottom Nav Bar">
      <Button6 />
      <Button7 />
      <Button8 />
      <Button9 />
      <Button10 />
    </div>
  );
}

function RightIcons() {
  return (
    <div className="h-[11.333px] relative shrink-0 w-[66.661px]" data-name="Right Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67 12">
        <g id="Right Icons">
          <path d={svgPaths.p242b4c00} fill="var(--fill-0, black)" id="Cellular Connection" />
          <path d={svgPaths.p1c808500} fill="var(--fill-0, black)" id="Wifi" />
          <g id="Battery">
            <rect fill="var(--fill-0, black)" height="10.3333" id="Border" opacity="0.35" rx="2.16667" stroke="var(--stroke-0, black)" width="21" x="42.833" y="0.5" />
            <path d={svgPaths.p2ad1ca80} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
            <rect fill="var(--fill-0, black)" height="7.33333" id="Capacity" rx="1.33333" width="18" x="44.333" y="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TopBar() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[18px] top-[23px] w-[349.661px]" data-name="Top Bar">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-center tracking-[-0.3px] w-[54px]">12:00</p>
      <RightIcons />
    </div>
  );
}

function LiveOfferHeader() {
  return (
    <div className="content-stretch flex gap-[13px] items-center relative shrink-0" data-name="Live Offer Header">
      <div className="h-[27px] relative shrink-0 w-[45px]" data-name="Live Icon">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[246.15%] left-[-22.99%] max-w-none top-0 w-[147.13%]" src={imgLiveIcon} />
        </div>
      </div>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] not-italic relative shrink-0 text-[24px] text-black text-nowrap tracking-[0.1px] whitespace-pre">Live Offer Feed</p>
    </div>
  );
}

function RefreshIcon() {
  return (
    <div className="relative shrink-0 size-[19.999px]" data-name="Refresh Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Refresh Icon">
          <path d={svgPaths.p140754c0} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66657" />
          <path d={svgPaths.pd1e6bc0} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66657" />
          <path d={svgPaths.p15eb0c80} id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66657" />
          <path d={svgPaths.p3bfcbb80} id="Vector_4" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66657" />
        </g>
      </svg>
    </div>
  );
}

function SortIcon() {
  return (
    <div className="relative shrink-0 size-[19.999px]" data-name="Sort Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Sort Icon">
          <path d={svgPaths.p31120898} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66657" />
          <path d="M14.1658 16.6657V3.33313" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66657" />
          <path d={svgPaths.pe476500} id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66657" />
          <path d="M5.83298 3.33313V16.6657" id="Vector_4" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66657" />
        </g>
      </svg>
    </div>
  );
}

function FilterIcon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Filter Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Filter Icon">
          <path d="M8.33333 4.16667H2.5" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99969" />
          <path d="M10 15.8333H2.5" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99969" />
          <path d="M11.6667 2.5V5.83385" id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99969" />
          <path d="M13.3333 14.1667V17.5005" id="Vector_4" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99969" />
          <path d="M17.5 10H10" id="Vector_5" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99969" />
          <path d="M17.5006 15.8333H13.3333" id="Vector_6" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99969" />
          <path d="M17.5 4.16667H11.6667" id="Vector_7" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99969" />
          <path d="M6.66667 8.33333V11.6672" id="Vector_8" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99969" />
          <path d="M6.66731 10H2.5" id="Vector_9" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99969" />
        </g>
      </svg>
    </div>
  );
}

function Icons() {
  return (
    <div className="content-stretch flex gap-[11px] items-center relative shrink-0" data-name="Icons">
      <RefreshIcon />
      <SortIcon />
      <FilterIcon />
    </div>
  );
}

function HeaderIcons() {
  return (
    <div className="absolute content-stretch flex gap-[25px] items-center left-[22px] top-[66px]" data-name="Header & Icons">
      <LiveOfferHeader />
      <Icons />
    </div>
  );
}

function Icon26() {
  return (
    <div className="relative shrink-0 size-[15.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_2128)" id="Icon">
          <path d={svgPaths.p2d9fc720} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33251" />
          <path d={svgPaths.p32c90100} id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33251" />
          <path d="M5.99628 11.3263H9.99379" id="Vector_3" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33251" />
          <path d={svgPaths.p2a3f1400} id="Vector_4" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33251" />
        </g>
        <defs>
          <clipPath id="clip0_1_2128">
            <rect fill="white" height="15.9901" width="15.9901" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[19.988px] relative shrink-0 w-[23.28px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.988px] relative w-[23.28px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.43px] tracking-[-0.1504px] whitespace-pre">Idle</p>
      </div>
    </div>
  );
}

function Status() {
  return (
    <div className="absolute bg-gray-100 box-border content-stretch flex gap-[7.995px] h-[42px] items-center left-[22px] pl-[11.993px] pr-0 py-0 rounded-[2.40465e+07px] top-[108px] w-[71.25px]" data-name="Status">
      <Icon26 />
      <Text8 />
    </div>
  );
}

function TopBar1() {
  return (
    <div className="absolute h-[162px] left-0 top-0 w-[393px]" data-name="Top Bar">
      <div className="absolute bg-white h-[162px] left-0 shadow-[0px_3px_4px_0px_rgba(0,0,0,0.05)] top-0 w-[393px]" data-name="Top Bar BG" />
      <TopBar />
      <HeaderIcons />
      <Status />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[363px] not-italic text-[#6a7282] text-[14px] text-right top-[119px] tracking-[-0.1504px] translate-x-[-100%] w-[142px]">Updated XXs ago</p>
    </div>
  );
}

export default function LiveOffersDashboard1C() {
  return (
    <div className="bg-white relative size-full" data-name="Live Offers Dashboard 1c">
      <TopBar1 />
      <Frame2 />
      <BottomNavBar />
    </div>
  );
}