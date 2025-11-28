
import { BookOpen, User, DollarSign, Users, Monitor, Compass, Globe, Home  } from 'lucide-react';
import images from '../../assets/images';
import { image } from 'framer-motion/client';
import { color } from 'framer-motion';


export const timelineData = [
  {
    year: 2012,
    title: 'First Steps',
    imageSrc: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: "Maecenas ipsum - dolor sit amet, consectetur adipiscing elit magna, molestie iaculis sit consectetur adipiscing elit magna, molestie iaculis sit amet commodo tellus consectetur elit tellus, luctus nec ullamcorper mattis nibh tellus. Mattis nibh tellus.",
  },
  {
    year: 2016,
    title: 'Expansion & Growth',
    imageSrc: 'https://images.pexels.com/photos/5212327/pexels-photo-5212327.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: "Proin posuere dapibus magna laoreet posuere. Lorem ipsum dolor sit amet, adipiscing elit. Proin dignissim. Maecenas commodo – tellus consectetur dapibus leo nibh tellus dapibus magna laoreet posuere. We expanded our team and moved to a larger office space.",
  },
  {
    year: 2020,
    title: 'Innovation Milestone',
    imageSrc: 'https://images.pexels.com/photos/7176461/pexels-photo-7176461.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: "Aenean vitae dolor ut massa mollis accumsan. Sed vel arcu ac urna facilisis auctor. Pellentesque ac ante in nisl fermentum sodales. We launched our flagship product, revolutionizing the industry and setting new standards.",
  },
];



// about next section data /./
export const featureData = [
  {
    icon: BookOpen,
    title: "STEM Skill Development (L3-L5)",
    description: "By promoting STEM skills at levels 3, 4, and 5, we equip beneficiaries, particularly those with low educational achievement, with essential transferable skills like critical thinking, lateral thinking, and problem-solving. This directly addresses the UK's skills shortage in critical areas like engineering, medical research, and healthcare.",
    image: images.skill1,
    alt: "A student using complex laboratory equipment.",
  },
  {
    icon: User,
    title: "Youth Empowerment & Guidance",
    description: "Young people often face unique challenges transitioning into adulthood. ISHEP offers tailored support to empower young individuals, including educational assistance, mentorship, and skill-building workshops designed to help them navigate personal growth and reach their full potential.",
    image: images.skill2,
    alt: "A mentor talking and advising a young person.",
  },
  {
    icon: Users,
    title: "Age Support & Community Well-being",
    description: "As we age, new challenges can arise, from health issues to financial struggles. We are committed to supporting our elder community members, ensuring they can live with dignity and comfort. Our services include assistance with daily living, financial aid, and social activities to combat isolation.",
    image: images.skill3,
    alt: "A group of older people participating in a social activity.",
  },
  {
    icon: DollarSign,
    title: "Interim Financial Hardship Relief",
    description: "Financial hardship can strike at any time, leaving individuals and families in uncertainty. ISHEP provides immediate relief and long-term solutions, which may include emergency financial assistance, budgeting workshops, and connections to employment opportunities to help regain financial stability.",
    image: images.skill4,
    alt: "A hand offering financial assistance or a document.",
  },
];


export const purposeData = [
  {
    title: "Social Enterprise Community Spots",
    content:
      "We aim to establish UK-wide social enterprise community hubs supporting young people aged 16–25 transitioning from child to adult social care. These centres will offer resources, guidance, social activities, and employment pathways while providing vocational and educational programs tailored to community needs.",
    imageAlt: "A group of people collaborating in a community setting.",
    imagePlaceholder: images.skill1,
  },

  {
    title: "Educational Programs and Racial Harmony Initiatives",
    content:
      "Our educational programs promote racial harmony through 24 interactive PRH lessons developed by EPHEP. These lessons help learners understand racism, engage in meaningful discussions, and build a more inclusive, tolerant community.",
    imageAlt: "A classroom setting with interactive learning.",
    imagePlaceholder:
      images.skill2,
  },

  {
    title: "Training, Work Experience & CPD",
    content:
      "Our vocational centre provides job-focused training and work experience for individuals aged 16–25, helping them gain practical skills for employment. We also deliver PRH workshops, seminars, webinars, and CPD-accredited programs in racial harmony, equality, diversity, and inclusion.",
    imageAlt: "Professional development workshop setting.",
    imagePlaceholder:
      images.skill3,
  },
];



export const whyData = [
  {
    title: "Who Requires PRH",
    content:
      "Many professional bodies now expect individuals to receive EDI training. ISHEP’s PRH course supports this by encouraging personal responsibility in career development and helping organisations maintain strong CPD standards.",
    icon: Users,
    imagePlaceholder:
      "https://placehold.co/600x400/e70c80/FFFFFF?text=Professional+Development",
  },

  {
    title: "Online Courses for Social Inclusion",
    content:
      "Our online courses offer flexible, affordable learning for individuals who may lack access to traditional education. By using digital platforms, we promote social inclusion and ensure learning is accessible to everyone.",
    icon: Monitor,
    imagePlaceholder:
      "https://placehold.co/600x400/9333ea/FFFFFF?text=E-Learning+Platform",
  },

  {
    title: "Long-Term Commitments & Expanding Services",
    content:
      "ISHEP is committed to long-term social welfare, including free mobile data, shelters, and housing support. While we focus on young people aged 16–25, we also aim to expand services for senior citizens through future community-based programs.",
    icon: Compass,
    imagePlaceholder:
      "https://placehold.co/600x400/00b5ad/FFFFFF?text=Social+Welfare+Goals",
  },
];




// philanthropist page data //
export const gridData = [
    {
        id: 1,
        tags: 'CHARITY',
        heading: 'The New Philanthropy',
        content: 'Philanthropy is more than donating money; everyday people are creating significant impact.',
        imageSrc: images.skill2 // Placeholder
    },
    {
        id: 2,
        tags: 'RECRUITMENT',
        heading: 'Mobile Strategy',
        content: 'Mobile-first recruitment enhances volunteer response, streamlining leadership placement across the UK.',
        imageSrc: images.skill3 // Placeholder
    },
    {
        id: 3,
        tags: 'IMPACT',
        heading: 'Instinct Programme',
        content: 'Instinct nurtures social impact by leveraging mobile tech to inspire future philanthropists.',
        imageSrc: images.skill4// Placeholder
    },
    {
        id: 4,
        tags: 'MINDSET',
        heading: 'Love of Humankind',
        content: 'Philanthropy is a mindset of caring deeply; dedicate time, skills, and resources to impact.',
        imageSrc: images.skill2// Placeholder
    },
];


// PHILANTHROPIST steps  //
// export const steps = [
// {
// id: 1,
// title: 'Identify Your Strengths',
// text: 'Reflect on skills, talents and time you can offer — not just money.',
// image: images.skill4,
// },
// {
// id: 2,
// title: 'Reflect on Talents',
// text: 'Consider professional and personal talents you can apply to causes.',
// image: images.skill2,
// },
// {
// id: 3,
// title: 'Assess Your Resources',
// text: 'Time, expertise, advocacy and funds — map what you can contribute.',
// image: images.skill3,
// },
// {
// id: 4,
// title: 'Find a Cause',
// text: 'Choose issues that match your values and where impact is possible.',
// image: images.skill4,
// },
// {
// id: 5,
// title: 'Align Strengths & Needs',
// text: 'Match your abilities to organisations and tasks that need them.',
// image: images.skill1,
// },
// {
// id: 6,
// title: 'Set Clear Goals',
// text: 'Define what success looks like — people reached, hours donated, etc.',
// image: images.skill2,
// },
// {
// id: 7,
// title: 'Take Action',
// text: 'Volunteer, advocate, or donate. Start small and stay consistent.',
// image: images.skill2,
// },
// {
// id: 8,
// title: 'Invest Energy',
// text: 'Commit long-term: lead, mentor, or help shape outcomes.',
// image: images.skill3,
// },
// ];


// philanthropistData //
export const philanthropySteps = [
  {
    id: 1,
    title: "Identifying Your Strengths",
    image: images.skill3,
    bgColor: "bg-[#afde00]", // light green
    description:
      "Embark on your philanthropic journey by reflecting on your unique skills, talents, and resources. Understand what you can contribute—time, expertise, advocacy, or funds.",
  },
  {
    id: 2,
    title: "Assessing Your Resources",
    image: images.skill4,
    bgColor: "bg-[#e70f81]", // light orange
    description:
      "Identify the resources you can offer such as time, professional expertise, advocacy voice, or financial contributions to meaningfully support your chosen cause.",
  },
  {
    id: 3,
    title: "Contributing to Your Chosen Cause",
    image: images.skill3,
    bgColor: "bg-[#ff8204]", // light blue
    description:
      "Match your strengths with the needs of the cause. Set goals, stay flexible, and decide how you want to contribute through volunteering, leadership, or support.",
  },
  {
    id: 4,
    title: "Taking Action",
    image: images.skill2,
    bgColor: "bg-[#afde00]", // light pink
    description:
      "Engage actively—be consistent, collaborate, invest your energy, and consider leadership roles to make long-term, impactful contributions.",
  },
];


// PHR education //
export const newsInsights = [
  {
    title: "Equality, Diversity, and Inclusion: The Foundational Concepts",
    tags: ["EDI", "FOUNDATION"],
    date: "November 20, 2025",
    imageUrl: images.skill2,
    imageAlt: "Three diverse hands interlocking",
  },
  {
    title: "Understanding Racism: Eradicating the Root Cause of Inequality",
    tags: ["EDUCATION", "LESSONS"],
    date: "October 15, 2025",
    imageUrl: images.skill2, // Image representing learning/discussion
    imageAlt: "People discussing around a table",
  },
  {
    title: "Why Inclusion Matters: Creating a Sense of Belonging and Community",
    tags: ["WORKPLACE", "STRATEGY"],
    date: "September 1, 2025",
    imageUrl: images.skill2, // Image representing professional connection
    imageAlt: "Team members connecting in an office",
  },
  {
    title: "Racial Harmony Education: Challenging Preconceived Notions",
    tags: ["ETHICS", "COURSE"],
    date: "August 24, 2025",
    imageUrl: images.skill2, // Image representing social justice
    imageAlt: "A scale representing justice and fairness",
  },
];

// benifits //
export const benefits = [
        { label: "Social Cohesion", description: "Contributes to a more united and cohesive society." },
        { label: "Reduced Discrimination", description: "Encourages a reduction in discriminatory practices and prejudices." },
        { label: "Enhanced Cultural Understanding", description: "Nurtures a deeper understanding of different cultures and traditions." },
        { label: "Economic Growth", description: "A diverse and harmonious society can lead to increased economic productivity." },
        { label: "Social Justice", description: "Supports the pursuit of social justice for all individuals, irrespective of their race." },
    ];


export const giftData = [
  {
    title: "Last Will & Testament",
    subtitle: "Pecuniary Gift",
    description:
      "A pecuniary gift is a fixed sum of money left to the ISHEP Foundation in your will. This type of gift is straightforward and allows you to specify the exact amount you wish to donate. Pecuniary gifts are a popular choice for many individuals as they provide clarity and simplicity, ensuring that your wishes are honored precisely and without complications.",
    img: images.harmony1,
  },
  {
    title: "Last Will & Testament",
    subtitle: "Residuary Gift",
    description:
      "A residuary gift is a percentage of your estate left to the ISHEP Foundation after all other bequests and expenses have been paid. This type of gift is particularly beneficial as it allows your donation to grow in line with the value of your estate, ensuring that your legacy has an even greater impact over time and continues to support meaningful causes.",
    img: images.harmony2,
  },
  {
    title: "Last Will & Testament",
    subtitle: "Specific Gift",
    description:
      "A specific gift is a particular item or asset you leave to the ISHEP Foundation in your will. This could include property, shares, artwork, or other valuable possessions. Specific gifts are a wonderful way to support the foundation while preserving the sentimental or financial value of items that hold personal significance to you.",
    img: images.harmony3,
  },
  {
    title: "Last Will & Testament",
    subtitle: "Contingent Gift",
    description:
      "A contingent gift is a donation that only takes effect if certain conditions are met, such as if other beneficiaries are unable to inherit. This ensures that your estate is distributed according to your wishes under all circumstances, providing peace of mind and continued support for the ISHEP Foundation.",
    img: images.harmony4,
  },
];


// harmony card data //
export const harmonyData = [
  {
    "id": 1,
    "title": "The Power of a Gift in Your Will",
    "image": images.harmonyNext1,
    "content": "One of the most profound ways to ensure your legacy endures is by leaving a gift in your will to a cause close to your heart, like the ISHEP Foundation. Your generosity will support our commitment to promoting racial harmony through Education, STEM & Cyber security training, Social Welfare, and Prosperity projects.",
  },
  {
    "id": 2,
    "title": "A Beacon of Hope and Resilience",
    "image": images.harmonyNext2,
    "content": "The ISHEP (Integrated Solutions Helping Everyday People) Foundation is dedicated to improving lives and building a fairer city. Our mission is rooted in the belief that everyone deserves access to quality of life and the opportunity to strive, thrive, and prosper, fostering greater will for harmony.",
  },
  {
    "id": 3,
    "title": "Empowering Change Through Education",
    "image": images.harmonyNext3,
    "content": "Race and poverty are clearly linked in the UK: Black people are nearly twice as likely to be in poverty as white people. ISHEP PRH – Education unlocks social cohesion by providing dedicated bespoke resources, empowering individuals with the knowledge and skills they need to succeed.",
    "statistic": true
  },
  {
    "id": 4,
    "title": "Building Sustainable Prosperity",
    "image": images.harmonyNext4,
    "content": "Our Prosperity Projects address the root causes of poverty and inequality by focusing on overall well-being, sustainable economic opportunities, and social justice. This investment helps build a more equitable, prosperous world, leaving a lasting, inspiring legacy for future generations.",
  }
];

// launch data //
export const launchData = [
  {
    id: 1,
    title: "Racial Harmony: Building Bridges",
    paragraphs: [
      "ISHEP promotes racial harmony by encouraging respect, equality, and unity across diverse communities.",
      "Through dialogues, cultural exchanges, and advocacy, the foundation breaks stereotypes and strengthens understanding."
    ],
    image: images.launch1,
    align: "left",
  },
 {
  id: 2,
  title: "Engaging the Community: Meaningful Events",
  paragraphs: [
    "ISHEP hosts community events to inspire awareness and support.",
    "Festive Dining and entertainment nights celebrate resilience and culture."
  ],
  image: images.launch2,
  align: "right",
},
  {
    id: 3,
    title: "Leadership: A Team Driving Change",
    paragraphs: [
      "ISHEP’s mission is guided by a strong leadership team led by Founder and Chair Paul Dixon.",
      "Ebonie Senior and Melecia Senior add expertise in education, social welfare, and community engagement.",
      "The foundation upholds high standards, welcoming only those aligned with its values."
    ],
    image: images.launch3,
    align: "left",
  },
  {
    id: 4,
    title: "Join the Movement",
    paragraphs: [
      "Anyone committed to harmony and justice can help further ISHEP’s mission.",
      "Support through volunteering, donating, partnering, or staying connected online."
    ],
    image: images.launch4,
    align: "right",
  },
];




// team members //
export const teamMembers = [
  {
    id: 1,
    name: "PAUL DIXON",
    title: "Founder and Chair",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    description: "Paul volunteered for roles that highlighted his strong leadership and commitment. He enlisted with the 7th Battalion, The Rifles, to become a Non-Commissioned Officer, weapons instructor, and conducting static small arms ranges. A few years Later, he joined the Army Cadet Force, as a staff instructor before securing the position as the Sector Sports Officer.\n\nBeyond his professional life as Environmental and Anti social behaviours officer, Paul's hobbies reflect his creativity and passion. He is an avid baker, finding joy in crafting delicious treats, a talent appreciated by his family, friends, and colleagues amongst other attributes. His creative outlet allows him to express his artistic side, designing the ISHEP logo, which represents people of different cultures integrating.\n\nPaul is also deeply committed to environmental sustainability, taking significant steps to reduce his carbon footprint, such as transitioning to an electric vehicle and becoming well-versed in the adverse and favourable aspects of owning an EV. In his own words, he said, \"I use what I have for the greater good to help the greatest number of people through Education – Training and Social Welfare.\""
  },
  {
    id: 2,
    name: "EBONIE SENIOR",
    title: "Vice Chair",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    description: "\" Learning can not take place in chaos \"\n- Ebonie Senior 2024\n\nEbonie Senior is an accomplished English teacher with over 11 years of experience, dedicated to inspiring a love of language and literature in her students. Passionate about writing, reading, and exploring the intricacies of the human psyche, she integrates these interests into her teaching to cultivate critical thinking and empathy.\n\nOutside the classroom, Ebonie serves as the Vice Chair of the ISHEP Charity, an organisation devoted to promoting racial harmony through education and professional development.\n\nRooted in her Jamaican heritage and driven by a passion for equity and inclusion, she works tirelessly to create transformative learning experiences and promote meaningful social change."
  },
  {
    id: 3,
    name: "MELECIA SENIOR",
    title: "Secretary",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    description: "Melecia is a dedicated physics teacher with nearly 10 years of experience, passionate about not just education but also inspiring change in the lives of those around her. She believes in the power of critical thinking, creativity, and mentorship to help others grow and reach their full potential.\n\nBeyond the classroom, Melecia is an active member of her local church's youth group, where she supports and guides young people in their personal and spiritual journeys. With a background in medical physics and a love for problem-solving, she enjoys exploring the intersection of science, creativity, and human connection.\n\nWhether through teaching, coding, singing, or painting, Melecia is driven by a deep desire to uplift others and create meaningful change in her community. She strives to make learning, and life, an inspiring and transformative experience for all."
  },
  {
    id: 4,
    name: "GLORIA BONDE",
    title: "Board Member",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    description: "Gloria works in the Adult Social Care sector, where she brings over six years of experience supporting individuals impacted by domestic abuse and sexual violence. With a background in psychology and criminology, Gloria is deeply committed to advocating for vulnerable communities.\n\nOriginally from the Democratic Republic of Congo, Gloria spent her formative years in Italy and has called the UK home for over a decade. Her multicultural background gives her a unique perspective and a deep sensitivity to social equity, inclusion, and the intersections of identity and justice.\n\nKnown for her calm presence and active listening, Gloria is driven by a strong sense of purpose shaped by her Christian faith. She believes in walking alongside others with empathy and grace, ensuring every person is treated with dignity.\n\nOutside of work, Gloria enjoys staying active—she loves long walks, learning new skills, and spending quality time with her family."
  }
];


// datadevice Data //

export const DataDeviceData = [
  {
    title: 'How To Import & Export Avada Builder Library Content',
    excerpt: 'If you’ve ever built something great in Avada and thought, “I wish I could use this on another site,” —…',
    publishedOn: 'November 10th, 2025',
    category: 'Avada Builder',
    image: images.dataDevice1,
    borderColor: 'border-custom-green',
    ringColor: 'ring-custom-green',
  },
  {
    title: '12 Avada Studio Content Blocks For Web Design [Collection 33]',
    excerpt: 'Avada Studio is an expansive library of multi-use content blocks professionally designed to speed up your web design workflow. In…',
    publishedOn: 'November 4th, 2025',
    category: 'Studio',
    image: images.dataDevice2,
    borderColor: 'border-custom-pink',
    ringColor: 'ring-custom-pink',
  },
  {
    title: 'How To Use Avada Dynamic Data For Websites',
    excerpt: 'If you want to elevate your Avada websites, mastering dynamic data is essential. In a previous article, we looked at…',
    publishedOn: 'October 27th, 2025',
    category: 'Avada',
    image: images.dataDevice3,
    borderColor: 'border-custom-orange',
    ringColor: 'ring-custom-orange',
  },
];

// clients say //
export const testimonials = [
  {
    quote:
      'You will work with new and interesting people as part of a friendly and professional team, building and supported by a national network.',
    name: 'Trustee 1',
    title: 'Current Trustee',
    image: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=T1', // Placeholder Image
  },
  {
    quote:
      'Your life experience is as valuable as any formal skills or qualifications.',
    name: 'Trustee 2',
    title: 'Former Trustee',
    image: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=T2', // Placeholder Image
  },
  {
    quote:
      'What the staff and volunteers will achieve is incredible, and you will get great personal satisfaction from being involved as a trustee.',
    name: 'Trustee 3',
    title: 'Advisory Board',
    image: 'https://via.placeholder.com/150/008000/FFFFFF?text=T3', // Placeholder Image
  },
];


// managment menu //
export const navMenus = [
    { title: "About", points: ["Mission", "Vision", "History"] },
    { title: "Work", points: ["Projects", "Impact", "Reports"] },
    { title: "Get Involved", points: ["Volunteer", "Donate", "Trustees"] },
    { title: "Contact", points: ["Email", "Events", "Media"] },
  ];



  export const volunteerData = [
  {
    title: "Make a Real Difference",
    icon: "🤝", // Use a real icon library like Heroicons in production
    summary: "Directly contribute to the well-being and success of young people in need.",
    content: ["Support young people in improving their lives.", "Work with a diverse and dedicated team committed to fairness and social justice."],
    accentColor: "text-[#E70C80]",
  },
  {
    title: "Grow Your Future",
    icon: "🌱",
    summary: "Enhance your professional and personal development through hands-on experience.",
    content: ["Gain invaluable hands-on experience and training.", "Connect with like-minded individuals and expand your network."],
    accentColor: "text-[#FF8000]",
  },
  {
    title: "Join the Movement",
    icon: "🎯",
    summary: "Apply to join ISHEP and help us strengthen our work and broaden our reach.",
    content: ["Volunteers particularly in **London**, but **welcome applicants nationwide**.", "Seeking applicants from **underrepresented groups** to enrich our organisation."],
    accentColor: "text-[#AFDE00]",
    cta: { text: "Apply Now", color: "bg-[#E70C80]" }
  },
];