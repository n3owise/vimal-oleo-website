export const contactDetails = {
  intro: 'We are here to support your business with reliable oleochemical solutions tailored to your needs. Whether you are looking for technical information, product samples, pricing details, or partnership opportunities, our team is ready to assist you.',
  company: 'VIMAL OLEO CHEMICALS',
  address: [
    'PLOT NO 203A, SHREE RAMDARSHAN BUILDING,',
    'OFFICE NO-1, GROUND FLOOR,',
    'DR BABASAHEB AMBEDKAR ROAD,',
    'NEAR UNION BANK OF INDIA,',
    'SION EAST, MUMBAI - 400022',
  ],
  landline: '+91-022-24010660',
  landlineHref: '+912224010660',
  email: 'vimaloleochemicals@gmail.com',
  whatsapp: '+91-9223433662',
  whatsappHref: 'https://wa.me/919223433662',
  googleMapsUrl: 'https://maps.app.goo.gl/eBGWu1ZG15sSV1Gt6',
  contacts: [
    { name: 'HEMANG SHAH', phone: '+91-9819415552' },
    { name: 'KUNAL SHAH', phone: '+91-9819055155' },
    { name: 'MAHESH SHAH', phone: '+91-9820988222' },
  ],
};

export function getPhoneHref(phone: string) {
  return `tel:${phone.replace(/[^+\d]/g, '')}`;
}
