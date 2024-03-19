import HistoryCard from "@/components/dashboard/HistoryCard";
import QuizMeCard from "@/components/dashboard/QuizMeCard";
import RecentActivityCard from "@/components/dashboard/RecentActivityCard";
import React from "react";
import HotTopicsCard from "./HotTopicsCard";

type Props = {};

export const metadata = {
    title: "Dashboard | Quizzzy",
    description: "Quiz yourself on anything!",
};

const Dashboard =  (props: Props) => {
    return (
        <main className="p-8 mx-auto max-w-7xl">
            <div className="flex items-center">
                <h2 className="mr-2 text-3xl font-bold tracking-tight">Dashboard</h2>
                {/* <DetailsDialog /> */}
            </div>

            <div className="grid gap-4 mt-4 md:grid-cols-2">
                <QuizMeCard />
                <HistoryCard />
            </div>
            <div className="grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-7">
                <HotTopicsCard />
                <RecentActivityCard />
            </div>
        </main>
    );
};

export default Dashboard;