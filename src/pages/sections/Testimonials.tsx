import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import SectionHeader from "../components/SectionHeader";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    imageSrc: avatar1.src,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool. ",
    imageSrc: avatar2.src,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: avatar3.src,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: avatar5.src,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: avatar7.src,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: avatar8.src,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: avatar9.src,
    name: "Casey Harper",
    username: "@casey09",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

interface TestimonialType {
  text: string;
  imageSrc: string;
  name: string;
  username: string;
}

interface TestimonialsTypes {
  testimonials: TestimonialType[];
  duration?: number;
  classes?: string
}

function TestimonialColumn({ testimonials, duration, classes }: TestimonialsTypes) {
  return (
    <motion.ul
      initial={{ translateY: "20%" }}
      animate={{ translateY: "-30%" }}
      transition={{
        repeat: Infinity,
        ease: "linear",
        duration: duration || 13,
      }}
      className={`max-w-sm flex flex-col gap-8 pb-8 ${classes}`}
    >
      {[...testimonials, ...testimonials].map((testimonial) => (
        <li
          className="max-w-xs flex items-start justify-center flex-col gap-4 p-10 shadow-[0_0_15px_1px_rgba(0,0,0,0.1)] rounded-3xl"
          key={testimonial.name}
        >
          <p>{testimonial.text}</p>
          <div className="flex items-center gap-1.5">
            <img
              src={testimonial.imageSrc}
              alt={`${testimonial.name}'s profile picture`}
              className="h-11 w-auto"
            />
            <div>
              <span className="block text-xl leading-5">
                {testimonial.name}
              </span>
              <span className="text-xs">{testimonial.username}</span>
            </div>
          </div>
        </li>
      ))}
    </motion.ul>
  );
}

export default function Testimonials() {
  return (
    <section className="container my-20">
      <SectionHeader
        parentClasses="items-center text-center"
        small="Testimonials"
        main="What our users say"
        mainClasses="text-[34px] md:text-6xl lg:text-8xl"
        p="From intuitive design to powerful features, our app has become an essential tool for users around the world."
        pClasses="max-w-xs md:max-w-md lg:max-w-lg lg:text-2xl lg:leading-6"
      />
      <div className="h-[40rem] flex items-center justify-center gap-10 overflow-y-hidden mt-14 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] text-black">
        <TestimonialColumn testimonials={firstColumn} />
        <TestimonialColumn testimonials={secondColumn} duration={15} classes="hidden md:flex" />
        <TestimonialColumn testimonials={thirdColumn} duration={14} classes="hidden lg:flex"/>
      </div>
    </section>
  );
}
