import React from "react";
import { Outlet, NavLink } from "react-router-dom";

export default function RootLayout() {
  const navItems = [
    { path: "/signup", label: "회원가입" },
    { path: "/login", label: "로그인" },
    { path: "/", label: "서비스 소개 페이지" },
    { path: "/create-memo", label: "메모 생성 페이지" },
    { path: "/memolist", label: "메모 목록" },
    { path: "/chat", label: "채팅" },
    { path: "/stream-chat", label: "스트리밍 응답 채팅" },
  ];

  const activeNavItemClass = "border-b-2 border-blue-500 text-blue-700";

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* 상단 네비게이션바 */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `inline-block py-4 text-sm font-medium ${
                      isActive ? activeNavItemClass : "text-gray-600 hover:text-blue-500"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* 메인 컨텐츠 */}
      <main className="flex-1 max-w-6xl mx-auto w-full p-6">
        <Outlet />
      </main>
    </div>
  );
}
