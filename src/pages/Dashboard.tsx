import AuthNavbar from "@/ui/AuthNavbar";
import AuthLayout from "@/Layout/AuthLayout"
import DashboardUI from "@/ui/Dashboard";

export default function Dashboard() {
    return (
        <>
            <AuthLayout>
                <AuthNavbar />
                <DashboardUI />
            </AuthLayout>
        </>
    )
}