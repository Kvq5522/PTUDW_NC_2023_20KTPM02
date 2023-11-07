import { SignUpForm } from "@/components/Form/AuthForm/SignUpForm"

export default function SignUp() {
    return (
        <div className="flex justify-center items-center bg-gradient-to-r min-h-screen w-screen from-[#2E3192] to-[#1BFFFF]">
            <div className="bg-white w-[50vw] p-3 rounded h-[50vh]">
                <SignUpForm className="h-full flex justify-center items-center"/>
            </div>
            
        </div>
    )
};