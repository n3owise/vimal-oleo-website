import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
  {
    year: '1980',
    title: 'Where It All Started',
    description:
      'The journey began with a focused oleochemical supply practice built on trust, product knowledge, and dependable service.',
    tagline: 'START SMALL. THINK LONG.',
  },
  {
    year: '1995',
    title: 'Exploring the Craft',
    description:
      'Product coverage expanded across fatty acids, glycerine, soap inputs, and materials used by manufacturing-led customers.',
    tagline: 'LEARN BY SUPPLYING.',
  },
  {
    year: '2005',
    title: 'Finding Focus',
    description:
      'A clearer direction emerged around consistent sourcing, authorised distribution, and practical support for industrial buyers.',
    tagline: 'CLARITY DRIVES PROGRESS.',
  },
  {
    year: '2015',
    title: 'Building Consistency',
    description:
      'Dedicated warehousing and stronger supplier relationships helped improve material availability and delivery reliability.',
    tagline: 'CONSISTENCY BUILDS TRUST.',
  },
  {
    year: '2020',
    title: 'Solidifying the Core',
    description:
      'The company strengthened its core categories while continuing to serve personal care, pharma, PVC, coatings, textile, and speciality chemical sectors.',
    tagline: 'STRONG FOUNDATIONS SCALE.',
  },
  {
    year: '2024',
    title: 'Gaining Speed',
    description:
      'Operational focus increased around faster fulfilment, clearer communication, and dependable customer support.',
    tagline: 'MOMENTUM COMPOUNDS.',
  },
  {
    year: '2026',
    title: 'Pushing Boundaries',
    description:
      'Vimal Oleo Chemicals continues to build reliable oleochemical supply for manufacturers that need practical, long-term partners.',
    tagline: 'SUPPLY BEYOND EXPECTATIONS.',
  },
];

export function AboutTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);
  const bgLineRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (leftContentRef.current) {
        gsap.from(leftContentRef.current.children, {
          autoAlpha: 0,
          y: 30,
          duration: 1,
          stagger: 0.15,
          ease: 'power2.out',
        });
      }

      gsap.set([bgLineRef.current, progressLineRef.current], {
        autoAlpha: 0,
        scaleY: 0,
        transformOrigin: 'top center',
      });

      const setActiveCard = (activeIndex: number) => {
        cardRefs.current.forEach((card, index) => {
          const dot = dotRefs.current[index];
          if (!card || !dot) return;

          if (activeIndex !== -1 && index <= activeIndex) {
            gsap.to(card, {
              backgroundColor: '#000000',
              duration: 0.35,
              ease: 'power2.out',
            });
            gsap.to(dot, {
              backgroundColor: '#ff4d13',
              duration: 0.25,
            });
          } else {
            gsap.to(card, {
              backgroundColor: '#a8a8a8',
              duration: 0.35,
              ease: 'power2.out',
            });
            gsap.to(dot, {
              backgroundColor: '#ffffff',
              duration: 0.25,
            });
          }
        });
      };

      ScrollTrigger.create({
        trigger: '.about-timeline-container',
        start: 'top 85%',
        onEnter: () => {
          gsap.to([bgLineRef.current, progressLineRef.current], {
            autoAlpha: 1,
            duration: 0.8,
            ease: 'power2.out',
          });
        },
        onLeaveBack: () => {
          gsap.to([bgLineRef.current, progressLineRef.current], {
            autoAlpha: 0,
            duration: 0.5,
          });
        },
      });

      gsap.to(progressLineRef.current, {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '.about-timeline-container',
          start: 'top 40%',
          endTrigger: cardRefs.current[cardRefs.current.length - 1],
          end: 'top 54%',
          scrub: true,
        },
      });

      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        const dot = dotRefs.current[index];

        gsap.set(card, {
          autoAlpha: 0,
          x: -70,
          y: 80,
          rotateY: -10,
          rotateX: 3,
          scale: 0.96,
          transformPerspective: 1200,
          transformOrigin: 'left center',
        });

        if (dot) {
          gsap.set(dot, {
            autoAlpha: 0,
            backgroundColor: '#ffffff',
            borderColor: '#ff4d13',
          });
        }

        gsap.to(card, {
          autoAlpha: 1,
          x: 0,
          y: 0,
          rotateY: 0,
          rotateX: 0,
          scale: 1,
          scrollTrigger: {
            trigger: card,
            start: 'top 95%',
            end: 'top 65%',
            scrub: 0.8,
          },
        });

        if (dot) {
          gsap.to(dot, {
            autoAlpha: 1,
            scrollTrigger: {
              trigger: card,
              start: 'top 95%',
              end: 'top 65%',
              scrub: 0.8,
            },
          });
        }

        ScrollTrigger.create({
          trigger: card,
          start: 'top 54%',
          end: 'bottom 54%',
          onEnter: () => setActiveCard(index),
          onEnterBack: () => setActiveCard(index),
          onLeave: () => {
            if (index === cardRefs.current.length - 1) setActiveCard(index);
          },
          onLeaveBack: () => {
            if (index === 0) setActiveCard(-1);
            else setActiveCard(index - 1);
          },
        });
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about-timeline" className="w-full bg-white px-4 pb-[64px] pt-[148px] sm:px-6 sm:pt-[164px] lg:px-8 lg:pt-[184px]">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-0 lg:flex-row lg:gap-20">
          <div className="relative mb-12 w-full lg:mb-0 lg:w-[400px]">
            <div ref={leftContentRef} className="self-start lg:sticky lg:top-[164px]">
              <h1 className="mb-8 font-display text-[clamp(2.75rem,5vw,4rem)] font-black uppercase leading-[0.92] tracking-tighter text-slate-900">
                Meet Vimal<br />
                <span className="italic text-primary">Group</span>
              </h1>
              <div className="space-y-5 text-base font-medium leading-relaxed text-text-slate sm:text-lg lg:max-w-[400px]">
                <p>
                  Vimal Oleo Group has earned a strong reputation as a trusted name in the oleochemicals industry. Today, we are recognized among the leading importers, suppliers, and distributors, serving a wide range of industries with a diverse product portfolio.
                </p>
                <p>
                  With a focus on quality, reliability, and timely service, we strive to exceed customer expectations and build lasting partnerships based on trust and value.
                </p>
              </div>
            </div>
          </div>

          <div className="about-timeline-container relative w-full pt-[300px] md:pt-[500px] lg:w-[800px] lg:pt-[700px]">
            <div className="pointer-events-none absolute bottom-[calc(30vh+245px)] left-2 top-0 z-0 w-px">
              <div ref={bgLineRef} className="invisible absolute inset-0 bg-[#111111]/10 opacity-0" />
              <div ref={progressLineRef} className="invisible absolute inset-0 origin-top scale-y-0 bg-[#111111] opacity-0" />
            </div>

            <div className="relative z-10 flex flex-col gap-4 pb-[30vh]">
              {timelineData.map((item, index) => (
                <div key={item.title} className="relative flex w-full items-start">
                  <div
                    ref={(el) => {
                      dotRefs.current[index] = el;
                    }}
                    className="absolute left-0 top-10 z-10 h-4 w-4 rounded-full border-[4px] border-[#ff4d13] bg-white"
                  />

                  <div className="ml-12 mr-2 flex-1 md:ml-32 md:mr-0 lg:w-[672px] lg:flex-none">
                    <div
                      ref={(el) => {
                        cardRefs.current[index] = el;
                      }}
                      className="flex min-h-[285px] flex-col justify-between rounded-[24px] bg-[#a8a8a8] p-6 transition-colors duration-300 md:p-8"
                    >
                      <div className="mb-8 flex items-start justify-between gap-4">
                        <h2 className="font-serif text-[36px] font-normal leading-[1.2] tracking-normal text-[#b0b0b0] md:text-[48px] md:leading-[57.6px]">
                          {item.title}
                        </h2>
                        <span className="mt-2 shrink-0 text-[12px] font-bold tracking-[0.12em] text-[#ff4d13]">
                          {item.year}
                        </span>
                      </div>

                      <div className="flex flex-col items-end justify-between gap-6 text-white md:flex-row">
                        <p className="max-w-[320px] self-start text-[14px] font-medium leading-[22.4px] text-[#d4d4d4] md:self-end">
                          {item.description}
                        </p>
                        <span className="whitespace-nowrap text-[12px] font-bold uppercase tracking-[0.08em] text-white">
                          {item.tagline}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
