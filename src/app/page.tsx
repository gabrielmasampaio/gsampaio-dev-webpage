import Button from '@mui/material/Button';
import SvgIcon from '@mui/material/SvgIcon';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import Image from 'next/image';
import { faArrowRight, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeSvgIcon } from '@/components/FontAwesomeSvgIcon/FontAwesomeSvgIcon';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start max-w-4xl">
        <h1 className="text-6xl font-black">
          Crafting Digital Solutions Through Code
        </h1>

        <div className="flex gap-2 mt-5">
          <Button
            variant="contained"
            color="warning"
            startIcon={<FontAwesomeSvgIcon icon={faCodeBranch} />}
            href="/projects"
            size="large"
          >
            View My Projects
          </Button>

          <Button
            variant="outlined"
            color="info"
            startIcon={<SvgIcon component={FileOpenIcon} />}
            href="/gabriel-sampaio-resume.pdf"
            target="_blank"
            size="large"
          >
            View My Resume
          </Button>
        </div>

        <h2 className="text-4xl font-black self-center mt-22">
          Let&apos;s Connect!
        </h2>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="flex justify-center md:justify-end">
            <Image
              src="/profile-pic.jpeg"
              alt="profile"
              width={1920}
              height={1920}
              className="w-1/2 md:w-full h-auto rounded-md"
            />
          </div>
          <div className="min-h-full flex flex-col md:text-left justify-around">
            <div>
              My name is Gabriel (Gabe) Sampaio, and I am a Fullstack Developer,
              with a focus on large scale webapps using Java and React
            </div>
            <div>
              I am currently available for freelance work and open to
              collaborations. Please feel free to reach out!
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
              arcu
            </div>
            <div className="mt-3 font-extrabold text-[info] flex items-center gap-2">
              More about me
              <FontAwesomeSvgIcon icon={faArrowRight} />
            </div>
            <div className="flex gap-4 mt-4 text-3xl">
              <FontAwesomeSvgIcon icon={faLinkedin} />
              <FontAwesomeSvgIcon icon={faGithub} />
              <FontAwesomeSvgIcon icon={faYoutube} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
