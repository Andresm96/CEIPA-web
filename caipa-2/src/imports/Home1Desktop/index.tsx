import svgPaths from "./svg-05heb125u7";
import imgImage1 from "./791f4bf2e94d13e2a9217775b86cf6a9ac96c447.png";
import imgImage2 from "./d3bbd2cb1eb4a070f69d2af72ddb083ad99e4c46.png";
import imgCeipa from "./e4f6ddbe1d18e3107aed97f8762566d82e0e9a2e.png";
type QuieroMasInformacionProps = {
  className?: string;
  propiedad1?: "Predeterminada" | "Variante2";
};

function QuieroMasInformacion({ className, propiedad1 = "Predeterminada" }: QuieroMasInformacionProps) {
  const isVariante2 = propiedad1 === "Variante2";
  return (
    <div className={className || `h-[45px] relative w-[251px] ${isVariante2 ? "bg-[#354ee7] drop-shadow-[0px_4px_17.75px_#ff5a1d] rounded-[44px]" : ""}`}>
      <div aria-hidden className={`absolute border border-[#354ee7] border-solid inset-0 pointer-events-none ${isVariante2 ? "rounded-[44px]" : ""}`} />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center relative size-full">
          <div className={`[word-break:break-word] flex flex-col font-["Archivo:Regular",sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[20px] text-center whitespace-nowrap ${isVariante2 ? "text-[#fafafa]" : "text-[#060d37]"}`} style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[1.44]">{` Quiero más información`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="[word-break:break-word] absolute contents font-['Archivo:Regular',sans-serif] font-normal leading-[0] left-[calc(16.67%+102px)] text-[#354ee7] text-[24px] text-center top-[732px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[62px] justify-center left-[calc(16.67%+194px)] top-[763px] w-[184px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[0.87]">Lorem</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[62px] justify-center left-[calc(41.67%+120px)] top-[763px] w-[184px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[0.87]">Lorem</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[62px] justify-center left-[calc(58.33%+166px)] top-[763px] w-[184px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[0.87]">Lorem</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="[word-break:break-word] absolute contents font-['Archivo:Regular',sans-serif] font-normal leading-[0] left-[calc(8.33%+68px)] text-[20px] text-black top-[64px] whitespace-nowrap">
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[calc(41.67%-3px)] top-[72.5px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[0.87]">Estudiantes</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[calc(8.33%+68px)] top-[72.5px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[0.87]">{`Logo CEIPA `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[calc(50%+54px)] top-[72.5px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[0.87]">CEIPA</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[calc(58.33%+65px)] top-[72.5px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[0.87]">Entorno empresarial</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[calc(75%+77px)] top-[72.5px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[0.87]">Actualidad</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[calc(25%+8px)] top-[72.5px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[0.87]">Estudia en CEIPA</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="[word-break:break-word] absolute contents left-[calc(8.33%+51px)] top-[1773px]" data-name="text-1">
      <p className="absolute font-['Archivo:Bold',sans-serif] font-bold h-[96px] leading-[0.83] left-[calc(8.33%+51px)] text-[#354ee7] text-[60px] top-[1773px] w-[427px]" style={{ fontVariationSettings: '"wdth" 100' }}>{`Oferta académica `}</p>
      <p className="absolute font-['Archivo:ExtraLight',sans-serif] font-extralight h-[115px] leading-[1.44] left-[calc(8.33%+64px)] text-[20px] text-black top-[1907px] w-[402px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Vel tortor eleifend ornare feugiat fusce sem montes vestibulum faucibus, placerat congue lobortis accumsan pharetra commodo dignissim magna
      </p>
    </div>
  );
}

function Text1() {
  return (
    <div className="[word-break:break-word] absolute contents left-[calc(8.33%+2px)] top-[3095px]" data-name="text-1">
      <p className="absolute font-['Archivo:Bold',sans-serif] font-bold h-[114px] leading-[0.83] left-[calc(8.33%+2px)] text-[#354ee7] text-[60px] top-[3095px] w-[427px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Testimonios
      </p>
      <p className="absolute font-['Archivo:ExtraLight',sans-serif] font-extralight h-[115px] leading-[1.44] left-[calc(8.33%+5px)] text-[20px] text-black top-[3218px] w-[402px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Vel tortor eleifend ornare feugiat fusce sem montes vestibulum faucibus, placerat congue lobortis accumsan pharetra commodo dignissim magna
      </p>
    </div>
  );
}

function Group9() {
  return (
    <div className="-translate-x-1/2 [word-break:break-word] absolute contents font-['Ancizar_Sans:Thin',sans-serif] font-thin leading-[0.83] left-[calc(54.17%-27.5px)] text-[#354ee7] text-[200px] text-center top-[3477px]">
      <p className="-translate-x-1/2 absolute h-[114px] left-[calc(45.83%+37.5px)] opacity-36 top-[3477px] w-[1401px]">{`Aquí la innovación `}</p>
      <p className="-translate-x-1/2 absolute h-[114px] left-[calc(62.5%-21px)] opacity-36 top-[3591px] w-[1258px]">no es una meta</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[calc(41.67%+6px)] top-[682px]">
      <div className="absolute bg-[#354ee7] h-[4px] left-[calc(41.67%+6px)] top-[682px] w-[63px]" />
      <div className="absolute bg-[#354ee7] h-[4px] left-[calc(41.67%+89px)] top-[682px] w-[63px]" />
      <div className="absolute bg-[#354ee7] h-[4px] left-[calc(50%+52px)] top-[682px] w-[63px]" />
    </div>
  );
}

function Text2() {
  return (
    <div className="[word-break:break-word] absolute contents left-[calc(8.33%+61px)] top-[2527px]" data-name="text-1">
      <p className="absolute font-['Archivo:Bold',sans-serif] font-bold h-[114px] leading-[0.83] left-[calc(8.33%+61px)] text-[#354ee7] text-[60px] top-[2527px] w-[427px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        ¿Por qué CEIPA?
      </p>
      <p className="absolute font-['Archivo:ExtraLight',sans-serif] font-extralight h-[115px] leading-[1.44] left-[calc(8.33%+64px)] text-[20px] text-black top-[2650px] w-[402px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Vel tortor eleifend ornare feugiat fusce sem montes vestibulum faucibus, placerat congue lobortis accumsan pharetra commodo dignissim magna
      </p>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[calc(8.33%-18px)] top-[2415px]">
      <div className="absolute bg-[#d9d9d9] h-[462px] left-[calc(8.33%-18px)] rounded-[45px] top-[2415px] w-[1216px]" />
      <Text2 />
      <div className="absolute h-[387px] left-[calc(41.67%+81px)] top-[2452px] w-[584px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[calc(41.67%+74px)] top-[3033px]">
      <div className="absolute bg-[#d9d9d9] h-[91.832px] left-[calc(41.67%+74px)] top-[3033px] w-[577px]" />
      <div className="absolute h-[70.895px] left-[calc(50%-7.8px)] top-[3043.56px] w-[106.983px]" data-name="image 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
      <p className="[word-break:break-word] absolute font-['Archivo:ExtraLight',sans-serif] font-extralight h-[47.135px] leading-[1.44] left-[calc(58.33%+65.61px)] text-[20px] text-black top-[3055.75px] w-[326.696px]" style={{ fontVariationSettings: '"wdth" 100' }}>{`Vel tortor eleifend ornare feugiat fusce sem montes vestibulum faucibus, `}</p>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[calc(41.67%+74px)] top-[3302px]">
      <div className="absolute bg-[#d9d9d9] h-[91.832px] left-[calc(41.67%+74px)] top-[3302px] w-[577px]" />
      <div className="absolute h-[70.895px] left-[calc(50%-7.8px)] top-[3312.56px] w-[106.983px]" data-name="image 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
      <p className="[word-break:break-word] absolute font-['Archivo:ExtraLight',sans-serif] font-extralight h-[47.135px] leading-[1.44] left-[calc(58.33%+65.61px)] text-[20px] text-black top-[3324.75px] w-[326.696px]" style={{ fontVariationSettings: '"wdth" 100' }}>{`Vel tortor eleifend ornare feugiat fusce sem montes vestibulum faucibus, `}</p>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[calc(41.67%+8px)] top-[3157px]">
      <div className="absolute bg-[#d9d9d9] h-[113px] left-[calc(41.67%+8px)] top-[3157px] w-[710px]" />
      <div className="absolute h-[87.236px] left-[calc(41.67%+55px)] top-[3170px] w-[131.643px]" data-name="image 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
      <p className="[word-break:break-word] absolute font-['Archivo:ExtraLight',sans-serif] font-extralight h-[58px] leading-[1.44] left-[calc(58.33%+53px)] text-[20px] text-black top-[3185px] w-[402px]" style={{ fontVariationSettings: '"wdth" 100' }}>{`Vel tortor eleifend ornare feugiat fusce sem montes vestibulum faucibus, `}</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="[word-break:break-word] absolute contents left-[59px] top-[3849px]" data-name="text-1">
      <p className="absolute font-['Archivo:Bold',sans-serif] font-bold h-[114px] leading-[0.83] left-[59px] text-[#354ee7] text-[60px] top-[3849px] w-[707px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Financiacióin
      </p>
      <p className="absolute font-['Archivo:ExtraLight',sans-serif] font-extralight h-[115px] leading-[1.44] left-[63.97px] text-[20px] text-black top-[3972px] w-[665.607px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Vel tortor eleifend ornare feugiat fusce sem montes vestibulum faucibus, placerat congue lobortis accumsan pharetra commodo dignissim magna
      </p>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents left-0 top-[3786px]">
      <div className="absolute bg-[#d9d9d9] h-[401px] left-0 top-[3786px] w-[1440px]" />
      <Text3 />
      <div className="absolute bg-[#354ee7] left-[59px] top-[4087px] w-[251px]" data-name="Quiero más información">
        <div aria-hidden className="absolute border border-[#354ee7] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[20px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[1.44]">{` Quiero más información`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="[word-break:break-word] absolute contents left-[36px] top-[1006px]" data-name="text-1">
      <div className="absolute font-['Archivo:Regular',sans-serif] font-normal h-[114px] leading-[0] left-[36px] text-[#060d37] text-[0px] top-[1006px] w-[427px] whitespace-pre-wrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="font-['Archivo:Bold',sans-serif] font-bold leading-[0.83] mb-0 text-[#354ee7] text-[60px]" style={{ fontVariationSettings: '"wdth" 100' }}>{`sit amet `}</p>
        <p className="leading-[0.83] text-[60px]">Lorem ipsum</p>
      </div>
      <p className="absolute font-['Archivo:ExtraLight',sans-serif] font-extralight h-[115px] leading-[1.44] left-[39px] text-[20px] text-black top-[1129px] w-[402px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Vel tortor eleifend ornare feugiat fusce sem montes vestibulum faucibus, placerat congue lobortis accumsan pharetra commodo dignissim magna
      </p>
    </div>
  );
}

function DivHeading() {
  return (
    <div className="absolute h-[35px] left-[36px] right-[640px] top-[50px]" data-name="div.heading">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Archivo:Regular',sans-serif] font-normal h-[35px] justify-center leading-[0] left-[calc(50%-129px)] text-[#132237] text-[24px] top-[17.5px] w-[201px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Estudia en CEIPA</p>
      </div>
    </div>
  );
}

function DivPlaceholder() {
  return (
    <div className="absolute h-[15px] left-[22px] overflow-clip right-[22px] top-[15px]" data-name="div#placeholder">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Lato:Regular',sans-serif] h-[15px] justify-center leading-[0] left-0 not-italic text-[#aaa] text-[13.3px] top-[7.5px] w-[105px]">
        <p className="leading-[normal]">Tipo de programa</p>
      </div>
    </div>
  );
}

function TipoDePrograma() {
  return (
    <div className="absolute bg-white h-[45px] left-0 overflow-clip rounded-[20px] shadow-[0px_10px_10px_-5px_rgba(0,0,0,0.1)] top-[140px] w-[420px]" data-name="Tipo de programa">
      <DivPlaceholder />
    </div>
  );
}

function DivPlaceholder1() {
  return (
    <div className="absolute h-[15px] left-[22px] overflow-clip right-[22px] top-[15px]" data-name="div#placeholder">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Lato:Regular',sans-serif] h-[15px] justify-center leading-[0] left-0 not-italic text-[#aaa] text-[13.3px] top-[7.5px] w-[169px]">
        <p className="leading-[normal]">Departamento en que reside</p>
      </div>
    </div>
  );
}

function Departamento() {
  return (
    <div className="absolute bg-white h-[45px] left-[451px] overflow-clip rounded-[20px] shadow-[0px_10px_10px_-5px_rgba(0,0,0,0.1)] top-[140px] w-[420px]" data-name="departamento">
      <DivPlaceholder1 />
    </div>
  );
}

function DivPlaceholder2() {
  return (
    <div className="absolute h-[15px] left-[22px] overflow-clip right-[22px] top-[15px]" data-name="div#placeholder">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Lato:Regular',sans-serif] h-[15px] justify-center leading-[0] left-0 not-italic text-[#aaa] text-[13.3px] top-[7.5px] w-[109px]">
        <p className="leading-[normal]">Número de celular</p>
      </div>
    </div>
  );
}

function NumeroDeCelular() {
  return (
    <div className="absolute bg-white h-[45px] left-[451px] overflow-clip rounded-[20px] shadow-[0px_10px_10px_-5px_rgba(0,0,0,0.1)] top-[71px] w-[420px]" data-name="numero de celular">
      <DivPlaceholder2 />
    </div>
  );
}

function DivPlaceholder3() {
  return (
    <div className="absolute h-[15px] left-[22px] overflow-clip right-[22px] top-[15px]" data-name="div#placeholder">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Lato:Regular',sans-serif] h-[15px] justify-center leading-[0] left-0 not-italic text-[#aaa] text-[13.3px] top-[7.5px] w-[36.66px]">
        <p className="leading-[normal]">E-mail</p>
      </div>
    </div>
  );
}

function EMail() {
  return (
    <div className="absolute bg-white h-[45px] left-0 overflow-clip rounded-[20px] shadow-[0px_10px_10px_-5px_rgba(0,0,0,0.1)] top-[71px] w-[420px]" data-name="E-mail">
      <DivPlaceholder3 />
    </div>
  );
}

function DivPlaceholder4() {
  return (
    <div className="absolute h-[15px] left-[22px] overflow-clip right-[22px] top-[15px]" data-name="div#placeholder">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Lato:Regular',sans-serif] h-[15px] justify-center leading-[0] left-0 not-italic text-[#aaa] text-[13.3px] top-[7.5px] w-[50px]">
        <p className="leading-[normal]">Apellido</p>
      </div>
    </div>
  );
}

function Apellido() {
  return (
    <div className="absolute bg-white h-[45px] left-[451px] overflow-clip rounded-[20px] shadow-[0px_10px_10px_-5px_rgba(0,0,0,0.1)] top-[2px] w-[420px]" data-name="Apellido">
      <DivPlaceholder4 />
    </div>
  );
}

function DivPlaceholder5() {
  return (
    <div className="absolute h-[15px] left-[22px] overflow-clip right-[22px] top-[15px]" data-name="div#placeholder">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Lato:Regular',sans-serif] h-[15px] justify-center leading-[0] left-0 not-italic text-[#aaa] text-[13.3px] top-[7.5px] w-[50px]">
        <p className="leading-[normal]">Nombre</p>
      </div>
    </div>
  );
}

function Nombre() {
  return (
    <div className="absolute bg-white h-[45px] left-0 overflow-clip rounded-[20px] shadow-[0px_10px_10px_-5px_rgba(0,0,0,0.1)] top-[2px] w-[420px]" data-name="Nombre">
      <DivPlaceholder5 />
    </div>
  );
}

function Form() {
  return (
    <div className="absolute h-[185px] left-[36px] right-[40px] top-[100px]" data-name="Form">
      <TipoDePrograma />
      <Departamento />
      <NumeroDeCelular />
      <EMail />
      <Apellido />
      <Nombre />
      <div className="absolute h-[54px] left-[629px] rounded-[11px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.05)] top-[209px] w-[237px]" data-name="image 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[11px]">
          <img alt="" className="absolute h-[152.76%] left-[-4.75%] max-w-none top-[-34.86%] w-[109.78%]" src={imgImage2} />
        </div>
      </div>
    </div>
  );
}

function SpanAgreement() {
  return <div className="absolute h-[10px] left-[311px] right-[315px] top-[398px]" data-name="span.agreement" />;
}

function FormularioNewDesktop() {
  return (
    <div className="-translate-x-1/2 absolute bg-gradient-to-t border-2 border-[#d9d9d9] border-solid from-white h-[410px] left-[calc(62.5%+52px)] overflow-clip rounded-[40px] shadow-[0px_30px_63px_-42px_rgba(19,34,55,0.34)] to-[#f0f3f6] top-[894px] w-[946px]" data-name="FORMULARIO-NEW-DESKTOP">
      <DivHeading />
      <Form />
      <SpanAgreement />
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[10px] justify-center leading-[0] left-[calc(50%-2px)] text-[9px] text-black text-center top-[384px] w-[444px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p>
          <span className="leading-[normal]">{`Al enviar acepta los términos de uso. Lee aquí las `}</span>
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[normal] underline">Política de Tratamiento y Protección de datos y Habeas Data</span>
        </p>
      </div>
      <QuieroMasInformacion className="absolute h-[45px] left-[36px] top-[313px] w-[251px]" />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents left-[36px] top-[894px]">
      <Text4 />
      <FormularioNewDesktop />
    </div>
  );
}

function Ceipa() {
  return (
    <div className="absolute aspect-[280/26] bottom-[183.17px] left-[40px] top-[72px]" data-name="CEIPA">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[34.1%] max-w-none top-0 w-[31.8%]" src={imgCeipa} />
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[15px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15 15" width="15">
        <g id="SVG">
          <path d={svgPaths.p322cdc80} id="Vector" stroke="white" />
          <path d={svgPaths.p2e4bfe80} id="Vector_2" stroke="white" />
          <path d={svgPaths.p3e883900} fill="white" id="Vector_3" stroke="white" />
        </g>
      </svg>
    </div>
  );
}

function Border() {
  return (
    <div className="absolute border border-[rgba(255,255,255,0.25)] border-solid bottom-[40px] left-[40px] rounded-[17px] top-[207.17px] w-[34px]" data-name="Border">
      <Svg />
    </div>
  );
}

function Svg1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[15px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15 15" width="15">
        <g id="SVG">
          <path d={svgPaths.pa34f380} id="Vector" stroke="white" />
          <path d={svgPaths.p239b6b00} id="Vector_2" stroke="white" />
        </g>
      </svg>
    </div>
  );
}

function Border1() {
  return (
    <div className="absolute border border-[rgba(255,255,255,0.25)] border-solid bottom-[40px] left-[86px] rounded-[17px] top-[207.17px] w-[34px]" data-name="Border">
      <Svg1 />
    </div>
  );
}

function Svg2() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[15px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15 15" width="15">
        <g id="SVG">
          <path d={svgPaths.p23902e00} id="Vector" stroke="white" />
          <path d={svgPaths.p5248800} id="Vector_2" stroke="white" />
          <path d={svgPaths.p3170c890} id="Vector_3" stroke="white" />
        </g>
      </svg>
    </div>
  );
}

function Border2() {
  return (
    <div className="absolute border border-[rgba(255,255,255,0.25)] border-solid bottom-[40px] left-[132px] rounded-[17px] top-[207.17px] w-[34px]" data-name="Border">
      <Svg2 />
    </div>
  );
}

function Svg3() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[15px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15 15" width="15">
        <g id="SVG">
          <path d={svgPaths.p248c2c00} id="Vector" stroke="white" />
          <path d={svgPaths.p1154f3f0} id="Vector_2" stroke="white" />
        </g>
      </svg>
    </div>
  );
}

function Border3() {
  return (
    <div className="absolute border border-[rgba(255,255,255,0.25)] border-solid bottom-[40px] left-[178px] rounded-[17px] top-[207.17px] w-[34px]" data-name="Border">
      <Svg3 />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#354ee7] bottom-[141.17px] left-[1049.58px] rounded-[8px] top-[100px] w-[70.42px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Archivo:SemiBold',sans-serif] font-semibold h-[14px] justify-center leading-[0] left-[calc(50%+0.16px)] text-[13px] text-center text-white top-1/2 w-[38.737px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Enviar</p>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.12)] border-b border-solid h-[282.17px] left-[140px] right-[140px] top-0" data-name="HorizontalBorder">
      <Ceipa />
      <div className="[word-break:break-word] absolute bottom-[102.39px] flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] left-[40px] text-[#a5a1e8] text-[14px] top-[119px] w-[270.08px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[22.4px] mb-0">Institución universitaria con más de 30 años</p>
        <p className="leading-[22.4px] mb-0">formando a quienes prefieren hacer antes</p>
        <p className="leading-[22.4px]">que memorizar.</p>
      </div>
      <Border />
      <Border1 />
      <Border2 />
      <Border3 />
      <div className="[word-break:break-word] absolute bottom-[195.17px] flex flex-col font-['Archivo:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[414.64px] text-[13px] text-white top-[72px] w-[105.142px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Estudia en CEIPA</p>
      </div>
      <div className="[word-break:break-word] absolute bottom-[166.17px] flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] left-[414.64px] text-[#a5a1e8] text-[14px] top-[100px] w-[64.878px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Pregrados</p>
      </div>
      <div className="[word-break:break-word] absolute bottom-[137.17px] flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] left-[414.64px] text-[#a5a1e8] text-[14px] top-[129px] w-[67.584px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Posgrados</p>
      </div>
      <div className="[word-break:break-word] absolute bottom-[108.17px] flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] left-[414.64px] text-[#a5a1e8] text-[14px] top-[158px] w-[123.591px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Educación continua</p>
      </div>
      <div className="[word-break:break-word] absolute bottom-[79.17px] flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] left-[414.64px] text-[#a5a1e8] text-[14px] top-[187px] w-[73.953px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Admisiones</p>
      </div>
      <div className="[word-break:break-word] absolute bottom-[195.17px] flex flex-col font-['Archivo:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[593.84px] text-[13px] text-white top-[72px] w-[71.95px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Estudiantes</p>
      </div>
      <div className="[word-break:break-word] absolute bottom-[166.17px] flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] left-[593.84px] text-[#a5a1e8] text-[14px] top-[100px] w-[108.598px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Portal académico</p>
      </div>
      <div className="[word-break:break-word] absolute bottom-[137.17px] flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] left-[593.84px] text-[#a5a1e8] text-[14px] top-[129px] w-[138.747px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Bienestar universitario</p>
      </div>
      <div className="[word-break:break-word] absolute bottom-[108.17px] flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] left-[593.84px] text-[#a5a1e8] text-[14px] top-[158px] w-[67.584px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Egresados</p>
      </div>
      <div className="[word-break:break-word] absolute bottom-[195.17px] flex flex-col font-['Archivo:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[788.28px] text-[13px] text-white top-[72px] w-[39.379px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">CEIPA</p>
      </div>
      <div className="[word-break:break-word] absolute bottom-[166.17px] flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] left-[788.28px] text-[#a5a1e8] text-[14px] top-[100px] w-[64.778px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Institución</p>
      </div>
      <div className="[word-break:break-word] absolute bottom-[137.17px] flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] left-[788.28px] text-[#a5a1e8] text-[14px] top-[129px] w-[126.526px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Entorno empresarial</p>
      </div>
      <div className="[word-break:break-word] absolute bottom-[108.17px] flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] left-[788.28px] text-[#a5a1e8] text-[14px] top-[158px] w-[66.582px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Actualidad</p>
      </div>
      <div className="[word-break:break-word] absolute bottom-[79.17px] flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] left-[788.28px] text-[#a5a1e8] text-[14px] top-[187px] w-[57.626px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Contacto</p>
      </div>
      <div className="[word-break:break-word] absolute bottom-[195.17px] flex flex-col font-['Archivo:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[1009.05px] text-[13px] text-white top-[72px] w-[111.322px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Recibe novedades</p>
      </div>
      <div className="absolute border border-[rgba(255,255,255,0.25)] border-solid bottom-[141.17px] left-[1009.05px] rounded-[8px] top-[100px] w-[32.53px]" data-name="Border" />
      <Button />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[#120957] h-[344.17px] left-0 right-0 top-[4474px]" data-name="FOOTER">
      <HorizontalBorder />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Archivo:Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-[180px] right-[987.33px] text-[#7f7ac0] text-[13px] top-[313.17px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">© 2026 CEIPA. Todos los derechos reservados.</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Archivo:Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-[861.3px] right-[483.32px] text-[#7f7ac0] text-[13px] top-[313.17px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Términos de uso</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Archivo:Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-[980.33px] right-[278.81px] text-[#7f7ac0] text-[13px] top-[313.17px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Política de tratamiento de datos</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Archivo:Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-[1184.84px] right-[179.68px] text-[#7f7ac0] text-[13px] top-[313.17px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Habeas Data</p>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="absolute bg-white border border-[#e5e5e5] border-solid h-[65px] left-[calc(16.67%+66px)] right-[calc(66.67%+24px)] rounded-[10px] top-[4324px]" data-name="Background+Border">
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Archivo:SemiBold',sans-serif] font-semibold h-[14px] justify-center leading-[0] left-[calc(50%+0.17px)] text-[#a1a1aa] text-[13px] text-center top-[calc(50%+0.5px)] w-[49.551px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">[Sello 1]</p>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="absolute bg-white border border-[#e5e5e5] border-solid h-[65px] left-[calc(33.33%+1px)] right-[calc(50%+90px)] rounded-[10px] top-[4324px]" data-name="Background+Border">
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Archivo:SemiBold',sans-serif] font-semibold h-[14px] justify-center leading-[0] left-[calc(50%+0.67px)] text-[#a1a1aa] text-[13px] text-center top-[calc(50%+0.5px)] w-[49.551px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">[Sello 2]</p>
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="absolute bg-white border border-[#e5e5e5] border-solid h-[65px] left-[calc(41.67%+55px)] right-[calc(41.67%+35px)] rounded-[10px] top-[4324px]" data-name="Background+Border">
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Archivo:SemiBold',sans-serif] font-semibold h-[14px] justify-center leading-[0] left-[calc(50%+0.17px)] text-[#a1a1aa] text-[13px] text-center top-[calc(50%+0.5px)] w-[49.551px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">[Sello 3]</p>
      </div>
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="absolute bg-white border border-[#e5e5e5] border-solid h-[65px] left-[calc(50%+110px)] right-[calc(25%+101px)] rounded-[10px] top-[4324px]" data-name="Background+Border">
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Archivo:SemiBold',sans-serif] font-semibold h-[14px] justify-center leading-[0] left-[calc(50%+0.68px)] text-[#a1a1aa] text-[13px] text-center top-[calc(50%+0.5px)] w-[49.571px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">[Sello 4]</p>
      </div>
    </div>
  );
}

function BackgroundBorder4() {
  return (
    <div className="absolute bg-white border border-[#e5e5e5] border-solid h-[65px] left-[calc(66.67%+44px)] right-[calc(16.67%+46px)] rounded-[10px] top-[4324px]" data-name="Background+Border">
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Archivo:SemiBold',sans-serif] font-semibold h-[14px] justify-center leading-[0] left-[calc(50%+0.18px)] text-[#a1a1aa] text-[13px] text-center top-[calc(50%+0.5px)] w-[49.541px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">[Sello 5]</p>
      </div>
    </div>
  );
}

export default function Home1Desktop() {
  return (
    <div className="bg-[#fafafa] relative size-full" data-name="HOME-1-desktop">
      <div className="absolute bg-[#d9d9d9] h-[708px] left-0 rounded-bl-[55px] rounded-br-[55px] top-0 w-[1440px]" />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Archivo:Regular',sans-serif] font-normal h-[181px] justify-center leading-[0] left-[calc(8.33%+1px)] text-[#c3ff00] text-[64px] top-[314.5px] w-[620px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p>
          <span className="leading-[0.87] text-black">{`Lorem `}</span>
          <span className="leading-[0.87] text-[#354ee7]">hasit amet consectetur adipiscing</span>
        </p>
      </div>
      <Group1 />
      <p className="[word-break:break-word] absolute font-['Archivo:ExtraLight',sans-serif] font-extralight h-[86px] leading-[1.44] left-[calc(8.33%+4px)] text-[20px] text-black top-[408px] w-[597px]" style={{ fontVariationSettings: '"wdth" 100' }}>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur sed lectus nec tempor. In quis tellus id sem placerat dignissim laoreet at ligula. `}</p>
      <QuieroMasInformacion className="absolute left-[calc(8.33%+4px)] top-[541px] w-[251px]" />
      <div className="absolute bg-white h-[87px] left-[calc(8.33%+2px)] rounded-[85px] top-[29px] w-[1196px]" />
      <Group />
      <div className="absolute h-[387px] left-[calc(50%+54px)] top-[214px] w-[584px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
      <div className="absolute bg-[#c8c8c8] h-[820px] left-0 top-[1474px] w-[1440px]" />
      <div className="absolute h-[820px] left-[calc(8.33%+6px)] top-[1474px] w-[1237px]" data-name="image 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
      <Text />
      <Text1 />
      <Group9 />
      <div className="absolute h-[659px] left-[100px] top-[1554px] w-0">
        <div className="absolute inset-[0_-1.5px]">
          <svg className="block size-full" fill="none" height="659" preserveAspectRatio="none" viewBox="0 0 3 659" width="3">
            <path d="M1.5 0V659" id="Vector 1" stroke="#354EE7" strokeWidth="3" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[88px] size-[23px] top-[1542px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="23" preserveAspectRatio="none" viewBox="0 0 23 23" width="23">
          <circle cx="11.5" cy="11.5" fill="#354EE7" id="Ellipse 1" r="11.5" />
        </svg>
      </div>
      <div className="absolute left-[88px] size-[23px] top-[1703px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="23" preserveAspectRatio="none" viewBox="0 0 23 23" width="23">
          <circle cx="11.5" cy="11.5" fill="#354EE7" id="Ellipse 1" r="11.5" />
        </svg>
      </div>
      <div className="absolute left-[88px] size-[23px] top-[1856px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="23" preserveAspectRatio="none" viewBox="0 0 23 23" width="23">
          <circle cx="11.5" cy="11.5" fill="#354EE7" id="Ellipse 1" r="11.5" />
        </svg>
      </div>
      <div className="absolute left-[88px] size-[23px] top-[2009px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="23" preserveAspectRatio="none" viewBox="0 0 23 23" width="23">
          <circle cx="11.5" cy="11.5" fill="#354EE7" id="Ellipse 1" r="11.5" />
        </svg>
      </div>
      <div className="absolute left-[88px] size-[23px] top-[2190px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="23" preserveAspectRatio="none" viewBox="0 0 23 23" width="23">
          <circle cx="11.5" cy="11.5" fill="#354EE7" id="Ellipse 1" r="11.5" />
        </svg>
      </div>
      <div className="absolute bg-[#7b7979] h-[462px] left-[calc(41.67%+8px)] rounded-[30px] top-[1676px] w-[345px]" />
      <div className="absolute bg-[#7b7979] h-[462px] left-[calc(66.67%+13px)] rounded-[30px] top-[1676px] w-[345px]" />
      <div className="absolute bg-[#7b7979] h-[462px] left-[calc(91.67%+18px)] rounded-[30px] top-[1676px] w-[345px]" />
      <Group2 />
      <Group3 />
      <Group4 />
      <Group6 />
      <Group5 />
      <Group7 />
      <div className="absolute h-[395px] left-[calc(41.67%+55px)] top-[3792px] w-[785px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="395" preserveAspectRatio="none" viewBox="0 0 785 395" width="785">
          <path d="M785 0L0 395H785V0Z" fill="#354EE7" id="Vector 2" />
        </svg>
      </div>
      <Group8 />
      <Footer />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Archivo:SemiBold',sans-serif] font-semibold h-[17px] justify-center leading-[0] left-[calc(33.33%+79px)] right-[calc(33.33%+58px)] text-[#71717a] text-[13px] top-[4280.5px] tracking-[0.52px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">ACREDITACIONES Y RECONOCIMIENTOS</p>
      </div>
      <BackgroundBorder />
      <BackgroundBorder1 />
      <BackgroundBorder2 />
      <BackgroundBorder3 />
      <BackgroundBorder4 />
    </div>
  );
}