import React from 'react';
import { mbbsData } from '@/data/mbbsData';
import { notFound } from 'next/navigation';
import UniversityContent from '@/components/mbbs/UniversityContent';

export async function generateStaticParams() {
  const paths = mbbsData.flatMap((country) =>
    country.universities.map((uni) => ({
      countrySlug: country.slug,
      universitySlug: uni.slug,
    }))
  );
  return paths;
}

export default async function UniversityPage(props: { params: Promise<{ countrySlug: string, universitySlug: string }> }) {
  const params = await props.params;
  const { countrySlug, universitySlug } = params;

  const country = mbbsData.find(c => c.slug === countrySlug);
  const university = country?.universities.find(u => u.slug === universitySlug);

  if (!university || !country) {
    return notFound();
  }

  return <UniversityContent university={university} country={country} />;
}
