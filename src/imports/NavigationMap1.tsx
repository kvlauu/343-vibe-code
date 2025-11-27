import svgPaths from "./svg-6gfdtbk49w";
import imgRectangle4 from "figma:asset/fc0c842c3ff08d546f7639895506ec3561e7652b.png";
import imgUnsplashYn0L7UwBrpw from "figma:asset/5a0b4ed1bbdc8ad06f0c4432e460ab04fa86fcaf.png";

function Text() {
  return <div className="absolute h-[16.001px] left-[144px] top-[107px] w-[33.29px]" data-name="Text" />;
}

function Group() {
  return (
    <div className="absolute inset-[20.83%_12.5%_12.5%_12.5%]" data-name="Group">
      <div className="absolute inset-[-2.94%_-2.61%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41 36">
          <g id="Group">
            <path d={svgPaths.p51bd180} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p3feee00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function AkarIconsArrowBack() {
  return (
    <div className="overflow-clip relative size-[51px]" data-name="akar-icons:arrow-back">
      <Group />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[26px] top-[65px]">
      <div className="absolute flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] justify-center leading-[0] left-[83px] text-[30px] text-nowrap text-white top-[105px] tracking-[-0.9px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre">Jackson St</p>
      </div>
      <div className="absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-[83px] text-[#fbf7f6] text-[20px] text-nowrap top-[80px] tracking-[-0.6px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre">500 ft</p>
      </div>
      <div className="absolute flex items-center justify-center left-[26px] size-[51px] top-[65px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <AkarIconsArrowBack />
        </div>
      </div>
    </div>
  );
}

function FluentArrowUp20Regular() {
  return (
    <div className="absolute left-[73px] size-[20px] top-[153px]" data-name="fluent:arrow-up-20-regular">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="fluent:arrow-up-20-regular">
          <path d={svgPaths.p1e2c0900} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute h-[60px] left-0 rounded-[25px] top-[125px] w-[130px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(52, 90, 83) 0%, rgb(52, 90, 83) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} />
      <div className="absolute h-[144px] left-0 rounded-bl-[25px] rounded-br-[25px] top-0 w-[394px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(77, 179, 161) 0%, rgb(77, 179, 161) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} />
      <div className="absolute bg-[#4db3a1] h-[31px] left-0 top-[113px] w-[26px]" />
      <Group3 />
      <div className="absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-[30px] text-[#fbf7f6] text-[15px] text-nowrap top-[164px] tracking-[-0.45px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre">Then</p>
      </div>
      <FluentArrowUp20Regular />
    </div>
  );
}

function RightIcons() {
  return (
    <div className="h-[11.333px] relative shrink-0 w-[66.661px]" data-name="Right Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67 12">
        <g id="Right Icons">
          <path d={svgPaths.p242b4c00} fill="var(--fill-0, white)" id="Cellular Connection" />
          <path d={svgPaths.p1c808500} fill="var(--fill-0, white)" id="Wifi" />
          <g id="Battery">
            <rect fill="var(--fill-0, white)" height="10.3333" id="Border" opacity="0.35" rx="2.16667" stroke="var(--stroke-0, white)" width="21" x="42.833" y="0.5" />
            <path d={svgPaths.p2ad1ca80} fill="var(--fill-0, white)" id="Cap" opacity="0.4" />
            <rect fill="var(--fill-0, white)" height="7.33333" id="Capacity" rx="1.33333" width="18" x="44.333" y="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TopBar() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[18px] top-[23px] w-[349.661px]" data-name="Top Bar">
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] relative shrink-0 text-[16px] text-center text-white tracking-[-0.3px] w-[54px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        12:00
      </p>
      <RightIcons />
    </div>
  );
}

function TopBar1() {
  return (
    <div className="absolute h-[185px] left-0 top-0 w-[394px]" data-name="Top Bar">
      <Group2 />
      <TopBar />
    </div>
  );
}

function Icon() {
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

function Text1() {
  return (
    <div className="h-[16.001px] relative shrink-0 w-[33.29px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.001px] relative w-[33.29px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[17px] not-italic text-[#99a1af] text-[12px] text-center text-nowrap top-[0.72px] translate-x-[-50%] whitespace-pre">Home</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.998px] h-[63.994px] items-center justify-center left-0 top-[-0.72px] w-[78.539px]" data-name="Button">
      <Icon />
      <Text1 />
    </div>
  );
}

function Icon1() {
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

function Text2() {
  return (
    <div className="h-[16.001px] relative shrink-0 w-[35.261px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.001px] relative w-[35.261px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[18px] not-italic text-[12px] text-black text-center text-nowrap top-[0.72px] translate-x-[-50%] whitespace-pre">Offers</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.998px] h-[63.994px] items-center justify-center left-[78.54px] top-[-0.72px] w-[78.539px]" data-name="Button">
      <Icon1 />
      <Text2 />
    </div>
  );
}

function Icon2() {
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

function Text3() {
  return (
    <div className="h-[16.001px] relative shrink-0 w-[29.147px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.001px] relative w-[29.147px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[15px] not-italic text-[#99a1af] text-[12px] text-center text-nowrap top-[0.72px] translate-x-[-50%] whitespace-pre">Stats</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.998px] h-[63.994px] items-center justify-center left-[235.62px] top-[-0.72px] w-[78.539px]" data-name="Button">
      <Icon2 />
      <Text3 />
    </div>
  );
}

function Icon3() {
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

function Text4() {
  return (
    <div className="h-[16.001px] relative shrink-0 w-[28.822px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.001px] relative w-[28.822px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[14px] not-italic text-[#99a1af] text-[12px] text-center text-nowrap top-[0.72px] translate-x-[-50%] whitespace-pre">More</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.998px] h-[63.994px] items-center justify-center left-[314.16px] top-[-0.72px] w-[78.539px]" data-name="Button">
      <Icon3 />
      <Text4 />
    </div>
  );
}

function Icon4() {
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

function Text5() {
  return (
    <div className="h-[16.001px] relative shrink-0 w-[24.433px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.001px] relative w-[24.433px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[12.5px] not-italic text-[#99a1af] text-[12px] text-center text-nowrap top-[0.72px] translate-x-[-50%] whitespace-pre">Map</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.998px] h-[63.994px] items-center justify-center left-[157.08px] top-[-0.72px] w-[78.539px]" data-name="Button">
      <Icon4 />
      <Text5 />
    </div>
  );
}

function BottomNavBar() {
  return (
    <div className="absolute bg-white border-[0.717px_0px_0px] border-black border-solid bottom-[0.01px] h-[63.994px] left-px w-[392.72px]" data-name="Bottom Nav Bar">
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
    </div>
  );
}

function Icon5() {
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

function Text6() {
  return (
    <div className="h-[16.001px] relative shrink-0 w-[33.29px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.001px] relative w-[33.29px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[17px] not-italic text-[#99a1af] text-[12px] text-center text-nowrap top-[0.72px] translate-x-[-50%] whitespace-pre">Home</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.998px] h-[63.994px] items-center justify-center left-0 top-[-0.72px] w-[78.539px]" data-name="Button">
      <Icon5 />
      <Text6 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[23.996px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p2e359100} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99969" />
        </g>
      </svg>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[16.001px] relative shrink-0 w-[35.261px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.001px] relative w-[35.261px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[18px] not-italic text-[#99a1af] text-[12px] text-center text-nowrap top-[0.72px] translate-x-[-50%] whitespace-pre">Offers</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.998px] h-[63.994px] items-center justify-center left-[78.54px] top-[-0.72px] w-[78.539px]" data-name="Button">
      <Icon6 />
      <Text7 />
    </div>
  );
}

function Icon7() {
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

function Text8() {
  return (
    <div className="h-[16.001px] relative shrink-0 w-[29.147px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.001px] relative w-[29.147px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[15px] not-italic text-[#99a1af] text-[12px] text-center text-nowrap top-[0.72px] translate-x-[-50%] whitespace-pre">Stats</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.998px] h-[63.994px] items-center justify-center left-[235.62px] top-[-0.72px] w-[78.539px]" data-name="Button">
      <Icon7 />
      <Text8 />
    </div>
  );
}

function Icon8() {
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

function Text9() {
  return (
    <div className="h-[16.001px] relative shrink-0 w-[28.822px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.001px] relative w-[28.822px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[14px] not-italic text-[#99a1af] text-[12px] text-center text-nowrap top-[0.72px] translate-x-[-50%] whitespace-pre">More</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.998px] h-[63.994px] items-center justify-center left-[314.16px] top-[-0.72px] w-[78.539px]" data-name="Button">
      <Icon8 />
      <Text9 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[23.996px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p38c24ff0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99969" />
          <path d="M14.9977 5.76309V20.7608" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99969" />
          <path d="M8.99861 3.23552V18.2332" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99969" />
        </g>
      </svg>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[16.001px] relative shrink-0 w-[24.433px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.001px] relative w-[24.433px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[12.5px] not-italic text-[12px] text-black text-center text-nowrap top-[0.72px] translate-x-[-50%] whitespace-pre">Map</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.998px] h-[63.994px] items-center justify-center left-[157.08px] top-[-0.72px] w-[78.539px]" data-name="Button">
      <Icon9 />
      <Text10 />
    </div>
  );
}

function BottomNavBar1() {
  return (
    <div className="absolute bg-white border-[0.717px_0px_0px] border-black border-solid bottom-[0.01px] h-[63.994px] left-px w-[392.72px]" data-name="Bottom Nav Bar">
      <Button5 />
      <Button6 />
      <Button7 />
      <Button8 />
      <Button9 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[12.51%_12.5%_9.37%_12.5%]" data-name="Group">
      <div className="absolute bottom-0 left-[-3.33%] right-[-3.33%] top-[-3.2%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 25">
          <g id="Group">
            <path d={svgPaths.p24503580} id="Vector" stroke="var(--stroke-0, #4DB3A1)" strokeWidth="1.5" />
            <path d={svgPaths.p23e04280} fill="var(--fill-0, #4DB3A1)" id="Vector_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconamoonProfileCircleLight() {
  return (
    <div className="absolute left-[183px] overflow-clip size-[30px] top-[721px]" data-name="iconamoon:profile-circle-light">
      <Group1 />
    </div>
  );
}

export default function NavigationMap() {
  return (
    <div className="bg-white relative size-full" data-name="navigation-map-1">
      <TopBar1 />
      <BottomNavBar />
      <BottomNavBar1 />
      <IconamoonProfileCircleLight />
      <div className="absolute h-[681px] left-[-271px] top-[105px] w-[676px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[106.96%] left-[9.1%] max-w-none top-[-7.98%] w-[89.7%]" src={imgRectangle4} />
        </div>
      </div>
      <div className="absolute h-[628px] left-[-210px] top-[84px] w-[621px]" data-name="unsplash:Yn0l7uwBrpw">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgUnsplashYn0L7UwBrpw} />
      </div>
      <div className="absolute bg-white h-[155px] left-[-1px] rounded-[20px] top-[697px] w-[394px]" />
      <div className="absolute h-0 left-[168px] top-[712px] w-[57.009px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-3px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57 3">
            <line id="Line 1" stroke="var(--stroke-0, #AFAEAE)" strokeWidth="3" x2="57.0088" y1="1.5" y2="1.5" />
          </svg>
        </div>
      </div>
      <Text />
      <div className="absolute flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] h-[21px] justify-center leading-[0] left-[119px] text-[18px] text-black top-[735.5px] tracking-[-0.54px] translate-y-[-50%] w-[56px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">4 mins</p>
      </div>
      <div className="absolute flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] h-[21px] justify-center leading-[0] left-[221px] text-[18px] text-black top-[735.5px] tracking-[-0.54px] translate-y-[-50%] w-[52px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0.8 mi</p>
      </div>
      <div className="absolute flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] justify-center leading-[0] left-[144px] text-[#99a1af] text-[14px] text-nowrap top-[767.5px] tracking-[-0.42px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre">Picking up Schneider</p>
      </div>
    </div>
  );
}