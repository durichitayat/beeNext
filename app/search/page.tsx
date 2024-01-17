'use client';

import { Card, Text, Title, Flex, Grid, Bold, Button, SearchSelect, SearchSelectItem } from '@tremor/react';
import { useState } from 'react';
import Link from 'next/link';

const visas = [
    {
        id: 'canada-visit-visa',
        country: 'Canada',
        visa: 'Visitor Visa',
        summary: 'Most foreigners need a visitor visa to travel to Canada. The visitor visa lets you stay in Canada for up to 6 months at a time. It is a single-entry or multi-entry visa determined by visa officer.',
        category: 'Visit',
        governmentFee: 100,
        serviceFee: 325,
        partner: 'Canada Visa Management Services',
        partnerId: 'canada-visa-management-services',
    },
    {
        id: 'canada-temporary-resident-visa-for-returning-students',
        country: 'Canada',
        visa: 'Temporary Resident Visa for Returning Students',
        summary: 'This program is only for international students who are returning to Canada.',
        category: ['Visit', 'Net Worth 25K'],
        governmentFee: 100,
        serviceFee: 325,
        partner: 'Canada Visa Management Services',
        partnerId: 'canada-visa-management-services',
    },
    {
        id: 'canada-farm-owner-and-operator',
        country: 'Canada',
        visa: 'Saskatchewan - Farm Owner and Operator',
        summary: 'The Saskatchewan Farm Owner and Operator program is for experienced',
        category: ['Immigrate', 'Net Worth 25K'],
        governmentFee: 2500,
        serviceFee: 1590,
        partner: 'Canada Visa Management Services',
        partnerId: 'canada-visa-management-services',
    },
    {
        id: 'canada-visit-visa',
        country: 'Canada',
        visa: 'Visitor Visa',
        summary: 'Most foreigners need a visitor visa to travel to Canada. The visitor visa lets you stay in Canada for up to 6 months at a time. It is a single-entry or multi-entry visa determined by visa officer.',
        category: 'Visit',
        governmentFee: 100,
        serviceFee: 325,
        partner: 'Canada Visa Management Services',
        partnerId: 'canada-visa-management-services',
    },
    {
        id: 'canada-temporary-resident-visa-for-returning-students',
        country: 'Canada',
        visa: 'Temporary Resident Visa for Returning Students',
        summary: 'This program is only for international students who are returning to Canada.',
        category: ['Visit', 'Net Worth 25K'],
        governmentFee: 100,
        serviceFee: 325,
        partner: 'Canada Visa Management Services',
        partnerId: 'canada-visa-management-services',
    },
    {
        id: 'canada-farm-owner-and-operator',
        country: 'Canada',
        visa: 'Saskatchewan - Farm Owner and Operator',
        summary: 'The Saskatchewan Farm Owner and Operator program is for experienced',
        category: ['Immigrate', 'Net Worth 25K'],
        governmentFee: 2500,
        serviceFee: 1590,
        partner: 'Canada Visa Management Services',
        partnerId: 'canada-visa-management-services',
    },
    {
        id: 'canada-visit-visa',
        country: 'Canada',
        visa: 'Visitor Visa',
        summary: 'Most foreigners need a visitor visa to travel to Canada. The visitor visa lets you stay in Canada for up to 6 months at a time. It is a single-entry or multi-entry visa determined by visa officer.',
        category: 'Visit',
        governmentFee: 100,
        serviceFee: 325,
        partner: 'Canada Visa Management Services',
        partnerId: 'canada-visa-management-services',
    },
    {
        id: 'canada-temporary-resident-visa-for-returning-students',
        country: 'Canada',
        visa: 'Temporary Resident Visa for Returning Students',
        summary: 'This program is only for international students who are returning to Canada.',
        category: ['Visit', 'Net Worth 25K'],
        governmentFee: 100,
        serviceFee: 325,
        partner: 'Canada Visa Management Services',
        partnerId: 'canada-visa-management-services',
    },
    {
        id: 'canada-farm-owner-and-operator',
        country: 'Canada',
        visa: 'Saskatchewan - Farm Owner and Operator',
        summary: 'The Saskatchewan Farm Owner and Operator program is for experienced',
        category: ['Immigrate', 'Net Worth 25K'],
        governmentFee: 2500,
        serviceFee: 1590,
        partner: 'Canada Visa Management Services',
        partnerId: 'canada-visa-management-services',
    },
];

const partners = [
    {
        id: 'canada-visa-management-services',
        partner: 'Canada Visa Management Services',
        url: 'https://www.canadavisa.com/',
        logo: 'https://www.canadavisa.com/images/logo.png',
        description: 'Canada finest visa management services',
    },
    {
        id: 'usa-visa-management-services',
        partner: 'USA Visa Management Services',
        url: 'https://www.usavisa.com/',
        logo: 'https://www.usavisa.com/images/logo.png',
        description: 'USA finest visa management services',
    },
];

const countries = [
    {
        id: 'canada',
        name: 'Canada',
        icon: 'https://www.canadavisa.com/images/logo.png',
    },
    {
        id: 'usa',
        name: 'USA',
        icon: 'https://www.usavisa.com/images/logo.png',
    },
];

const categories = [
    {
        id: 'travel',
        name: 'Travel',
        icon: 'https://www.canadavisa.com/images/logo.png',
    },
    {
        id: 'business',
        name: 'Business',
        icon: 'https://www.usavisa.com/images/logo.png',
    },
];

export default function SearchPage() {
    const [countryFilter, setCountryFilter] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
        <Flex
            className="space-x-2 mb-8"
            flexDirection='row'
            justifyContent='center'
        >
                <SearchSelect 
                    value={countryFilter} 
                    onValueChange={setCountryFilter} 
                    placeholder='Country'
                    className='max-w-sm'>

                    {countries.map((item) => (
                        
                    <SearchSelectItem key={item.id} value={item.id}>
                        {item.name}
                    </SearchSelectItem>

                    ))}
                </SearchSelect>

                <SearchSelect 
                    value={categoryFilter} 
                    onValueChange={setCategoryFilter}
                    placeholder='Visa Category'
                    className='max-w-sm'>
                        
                    {categories.map((item) => (
                        
                    <SearchSelectItem key={item.id} value={item.id}>
                        {item.name}
                    </SearchSelectItem>

                    ))}
                </SearchSelect>
        </Flex>
      <Grid numItemsSm={2} numItemsLg={3} className="gap-6">
        {visas.map((item) => (
          <Card key={item.id}>
            <Title>{item.visa}</Title>
            <Flex
              justifyContent="start"
              alignItems="baseline"
              className="space-x-2 mt-10"
            >
              <Bold>{item.governmentFee}</Bold>
              <Text>Government Fees</Text>
            </Flex>
            <Flex
              justifyContent="start"
              alignItems="baseline"
              className="space-x-2"
            >
              <Bold>{item.serviceFee}</Bold>
              <Text>Service Fee</Text>
            </Flex>
            <Flex 
                className="mt-10"
                alignItems="baseline"
            >
              <Button size='sm' variant='light'>More Info</Button>
              <Button size='sm' variant='secondary' className="text-right">
                <Link href="/applications/usa/h1b">Get Started
                </Link>
              </Button>
            </Flex>
          </Card>
        ))}
      </Grid>
      
    </main>
  );
}
