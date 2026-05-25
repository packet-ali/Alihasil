import BottomNavbar from "../components/navbar/BottomNavbar";
import TopNavbar from "../components/navbar/TopNavbar";

export default function MainLayout({ children }) {
  return (
      <div className="min-h-screen bg-[#F6FFF7]">

            <TopNavbar />

                  <div className="pb-24 max-w-7xl mx-auto">
                          {children}
                                </div>

                                      <BottomNavbar />
                                          </div>
                                            );
                                            }