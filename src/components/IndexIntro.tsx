import { Button } from "@/components/ui/button"
import { Link } from "@tanstack/react-router"

export default function IndexIntro() {
  return (
    <>
      <h1 className='font-[Kurale] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-10 text-center'>
        Hi, I'm Claes Nymand Nilsson
      </h1>
      <div className='max-w-3xl mx-auto mt-8'>
        <div className='flex'>
          <img
            src='/profile-pic-200.webp'
            width='80'
            height='80'
            className='h-20 w-20 rounded-[4rem] mr-5'
          />
          <p className=''>
            I am Danish biotech scientist with a thousand side-hobbies. I have a
            passion for{" "}
            <Link to='/photography'>
              <u>photography</u>
            </Link>
            ,{" "}
            <Link to='/software'>
              <u>coding</u>
            </Link>
            , biotech and sports, amongst other things. I share my thoughts on
            those hobbies and the world at large through my{" "}
            <Link to='/blog'>
              <u>blog</u>
            </Link>
            . Come follow along, when I dig into photo composition, python
            package management, javascript framework-wars and coffee tricks with
            diminishing returns.
          </p>
        </div>
        <div className='flex min-w-full justify-center mt-6'>
          <Link to='/blog'>
            <Button className='align-center px-8 py-4'>
              Straight to the blog!
            </Button>
          </Link>
        </div>
      </div>
    </>
  )
}
