import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 flex items-center justify-center p-6">
      <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-3xl shadow-xl max-w-3xl p-10 text-gray-800">
        <h1 className="text-5xl font-extrabold mb-8 text-center text-gradient bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-600">
          스마트 메모 서비스에 오신 것을 환영합니다!
        </h1>

        <p className="text-lg mb-6 leading-relaxed">
          자연어로 할 일을 입력하면 AI가 똑똑하게 정리해주는 혁신적인 메모 앱입니다.  
          회원가입 후, 간편하게 시작해보세요!
        </p>

        <ul className="list-disc list-inside space-y-3 mb-8 text-gray-700">
          <li>이메일과 비밀번호로 간편하게 회원가입 및 로그인</li>
          <li>자연어 입력으로 빠르게 메모 생성</li>
          <li>메모 목록에서 손쉬운 관리 및 상태 변경</li>
          <li>로컬 스토리지에 안전하게 저장되어 언제든 확인 가능</li>
        </ul>

        <p className="text-center text-indigo-700 font-semibold">
          좌측 메뉴에서 회원가입 혹은 로그인을 선택하여 시작하세요!
        </p>
      </div>
    </div>
  );
}
