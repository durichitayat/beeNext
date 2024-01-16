'use client';

import { Card, Text, Title, Flex, Grid, Bold, Button, SearchSelect, SearchSelectItem } from '@tremor/react';
import { useState } from 'react';
import { UiSchema } from '@rjsf/utils';
import Form from '@rjsf/core' 
import validator from '@rjsf/validator-ajv8';
import { schema } from './schema';

const log = (type: string) => console.log.bind(console, type);

const uiSchema: UiSchema = {
  applicantName: {
    'ui:classNames': 'custom-class-name',
  },
  employerName: {
    'ui:classNames': 'custom-class-age',
  },
};

export default function SearchPage() {

return (
  <main className="p-4 md:p-10 mx-auto max-w-7xl">
    <Flex
        className="space-x-2 mb-8"
        flexDirection='row'
        justifyContent='center'
    >
      <h2 className='text-3xl font-thin underline'>React JSON Schema</h2>
      <Form
        schema={schema}
        uiSchema={uiSchema}
        validator={validator}
        onChange={log('changed')}
        onSubmit={log('submitted')}
        onError={log('errors')}
      />
    </Flex>
    
  </main>
);
}
