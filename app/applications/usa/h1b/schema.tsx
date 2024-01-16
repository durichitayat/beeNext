import { RJSFSchema } from '@rjsf/utils';

export const schema : RJSFSchema = {
    title: 'H1B Visa',
    type: 'object',
    required: ['applicantName', 'employerName', 'jobTitle', 'jobLocation', 'prevailingWage'],
    properties: {
        applicantName: { type: 'string', title: 'Applicant Name' },
        employerName: { type: 'string', title: 'Employer Name' },
        jobTitle: { type: 'string', title: 'Job Title' },
        jobLocation: { type: 'string', title: 'Job Location' },
        prevailingWage: { type: 'number', title: 'Prevailing Wage' },
        startDate: { type: 'string', format: 'date', title: 'Start Date' },
        endDate: { type: 'string', format: 'date', title: 'End Date' },
        isApproved: { type: 'boolean', title: 'Is Approved?', default: false },
    },
};