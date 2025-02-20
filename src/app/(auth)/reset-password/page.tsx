import Image from "next/image";
import ResetPasswordForm from "./_components/ResetPasswordForm";

const ResetPasswordPage = () => {
    return (
        <div className="w-screen h-screen  content-center bg-[url('/bg-dark.jpg')] bg-cover bg-center p-4" >
            <div className="bg-white rounded-xl max-w-xl mx-auto p-8 shadow-2xl" >
                <header className="mb-6">
                    <div className="flex items-center justify-center">
                        <Image src={'/logo.svg'} alt="logo" width={48} height={48} />
                    </div>
                    <h2 className="text-2xl font-semibold text-center">Reset password</h2>
                </header>
                <ResetPasswordForm />
            </div>
        </div>
    )
}

export default ResetPasswordPage;