import { ArrowLeftIcon } from "./icon";
export const CreateAccount = () => {
  return (
    <div className="flex w-[1440px] gap-10">
      <div className="flex flex-col justify-center ml-[100px]">
        <div className="w-fit flex flex-col  gap-3">
          <ArrowLeftIcon />
          <div className="flex flex-col  ">
            <p className="w-fit text-[24px] font-bold">Create Your Account</p>
            <p> Sign up to explore your favorite dishes.</p>
          </div>

          <input
            type="email"
            placeholder="Enter your email address"
            className="border rounded-xs border-b-gray-600 w-[416px]"
          />
          <button className="bg-gray-400 rounded w-full">Let's Go</button>
          <div className="flex gap-6">
            <p className="text-gray-400">Already have an account? </p>
            <p className="text-blue-500"> Log in </p>
          </div>
        </div>
      </div>
      <div className="mt-10 flex justify-center items-center h-[904px] w-[856px] ">
        <img src="delivery.jpg" className="h-full w-full" />
      </div>
    </div>
  );
};
