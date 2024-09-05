import DashBoardPage from "@/components/DashBoardPage";
import LoginPage from "@/components/LoginPage";
import Main from "@/components/Main";
export const metadata = {
  title: "Moodly · Dashboard",
  description: "Track your daily mood every day of the year",
};

export default function DashboardPage(){
    const isAurthenticated = true;
    let  children = (<LoginPage />)
    if(isAurthenticated){
        children=(
            <DashBoardPage/>
        )
    }
    return(
        <Main>
            {children}
        </Main>
    )
}