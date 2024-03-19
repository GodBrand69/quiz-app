import QuizCreation from "@/components/forms/QuizCreation";

export const metadata = {
    title: "Quiz | Quizzzy",
    description: "Quiz yourself on anything!",
  };

type Props = {}

const Quiz = (props: Props) => {
    return (  
        <div className="">
           <QuizCreation />
        </div>
    );
}
 
export default Quiz;