import { Label } from '@/components/ui/label';

const Homepage = () => {
  return (
    <div className="bg-footer h-fit bg-cover bg-no-repeat py-[72px] text-center md:py-[159px]">
      <Label className="text-2xl">My PM NextJS</Label>
      <p className="p-20 text-xl font-thin italic">
        This is my personal project called `Local Project Management` based on a project that I used to join at an old
        company. This project is still being developed continuously so that I can make a better profile for my CV and
        improve my technical skills.
      </p>
      <p className="p-10 text-base font-bold italic text-[#cc3333]">Author: My Toan Dep Trai</p>
    </div>
  );
};

export default Homepage;
