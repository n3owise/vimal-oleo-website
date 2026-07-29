import { useState, type ChangeEvent, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { contactDetails, getPhoneHref } from '@/src/lib/contact-data';
import { sectionHeadingClass } from '@/src/lib/section-styles';

const contactFormAction = `https://formsubmit.co/${contactDetails.email}`;

type ContactFieldName = 'firstName' | 'lastName' | 'companyName' | 'mobileNumber' | 'email' | 'message';

const contactFormFieldNames: ContactFieldName[] = ['firstName', 'lastName', 'companyName', 'mobileNumber', 'email', 'message'];
const contactFieldInputIds: Record<ContactFieldName, string> = {
  firstName: 'contact-first-name',
  lastName: 'contact-last-name',
  companyName: 'contact-company-name',
  mobileNumber: 'contact-mobile-number',
  email: 'contact-email',
  message: 'contact-message',
};
const contactInputClass =
  'w-full rounded-2xl border bg-white px-5 py-4 font-medium outline-none transition-all placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/10';

function getContactFieldError(name: ContactFieldName, value: string) {
  const trimmedValue = value.trim();

  if (!trimmedValue) return 'This field is required.';
  if (name === 'mobileNumber' && !/^\d{10}$/.test(trimmedValue)) return 'Enter a 10-digit mobile number.';
  if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedValue)) {
    return 'Use a valid email address like name@company.com.';
  }

  return '';
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;

  return (
    <div id={id} role="alert" className="mt-2 rounded-2xl border border-primary/15 bg-[#eaf3ff] px-4 py-2 font-display text-[11px] font-black uppercase leading-relaxed tracking-[0.08em] text-primary shadow-sm">
      {message}
    </div>
  );
}

function getContactFormSuccessUrl() {
  if (typeof window === 'undefined') return '/contact-us?submitted=1#contact-form';

  return `${window.location.origin}/contact-us?submitted=1#contact-form`;
}

export function ContactFormSection() {
  const [isSubmitted, setIsSubmitted] = useState(() => {
    if (typeof window === 'undefined') return false;

    return new URLSearchParams(window.location.search).get('submitted') === '1';
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<Partial<Record<ContactFieldName, string>>>({});
  const shortIntro = `${contactDetails.intro.split(' ').slice(0, 28).join(' ')}...`;
  const contactFormSuccessUrl = getContactFormSuccessUrl();
  const inputClass = (fieldName: ContactFieldName) =>
    `${contactInputClass} ${formErrors[fieldName] ? 'border-primary bg-[#f9fbfc] ring-2 ring-primary/10' : 'border-slate-200'}`;

  const handleFieldChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setIsSubmitted(false);
    setIsSubmitting(false);

    const fieldName = event.currentTarget.name as ContactFieldName;
    if (!formErrors[fieldName]) return;

    const error = getContactFieldError(fieldName, event.currentTarget.value);
    setFormErrors((currentErrors) => ({
      ...currentErrors,
      [fieldName]: error || undefined,
    }));
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget);
    const nextErrors = contactFormFieldNames.reduce<Partial<Record<ContactFieldName, string>>>(
      (errors, fieldName) => {
        const error = getContactFieldError(fieldName, String(formData.get(fieldName) || ''));
        if (error) errors[fieldName] = error;
        return errors;
      },
      {},
    );

    setFormErrors(nextErrors);
    setIsSubmitted(false);

    if (Object.keys(nextErrors).length > 0) {
      event.preventDefault();
      setIsSubmitting(false);

      const firstErrorField = contactFormFieldNames.find((fieldName) => nextErrors[fieldName]);
      if (firstErrorField) {
        requestAnimationFrame(() => document.getElementById(contactFieldInputIds[firstErrorField])?.focus());
      }

      return;
    }

    setIsSubmitting(true);
  };

  return (
    <section className="bg-[#fafafa] pt-32 pb-24 sm:pt-36 sm:pb-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className={`${sectionHeadingClass} mb-6`}>
            HOW CAN WE <span className="text-primary">HELP?</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg font-medium text-slate-600 leading-relaxed">{shortIntro}</p>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="grid md:grid-cols-5 p-2 gap-2">
            <div className="md:col-span-3 bg-slate-50 rounded-2xl p-8 sm:p-16 flex flex-col justify-center">
              <h3 className="font-display text-2xl font-black uppercase text-slate-900 mb-10">Send us an email</h3>
              <form
                id="contact-form"
                noValidate
                action={contactFormAction}
                method="POST"
                className="space-y-6"
                onSubmit={handleFormSubmit}
              >
                <input type="hidden" name="_subject" value="New website inquiry - Vimal Oleo Chemicals" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value={contactFormSuccessUrl} />
                <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-first-name" className="sr-only">First Name</label>
                    <input id="contact-first-name" name="firstName" type="text" placeholder="First Name" required maxLength={80} autoComplete="given-name" aria-invalid={Boolean(formErrors.firstName)} aria-describedby={formErrors.firstName ? 'contact-first-name-error' : undefined} onChange={handleFieldChange} className={inputClass('firstName')} />
                    <FieldError id="contact-first-name-error" message={formErrors.firstName} />
                  </div>
                  <div>
                    <label htmlFor="contact-last-name" className="sr-only">Last Name</label>
                    <input id="contact-last-name" name="lastName" type="text" placeholder="Last Name" required maxLength={80} autoComplete="family-name" aria-invalid={Boolean(formErrors.lastName)} aria-describedby={formErrors.lastName ? 'contact-last-name-error' : undefined} onChange={handleFieldChange} className={inputClass('lastName')} />
                    <FieldError id="contact-last-name-error" message={formErrors.lastName} />
                  </div>
                  <div>
                    <label htmlFor="contact-company-name" className="sr-only">Company Name</label>
                    <input id="contact-company-name" name="companyName" type="text" placeholder="Company Name" required maxLength={120} autoComplete="organization" aria-invalid={Boolean(formErrors.companyName)} aria-describedby={formErrors.companyName ? 'contact-company-name-error' : undefined} onChange={handleFieldChange} className={inputClass('companyName')} />
                    <FieldError id="contact-company-name-error" message={formErrors.companyName} />
                  </div>
                  <div>
                    <label htmlFor="contact-mobile-number" className="sr-only">Mobile Number</label>
                    <input id="contact-mobile-number" name="mobileNumber" type="tel" inputMode="numeric" placeholder="Mobile Number" required maxLength={10} autoComplete="tel-national" aria-invalid={Boolean(formErrors.mobileNumber)} aria-describedby={formErrors.mobileNumber ? 'contact-mobile-number-error' : undefined} onChange={handleFieldChange} className={inputClass('mobileNumber')} />
                    <FieldError id="contact-mobile-number-error" message={formErrors.mobileNumber} />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-email" className="sr-only">Email Address</label>
                  <input id="contact-email" name="email" type="email" placeholder="Email Address" required maxLength={120} autoComplete="email" aria-invalid={Boolean(formErrors.email)} aria-describedby={formErrors.email ? 'contact-email-error' : undefined} onChange={handleFieldChange} className={inputClass('email')} />
                  <FieldError id="contact-email-error" message={formErrors.email} />
                </div>
                <div>
                  <label htmlFor="contact-message" className="sr-only">Your Message</label>
                  <textarea id="contact-message" name="message" rows={5} placeholder="Your Message" required maxLength={1500} aria-invalid={Boolean(formErrors.message)} aria-describedby={formErrors.message ? 'contact-message-error' : undefined} onChange={handleFieldChange} className={`${inputClass('message')} resize-none`} />
                  <FieldError id="contact-message-error" message={formErrors.message} />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`group relative inline-flex h-12 min-w-44 cursor-pointer items-center justify-center overflow-hidden rounded-full border px-7 py-2 text-center text-sm font-bold uppercase tracking-[0.08em] transition-all duration-500 ease-out ${
                    isSubmitted || isSubmitting
                      ? 'border-primary bg-primary text-white shadow-[0_16px_34px_rgba(13,71,161,0.24)] focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/25'
                      : 'border-slate-950 bg-white text-slate-950 focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/25'
                  }`}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {isSubmitting ? (
                      <motion.span
                        key="submitting"
                        initial={{ opacity: 0, y: 10, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.96 }}
                        transition={{ duration: 0.24 }}
                        className="relative z-10"
                      >
                        Sending...
                      </motion.span>
                    ) : isSubmitted ? (
                      <motion.span
                        key="submitted"
                        initial={{ opacity: 0, y: 10, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.96 }}
                        transition={{ duration: 0.36, ease: [0.16, 1, 0.3, 1] }}
                        className="relative z-10 flex items-center gap-2"
                      >
                        <motion.span
                          initial={{ scale: 0, rotate: -24 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ type: 'spring', stiffness: 360, damping: 18, delay: 0.08 }}
                          className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-primary"
                        >
                          <Check size={15} strokeWidth={3} />
                        </motion.span>
                        Form Submitted
                      </motion.span>
                    ) : (
                      <motion.span
                        key="idle"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.24 }}
                        className="absolute inset-0"
                      >
                        <span className="absolute inset-0 origin-left scale-x-0 rounded-full bg-slate-950 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 group-focus-visible:scale-x-100" />
                        <span className="relative z-10 inline-flex h-full translate-x-0 items-center justify-center transition-all duration-300 ease-out group-hover:translate-x-10 group-hover:opacity-0 group-focus-visible:translate-x-10 group-focus-visible:opacity-0">
                          Send Message
                        </span>
                        <span className="absolute inset-0 z-10 flex translate-x-10 items-center justify-center gap-2 text-white opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100">
                          Send Message
                          <ArrowRight size={16} strokeWidth={2.2} />
                        </span>
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>

                <AnimatePresence>
                  {isSubmitted && (
                    <motion.p
                      role="status"
                      aria-live="polite"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="font-display text-xs font-black uppercase tracking-[0.18em] text-primary"
                    >
                      Thank you. Your inquiry has been sent to our team.
                    </motion.p>
                  )}
                </AnimatePresence>
              </form>
            </div>

            <div className="md:col-span-2 flex items-center justify-center">
              <div className="w-full max-w-sm bg-primary rounded-3xl p-8 sm:p-10 text-white border-4 border-white/5 shadow-xl">
                <div className="mb-6">
                  <p className="font-mono text-[11px] font-black uppercase tracking-[0.22em] text-white/60">Reach Us At</p>
                  <div className="mt-3">
                    <a href={`tel:${contactDetails.landlineHref}`} className="block text-lg font-bold uppercase leading-relaxed text-white/90 transition-colors hover:text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-white/25">
                      {contactDetails.landline}
                    </a>
                    <a href={`mailto:${contactDetails.email}`} className="block mt-3 text-sm font-medium uppercase text-white/90 transition-colors hover:text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-white/25">
                      {contactDetails.email}
                    </a>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="font-mono text-[11px] font-black uppercase tracking-[0.22em] text-white/60">Visit Us</p>
                  <p className="mt-3 font-display text-lg font-black uppercase tracking-tight">{contactDetails.company}</p>
                  <div className="mt-2">
                    {contactDetails.address.map((line) => (
                      <span key={line} className="block text-sm font-medium uppercase leading-relaxed text-white/90">{line}</span>
                    ))}
                  </div>
                  <a
                    href={contactDetails.googleMapsUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-3 inline-block text-sm font-bold underline text-white/90 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/25"
                  >
                    Open in Google Maps
                  </a>
                </div>

                <div className="border-t border-white/10 pt-4">
                  <p className="font-mono text-[11px] font-black uppercase tracking-[0.22em] text-white/60 mb-3">Key Contacts</p>
                  <div className="space-y-3">
                    {contactDetails.contacts.map((contact) => (
                      <div key={contact.name} className="flex items-center justify-between py-3 border-b border-white/10">
                        <span className="block text-sm font-medium uppercase leading-relaxed text-white/90">{contact.name}</span>
                        <a href={getPhoneHref(contact.phone)} className="text-sm font-medium uppercase leading-relaxed text-white/90 transition-colors hover:text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-white/25">{contact.phone}</a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
