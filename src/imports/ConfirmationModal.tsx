import svgPaths from "./svg-s26uabt9sm";

function Container() {
  return (
    <div className="h-[23.996px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[156.45px] not-italic text-[#4a5565] text-[16px] text-center text-nowrap top-[-0.85px] tracking-[-0.3125px] translate-x-[-50%] whitespace-pre">You are about to accept this offer:</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[35.989px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[36px] left-[calc(50%+0.13px)] not-italic text-[30px] text-center text-neutral-950 top-[0.01px] tracking-[0.3955px] translate-x-[-50%] w-[179px]">$XX.XX</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[23.996px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[156.61px] not-italic text-[#6a7282] text-[16px] text-center text-nowrap top-[-0.85px] tracking-[-0.3125px] translate-x-[-50%] whitespace-pre">[PLATFORM]</p>
    </div>
  );
}

function Info() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7.995px] h-[95.974px] items-start left-[calc(50%+1.37px)] top-[154px] translate-x-[-50%] w-[312.747px]" data-name="Info">
      <Container />
      <Container1 />
      <Container2 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[calc(50%+0.5px)] top-[18px] translate-x-[-50%]">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[29px] leading-[22px] left-[calc(50%+0.5px)] not-italic text-[24px] text-center text-white top-[92px] tracking-[0.1px] translate-x-[-50%] w-[245px]">Accept Trip?</p>
      <div className="absolute left-1/2 size-[62px] top-[18px] translate-x-[-50%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 62">
          <circle cx="31" cy="31" fill="var(--fill-0, #D9D9D9)" id="Ellipse 28" r="31" />
        </svg>
      </div>
    </div>
  );
}

function Overhead() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Overhead">
      <div className="absolute bg-black h-[138px] left-0 rounded-tl-[15px] rounded-tr-[15px] top-0 w-[342px]" />
      <Group />
    </div>
  );
}

function AlertIcon() {
  return (
    <div className="relative shrink-0 size-[19.999px]" data-name="Alert Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_1702)" id="Alert Icon">
          <path d={svgPaths.p11712600} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66657" />
          <path d="M9.99939 6.66626V9.99939" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66657" />
          <path d="M9.99939 13.3325H10.0077" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66657" />
        </g>
        <defs>
          <clipPath id="clip0_1_1702">
            <rect fill="white" height="19.9988" width="19.9988" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NavMessage() {
  return (
    <div className="absolute bg-gray-100 box-border content-stretch flex gap-[11.993px] h-[73.389px] items-start left-[16px] pb-[0.717px] pl-[16.707px] pr-[0.717px] pt-[16.707px] rounded-[14px] top-[268px] w-[312.747px]" data-name="Nav Message">
      <div aria-hidden="true" className="absolute border-[#b2b2b2] border-[0.717px] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <AlertIcon />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-black tracking-[-0.1504px] w-[217px]">Navigation will start automatically after accepting</p>
    </div>
  );
}

function CancelButton() {
  return (
    <div className="absolute bg-gray-100 h-[42px] left-[calc(50%+1px)] rounded-[14px] top-[calc(50%+202.5px)] translate-x-[-50%] translate-y-[-50%] w-[312px]" data-name="Cancel Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[149.5px] not-italic text-[18px] text-black text-center text-nowrap top-[calc(50%-12px)] tracking-[-0.3125px] translate-x-[-50%] whitespace-pre">No, Go Back</p>
    </div>
  );
}

function ApplyButton() {
  return (
    <div className="absolute bg-black h-[56px] left-[calc(50%+1px)] rounded-[14px] top-[calc(50%+143.5px)] translate-x-[-50%] translate-y-[-50%] w-[312px]" data-name="Apply Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[149px] not-italic text-[18px] text-center text-nowrap text-white top-[15.14px] tracking-[-0.3125px] translate-x-[-50%] whitespace-pre">Yes, Accept</p>
    </div>
  );
}

export default function ConfirmationModal() {
  return (
    <div className="bg-white overflow-clip relative rounded-[15px] size-full" data-name="Confirmation Modal">
      <Info />
      <Overhead />
      <NavMessage />
      <CancelButton />
      <ApplyButton />
    </div>
  );
}