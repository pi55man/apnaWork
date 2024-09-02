import BlurFade from "@/components/magicui/blur-fade";
import Link from "next/link";

export function FadeCard() {
  return (
    <section id="header" className="flex gap-7 max-w-[1400px] mx-auto mt-10 justify-center ">
      <BlurFade delay={0.25} inView>
        <Link href="/webdev"><div className="flex items-center text-centre border rounded-lg border-gray-300 bg-gray-50 w-[240px] h-[90px] px-2 py-2">
            <h2 className="text-3xl font-bold text-center tracking-tighter">
          Web Development
        </h2>
        </div>
        </Link>
      </BlurFade>

      <BlurFade delay={0.25 * 2} inView>
       <Link href="/uiux"> <div className="flex items-center text-centre border rounded-lg border-gray-300 bg-gray-50  w-[240px] h-[90px] px-2 py-2">
            <h2 className="text-3xl font-bold text-center tracking-tighter mx-auto ">
          UI/UX
        </h2>
        </div>
        </Link>
      </BlurFade>

      <BlurFade delay={0.25 * 3} inView>
        <Link href="/mobiledev"><div className="flex items-center text-centre border rounded-lg border-gray-300 bg-gray-50 w-[240px] h-90px px-2 py-2">
            <h2 className="text-3xl font-bold text-center tracking-tighter ">
          Mobile Development
        </h2>
        </div>
        </Link>
      </BlurFade>

      <BlurFade delay={0.25 * 4} inView>
        <Link href="/datascience"><div className="flex items-center text-centre border rounded-lg border-gray-300 bg-gray-50 w-[240px] h-[90px] px-2 py-2">
            <h2 className="text-3xl font-bold text-center tracking-tighter mx-auto">
          Data Science
        </h2>
        </div>
        </Link>
      </BlurFade>

      <BlurFade delay={0.25 * 5} inView>
        <Link href="/govcontract"><div className="flex items-center text-centre border rounded-lg border-gray-300 bg-gray-50 w-[240px] h-[90px] px-2 py-2">
            <h2 className="text-3xl text-center mx-auto font-bold tracking-tighter">
          Recommended
        </h2>
        </div>
        </Link>
      </BlurFade>

    </section>
  );
}
