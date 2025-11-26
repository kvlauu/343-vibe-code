import svgPaths from "./svg-8ddkhf5ojz";
import imgExclamation from "figma:asset/d21b8bf5f1564248fa91a238395101a0ad0a3568.png";

function Icon() {
  return (
    <div className="relative shrink-0 size-[23.996px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M9.99846 4.99923H2.99954" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99969" />
          <path d="M11.9981 18.9971H2.99954" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99969" />
          <path d="M13.9978 2.99954V6.99954" id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99969" />
          <path d="M15.9975 16.9974V20.9974" id="Vector_4" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99969" />
          <path d="M20.9968 11.9981H11.9982" id="Vector_5" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99969" />
          <path d="M20.9975 18.9971H15.9975" id="Vector_6" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99969" />
          <path d="M20.9968 4.99923H13.9978" id="Vector_7" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99969" />
          <path d="M7.99877 9.99846V13.9985" id="Vector_8" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99969" />
          <path d="M7.99954 11.9981H2.99954" id="Vector_9" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99969" />
        </g>
      </svg>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[31.991px] relative shrink-0 w-[101.472px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[31.991px] relative w-[101.472px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[32px] left-0 not-italic text-[24px] text-neutral-950 text-nowrap top-[-0.57px] tracking-[0.0703px] whitespace-pre">Filter By...</p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex gap-[11.993px] h-[31.991px] items-center relative shrink-0 w-[137.461px]" data-name="Header">
      <Icon />
      <Heading />
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[23.996px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p126eca50} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99969" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.pa5fbe72} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99969" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function XButton() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[7.995px] px-[7.995px] relative rounded-[2.40465e+07px] shrink-0 size-[39.986px]" data-name="X button">
      <Icon1 />
    </div>
  );
}

function FilterByHeader() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Filter By... Header">
      <Header />
      <XButton />
    </div>
  );
}

function DeliveryButton() {
  return (
    <div className="bg-black h-[34px] relative rounded-[9px] shrink-0 w-[166px]" data-name="Delivery Button">
      <div aria-hidden="true" className="absolute border-[1.433px] border-black border-solid inset-0 pointer-events-none rounded-[9px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[calc(50%+0.5px)] not-italic text-[16px] text-center text-nowrap text-white top-[calc(50%-12px)] tracking-[-0.3125px] translate-x-[-50%] whitespace-pre">Uber</p>
    </div>
  );
}

function DeliveryButton1() {
  return (
    <div className="bg-gray-100 h-[34px] relative rounded-[9px] shrink-0 w-[166px]" data-name="Delivery Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-1/2 not-italic text-[16px] text-black text-center text-nowrap top-[calc(50%-12px)] tracking-[-0.3125px] translate-x-[-50%] whitespace-pre">Lyft</p>
      <div className="absolute left-[137px] size-[18px] top-[8px]" data-name="Exclamation">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgExclamation} />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
      <DeliveryButton />
      <DeliveryButton1 />
    </div>
  );
}

function DeliveryButton2() {
  return (
    <div className="bg-gray-100 h-[34px] relative rounded-[9px] shrink-0 w-[166px]" data-name="Delivery Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[calc(50%+0.5px)] not-italic text-[16px] text-black text-center text-nowrap top-[calc(50%-12px)] tracking-[-0.3125px] translate-x-[-50%] whitespace-pre">DoorDash</p>
    </div>
  );
}

function DeliveryButton3() {
  return (
    <div className="bg-black h-[34px] relative rounded-[9px] shrink-0 w-[166px]" data-name="Delivery Button">
      <div aria-hidden="true" className="absolute border-[1.433px] border-black border-solid inset-0 pointer-events-none rounded-[9px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-1/2 not-italic text-[16px] text-center text-nowrap text-white top-[calc(50%-12px)] tracking-[-0.3125px] translate-x-[-50%] whitespace-pre">SkipTheDishes</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
      <DeliveryButton2 />
      <DeliveryButton3 />
    </div>
  );
}

function RideDeliveryButtons() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Ride/Delivery Buttons">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre">Platforms</p>
      <Frame />
      <Frame1 />
    </div>
  );
}

function DeliveryButton4() {
  return (
    <div className="bg-black h-[50.848px] relative rounded-[14px] shrink-0 w-[166.362px]" data-name="Delivery Button">
      <div aria-hidden="true" className="absolute border-[1.433px] border-black border-solid inset-0 pointer-events-none rounded-[14px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[83.62px] not-italic text-[16px] text-center text-nowrap text-white top-[12.58px] tracking-[-0.3125px] translate-x-[-50%] whitespace-pre">Ride</p>
    </div>
  );
}

function DeliveryButton5() {
  return (
    <div className="bg-black h-[50.848px] relative rounded-[14px] shrink-0 w-[166.362px]" data-name="Delivery Button">
      <div aria-hidden="true" className="absolute border-[1.433px] border-black border-solid inset-0 pointer-events-none rounded-[14px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[83.12px] not-italic text-[16px] text-center text-nowrap text-white top-[12.58px] tracking-[-0.3125px] translate-x-[-50%] whitespace-pre">Delivery</p>
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Buttons">
      <DeliveryButton4 />
      <DeliveryButton5 />
    </div>
  );
}

function RideDeliveryButtons1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Ride/Delivery Buttons">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre">Offer Type</p>
      <Buttons />
    </div>
  );
}

function Radius() {
  return (
    <div className="h-[19.988px] relative shrink-0 w-full" data-name="Radius">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-[19.988px] items-center justify-between leading-[20px] not-italic relative text-[14px] tracking-[-0.1504px] w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#364153] text-nowrap whitespace-pre">Radius from current location</p>
          <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-neutral-950 text-right w-[42px]">XX km</p>
        </div>
      </div>
    </div>
  );
}

function Ranges() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex font-['Inter:Regular',sans-serif] font-normal h-[16.001px] items-start justify-between leading-[16px] ml-0 mt-[24.69px] not-italic relative text-[#6a7282] text-[12px] text-nowrap w-[344.727px] whitespace-pre" data-name="Ranges">
      <p className="relative shrink-0">XX km</p>
      <p className="relative shrink-0 text-right">XX km</p>
    </div>
  );
}

function RangeSliderRadius() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Range Slider (Radius)">
      <div className="[grid-area:1_/_1] h-0 ml-[0.86px] mt-[10.96px] relative w-[344px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-6px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 344 6">
            <line id="Line 3" stroke="var(--stroke-0, #E5E7EB)" strokeLinecap="round" strokeWidth="6" x1="3" x2="341" y1="3" y2="3" />
          </svg>
        </div>
      </div>
      <div className="[grid-area:1_/_1] ml-[75.59px] mt-0 relative size-[16px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <circle cx="8" cy="8" fill="var(--fill-0, black)" id="Ellipse 25" r="8" />
        </svg>
      </div>
      <Ranges />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Radius />
      <RangeSliderRadius />
    </div>
  );
}

function Radius1() {
  return (
    <div className="h-[19.988px] relative shrink-0 w-full" data-name="Radius">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-[19.988px] items-center justify-between leading-[20px] not-italic relative text-[14px] tracking-[-0.1504px] w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#364153] text-nowrap whitespace-pre">Distance from trip</p>
          <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-neutral-950 text-right w-[42px]">XX km</p>
        </div>
      </div>
    </div>
  );
}

function Ranges1() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex font-['Inter:Regular',sans-serif] font-normal h-[16.001px] items-start justify-between leading-[16px] ml-0 mt-[24.69px] not-italic relative text-[#6a7282] text-[12px] text-nowrap w-[344.727px] whitespace-pre" data-name="Ranges">
      <p className="relative shrink-0">XX km</p>
      <p className="relative shrink-0 text-right">XX km</p>
    </div>
  );
}

function RangeSliderRadius1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Range Slider (Radius)">
      <div className="[grid-area:1_/_1] h-0 ml-[0.86px] mt-[10.96px] relative w-[344px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-6px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 344 6">
            <line id="Line 3" stroke="var(--stroke-0, #E5E7EB)" strokeLinecap="round" strokeWidth="6" x1="3" x2="341" y1="3" y2="3" />
          </svg>
        </div>
      </div>
      <div className="[grid-area:1_/_1] ml-[75.59px] mt-0 relative size-[16px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <circle cx="8" cy="8" fill="var(--fill-0, black)" id="Ellipse 25" r="8" />
        </svg>
      </div>
      <Ranges1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Radius1 />
      <RangeSliderRadius1 />
    </div>
  );
}

function ApplyButton() {
  return (
    <div className="bg-black h-[55.976px] relative rounded-[14px] shrink-0 w-full" data-name="Apply Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[172.97px] not-italic text-[16px] text-center text-nowrap text-white top-[15.14px] tracking-[-0.3125px] translate-x-[-50%] whitespace-pre">Apply Filters</p>
    </div>
  );
}

function ResetButton() {
  return (
    <div className="bg-gray-100 h-[55.976px] relative rounded-[14px] shrink-0 w-full" data-name="Reset Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[172.78px] not-italic text-[#101828] text-[16px] text-center text-nowrap top-[15.14px] tracking-[-0.3125px] translate-x-[-50%] whitespace-pre">Reset to Default</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[19px] items-start left-[calc(50%+0.87px)] top-[calc(50%+0.07px)] translate-x-[-50%] translate-y-[-50%] w-[344.734px]">
      <FilterByHeader />
      <RideDeliveryButtons />
      <RideDeliveryButtons1 />
      <Frame3 />
      <Frame4 />
      <ApplyButton />
      <ResetButton />
    </div>
  );
}

export default function Filters() {
  return (
    <div className="bg-white relative rounded-tl-[15px] rounded-tr-[15px] size-full" data-name="Filters">
      <Frame2 />
      <div className="absolute h-0 left-0 top-[68.49px] w-[393px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 393 1">
            <line id="Line 4" stroke="var(--stroke-0, #E5E7EB)" x2="393" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}