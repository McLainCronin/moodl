import Main from '@/components/Main';
import Login from '@/components/Login';

export const metadata = {
    title: "Moodl ⋅ Dashboard",
}

export default function DashboardPage() {
    const isAuthenticated = false

    const children = (
        <Login />
    )
    
    return (
        <Main>
            {children}
        </Main>
    )
}