import Image from "next/image";
import logo from "@/asset/logo/logo.png";

export default function Footer() {
  return (
    <div className="p-6 border-t border-[#505050] space-y-3 font-medium text-xs md:text-sm mb-16 md:mb-0">
      <Image src={logo} alt="Logo" />
      <p>MOA TV 다시보기 서비스 입니다</p>
      <p>
        MOA TV 링크 제공 사이트입니다. 이 웹 사이트에는 음악, 비디오, 멀티미디어
        파일을 저장하지 않습니다. 또한 이 사이트에서 제공 되는 콘텐츠는 링크 된
        콘텐츠 이므로 저작권, 적법성, 정확성, 규정 준수 또는 기타 측면에 대해
        TV888 책임이 없습니다.저작권 등 법적 문제가 있는 경우 적절한 미디어 파일
        소유자 또는 호스팅 업체에 문의하십시오. <br />
        연락처: @telegaram
      </p>
      <p className="block md:hidden">Copyright © 티비몬 All right reserved.</p>
    </div>
  );
}
