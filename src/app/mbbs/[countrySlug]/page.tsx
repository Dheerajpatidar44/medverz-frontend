import React from 'react';
import { mbbsData } from '@/data/mbbsData';
import { notFound } from 'next/navigation';
import CountryContent from '@/components/mbbs/CountryContent';

export async function generateStaticParams() {
  return mbbsData.map((country) => ({
    countrySlug: country.slug,
  }));
}

export default async function CountryPage(props: { params: Promise<{ countrySlug: string }> }) {
  const params = await props.params;
  const countrySlug = params.countrySlug;
  
  const country = mbbsData.find(c => c.slug === countrySlug);

  if (!country) {
    return notFound();
  }

  return <CountryContent country={country} />;
}
