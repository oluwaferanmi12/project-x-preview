import { Container, Text, Select, Button, Input } from '@repo/ui'
import React from 'react'
import { FilterPanel } from './filter-panel'
import { CheckIcon } from '@repo/icons'

export const RentPanel = () => {
    return (
        <FilterPanel>
            <Text variant="h5" tone='primary'>
                Select rent range
            </Text>
            <Container className='mt-4 flex flex-col'>
                <Input className='bg-background!' placeholder='Minimum Amount' label='' />
                <Input className='bg-background!' placeholder='Maximum Amount' label='' />
            </Container>
            <Button rightIcon={<CheckIcon className='text-inverted' size={20} />} className='w-full' variant='secondary'>
                Apply
            </Button>
        </FilterPanel>
    )
}
