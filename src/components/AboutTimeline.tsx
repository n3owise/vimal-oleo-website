import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
  {
    year: '1980',
    description:
      'In 2004, Mr. Hemang Shah joined the company after completing his B.Com from Mumbai University. He expanded operations into imports, exports, and local sourcing of oleochemicals and chemicals, with a primary focus on marketing to manufacturers and end-users while managing both purchases and sales.',
  },
  {
    year: '1990',
    description:
      'The company began with trading and supplying chemicals and solvents such as Titanium Dioxide, Caustic Soda, Iso Propyl Alcohol, and Toluene. Over time, the portfolio expanded to oleochemicals like Stearic Acid, Refined Glycerine, and Distilled Fatty Acids. In 1990, we strengthened our market presence by becoming an authorized distributor of M/s. Jocil Ltd (now Jayalakshmi Oil & Chemical Industries Ltd)',
  },
  {
    year: '2004',
    description:
      'In 2004, Mr. Hemang Shah joined the company after completing his B.Com from Mumbai University. He expanded operations into imports, exports, and local sourcing of oleochemicals and chemicals, with a primary focus on marketing to manufacturers and end-users while managing both purchases and sales.',
  },
  {
    year: '2012',
    description:
      'In 2012, Mr. Kunal Shah, after completing his B.E. in Computers from Mumbai University, joined the company and expanded the product portfolio to include other oleo chemicals like Lauric Acid, Oleic Acid, Myristic Acid, and more. He also took charge of finance, marketing, and sales, helping drive the company’s growth.',
  },
  {
    year: '2016',
    description:
      'In 2016, we took on the authorized distributorship of M/s. 3F Industries Ltd, expanding our product range to include Stearic Acid, Glycerine, DCFA, HTO, and 2016 many other products.',
  },
  {
    year: '2021',
    description:
      'In 2021, we launched a new registered partnership firm, M/s. Vimal Oleo Chemicals, which is dedicated exclusively to dealing with oleo chemicals. From our humble beginnings in 1980 till 2021, M/s. Vimal Oleo Chemicals has grown to become one of the leading importers, distributors, and suppliers of the entire range of oleo chemicals.',
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
              backgroundColor: '#eaf3ff',
              borderColor: 'rgba(29, 95, 184, 0.18)',
              boxShadow: '0 24px 60px rgba(29, 95, 184, 0.10)',
              duration: 0.35,
              ease: 'power2.out',
            });
            gsap.to(dot, {
              backgroundColor: '#8fc2ff',
              borderColor: '#ffffff',
              duration: 0.25,
            });
          } else {
            gsap.to(card, {
              backgroundColor: '#ffffff',
              borderColor: 'rgba(226, 232, 240, 0.95)',
              boxShadow: '0 16px 42px rgba(29, 95, 184, 0.06)',
              duration: 0.35,
              ease: 'power2.out',
            });
            gsap.to(dot, {
              backgroundColor: '#ffffff',
              borderColor: '#b9d5ff',
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
            borderColor: '#b9d5ff',
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
              <div ref={bgLineRef} className="invisible absolute inset-0 bg-[#d8eaff] opacity-0" />
              <div ref={progressLineRef} className="invisible absolute inset-0 origin-top scale-y-0 bg-[#8fc2ff] opacity-0" />
            </div>

            <div className="relative z-10 flex flex-col gap-4 pb-[30vh]">
              {timelineData.map((item, index) => (
                <div key={item.year} className="relative flex w-full items-start">
                  <div
                    ref={(el) => {
                      dotRefs.current[index] = el;
                    }}
                    className="absolute left-0 top-10 z-10 h-4 w-4 rounded-full border-[4px] border-[#b9d5ff] bg-white shadow-lg shadow-[#8fc2ff]/20"
                  />

                  <div className="ml-12 mr-2 flex-1 md:ml-32 md:mr-0 lg:w-[672px] lg:flex-none">
                    <div
                      ref={(el) => {
                        cardRefs.current[index] = el;
                      }}
                      className="flex min-h-[285px] flex-col justify-between rounded-[24px] border border-slate-200/90 bg-white p-6 shadow-xl shadow-[#1d5fb8]/[0.06] backdrop-blur-xl transition-colors duration-300 md:p-8"
                    >
                      <div className="mb-8 flex items-start justify-between gap-4">
                        <h2 className="font-serif text-[36px] font-normal leading-[1.2] tracking-normal text-[#1d5fb8] md:text-[48px] md:leading-[57.6px]">
                          {item.year}
                        </h2>
                      </div>

                      <div className="flex">
                        <p className="max-w-[560px] text-[14px] font-medium leading-[22.4px] text-text-slate">
                          {item.description}
                        </p>
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
